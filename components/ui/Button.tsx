
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
        group relative px-10 py-5 rounded-full font-black text-black overflow-hidden uppercase tracking-tighter
        bg-white shadow-xl transition-all duration-400 cubic-bezier(0.16, 1, 0.3, 1)
        hover:scale-[1.03] active:scale-95
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-3">
        {children}
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
      </span>
    </button>
  );
};
