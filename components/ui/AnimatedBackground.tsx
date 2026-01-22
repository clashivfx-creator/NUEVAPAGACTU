
import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black pointer-events-none">
      {/* Apple-style subtle mesh gradients */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/10 blur-[120px] animate-float-slow"
        style={{ animationDuration: '25s' }}
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[150px] animate-float-slow"
        style={{ animationDuration: '30s', animationDelay: '-5s' }}
      />
      <div 
        className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-slate-800/10 blur-[130px] animate-float-slow"
        style={{ animationDuration: '35s', animationDelay: '-12s' }}
      />
    </div>
  );
};
