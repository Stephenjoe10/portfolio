import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName.toLowerCase() === 'a' || 
          (e.target as HTMLElement).tagName.toLowerCase() === 'button') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="hidden md:block">
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-400 pointer-events-none z-[100] mix-blend-difference flex items-center justify-center"
        animate={{ 
          x: mousePosition.x - 16, 
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-purple-500 pointer-events-none z-[100] mix-blend-difference"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ type: 'tween', ease: 'linear', duration: 0 }}
      />
    </div>
  );
}
