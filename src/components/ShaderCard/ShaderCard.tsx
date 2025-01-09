import Link from "next/link";
import { Scene } from "../Scene/Scene";

type ShaderCardProps = {
  title: string;
  children: React.ReactNode;
  url: string;
};

export const ShaderCard = ({ title, children, url }: ShaderCardProps) => {
  return (
    <article className="flex flex-col gap-4">
      <div className="w-full h-full">
        <Scene>{children}</Scene>
      </div>
      <Link href={url} className="flex flex-col gap-4 group">
        <h2 className="text-sm font-bold font-mono text-slate-800 text-center group-hover:text-slate-900 group-hover:underline transition-all duration-300">
          {title}
        </h2>
      </Link>
    </article>
  );
};
