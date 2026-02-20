"use client";

import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

const App = dynamic(() => import("../../../App"), { ssr: false });

export default function ProductPage() {
  const params = useParams();
  return <App initialTab="detail" productSlug={params.slug as string} />;
}
