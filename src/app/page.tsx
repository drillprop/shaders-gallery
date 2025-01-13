import { ShaderCard } from "@/components/ShaderCard/ShaderCard";
import { First } from "@/components/shaders/First/First";
import { Second } from "@/components/shaders/Second/Second";
import { Third } from "@/components/shaders/Third/Third";
import { Fourth } from "@/components/shaders/Fourth/Fourth";
import { Fifth } from "@/components/shaders/Fifth/Fifth";
import { Sixth } from "@/components/shaders/Sixth/Sixth";
import { Seventh } from "@/components/shaders/Seventh/Seventh";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full max-w-screen-2xl ml-auto mr-auto">
      <section className="w-full h-full mt-10 grid grid-cols-[repeat(auto-fill,160px)] gap-2">
        <ShaderCard title="1" url="/shaders/1">
          <First />
        </ShaderCard>
        <ShaderCard title="2" url="/shaders/2">
          <Second />
        </ShaderCard>
        <ShaderCard title="3" url="/shaders/3">
          <Third />
        </ShaderCard>
        <ShaderCard title="4" url="/shaders/4">
          <Fourth />
        </ShaderCard>
        <ShaderCard title="5" url="/shaders/5">
          <Fifth />
        </ShaderCard>
        <ShaderCard title="6" url="/shaders/6">
          <Sixth />
        </ShaderCard>
        <Link href="/7" className="shader-link">
          <ShaderCard title="7" url="/7">
            <Seventh />
          </ShaderCard>
        </Link>
      </section>
    </main>
  );
}
