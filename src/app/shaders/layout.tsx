import Link from "next/link";
import { ReactNode } from "react";

interface ShaderLayoutProps {
  children: ReactNode;
}

export default function ShaderLayout({ children }: ShaderLayoutProps) {
  return (
    <main className="fixed inset-0 w-screen h-screen overflow-hidden">
      {children}
      <nav className="absolute top-4 left-4 flex gap-2">
        <Link
          href="/"
          className="text-slate-50 font-bold font-mono hover:text-slate-100 hover:underline"
        >
          Back
        </Link>
      </nav>
    </main>
  );
}
