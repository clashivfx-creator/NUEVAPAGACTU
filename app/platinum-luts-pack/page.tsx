"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

const App = dynamic(() => import("../../App"), { ssr: false });

export default function PlatinumLutsPage() {
  useEffect(() => {
    // Set initial tab to platinum when page loads
    const event = new CustomEvent('setInitialTab', { detail: { tab: 'platinum' } });
    window.dispatchEvent(event);
  }, []);
  
  return <App />;
}
