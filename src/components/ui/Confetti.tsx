import { useMemo } from 'react';
import { cn } from '@/lib/utils';

const CONFETTI_COLORS = ['bg-primary', 'bg-accent', 'bg-yellow-400', 'bg-orange-400'];

export default function Confetti() {
  const confetti = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => {
      const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
      const style = {
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 2}s`,
        transform: `rotate(${Math.random() * 360}deg)`,
      };
      const dimensions = Math.random() < 0.5 ? 'w-2 h-2' : 'w-3 h-1';

      return (
        <div
          key={i}
          className={cn('absolute top-[-10px] animate-drop rounded-full', color, dimensions)}
          style={style}
        />
      );
    });
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-50">
      {confetti}
      <style jsx>{`
        @keyframes drop {
          0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-drop {
          animation-name: drop;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
