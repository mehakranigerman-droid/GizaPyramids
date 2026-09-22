import React, { useEffect, useRef } from 'react';

interface DustMote {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  alpha: number;
  baseAlpha: number;
  phase: number;
}

export const CinematicMonumentBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });
  const prefersReducedMotionRef = useRef<boolean>(false);

  useEffect(() => {
    prefersReducedMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalized from -1 to 1 based on viewport center
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseRef.current.targetX = nx;
      mouseRef.current.targetY = ny;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width || window.innerWidth;
      height = rect.height || window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transform
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // 22 subtle drifting dust motes
    const motes: DustMote[] = Array.from({ length: 22 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.4 + 0.6,
      speedX: (Math.random() * 0.28 + 0.08), // drifting horizontally left to right
      speedY: (Math.random() - 0.5) * 0.08,
      alpha: Math.random() * 0.25 + 0.08,
      baseAlpha: Math.random() * 0.28 + 0.1,
      phase: Math.random() * Math.PI * 2,
    }));

    // Seamless 24-second continuous loop: (2 * PI) / (24s * 60fps)
    let time = 0;
    const loopDurationSec = 24;
    const timeStep = (Math.PI * 2) / (loopDurationSec * 60);

    // Subtle haze horizontal offset
    let hazeX = 0;

    const render = () => {
      if (!prefersReducedMotionRef.current) {
        time += timeStep;
        hazeX = (hazeX + 0.22) % width;
      }

      // Smooth mouse parallax easing
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.04;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.04;

      const parallaxX = mouseRef.current.x * 10;
      const parallaxY = mouseRef.current.y * 6;

      ctx.clearRect(0, 0, width, height);

      // Determine viewport reference height so the pyramid is ALWAYS centered and visible on screen
      const vh = Math.min(height, window.innerHeight || 850);

      // Sun travels in a continuous smooth sinusoidal cycle across the sky
      // sunFactor: oscillates continuously between -1 (far left morning) and +1 (far right late afternoon)
      const sunFactor = Math.sin(time);
      const sunElevation = Math.cos(time); // peak height at 0, low at +/- PI

      const sunX = width * (0.5 + sunFactor * 0.38) + parallaxX * 0.3;
      const sunY = vh * (0.24 - Math.max(-0.2, sunElevation) * 0.10) + parallaxY * 0.3;

      // ================= 1. DEEP NOCTURNAL/DUSK SKY =================
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      skyGrad.addColorStop(0, '#100D0B');
      skyGrad.addColorStop(0.35, '#17120F');
      skyGrad.addColorStop(0.70, '#1E1814');
      skyGrad.addColorStop(1, '#241D18');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // ================= 2. SOFT WARM VOLUMETRIC SUNLIGHT (MOVING LIGHT) =================
      const auraRadius = Math.max(width, vh) * 0.65;
      const sunAura = ctx.createRadialGradient(sunX, sunY, 15, sunX, sunY, auraRadius);
      // Subtle warm gold & muted sand
      sunAura.addColorStop(0, 'rgba(216, 199, 163, 0.22)');
      sunAura.addColorStop(0.20, 'rgba(180, 154, 114, 0.14)');
      sunAura.addColorStop(0.50, 'rgba(120, 80, 55, 0.05)');
      sunAura.addColorStop(1, 'rgba(16, 13, 11, 0)');
      ctx.fillStyle = sunAura;
      ctx.fillRect(0, 0, width, height);

      // Visible glowing sun core
      const coreGrad = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, 45);
      coreGrad.addColorStop(0, 'rgba(255, 245, 225, 0.35)');
      coreGrad.addColorStop(0.4, 'rgba(216, 199, 163, 0.18)');
      coreGrad.addColorStop(1, 'rgba(180, 154, 114, 0)');
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(sunX, sunY, 45, 0, Math.PI * 2);
      ctx.fill();

      // ================= 3. DISTANT DESERT HORIZON (MIDGROUND) =================
      const horizonY = vh * 0.74 + parallaxY * 0.4;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, horizonY);
      ctx.bezierCurveTo(
        width * 0.3, horizonY - 16,
        width * 0.6, horizonY + 12,
        width, horizonY - 8
      );
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fillStyle = '#1A1411';
      ctx.fill();

      // Distant Pyramid Silhouette (Khafre - faint silhouette to the left)
      const khafreX = width * 0.25 + parallaxX * 0.5;
      const khafreWidth = Math.min(width * 0.38, 340);
      const khafreHeight = khafreWidth * 0.52;
      const khafreBaseY = horizonY + 10;
      ctx.beginPath();
      ctx.moveTo(khafreX - khafreWidth * 0.5, khafreBaseY);
      ctx.lineTo(khafreX, khafreBaseY - khafreHeight);
      ctx.lineTo(khafreX + khafreWidth * 0.5, khafreBaseY);
      ctx.closePath();
      // Khafre receives subtle ambient light
      const khafreLightAlpha = sunFactor < 0 ? 0.35 : 0.22;
      ctx.fillStyle = `rgba(38, 30, 25, ${khafreLightAlpha})`;
      ctx.fill();
      ctx.restore();

      // ================= 4. ATMOSPHERIC HAZE LAYER (BEHIND PYRAMID) =================
      ctx.save();
      const hazeGrad = ctx.createLinearGradient(0, horizonY - 50, 0, horizonY + 40);
      hazeGrad.addColorStop(0, 'rgba(180, 154, 114, 0)');
      hazeGrad.addColorStop(0.5, 'rgba(180, 154, 114, 0.06)');
      hazeGrad.addColorStop(1, 'rgba(16, 13, 11, 0)');
      ctx.fillStyle = hazeGrad;
      ctx.fillRect(0, horizonY - 50, width, 90);
      ctx.restore();

      // ================= 5. MONUMENTAL GREAT PYRAMID SILHOUETTE (PROUDLY IN VIEWPORT) =================
      // The Great Pyramid base and apex are calculated so it occupies a majestic portion of the viewport
      const pyramidWidth = Math.min(width * 0.88, 860);
      const pyramidHeight = pyramidWidth * 0.52; // Authentic Seked proportion
      const pyramidBaseY = vh * 0.78 + parallaxY * 0.7;
      const pyramidCenterX = width * 0.50 + parallaxX * 0.7;

      const apexX = pyramidCenterX;
      const apexY = pyramidBaseY - pyramidHeight;
      const leftCornerX = pyramidCenterX - pyramidWidth * 0.5;
      const rightCornerX = pyramidCenterX + pyramidWidth * 0.5;

      // Central Arris dividing the faces with subtle architectural perspective
      const ridgeBaseX = pyramidCenterX - 8;
      const ridgeBaseY = pyramidBaseY + 12;

      // Illumination factor based on continuous sun position (-1 to 1)
      const sunLeft = Math.max(0, -sunFactor); // 1 when sun is on left, 0 on right
      const sunRight = Math.max(0, sunFactor);  // 1 when sun is on right, 0 on left

      // 5A. SHIFTING CAST SHADOW ON DESERT FLOOR (MOVING SHADOW)
      // When sun is on the left, shadow stretches toward the right; when on right, stretches left
      ctx.save();
      ctx.beginPath();
      const shadowLength = pyramidWidth * (0.35 + Math.abs(sunFactor) * 0.55);
      const shadowDir = sunFactor < 0 ? 1 : -1;
      const shadowTipX = pyramidCenterX + shadowDir * shadowLength;
      const shadowTipY = pyramidBaseY + 30 + Math.abs(sunFactor) * 20;

      ctx.moveTo(leftCornerX, pyramidBaseY);
      ctx.lineTo(shadowTipX, shadowTipY);
      ctx.lineTo(rightCornerX, pyramidBaseY);
      ctx.closePath();

      const shadowGrad = ctx.createLinearGradient(pyramidCenterX, pyramidBaseY, shadowTipX, shadowTipY);
      shadowGrad.addColorStop(0, 'rgba(14, 11, 9, 0.75)');
      shadowGrad.addColorStop(1, 'rgba(14, 11, 9, 0)');
      ctx.fillStyle = shadowGrad;
      ctx.fill();
      ctx.restore();

      // 5B. LEFT FACE (East/Southeast Face)
      // Transition tones: in shadow = #181310, in sunlight = #4A3C32 up to #5C4B3E
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(leftCornerX, pyramidBaseY);
      ctx.lineTo(apexX, apexY);
      ctx.lineTo(ridgeBaseX, ridgeBaseY);
      ctx.closePath();

      const leftFaceLight = 0.20 + sunLeft * 0.35; // 0.20 to 0.55
      const leftGrad = ctx.createLinearGradient(leftCornerX, pyramidBaseY, apexX, apexY);
      const lBaseR = Math.round(24 + leftFaceLight * 70);
      const lBaseG = Math.round(19 + leftFaceLight * 58);
      const lBaseB = Math.round(16 + leftFaceLight * 46);
      leftGrad.addColorStop(0, `rgb(${Math.round(lBaseR * 0.75)}, ${Math.round(lBaseG * 0.75)}, ${Math.round(lBaseB * 0.75)})`);
      leftGrad.addColorStop(1, `rgb(${lBaseR}, ${lBaseG}, ${lBaseB})`);
      ctx.fillStyle = leftGrad;
      ctx.fill();

      // Horizontal limestone masonry striations
      ctx.strokeStyle = `rgba(216, 199, 163, ${0.04 + sunLeft * 0.05})`;
      ctx.lineWidth = 0.75;
      for (let y = apexY + 16; y < pyramidBaseY; y += 12) {
        const ratio = (y - apexY) / pyramidHeight;
        const lx = apexX - (apexX - leftCornerX) * ratio;
        const rx = apexX + (ridgeBaseX - apexX) * ratio;
        ctx.beginPath();
        ctx.moveTo(lx, y);
        ctx.lineTo(rx, y);
        ctx.stroke();
      }
      ctx.restore();

      // 5C. RIGHT FACE (West/Southwest Face)
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(rightCornerX, pyramidBaseY);
      ctx.lineTo(apexX, apexY);
      ctx.lineTo(ridgeBaseX, ridgeBaseY);
      ctx.closePath();

      const rightFaceLight = 0.20 + sunRight * 0.35; // 0.20 to 0.55
      const rightGrad = ctx.createLinearGradient(rightCornerX, pyramidBaseY, apexX, apexY);
      const rBaseR = Math.round(24 + rightFaceLight * 70);
      const rBaseG = Math.round(19 + rightFaceLight * 58);
      const rBaseB = Math.round(16 + rightFaceLight * 46);
      rightGrad.addColorStop(0, `rgb(${Math.round(rBaseR * 0.75)}, ${Math.round(rBaseG * 0.75)}, ${Math.round(rBaseB * 0.75)})`);
      rightGrad.addColorStop(1, `rgb(${rBaseR}, ${rBaseG}, ${rBaseB})`);
      ctx.fillStyle = rightGrad;
      ctx.fill();

      // Horizontal limestone masonry striations
      ctx.strokeStyle = `rgba(216, 199, 163, ${0.04 + sunRight * 0.05})`;
      ctx.lineWidth = 0.75;
      for (let y = apexY + 16; y < pyramidBaseY; y += 12) {
        const ratio = (y - apexY) / pyramidHeight;
        const lx = apexX + (ridgeBaseX - apexX) * ratio;
        const rx = apexX + (rightCornerX - apexX) * ratio;
        ctx.beginPath();
        ctx.moveTo(lx, y);
        ctx.lineTo(rx, y);
        ctx.stroke();
      }
      ctx.restore();

      // 5D. SHARP DIVIDING ARRIS & CAPSTONE APEX HIGHLIGHT
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(apexX, apexY);
      ctx.lineTo(ridgeBaseX, ridgeBaseY);
      ctx.strokeStyle = `rgba(216, 199, 163, ${0.12 + Math.abs(sunFactor) * 0.12})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Subtle warm sun highlight on the slope facing the sun
      ctx.beginPath();
      if (sunFactor < 0) {
        // Left slope highlight
        ctx.moveTo(apexX, apexY);
        ctx.lineTo(leftCornerX, pyramidBaseY);
        ctx.strokeStyle = `rgba(216, 199, 163, ${0.15 * sunLeft})`;
      } else {
        // Right slope highlight
        ctx.moveTo(apexX, apexY);
        ctx.lineTo(rightCornerX, pyramidBaseY);
        ctx.strokeStyle = `rgba(216, 199, 163, ${0.15 * sunRight})`;
      }
      ctx.lineWidth = 1.2;
      ctx.stroke();
      ctx.restore();

      // ================= 6. DESERT FOREGROUND BASELINE GRADIENT =================
      ctx.save();
      const baseGrad = ctx.createLinearGradient(0, pyramidBaseY - 10, 0, height);
      baseGrad.addColorStop(0, 'rgba(23, 18, 14, 0)');
      baseGrad.addColorStop(0.35, '#191310');
      baseGrad.addColorStop(1, '#120E0C');
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, pyramidBaseY - 10, width, height - pyramidBaseY + 10);
      ctx.restore();

      // ================= 7. HORIZONTALLY DRIFTING ATMOSPHERIC HAZE (FRONT LAYER) =================
      ctx.save();
      const frontHazeY = pyramidBaseY - 35 + parallaxY * 0.8;
      const frontHazeGrad = ctx.createLinearGradient(0, frontHazeY - 30, 0, frontHazeY + 50);
      frontHazeGrad.addColorStop(0, 'rgba(180, 154, 114, 0)');
      frontHazeGrad.addColorStop(0.5, 'rgba(180, 154, 114, 0.04)');
      frontHazeGrad.addColorStop(1, 'rgba(18, 14, 12, 0)');
      ctx.fillStyle = frontHazeGrad;
      ctx.fillRect(0, frontHazeY - 30, width, 80);
      ctx.restore();

      // ================= 8. SUBTLE HORIZONTALLY DRIFTING DUST PARTICLES (22 PARTICLES) =================
      ctx.save();
      for (let i = 0; i < motes.length; i++) {
        const m = motes[i];
        if (!prefersReducedMotionRef.current) {
          m.x += m.speedX;
          m.y += m.speedY;
          m.phase += 0.015;

          // Wrap around seamlessly
          if (m.x > width + 10) m.x = -10;
          if (m.y < 0) m.y = height + 10;
          if (m.y > height + 10) m.y = -10;
        }

        const alpha = Math.max(0.04, m.baseAlpha + Math.sin(m.phase) * 0.06);
        ctx.fillStyle = `rgba(216, 199, 163, ${alpha})`;
        ctx.beginPath();
        ctx.arc(m.x + parallaxX * 0.9, m.y + parallaxY * 0.9, m.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none block"
      />
    </div>
  );
};
