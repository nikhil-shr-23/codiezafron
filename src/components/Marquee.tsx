import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
}

export default function Marquee({ 
  children, 
  direction = 'left', 
  speed = 'normal',
  className = '' 
}: MarqueeProps) {
  const speedMap = {
    slow: '40s',
    normal: '20s',
    fast: '10s'
  };

  return (
    <div className="overflow-hidden relative">
      <div 
        className={`flex animate-marquee ${
          direction === 'right' ? 'animate-marquee-reverse' : ''
        } ${className}`}
        style={{ animationDuration: speedMap[speed] }}
      >
        {children}
        {children} {/* Duplicate for seamless loop */}
      </div>
    </div>
  );
}