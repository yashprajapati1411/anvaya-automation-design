'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HairlineRingProps {
  size?: number | string;
  className?: string;
  rotate?: boolean;
}

export const HairlineRing: React.FC<HairlineRingProps> = ({
  size = 760,
  className = '',
  rotate = true,
}) => {
  const dimension = typeof size === 'number' ? `${size}px` : size;

  return (
    <motion.div
      animate={
        rotate
          ? {
              rotate: 360,
            }
          : undefined
      }
      transition={{
        duration: 80,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{
        width: dimension,
        height: dimension,
      }}
      className={`hairline-ring pointer-events-none select-none relative z-0 ${className}`}
    />
  );
};

export default HairlineRing;
