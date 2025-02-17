"use client"
import MenuBar from '@/app/Components/MenuBar'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const page = () => {

    const fonts: string[] = ["alexBrush", "anybody", "bagnardSans", "brolimo", "cabinetGrotesk", "casta", "cinzel", "droidSans", "clashDisplay", "excon", "highrise", "fira", "inconsolata", "inter", "leagueScript",
        "leagueMono", "leagueSpartan", "lemonMilk", "lindelHill", "majorMono", "manrope", "melodrama", "montserrat", "leMurmure", "muscularStrength", "openSans", "orbitron", "outward", "Pencerio", "Prociono", "Pilowlava",
        "ptMono", "raleway", "ranade", "redHat", "rokkitt", "satoshi", "skyscapers", "soria", "vercetti", "wangi", "workSans", "yatra"]


    const [bgColor, setBgColor] = useState("");
    const [font, setFont] = useState("")
    const [primary, setPrimarycolor] = useState("")
    const [secondary, setSecondarycolor] = useState("")
    const [textColor, setTextColor] = useState("");


    const [isOpen, setIsopen] = useState(true);

    bgColor.trim();

    return (
        <main style={{ backgroundColor: bgColor }} className={` px-3 sm:px-16 py-3 flex flex-col gap-5 max-w-screen min-h-screen overflow-x-hidden`}>
            <MenuBar states={{ font, primary, secondary, textColor, bgColor, setBgColor, setFont, setPrimarycolor, setSecondarycolor, setTextColor }} fonts={fonts} />




            <div className="nav border-b-[0.5px] border-slate-600 w-full h-16 flex items-center justify-between sm:h-24">
                <h1 style={{ color: primary }} className={`font-${font} sm:text-3xl  font-semibold`}>JohnDoe</h1>

                <div className=' sm:p-6 flex gap-2 sm:gap-7'>
                    <span style={{ color: primary }} className={`font-${font} sm:text-xl  font-semibold`}>Projects</span><span style={{ color: primary }} className={`font-${font} sm:text-xl  font-semibold`}>Github</span><span style={{ color: primary }} className={`font-${font} sm:text-xl  font-semibold`}>LinkedIn</span>
                </div>
            </div>

            <div className=" flex items-center w-full h-16  ">
                <h3 style={{ color: secondary }} className={`sm:text-lg  font-medium font-${font}`}>Oh, Hello there!</h3>
            </div>

            <section className="hero mt-10 w-full flex sm:items-center lg:w-[70%] sm:h-[70vh]">
                <h1 style={{ color: secondary }} className={`text-xl text-wrap sm:text-5xl lg:text-[9vh] leading-tight tracking-wide font-${font} mt-10  font-semibold text-start`} >I'm John, a product designer specialized in creating crisp and catchy
                    <span style={{ color: primary }} > branding,user experience,interactive experience</span></h1>
            </section>


            <section className="projectCards w-full h-screen flex flex-col gap-10  mt-10 sm:mt-16 ">
                <div style={{ color: secondary }} className='w-full px-5 py-2 flex justify-between gap-10 items-end  h-1/3 z-10 object-center rounded-lg  bg-[url(https://framerusercontent.com/images/3osIoWtoZzy4Lfne5C4HBdhH4MU.jpg)] bg-cover bg-center '>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 sm:size-12 font-bold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </div>

                    <div className='flex gap-5  h-full w-full items-end  justify-end'>
                        <h2 style={{ color: secondary }} className={`sm:text-4xl font-${font} font-semibold tracking-wide`}>Carbon</h2>
                    </div>
                </div>
                <div style={{ color: secondary }} className='w-full px-5 py-2 flex justify-between gap-10 items-end  h-1/3 z-20 rounded-lg bg-[url(https://framerusercontent.com/images/sOmAtFZfeJX3fzu17q5R54aeQ.jpg)] bg-center bg-cover'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 sm:size-12 font-bold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />https://framerusercontent.com/images/sOmAtFZfeJX3fzu17q5R54aeQ.jpg
                        </svg>
                    </div>
                    <div className='flex gap-5  h-full w-full items-end  justify-end'>
                        <h2 style={{ color: secondary }} className={`sm:text-4xl font-${font} font-semibold tracking-wide`}>AllSpark</h2>
                    </div>
                </div>
                <div style={{ color: secondary }} className='w-full px-5 py-2 flex justify-between gap-10 items-end h-1/3 z-30 rounded-lg bg-[url(https://framerusercontent.com/images/FGufOF8lZnnUNSMkIo9n9RXps.png?scale-down-to=2048)] bg-cover bg-center text-white '>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6  sm:size-12 font-bold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </div>
                    <div className='flex gap-5  h-full w-full items-end  justify-end'>
                        <h2 style={{ color: secondary }} className={`sm:text-4xl font-${font} font-semibold tracking-wide`}>Lumenci</h2>
                    </div>
                </div>
            </section>

            <section className="about  w-full h-[80vh] mt-20   gap-5 flex flex-col sm:flex sm:flex-row justify-center sm:justify-between">
                <div className='sm:w-[50%]  flex flex-col  justify-end   p-3'>
                    <span style={{ color: secondary }} className={`text-lg font-${font} border-b-[0.5px] border-slate-600 `}>About </span>
                    <h2 style={{ color: secondary }} className={`text-start font-semibold font-${font} text-sm sm:text-xl md:text-2xl tracking-wide lg:text-4xl `}>
                        <br />
                        Based in London/UK, 9+ years of experience across Product Design disciplines(UI, UX and Branding). A passionate designer and I love what I do, and I strongly believe in;
                        <span style={{ color: primary }}>  "The less it is the cooler is your interface."</span>
                    </h2>
                </div>
                <div className='sm:w-[50%] p-3 flex items-center justify-center '>
                    <img className='object-cover rounded-md object-center w-full h-full grayscale' src='https://img.freepik.com/free-photo/young-man-enjoying-sea-landscape_1163-3326.jpg?ga=GA1.1.1975507260.1738923135&semt=ais_hybrid' alt="Description of image" />
                </div>
            </section>



            <section style={{
                backgroundColor: bgColor,
                borderColor: primary
            }} className="footer w-full h-[20vh]  border-[0.5px]  rounded-lg mt-10 px-5 py-2 mb-64  md:mb-48">
                <h2 style={{ color: primary }} className={`text-3xl font-${font} font-semibold `}>JohnDoe.com</h2>
                <h2 style={{ color: secondary }} className={`text-xl font-${font} font-semibold `}>Made with love!</h2>
            </section>
        </main>

    )
}

export default page