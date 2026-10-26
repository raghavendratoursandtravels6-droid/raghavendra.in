import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
}

export const RaghavendraLogo: React.FC<LogoProps> = ({
  className = 'w-12 h-12',
  size,
  showText = false,
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <img
        src="/assets/logo.svg"
        alt="Raghavendra Tours & Travels Official Emblem Logo"
        width={size || 80}
        height={size || 80}
        className="w-full h-full object-contain rounded-full shadow-xs hover:scale-105 transition-transform duration-300"
        loading="eager"
      />
    </div>
  );
};
