"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

const App = dynamic(() => import("../../App"), { ssr: false });

export default function StorePage() {
  useEffect(() => {
    document.title = 'Tienda Completa - ClashiVFX | Recursos Profesionales de Edición';
  }, []);
  
  return <App initialTab="store" />;
}
