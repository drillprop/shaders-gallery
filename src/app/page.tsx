import { ShaderCard } from "@/components/ShaderCard/ShaderCard";
import { First } from "@/components/shaders/First/First";
import { Second } from "@/components/shaders/Second/Second";
import { Third } from "@/components/shaders/Third/Third";
import { Fourth } from "@/components/shaders/Fourth/Fourth";
import { Fifth } from "@/components/shaders/Fifth/Fifth";

export default function Home() {
  return (
    <main className="w-full max-w-screen-2xl ml-auto mr-auto">
      <section className="w-full h-full mt-10 grid grid-cols-[repeat(auto-fill,160px)] gap-2">
        <ShaderCard title="First" url="/shaders/first">
          <First />
        </ShaderCard>
        <ShaderCard title="Second" url="/shaders/second">
          <Second />
        </ShaderCard>
        <ShaderCard title="Third" url="/shaders/third">
          <Third />
        </ShaderCard>
        <ShaderCard title="Fourth" url="/shaders/fourth">
          <Fourth />
        </ShaderCard>
        <ShaderCard title="Fifth" url="/shaders/fifth">
          <Fifth />
        </ShaderCard>
      </section>
    </main>
  );
}
