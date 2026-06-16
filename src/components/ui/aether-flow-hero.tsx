"use client";

import React, { useEffect, useRef } from "react";

type AetherFlowHeroProps = {
  className?: string;
  /** Tailwind/CSS rgba color for particles */
  particleColor?: string;
  /** Tailwind/CSS rgba base for connection lines */
  lineColor?: string;
  /** Color used when mouse is near a particle */
  hoverLineColor?: string;
  /** Background fill (defaults to transparent so a parent gradient can show) */
  background?: string;
};

class Particle {
  constructor(
    public x: number,
    public y: number,
    public dx: number,
    public dy: number,
    public size: number,
    public color: string,
  ) {}

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    mouse: { x: number | null; y: number | null; radius: number },
  ) {
    if (this.x > width || this.x < 0) this.dx = -this.dx;
    if (this.y > height || this.y < 0) this.dy = -this.dy;

    if (mouse.x !== null && mouse.y !== null) {
      const dxm = mouse.x - this.x;
      const dym = mouse.y - this.y;
      const distance = Math.sqrt(dxm * dxm + dym * dym);
      if (distance < mouse.radius + this.size) {
        const fX = dxm / distance;
        const fY = dym / distance;
        const force = (mouse.radius - distance) / mouse.radius;
        this.x -= fX * force * 5;
        this.y -= fY * force * 5;
      }
    }

    this.x += this.dx;
    this.y += this.dy;
    this.draw(ctx);
  }
}

export default function AetherFlowHero({
  className,
  particleColor = "rgba(191, 128, 255, 0.85)",
  lineColor = "rgba(200, 150, 255, ALPHA)",
  hoverLineColor = "rgba(255, 255, 255, ALPHA)",
  background,
}: AetherFlowHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let animationFrameId = 0;
    let particles: Particle[] = [];
    const mouse: { x: number | null; y: number | null; radius: number } = {
      x: null,
      y: null,
      radius: 180,
    };
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const sizeOf = () => {
      const rect = container.getBoundingClientRect();
      return { width: rect.width, height: rect.height };
    };

    const init = () => {
      particles = [];
      const { width, height } = sizeOf();
      const target = (width * height) / 11000;
      const count = Math.max(40, Math.min(180, Math.floor(target)));
      for (let i = 0; i < count; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * (width - size * 4) + size * 2;
        const y = Math.random() * (height - size * 4) + size * 2;
        const dx = (Math.random() * 0.4 - 0.2) * (prefersReducedMotion ? 0 : 1);
        const dy = (Math.random() * 0.4 - 0.2) * (prefersReducedMotion ? 0 : 1);
        particles.push(new Particle(x, y, dx, dy, size, particleColor));
      }
    };

    const resize = () => {
      const { width, height } = sizeOf();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      init();
    };

    const connect = () => {
      const { width, height } = sizeOf();
      const threshold = (width / 7) * (height / 7);
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const pa = particles[a];
          const pb = particles[b];
          const dx = pa.x - pb.x;
          const dy = pa.y - pb.y;
          const distance = dx * dx + dy * dy;
          if (distance >= threshold) continue;

          const opacityValue = Math.max(0, 1 - distance / 22000);

          let stroke = lineColor.replace("ALPHA", opacityValue.toFixed(3));
          if (mouse.x !== null && mouse.y !== null) {
            const mdx = pa.x - mouse.x;
            const mdy = pa.y - mouse.y;
            const md = Math.sqrt(mdx * mdx + mdy * mdy);
            if (md < mouse.radius) {
              stroke = hoverLineColor.replace("ALPHA", opacityValue.toFixed(3));
            }
          }
          ctx.strokeStyle = stroke;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(pa.x, pa.y);
          ctx.lineTo(pb.x, pb.y);
          ctx.stroke();
        }
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const { width, height } = sizeOf();
      ctx.clearRect(0, 0, width, height);
      if (background) {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, width, height);
      }
      for (const p of particles) p.update(ctx, width, height, mouse);
      connect();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        mouse.x = null;
        mouse.y = null;
        return;
      }
      mouse.x = x;
      mouse.y = y;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const ro = new ResizeObserver(() => resize());
    ro.observe(container);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    resize();
    if (prefersReducedMotion) {
      // draw a single static frame
      const { width, height } = sizeOf();
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) p.draw(ctx);
      connect();
    } else {
      animate();
    }

    return () => {
      ro.disconnect();
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleColor, lineColor, hoverLineColor, background]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={
        "absolute inset-0 overflow-hidden pointer-events-none [&_canvas]:pointer-events-auto " +
        (className ?? "")
      }
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
