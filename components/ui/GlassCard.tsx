
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glow-border' | 'feature';
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  variant = 'default',
  hoverEffect = false 
}) => {
  if (variant === 'glow-border') {
    return (
      <div className={`relative p-[1px] rounded-2xl overflow-hidden group ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-border-glow" />
        <div className="absolute inset-[1px] bg-[#0a0a0c] rounded-2xl z-0" />
        <div className="relative z-10 h-full bg-white/5 backdrop-blur-xl rounded-2xl p-6 transition-all duration-300">
           {children}
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`
        glass-panel rounded-2xl p-6 relative overflow-hidden transition-all duration-500
        ${hoverEffect ? 'hover:bg-white/10 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.15)] group hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
      {children}
    </div>
  );
};
