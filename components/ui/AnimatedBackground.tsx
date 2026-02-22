"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const LiquidEther = dynamic(() => import('./LiquidEther'), { ssr: false });

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black pointer-events-none transform-gpu">
      <div className="absolute inset-0 w-full h-full opacity-60">
        <LiquidEther
          colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
          mouseForce={14}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      
      {/* Gradientes de profundidad para suavizar los bordes */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      
      {/* Mesh gradients adicionales para profundidad */}
      <div 
        className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] rounded-full bg-blue-900/5 blur-[40px] animate-float-slow will-change-transform transform-gpu"
        style={{ animationDuration: '30s' }}
      />
      <div 
        className="absolute bottom-[5%] right-[-5%] w-[40%] h-[40%] rounded-full bg-purple-900/5 blur-[50px] animate-float-slow will-change-transform transform-gpu"
        style={{ animationDuration: '35s', animationDelay: '-7s' }}
      />
    </div>
  );
};
