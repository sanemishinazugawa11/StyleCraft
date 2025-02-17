import Fonts from "./Components/Fonts";
import Hero from "./Components/Hero";


export default function Home() {
  return (
    <main className="bg-black p-5 overflow-x-hidden grid grid-cols-2 lg:grid-cols-4 max-w-screen  min-h-screen">
      <Hero />

      <Fonts />

    </main>
  );
}
