import { ReactNode } from "react";

interface ShaderLayoutProps {
  children: ReactNode;
}

export default function ShaderLayout({ children }: ShaderLayoutProps) {
  return (
    <main className="fixed inset-0 w-screen h-screen overflow-hidden">
      {children}
    </main>
  );
}
