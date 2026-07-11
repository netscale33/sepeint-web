import React, { useEffect, useRef, useState } from 'react';

interface ThreeBackgroundProps {
  onLoadComplete: () => void;
  onProgress?: (progress: number) => void;
}

type PerfTier = 'low' | 'mid' | 'high';

function getPerfTier(): PerfTier {
  const isMobile = /Mobile|iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const cores = navigator.hardwareConcurrency || 4;
  const mem = (navigator as any).deviceMemory || 4;
  const conn = (navigator as any).connection;
  const slowNet = conn && (conn.effectiveType === 'slow-2g' || conn.effectiveType === '2g');
  const lowEnd = isMobile || cores < 4 || mem < 2 || slowNet;
  if (lowEnd) return 'low';
  if (cores < 6 || mem < 4) return 'mid';
  return 'high';
}

export const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ onLoadComplete, onProgress }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [unityLoaded, setUnityLoaded] = useState(false);
  const unityInstanceRef = useRef<any>(null);
  const scrollRef = useRef(0);

  const isMobile = /Mobile|iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const buildName = `Zorvent_WebGL_${isMobile ? 'astc' : 'dxt'}`;
  const perfTier = getPerfTier();
  const effectiveDpr = perfTier === 'low' ? 0.5 : perfTier === 'mid' ? 0.75 : 1.0;

  useEffect(() => {
    if (!canvasRef.current) return;

    // Define global events dispatchers expected by the original Unity build
    (window as any).EventDispatcher = (eventName: string) => {
      console.log("Unity Event:", eventName);
      const customEvent = new CustomEvent(eventName, { detail: { state: eventName, arg: null } });
      window.dispatchEvent(customEvent);
    };

    (window as any).EventDispatcherWithArgument = (eventName: string, argument: any) => {
      console.log("Unity Event with arg:", eventName, argument);
      const customEvent = new CustomEvent(eventName, { detail: { state: eventName, arg: argument } });
      window.dispatchEvent(customEvent);
    };

    (window as any).devicePixelRatio = effectiveDpr;

    const loaderUrl = `Build/${buildName}.loader.js`;
    const script = document.createElement('script');
    script.src = loaderUrl;
    script.async = true;

    script.onload = () => {
      const createUnityInstance = (window as any).createUnityInstance;
      if (!createUnityInstance) {
        console.error('createUnityInstance not found after loader script load.');
        return;
      }

      const config = {
        dataUrl: `Build/${buildName}.data`,
        frameworkUrl: `Build/${buildName}.framework.js`,
        codeUrl: `Build/${buildName}.wasm`,
        streamingAssetsUrl: 'StreamingAssets',
        companyName: 'Sepeint',
        productName: 'Sepeint-Website',
        productVersion: '0.1',
        devicePixelRatio: effectiveDpr
      };

      createUnityInstance(canvasRef.current, config, (progress: number) => {
        const percentage = Math.round(progress * 100);
        if (onProgress) {
          onProgress(percentage);
        }
        const percentText = document.querySelector('#unity-progress-percent');
        if (percentText) {
          percentText.textContent = `${percentage}%`;
        }
        const progressBar = document.querySelector('#unity-progress-bar-full');
        if (progressBar) {
          (progressBar as HTMLElement).style.width = `${progress * 100}%`;
        }
      })
        .then((unityInstance: any) => {
          unityInstanceRef.current = unityInstance;
          (window as any).gameInstance = unityInstance;

          try {
            unityInstance.SendMessage('zController', 'DisableFluidFx');
            unityInstance.SendMessage('Timeline', 'TimelineEase', 'true');
            if (perfTier === 'low') {
              unityInstance.SendMessage('QualityController', 'SetLevel', '0');
            }
          } catch (e) {
            console.warn('Initial Unity control signals failed:', e);
          }

          setUnityLoaded(true);
          onLoadComplete();
        })
        .catch((message: any) => {
          console.error('Failed to initialize Unity instance:', message);
        });
    };

    document.body.appendChild(script);

    return () => {
      script.onload = null;
      document.body.removeChild(script);
      if ((window as any).gameInstance) {
        delete (window as any).gameInstance;
      }
    };
  }, [buildName, isMobile]);

  useEffect(() => {
    if (!unityInstanceRef.current) return;

    const onVisibility = () => {
      if (document.hidden && unityInstanceRef.current) {
        try { (window as any).gameInstance?.SendMessage('zController', 'DisableFluidFx'); } catch {}
      }
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, [unityLoaded]);

  useEffect(() => {
    if (!unityLoaded) return;

    let animationFrameId: number;
    let current = scrollRef.current;
    let lastSent = -1;
    let frameCount = 0;
    let lastTime = performance.now();

    const frameSkip = perfTier === 'low' ? 2 : 0;
    const sendThreshold = perfTier === 'low' ? 0.0005 : 0.0001;
    const smoothTime = perfTier === 'low' ? 0.15 : perfTier === 'mid' ? 0.08 : 0.04;

    const updateLoop = (now: number) => {
      frameCount++;
      if (frameSkip > 0 && frameCount % (frameSkip + 1) === 0) {
        animationFrameId = requestAnimationFrame(updateLoop);
        return;
      }

      const dt = Math.min((now - lastTime) / 1000, 0.1); // Cap delta time at 100ms
      lastTime = now;

      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const target = scrollable > 0 ? window.scrollY / scrollable : 0;
      const alpha = 1 - Math.exp(-dt / smoothTime);
      current += (target - current) * alpha;
      const valueToSend = Math.round(current * 100000);

      if (valueToSend !== lastSent && Math.abs(current - lastSent / 100000) > sendThreshold) {
        lastSent = valueToSend;
        if (unityInstanceRef.current) {
          try {
            unityInstanceRef.current.SendMessage('Timeline', 'SetScrollValue', valueToSend);
          } catch (err) {
            console.error('SendMessage failed inside loop:', err);
          }
        }
      }

      animationFrameId = requestAnimationFrame(updateLoop);
    };

    animationFrameId = requestAnimationFrame(updateLoop);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [unityLoaded, perfTier]);

  return (
    <div id="unityContainer" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 1 }}>
      <canvas id="webContainer" ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
    </div>
  );
};
