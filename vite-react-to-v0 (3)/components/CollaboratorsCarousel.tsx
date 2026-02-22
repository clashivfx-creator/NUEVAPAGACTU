
import React from 'react';

interface Artist {
  name: string;
  imageUrl: string;
}

const collaborators: Artist[] = [
  { name: 'YSY A', imageUrl: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770059398/ab67616d0000b2738aaa87d1b2aa73e9e6d24dd3_pdtjk7.jpg' },
  { name: 'KHEA', imageUrl: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770059396/h7CNXtSf6UY2KadFej1IdgCwnxc_fhofem.jpg' },
  { name: 'RAUW ALEJANDRO', imageUrl: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770059396/2ada0e3adc3d16df0aa21f073ef1cb04_dgrap2.avif' },
  { name: 'KUN AGUERO', imageUrl: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770059396/NAOU7ATJKVANDJXQRUVGRMDBR4_i4merx.jpg' },
  { name: 'MILO J', imageUrl: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770059396/3239_sfnatz.webp' },
  { name: 'EMILIA MERNES', imageUrl: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770059396/emilia-mernes-cambio-de-trabajo-foto-efeepacristobal-herrera-ulashkevich-WSZJKPTMQVFIDABO67QBRP5KBQ_vkidbz.avif' },
  { name: 'TIAGO PZK', imageUrl: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770059395/tiago8981_sq_o8rnb9.webp' },
  { name: 'BHAVI', imageUrl: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770059395/8cfeb7a902a62e44dc64a4a38c23c8ba.1000x1000x1_z18gou.png' },
  { name: 'KENIA OS', imageUrl: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770059395/fcb6f10e3c94-gettyimages-2235116767_uzz2h2.webp' },
  { name: 'NATHY PELUSO', imageUrl: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770059395/nathy-peluso_104_ffriqo.webp' },
  { name: 'LIT KILLAH', imageUrl: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770059395/channels4_profile_1_nk83lq.jpg' },
  { name: 'MARCIANEKE', imageUrl: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770059395/3135_e8nzog.webp' }
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
