import { ShaderCard } from "@/components/ShaderCard/ShaderCard";
import { First } from "@/components/shaders/First/First";
import { Second } from "@/components/shaders/Second/Second";
import { Third } from "@/components/shaders/Third/Third";
import { Fourth } from "@/components/shaders/Fourth/Fourth";
import { Fifth } from "@/components/shaders/Fifth/Fifth";
import { Sixth } from "@/components/shaders/Sixth/Sixth";
import { Seventh } from "@/components/shaders/Seventh/Seventh";
import { Eighth } from "@/components/shaders/Eighth/Eighth";
import { Ninth } from "@/components/shaders/Ninth/Ninth";
import { Tenth } from "@/components/shaders/Tenth/Tenth";
import { Eleventh } from "@/components/shaders/Eleventh/Eleventh";

export default function Home() {
  return (
    <main className="w-full max-w-screen-2xl ml-auto mr-auto">
      <section className="w-full h-full mt-10 grid grid-cols-[repeat(auto-fill,160px)] gap-2 justify-center">
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
        <ShaderCard title="7" url="/shaders/7">
          <Seventh />
        </ShaderCard>
        <ShaderCard title="8" url="/shaders/8">
          <Eighth />
        </ShaderCard>
        <ShaderCard title="9" url="/shaders/9">
          <Ninth />
        </ShaderCard>
        <ShaderCard title="10" url="/shaders/10">
          <Tenth />
        </ShaderCard>
        <ShaderCard title="11" url="/shaders/11">
          <Eleventh />
        </ShaderCard>
      </section>
    </main>
  );
}
