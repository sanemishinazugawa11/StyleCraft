"use client"
import MenuBar from '@/app/Components/MenuBar'
import Image from 'next/image'
import React, { useState } from 'react'

function Page() {
    const [bgColor, setBgColor] = useState("");
    const [font, setFont] = useState("")
    const [primary, setPrimarycolor] = useState("")
    const [secondary, setSecondarycolor] = useState("")
    const [textColor, setTextColor] = useState("");

    const [option, setOption] = useState("CSS")
    const [isOpen, setIsopen] = useState(false)

    const fonts: string[] = ["alexBrush", "anybody", "bagnardSans", "brolimo", "cabinetGrotesk", "casta", "cinzel", "droidSans", "clashDisplay", "excon", "highrise", "fira", "inconsolata", "inter", "leagueScript",
        "leagueMono", "leagueSpartan", "lemonMilk", "lindelHill", "majorMono", "manrope", "melodrama", "montserrat", "leMurmure", "muscularStrength", "openSans", "orbitron", "outward", "Pencerio", "Prociono", "Pilowlava",
        "ptMono", "raleway", "ranade", "redHat", "rokkitt", "satoshi", "skyscapers", "soria", "vercetti", "wangi", "workSans", "yatra"]

    bgColor.trim();

    return (
        <main style={{ backgroundColor: bgColor }} className={` px-3 sm:px-16 py-3 flex flex-col gap-5 max-w-screen min-h-screen overflow-x-hidden`}>
            <MenuBar states={{ font, primary, secondary, textColor, bgColor, setBgColor, setFont, setPrimarycolor, setSecondarycolor, setTextColor }} fonts={fonts} />
            {
                isOpen &&
                <section className='absolute bg-neutral-700 backdrop-blur-md w-[90vw] py-1 sm:w-[80vw] lg:w-[50vw] h-[50vh]  left-1/2 -translate-x-[50%] z-50 top-20 flex flex-col gap-2 items-center rounded-lg'>
                    <div className=' flex gap-2 p-2 justify-end items-center w-full h-[10%]'>
                        <svg onClick={() => { setIsopen(!isOpen) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6   bg-neutral-500 rounded-full text-white p-1 hover:cursor-pointer hover:bg-slate-400 hover:transition-all hover:duration-200 hover:ease-in-out">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    </div>
                    <div className=' flex justify-evenly items-center  w-[80%]  h-[20%]'>
                        <div onClick={() => { setOption("CSS") }} className='bg-neutral-800 text-slate-50 font-semibold font-redHat tracking-wide rounded-md w-[45%] text-center     hover:cursor-pointer flex justify-center items-center h-full gap-3'><h1 className='  w-full  text-center'>CSS</h1></div>
                        <div onClick={() => { setOption("Tailwind") }} className='bg-neutral-800 text-slate-50 font-semibold font-redHat tracking-wide rounded-md w-[45%] text-center hover:cursor-pointer flex justify-center items-center h-full gap-3'><h2 className=' w-full  text-center'>Tailwind CSS</h2></div>
                    </div>
                    {option === "CSS" ?
                        <div className='bg-neutral-400/70 text-sm sm:text-sm lg:text-lg mt-2 scale-95 font-redHat font-semibold text-black rounded-md select-text w-full h-full px-4 py-6 flex flex-col gap-2 items-start justify-evenly'>
                            <h3>--background : {bgColor}</h3>
                            <h3>--font: <span className='capitalize'>{font}</span> </h3>
                            <h3>--primary:{primary}</h3>
                            <h3>--secondary:{secondary}</h3>
                        </div> :
                        option === "Tailwind" &&
                        <div className='bg-neutral-400/70 text-sm sm:text-sm lg:text-base text-black mt-2 rounded-md w-full h-[90%] scale-95 font-semibold font-redHat tracking-wide p-3 flex select-text flex-col  gap-2 items-start justify-evenly'>
                            <span className=' w-full py-2 border-b-[1px]'>Paste it in your tailwind.config.ts/js file</span>
                            <h3>colors: &#123;</h3>
                            <h3>&nbsp;&nbsp;&nbsp;&nbsp; &apos; background &apos; : &apos;{bgColor}&apos;,</h3>
                            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&apos; font &apos; : <span className='capitalize'>&apos;{font}&apos;</span>,</h3>
                            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&apos; primary &apos; : &apos;{primary}&apos;,</h3>
                            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&apos; secondary &apos; : &apos;{secondary}&apos;,</h3>
                            <h3>&#125;</h3>
                        </div>
                    }

                </section>
            }




            <div className="nav border-b-[0.5px] border-slate-600 w-full h-16 flex items-center justify-between sm:h-24">
                <h1 style={{ color: primary,fontFamily:font }} className={`font-${font} sm:text-3xl  font-semibold`}>JohnDoe</h1>

                <div className=' sm:p-6 flex gap-2 sm:gap-7'>
                    <span style={{ color: primary,fontFamily : font }} className={`font-${font} sm:text-xl  font-semibold`}>Projects</span><span style={{ color: primary,fontFamily:font }} className={`font-${font} sm:text-xl  font-semibold`}>Github</span><span onClick={() => { setIsopen(!isOpen) }} style={{ color: primary,fontFamily:font }} className={`font-${font} sm:text-xl hover:cursor-pointer   font-semibold`}>Export</span>
                </div>
            </div>

            <div className=" flex items-center w-full h-16  ">
                <h3 style={{ color: secondary,fontFamily:font }} className={`sm:text-lg  font-medium font-${font}`}>Oh, Hello there!</h3>
            </div>

            <section className="hero mt-10 w-full flex sm:items-center lg:w-[70%] sm:h-[70vh]">
                <h1 style={{ color: secondary,fontFamily : font }} className={`text-xl text-wrap sm:text-5xl lg:text-[9vh] leading-tight tracking-wide font-${font} mt-10  font-semibold text-start`} >I&apos;m John, a product designer specialized in creating crisp and catchy
                    <span style={{ color: primary,fontFamily :font }} > branding,user experience,interactive experience</span></h1>
            </section>


            <section className="projectCards w-full h-screen flex flex-col gap-10  mt-10 sm:mt-16 ">
                <div style={{ color: secondary }} className='w-full px-5 py-2 flex justify-between gap-10 items-end  h-1/3 z-10 object-center rounded-lg  bg-[url(https://framerusercontent.com/images/3osIoWtoZzy4Lfne5C4HBdhH4MU.jpg)] bg-cover bg-center '>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 sm:size-12 font-bold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </div>

                    <div className='flex gap-5  h-full w-full items-end  justify-end'>
                        <h2 style={{ color: secondary,fontFamily:font }} className={`sm:text-4xl font-${font} font-semibold tracking-wide`}>Carbon</h2>
                    </div>
                </div>
                <div style={{ color: secondary }} className='w-full px-5 py-2 flex justify-between gap-10 items-end  h-1/3 z-20 rounded-lg bg-[url(https://framerusercontent.com/images/sOmAtFZfeJX3fzu17q5R54aeQ.jpg)] bg-center bg-cover'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 sm:size-12 font-bold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </div>
                    <div className='flex gap-5  h-full w-full items-end  justify-end'>
                        <h2 style={{ color: secondary,fontFamily:font }} className={`sm:text-4xl font-${font} font-semibold tracking-wide`}>AllSpark</h2>
                    </div>
                </div>
                <div style={{ color: secondary }} className='w-full px-5 py-2 flex justify-between gap-10 items-end h-1/3 z-30 rounded-lg bg-[url(https://framerusercontent.com/images/FGufOF8lZnnUNSMkIo9n9RXps.png?scale-down-to=2048)] bg-cover bg-center text-white '>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6  sm:size-12 font-bold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </div>
                    <div className='flex gap-5  h-full w-full items-end  justify-end'>
                        <h2 style={{ color: secondary,fontFamily:font }} className={`sm:text-4xl font-${font} font-semibold tracking-wide`}>Lumenci</h2>
                    </div>
                </div>
            </section>

            <section className="about  w-full h-[80vh] mt-20   gap-5 flex flex-col sm:flex sm:flex-row justify-center sm:justify-between">
                <div className='sm:w-[50%]  flex flex-col  justify-end   p-3'>
                    <span style={{ color: secondary,fontFamily:font }} className={`text-lg font-${font} border-b-[0.5px] border-slate-600 `}>About </span>
                    <h2 style={{ color: secondary  ,fontFamily:font }} className={`text-start font-semibold font-${font} text-sm sm:text-xl md:text-2xl tracking-wide lg:text-4xl `}>
                        <br />
                        Based in London/UK, 9+ years of experience across Product Design disciplines(UI, UX and Branding). A passionate designer and I love what I do, and I strongly believe in;
                        <span style={{ color: primary ,fontFamily:font}}>  &quot;The less it is the cooler is your interface.&quot;</span>
                    </h2>
                </div>
                <div className='sm:w-[50%] p-3 flex items-center justify-center '>
                    <Image className='object-cover rounded-md object-center w-full h-full grayscale' src='https://img.freepik.com/free-photo/young-man-enjoying-sea-landscape_1163-3326.jpg?ga=GA1.1.1975507260.1738923135&semt=ais_hybrid' alt="Description of image" width={500} height={500} />
                </div>
            </section>



            <section style={{
                backgroundColor: bgColor,
                borderColor: primary
            }} className="footer w-full h-[20vh]  border-[0.5px]  rounded-lg mt-10 px-5 py-2 mb-64  md:mb-48">
                <h2 style={{ color: primary  ,fontFamily:font   }} className={`text-3xl font-${font} font-semibold `}>JohnDoe.com</h2>
                <h2 style={{ color: secondary,fontFamily:font }} className={`text-xl font-${font} font-semibold `}>Made with love!</h2>
            </section>
        </main>

    )
}

export default Page