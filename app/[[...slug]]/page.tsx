"use client";

import dynamic from "next/dynamic";
import { use, useEffect } from "react";
import { ActiveTab } from "../../App";

const App = dynamic(() => import("../../App"), { ssr: false });

// Map URL paths to tabs
const pathToTab: Record<string, ActiveTab> = {
  'platinum-luts-pack': 'platinum',
  'store': 'store',
  'checkout': 'checkout',
  'elite-pack': 'products',
};

export default function CatchAllPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug?.[0] || '';
  const initialTab = pathToTab[slug] || 'products';
  
  useEffect(() => {
    console.log('[v0] CatchAllPage - slug:', slug, 'initialTab:', initialTab);
  }, [slug, initialTab]);
  
  return <App initialTab={initialTab} />;
}
