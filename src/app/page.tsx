import { First } from "@/components/First/First";
import { Second } from "@/components/Second/Second";
export default function Home() {
  return (
    <main className="w-full max-w-screen-2xl ml-auto mr-auto">
      <section className="w-full h-full mt-10 grid grid-cols-[repeat(auto-fill,160px)] gap-2">
        <First />
        <Second />
      </section>
    </main>
  );
}
