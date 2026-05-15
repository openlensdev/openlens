import React from 'react';

export default function SparkleGraphic({ dark }) {
  const strokeColor = dark ? '#9CA3AF' : '#6B7280';
  const starFill = dark ? '#E5E7EB' : '#111827';
  
  return (
    <div className="absolute right-0 md:right-10 top-10 md:top-0 pointer-events-none opacity-70 hidden lg:block">
      <svg width="280" height="280" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-75 md:scale-100">
        <path 
          d="M 20 120 C 50 180, 160 180, 150 70 C 140 -20, 30 20, 60 90" 
          stroke={strokeColor}
          strokeWidth="1" 
          strokeDasharray="4 6"
          fill="transparent"
          className="transition-colors duration-500"
        />
        <path 
          d="M 150 30 Q 150 70 110 70 Q 150 70 150 110 Q 150 70 190 70 Q 150 70 150 30 Z" 
          fill={starFill}
          className="transition-colors duration-500"
        />
      </svg>
    </div>
  );
}
