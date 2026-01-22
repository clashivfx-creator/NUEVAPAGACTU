
import React from 'react';

export const AnimatedBackground: React.FC = () => {
  const videoUrl = "https://cdn.discordapp.com/attachments/1393659131549978666/1463331970879848489/video_nashhh.mp4?ex=69721a59&is=6970c8d9&hm=186a633e5af2eeb33356ab285f6fa91b73c83c2f3827070eee2ed93726f259c0&";

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black pointer-events-none">
      {/* Video de fondo con opacidad controlada para no saturar la GPU */}
      <div className="absolute inset-0 w-full h-full opacity-30 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Mesh gradients optimizados con blurs menores para rendimiento */}
      <div 
        className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] rounded-full bg-blue-900/5 blur-[60px] animate-float-slow will-change-transform"
        style={{ animationDuration: '25s' }}
      />
      <div 
        className="absolute bottom-[5%] right-[-5%] w-[40%] h-[40%] rounded-full bg-purple-900/5 blur-[80px] animate-float-slow will-change-transform"
        style={{ animationDuration: '30s', animationDelay: '-5s' }}
      />
    </div>
  );
};
