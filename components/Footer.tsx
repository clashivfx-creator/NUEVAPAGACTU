
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#0b0b10] text-center">
      <div className="container mx-auto px-4">
        <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ClashiVFX Formación. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
