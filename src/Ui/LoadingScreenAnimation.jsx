import React, { useEffect, useState } from "react";

export default function LoadingScreenAnimation({ onComplete }) {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);

  const fullText = "Welcome to my Portfolio.";

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index + 1));
      index++;

      if (index >= fullText.length) {
        clearInterval(interval);
        setTimeout(() => onComplete(), 900);
      }
    }, 65);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Smooth progress bar to 100% over ~1.6s
  useEffect(() => {
    const start = performance.now();
    const duration = 1600;
    let raf;

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      setProgress(t * 100);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 overflow-hidden bg-[#0a0a0a] text-white">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[20%] left-[20%] h-[400px] w-[400px] rounded-full bg-teal-500/15 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[20%] h-[400px] w-[400px] rounded-full bg-indigo-500/15 blur-[120px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 75%)",
        }}
      />

      {/* Eyebrow */}
      <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40">
        Loading · Portfolio
      </p>

      {/* Typed headline */}
      <div className="relative text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
        <span className="bg-gradient-to-r from-teal-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
          {text}
        </span>
        <span className="animate-blink ml-1 inline-block h-[1em] w-[2px] translate-y-[2px] bg-teal-300 align-middle" />
      </div>

      {/* Progress bar */}
      <div className="relative w-[280px] sm:w-[340px]">
        <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/[0.06]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-teal-300 via-sky-400 to-indigo-400 shadow-[0_0_15px_rgba(56,189,248,0.6)] transition-[width] duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage readout */}
        <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
          <span>Booting</span>
          <span>{Math.round(progress).toString().padStart(3, "0")}%</span>
        </div>
      </div>
    </div>
  );
}