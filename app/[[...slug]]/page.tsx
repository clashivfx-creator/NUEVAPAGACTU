"use client";

import dynamic from "next/dynamic";
import { ActiveTab } from "../../App";

const App = dynamic(() => import("../../App"), { ssr: false });

// Map URL paths to tabs
const pathToTab: Record<string, ActiveTab> = {
  'platinum-luts-pack': 'platinum',
  'store': 'store',
  'checkout': 'checkout',
  'elite-pack': 'products',
};

export default function CatchAllPage({ params }: { params: { slug?: string[] } }) {
  const slug = params.slug?.[0] || '';
  const initialTab = pathToTab[slug] || 'products';
  
  return <App initialTab={initialTab} />;
}
