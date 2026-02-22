
import React from 'react';

interface Artist {
  name: string;
  imageUrl: string;
}

const collaborators: Artist[] = [
  { name: 'YSY A', imageUrl: 'https://raw.githubusercontent.com/clashivfx-creator/MEDIA/34c0db1a0d0dcfdee3ce81d209e5f034aad7b23d/ab67616d0000b2738aaa87d1b2aa73e9e6d24dd3.jfif' },
  { name: 'KHEA', imageUrl: 'https://raw.githubusercontent.com/clashivfx-creator/MEDIA/34c0db1a0d0dcfdee3ce81d209e5f034aad7b23d/h7CNXtSf6UY2KadFej1IdgCwnxc.jpg' },
  { name: 'RAUW ALEJANDRO', imageUrl: 'https://raw.githubusercontent.com/clashivfx-creator/MEDIA/34c0db1a0d0dcfdee3ce81d209e5f034aad7b23d/2ada0e3adc3d16df0aa21f073ef1cb04.avif' },
  { name: 'KUN AGUERO', imageUrl: 'https://raw.githubusercontent.com/clashivfx-creator/MEDIA/34c0db1a0d0dcfdee3ce81d209e5f034aad7b23d/NAOU7ATJKVANDJXQRUVGRMDBR4.jpg' },
  { name: 'MILO J', imageUrl: 'https://raw.githubusercontent.com/clashivfx-creator/MEDIA/34c0db1a0d0dcfdee3ce81d209e5f034aad7b23d/3239.webp' },
  { name: 'EMILIA MERNES', imageUrl: 'https://raw.githubusercontent.com/clashivfx-creator/MEDIA/34c0db1a0d0dcfdee3ce81d209e5f034aad7b23d/emilia-mernes-cambio-de-trabajo-foto-efeepacristobal-herrera-ulashkevich-WSZJKPTMQVFIDABO67QBRP5KBQ.avif' },
  { name: 'TIAGO PZK', imageUrl: 'https://raw.githubusercontent.com/clashivfx-creator/MEDIA/34c0db1a0d0dcfdee3ce81d209e5f034aad7b23d/tiago8981_sq.jpg' },
  { name: 'DUKI', imageUrl: 'https://raw.githubusercontent.com/clashivfx-creator/MEDIA/78c226ce1db2186fec0852209f59c62981480e0c/Captura%20de%20pantalla%202026-02-22%20145541.png' },
  { name: 'KENIA OS', imageUrl: 'https://raw.githubusercontent.com/clashivfx-creator/MEDIA/34c0db1a0d0dcfdee3ce81d209e5f034aad7b23d/fcb6f10e3c94-gettyimages-2235116767.webp' },
  { name: 'NATHY PELUSO', imageUrl: 'https://raw.githubusercontent.com/clashivfx-creator/MEDIA/34c0db1a0d0dcfdee3ce81d209e5f034aad7b23d/nathy-peluso_104.webp' },
  { name: 'LIT KILLAH', imageUrl: 'https://raw.githubusercontent.com/clashivfx-creator/MEDIA/34c0db1a0d0dcfdee3ce81d209e5f034aad7b23d/channels4_profile%20(1).jpg' },
  { name: 'MARCIANEKE', imageUrl: 'https://raw.githubusercontent.com/clashivfx-creator/MEDIA/34c0db1a0d0dcfdee3ce81d209e5f034aad7b23d/3135.webp' }
];

export const CollaboratorsCarousel: React.FC = () => {
  return (
    <div className="w-full py-6 sm:py-10">
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-6">
        {collaborators.map((artist) => (
          <div
            key={artist.name}
            className="flex flex-col items-center group"
          >
            <div className="relative w-full aspect-square rounded-[0.8rem] sm:rounded-[2rem] overflow-hidden border border-white/10 transition-all duration-500 group-hover:border-white/30 group-hover:scale-[1.05] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
              <img
                src={artist.imageUrl}
                alt={artist.name}
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />

              {/* Badge de nombre flotante al hacer hover - Oculto en touch/mobile para no interferir */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-[2px] p-1 text-center hidden sm:flex">
                <span className="text-white text-[8px] sm:text-xs font-black tracking-widest uppercase">
                  {artist.name}
                </span>
              </div>
            </div>
            <span className="mt-1.5 text-white/30 group-hover:text-white text-[6px] sm:text-[10px] font-black tracking-widest uppercase transition-colors text-center px-0.5 truncate w-full">
              {artist.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
