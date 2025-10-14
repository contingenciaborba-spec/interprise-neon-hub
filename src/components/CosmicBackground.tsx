import { useEffect, useRef } from 'react';

const CosmicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, `rgba(168, 85, 247, ${particle.opacity})`);
        gradient.addColorStop(1, 'rgba(168, 85, 247, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none z-0" />
      
      {/* Floating orbs */}
      <div className="fixed top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-cosmic-drift pointer-events-none z-0" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-cosmic-drift pointer-events-none z-0" style={{ animationDelay: '5s' }} />
      <div className="fixed top-1/2 left-1/2 w-72 h-72 bg-secondary/20 rounded-full blur-[100px] animate-cosmic-drift pointer-events-none z-0" style={{ animationDelay: '10s' }} />
    </>
  );
};

export default CosmicBackground;
