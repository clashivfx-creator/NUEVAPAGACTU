
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, fullWidth = false, className = '', ...props }) => {
  return (
    <button
      className={`
        group relative px-8 py-4 rounded-full font-bold text-white overflow-hidden
        bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500
        hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all duration-300
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${className}
      `}
      {...props}
    >
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </span>
    </button>
  );
};
