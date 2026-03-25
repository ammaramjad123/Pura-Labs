// src/pages/Industry/InteractiveGridBackground.jsx
import React, { useEffect, useRef, useState } from "react";

const InteractiveGridBackground = ({
  gridSize = 50,
  gridColor = "#e5e7eb",
  darkGridColor = "#27272a",
  effectColor = "rgba(0, 0, 0, 0.5)",
  darkEffectColor = "rgba(168, 85, 247, 0.7)",
  trailLength = 5,
  width,
  height,
  glow = true,
  glowRadius = 25,
  children,
  showFade = true,
  fadeIntensity = 30,
  className = "",
  ...props
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const trailRef = useRef([]);
  const lastMouseTimeRef = useRef(Date.now());

  // Detect dark mode
  useEffect(() => {
    const updateDarkMode = () => {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(
        document.documentElement.classList.contains("dark") || prefersDark
      );
    };
    updateDarkMode();
    const observer = new MutationObserver(() => updateDarkMode());
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  // Track container size
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    
    const resizeObserver = new ResizeObserver(updateSize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateSize);
      resizeObserver.disconnect();
    };
  }, [children]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const rawX = e.clientX - rect.left;
      const rawY = e.clientY - rect.top;

      if (rawX < 0 || rawY < 0 || rawX > rect.width || rawY > rect.height)
        return;

      lastMouseTimeRef.current = Date.now();

      const snappedX = Math.floor(rawX / gridSize);
      const snappedY = Math.floor(rawY / gridSize);

      const last = trailRef.current[0];
      if (!last || last.x !== snappedX || last.y !== snappedY) {
        trailRef.current.unshift({ x: snappedX, y: snappedY });
        if (trailRef.current.length > trailLength) trailRef.current.pop();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [gridSize, trailLength]);

  // Drawing logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvasWidth = width || containerSize.width || window.innerWidth;
    const canvasHeight = height || containerSize.height || window.innerHeight;
    
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const cols = Math.floor(canvasWidth / gridSize);
    const rows = Math.floor(canvasHeight / gridSize);

    const lineColor = isDarkMode ? darkGridColor : gridColor;
    const glowColor = isDarkMode ? darkEffectColor : effectColor;

    // Clear trail after mouse stops
    const clearTrailInterval = setInterval(() => {
      if (Date.now() - lastMouseTimeRef.current > 1000 && trailRef.current.length > 0) {
        trailRef.current = [];
      }
    }, 100);

    const draw = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Draw grid lines
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      for (let x = 0; x <= canvasWidth; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvasHeight);
        ctx.stroke();
      }
      for (let y = 0; y <= canvasHeight; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvasWidth, y);
        ctx.stroke();
      }

      // Draw trail glow
      trailRef.current.forEach((cell, idx) => {
        const alpha = 1 - idx * (1 / (trailLength + 1));
        const rgbaColor = glowColor.replace(/[\d.]+\)$/g, `${alpha})`);

        ctx.fillStyle = rgbaColor;
        if (glow) {
          ctx.shadowColor = rgbaColor;
          ctx.shadowBlur = glowRadius;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillRect(cell.x * gridSize, cell.y * gridSize, gridSize, gridSize);
      });

      requestAnimationFrame(draw);
    };

    draw();

    return () => clearInterval(clearTrailInterval);
  }, [
    gridSize,
    width,
    height,
    containerSize,
    gridColor,
    darkGridColor,
    effectColor,
    darkEffectColor,
    isDarkMode,
    trailLength,
    glow,
    glowRadius,
  ]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ width: width || "100%" }}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 z-0 pointer-events-none"
        style={{ width: '100%', height: '100%' }}
      />

      {showFade && (
        <div
          className="pointer-events-none absolute inset-0 bg-black"
          style={{
            maskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black)`,
            WebkitMaskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black)`,
          }}
        />
      )}
      <div className="relative z-0 w-full h-full">{children}</div>
    </div>
  );
};

export default InteractiveGridBackground;