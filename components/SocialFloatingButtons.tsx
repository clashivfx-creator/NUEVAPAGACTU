
import React from 'react';
import { Instagram } from 'lucide-react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/>
  </svg>
);

export const SocialFloatingButtons = () => {
    return (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 p-2 md:p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col gap-3 md:gap-4 items-center">
            <a 
                href="https://www.instagram.com/clashivfx/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-lg hover:scale-110 transition-transform duration-300 group border border-white/10"
                aria-label="Instagram"
            >
                 <Instagram className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </a>
             <a 
                href="https://www.tiktok.com/@clashivfx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black border border-white/20 shadow-lg hover:scale-110 transition-transform duration-300 group"
                aria-label="TikTok"
            >
                 <TikTokIcon className="w-3 h-3 md:w-5 md:h-5 text-white group-hover:text-[#00f2ea] transition-colors" />
            </a>
             <a 
                href="https://discord.com/invite/zEcFPBqy6s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#5865F2] shadow-lg hover:scale-110 transition-transform duration-300 group border border-white/10"
                aria-label="Discord"
            >
                 <DiscordIcon className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </a>
        </div>
    )
}
