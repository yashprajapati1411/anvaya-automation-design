'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PearlSphereProps {
  size?: number | string;
  className?: string;
  float?: boolean;
  opacity?: number;
  glow?: boolean;
}

export const PearlSphere: React.FC<PearlSphereProps> = ({
  size = 520,
  className = '',
  float = true,
  opacity = 1,
  glow = true,
}) => {
  const dimension = typeof size === 'number' ? `${size}px` : size;

  return (
    <motion.div
      animate={
        float
          ? {
              y: [-12, 12, -12],
              rotate: [0, 1.5, 0],
            }
          : undefined
      }
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        width: dimension,
        height: dimension,
        opacity,
      }}
      className={`pearl-orb pointer-events-none select-none relative z-0 ${className} ${
        glow ? 'shadow-orb' : ''
      }`}
    />
  );
};

export default PearlSphere;
