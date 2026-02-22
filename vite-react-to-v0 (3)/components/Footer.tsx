
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

export const Footer: React.FC = () => {
  const { t } = useContext(LanguageContext);
  return (
    <footer className="py-12 border-t border-white/5 bg-[#0b0b10] text-center">
      <div className="container mx-auto px-4">
        <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ClashiVFX Formación. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};
