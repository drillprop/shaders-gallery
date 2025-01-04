import { ShaderCard } from "@/components/ShaderCard/ShaderCard";
import { First } from "@/components/shaders/First/First";
import { Second } from "@/components/shaders/Second/Second";

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
      </section>
    </main>
  );
}
