
import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import { Hero } from './components/Hero';
import { WarningSection } from './components/WarningSection';
import { FeaturesGrid } from './components/FeaturesGrid';
import { ProgramHighlights } from './components/ProgramHighlights';
import { CreatorStory } from './components/CreatorStory';
import { CreatorsSection } from './components/CreatorsSection';
import { UltraWorkflow } from './components/UltraWorkflow';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/ui/AnimatedBackground';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { SocialFloatingButtons } from './components/SocialFloatingButtons';

// Internal Discord Icon for the Navbar
const DiscordIconNav = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/>
  </svg>
);

function App() {
  const [activeTab, setActiveTab] = useState<'formacion' | 'workflow'>('formacion');

  return (
    <div className="min-h-screen text-white relative bg-black">
      <AnimatedBackground />
      <ScrollProgress />
      <SocialFloatingButtons />
      
      <nav className="fixed top-0 w-full z-50 px-4 md:px-8 py-4 flex justify-between items-center backdrop-blur-md bg-black/40 border-b border-white/5 transition-all duration-300">
        {/* Logo Left */}
        <div className="flex items-center gap-2">
          <span className="text-lg md:text-xl font-bold tracking-widest uppercase text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">ClashiVFX</span>
        </div>

        {/* Navigation Tabs Center-Right */}
        <div className="hidden md:flex items-center ml-auto mr-8 gap-8">
          <button 
            onClick={() => setActiveTab('formacion')}
            className={`relative py-1 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === 'formacion' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
          >
            Formación
            {activeTab === 'formacion' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            )}
          </button>
          <button 
            onClick={() => setActiveTab('workflow')}
            className={`relative py-1 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === 'workflow' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
          >
            ULTRAWORKFLOW
            {activeTab === 'workflow' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            )}
          </button>
        </div>

        {/* Action Buttons Far-Right */}
        <div className="flex items-center gap-2 md:gap-4">
          <a 
            href="https://e08ff1-xx.myshopify.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-6 md:py-2.5 rounded-full bg-green-500 hover:bg-green-400 text-white text-[10px] md:text-sm font-black transition-all shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] hover:scale-105"
          >
             <ShoppingBag className="w-3.5 h-3.5 md:w-5 md:h-5" />
             <span className="hidden sm:inline">TODA LA TIENDA</span>
             <span className="sm:hidden">TIENDA</span>
          </a>

          <a 
            href="https://discord.com/invite/zEcFPBqy6s" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-6 md:py-2.5 rounded-full bg-[#5865F2] hover:bg-[#4752C4] text-white text-[10px] md:text-sm font-black transition-all animate-pulse-glow-blue shadow-[0_0_15px_rgba(88,101,242,0.4)]"
          >
             <DiscordIconNav className="w-3.5 h-3.5 md:w-5 md:h-5" />
             Comunidad
          </a>
        </div>
      </nav>

      {/* Mobile Tabs */}
      <div className="md:hidden fixed top-20 left-0 w-full z-40 flex justify-center gap-4 bg-black/60 backdrop-blur-lg py-3 border-b border-white/5">
        <button 
          onClick={() => setActiveTab('formacion')}
          className={`text-[10px] font-bold uppercase tracking-tighter px-4 py-1.5 rounded-full border ${activeTab === 'formacion' ? 'bg-white/10 border-white/20' : 'border-transparent text-white/40'}`}
        >
          Formación
        </button>
        <button 
          onClick={() => setActiveTab('workflow')}
          className={`text-[10px] font-bold uppercase tracking-tighter px-4 py-1.5 rounded-full border ${activeTab === 'workflow' ? 'bg-white/10 border-white/20' : 'border-transparent text-white/40'}`}
        >
          ULTRAWORKFLOW
        </button>
      </div>

      <main className="transition-all duration-400 ease-out">
        {activeTab === 'formacion' ? (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pt-10 md:pt-0">
            <Hero />
            <WarningSection />
            <FeaturesGrid />
            <ProgramHighlights />
            <CreatorStory />
            <CreatorsSection />
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
             <UltraWorkflow />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
