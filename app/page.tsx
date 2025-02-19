"use client"
import Fonts from "./Components/Fonts";
import Hero from "./Components/Hero";
import first from "../public/Images/firstMockup.png";
import second from "../public/Images/Second.png";
import Image from 'next/image';
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const handleNavigate = () => {
    router.push('/one'); // Replace with your target page path
  };

  return (


    <main className="  flex flex-col   gap-5 w-full min-h-screen overflow-y-scroll overflow-x-hidden bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] ">


      <div className="nav   h-[10vh] flex justify-start items-center mt-5 px-10">
        <h1 className="font-manrope font-bold text-white text-lg md:text-xl 2xl:text-3xl ">StyleCraft</h1>
      </div>


      <div className="hero  w-full h-[40vh] flex items-center lg:h-[45vh] px-10">
        <h1 className="text-wrap font-manrope font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl text-slate-50">Style and craft your website with right font and color combination. <br />
          <span className="text-slate-200/80"> Choose the correct combination on different types of sample websites!</span>
        </h1>
      </div>


      <div className="images relative flex flex-col gap-10 justify-evenly items-center  w-full  scale-95">
        <div className="w-full relative">
          <h2 onClick={() => { router.push('/one') }} className="text-black font-manrope font-semibold border-2 border-neutral-600 absolute bg-slate-50 px-10 rounded-full  py-3 right-5 sm:right-10 bottom-10 hover:cursor-pointer">Try this!</h2>
          <Image className="object-cover h-[50vh] lg:h-[70vh] rounded-lg w-full " src={first} alt="first" />
        </div>
        <div className="w-full relative">
          <h2 onClick={() => { router.push('/two') }} className="text-white font-manrope font-semibold border-2 border-neutral-200 absolute bg-neutral-900 px-10 rounded-full  py-3 right-5 sm:right-10 bottom-10 hover:cursor-pointer">Try this!</h2>
          <Image className="object-cover h-[50vh] lg:h-[70vh] rounded-lg w-full " src={second} alt="second" />
        </div>
      </div>


      <div className="bg-green-300 w-full h-[8vh] flex mt-5 justify-center items-center gap-5 font-manrope font-semibold">
        <span className="p-2">More sample websites coming soon!!</span>
      </div>


      <div className="bg-neutral-900/20 border-t-[1px] border-neutral-500 text-white text-center w-full h-[10vh] mt-16 p-3 flex justify-center gap-1 items-center">
        <h2 className="font-manrope font-semibold">StyleCraft, crafted by </h2>
        <a className="font-manrope font-semibold underline" target="_blank" href="https://github.com/sanemishinazugawa11"> Bhuvan</a>
      </div>
    </main>

  );
}
