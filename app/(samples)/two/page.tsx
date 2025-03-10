"use client"
import Image from 'next/image';
import React, { useState } from 'react'

function Page() {
    const fonts: string[] = ["alexBrush", "anybody", "bagnardSans", "brolimo", "cabinetGrotesk", "casta", "cinzel", "droidSans", "clashDisplay", "excon", "highrise", "fira", "inconsolata", "inter", "leagueScript",
        "leagueMono", "leagueSpartan", "lemonMilk", "lindelHill", "majorMono", "manrope", "melodrama", "montserrat", "leMurmure", "muscularStrength", "openSans", "orbitron", "outward", "Pencerio", "Prociono", "Pilowlava",
        "ptMono", "raleway", "ranade", "redHat", "rokkitt", "satoshi", "skyscapers", "soria", "vercetti", "wangi", "workSans", "yatra"]


    const [bgColor, setBgColor] = useState("");
    const [font, setFont] = useState("")
    const [primary, setPrimarycolor] = useState("")
    const [secondary, setSecondarycolor] = useState("")
    const [textColor, setTextColor] = useState("");
    const [option, setOption] = useState("CSS")
    const [isOpen, setIsopen] = useState(false)


    bgColor.trim();

    return (

        <main style={{ backgroundColor: bgColor }} className=' max-w-screen scroll-smooth min-h-screen '>

            {
                isOpen &&
                <section className='absolute bg-neutral-700 backdrop-blur-md w-[90vw] py-1 sm:w-[80vw] lg:w-[50vw] h-[65vh]  left-1/2 -translate-x-[50%] z-50 top-20 flex flex-col gap-2 items-center rounded-lg'>
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
                            <h3 className='w-full border-b-[1px] border-slate-50'>Download the font from <a target='_blank' className='underline' href="https://github.com/sanemishinazugawa11/fonts">Here</a> </h3>
                            <h3>--background : {bgColor}</h3>
                            <h3>--primary:{primary}</h3>
                            <h3>--secondary:{secondary}</h3>
                            <h3>--textcolor:{textColor}</h3>

                        </div> :
                        option === "Tailwind" &&
                        <div className='bg-neutral-400/70 text-sm sm:text-sm lg:text-base text-black mt-2 rounded-md w-full h-[90%] scale-95 font-semibold font-redHat tracking-wide p-3 flex select-text flex-col  gap-2 items-start justify-evenly'>
                            <span className=' w-full py-2 border-b-[1px]'>Paste it in your tailwind.config.ts/js file and download the font from <a className='underline' target='_blank' href="https://github.com/sanemishinazugawa11/fonts">Here</a> </span>
                            <h3>colors: &#123;</h3>
                            <h3>&nbsp;&nbsp;&nbsp;&nbsp; &apos; background &apos; : &apos;{bgColor}&apos;,</h3>
                            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&apos; primary &apos; : &apos;{primary}&apos;,</h3>
                            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&apos; secondary &apos; : &apos;{secondary}&apos;,</h3>
                            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&apos; textcolor &apos; : &apos;{textColor}&apos;,</h3>

                            <h3>&#125;</h3>
                        </div>
                    }

                </section>
            }
            <section className="menubar grid grid-cols-5   md:justify-center md:items-center gap-1  md:gap-3 md:flex md:flex-row fixed z-50   bottom-5 left-3 sm:left-5 md:left-7 lg:left-10 py-2 px-3 md:px-6 md:py-3 rounded-lg backdrop-blur-md w-[95%] h-[35vh] md:h-[20vh] lg:h-[18vh] text-slate-100 bg-neutral-600/80">

                <div className='col-span-2 md:w-full h-full flex flex-col gap-1 justify-center px-2 py-2  bg-black/60 rounded-md backdrop-blur-xl  ' >
                    <h2 className='font-redHat text-lg md:text-xl'>Background</h2>
                    <input onChange={((e) => { setBgColor(e.target.value) })} className='w-full bg-transparent h-8' type="color" name="bgColor" id="bg" />
                </div>
                <div className='col-span-3  md:w-full h-full px-2 py-2 flex flex-col justify-center gap-1   bg-black/60 rounded-md backdrop-blur-xl ' >
                    <h2 className='font-redHat text-lg md:text-xl'>Font</h2>
                    <select onChange={(e) => {
                        setFont(e.target.value);
                        console.log(font)
                    }} name="" id="fonts" className='bg-neutral-800  border-[0.5px] border-neutral-500 w-full font-redHat px-2 py-2 rounded-sm' >
                        {fonts.map((fonts, index) => {
                            return <option className='bg-neutral-600  font-redHat tracking-wide gap-2' key={index} value={fonts}>{fonts}</option>
                        })}
                    </select>
                </div>
                <div className='col-span-2 md:w-full h-full flex flex-col justify-center px-2 py-2    bg-black/60 rounded-md backdrop-blur-xl  ' >
                    <h2 className='font-redHat text-lg md:text-xl'>Primary </h2>
                    <input onChange={(e) => {
                        setPrimarycolor(e.target.value);
                    }} className='w-full bg-transparent h-8' type="color" name="PrimaryColor" id="bg" />
                </div>
                <div className='col-span-3 md:w-full h-full flex flex-col justify-center px-2 py-2    bg-black/60 rounded-md backdrop-blur-xl  ' >
                    <h2 className='font-redHat text-lg md:text-xl'>Secondary </h2>
                    <input onChange={((e) => { setSecondarycolor(e.target.value) })} className='w-full bg-transparent h-8' type="color" name="secondaryColor" id="bg" />
                </div>
                <div className='col-span-5 md:w-full h-full flex flex-col justify-center px-2 py-2    bg-black/60 rounded-md backdrop-blur-xl  ' >
                    <h2 className='font-redHat text-sm md:text-lg'>Text</h2>
                    <input onChange={((e) => { setTextColor(e.target.value) })} className='w-full bg-transparent h-8' type="color" name="textColor" id="bg" />
                </div>

            </section>



            <div style={{
                borderColor: primary,
            }} className="nav  w-full h-24 sm:h-32 flex justify-between border-b-[1px] items-center px-5">
                <h1 style={{ color: textColor, fontFamily: font }} className={`font-${font} text-xl sm:text-3xl font-semibold`}>StyleCraft</h1>
                <div className=' flex gap-2 justify-end w-full h-auto'>
                    <a href='https://github.com/sanemishinazugawa11/StyleCraft' target='_blank' style={{
                        color: textColor,
                        fontFamily: font

                    }} className={`font-${font}  text-black  text-sm sm:text-lg md:text-xl lg:text-xl font-semibold px-3 py-2 rounded-md`}>
                        Github
                    </a>

                    <button onClick={() => { setIsopen(!isOpen) }} style={{
                        color: textColor,
                        fontFamily: font
                    }} className={`font-${font}  text-black  text-sm sm:text-lg md:text-xl lg:text-xl font-semibold px-3 py-2 rounded-md`}>
                        Export colors
                    </button>
                </div>
            </div>


            <section className="center w-full h-screen flex flex-col px-2 md:flex md:flex-row justify-between mt-10">
                <div className='md:w-1/2  lg:h-auto py-2 flex flex-col gap-3 md:gap-5 justify-start md:justify-center px-3 '>
                    <h1 style={{ color: textColor, fontFamily: font }} className={`font-${font} text-3xl sm:text-4xl  lg:text-5xl mt-3 text-black font-extrabold text-start`}>Choose the right font and color combination for your website.</h1>
                    <h3 style={{ color: textColor, fontFamily: font }} className={`font-${font} text-2xl sm:text-3xl  lg:text-4xl  text-neutral-800 font-semibold text-start `}>Simple process for figuring right font and color combination.</h3>
                    <h4 style={{ color: textColor, fontFamily: font }} className={`font-${font} text-xl sm:text-2xl  lg:text-3xl  rounded-lg  text-neutral-800  font-semibold text-start`}>Try colors on highlevel layout design of a website.</h4>

                </div>
                <div className='md:w-1/2 bg-slate-300 rounded-md  scale-100 flex flex-col gap-1 mt-10 md:mt-0 justify-around h-full p-3 md:p-5'>
                    <div style={{ backgroundColor: bgColor, opacity: 10 }} className='w-full h-10 bg-slate-100 rounded-md md:h-20'></div>
                    <div style={{ backgroundColor: bgColor, opacity: 10 }} className='w-full h-1/4 md:h-1/3 bg-slate-100 rounded-md'></div>
                    <div className='w-full h-16 md:h-20  rounded-md p-1 flex justify-evenly gap-1'>
                        <div style={{ backgroundColor: primary }} className='w-1/3 h-full rounded-md bg-neutral-950'></div>
                        <div style={{ backgroundColor: primary }} className='w-1/3 h-full rounded-md bg-neutral-950'></div>
                        <div style={{ backgroundColor: primary }} className='w-1/3 h-full rounded-md bg-neutral-950'></div>
                    </div>
                    <div className=' w-full h-24 md:h-36 rounded-md gap-1 p-1 grid grid-cols-4'>
                        <div style={{ backgroundColor: secondary }} className='rounded-md bg-slate-100 col-span-2 md:col-span-3  h-full'></div>
                        <div style={{ backgroundColor: primary }} className='rounded-md bg-neutral-950 col-span-2 md:col-span-1 h-full'></div>
                        <div style={{ backgroundColor: primary }} className='rounded-md bg-neutral-950 col-span-1 md:col-span-1 h-full'></div>
                        <div style={{ backgroundColor: secondary }} className='rounded-md bg-slate-100 col-span-3 h-full'></div>
                    </div>
                    <div className=' w-full h-20 grid grid-rows-1 grid-cols-4 gap-1 p-1 rounded-md md:h-24'>
                        <div style={{ backgroundColor: secondary }} className='h-full col-span-1 bg-slate-100 rounded-md'></div>
                        <div style={{ backgroundColor: secondary }} className='h-full col-span-2 bg-slate-100 rounded-md'></div>
                        <div style={{ backgroundColor: secondary }} className='h-full col-span-1 bg-slate-100 rounded-md'></div>
                    </div>
                    <div style={{ backgroundColor: primary }} className='bg-neutral-950 w-full h-20 md:h-24 rounded-md'></div>
                </div>
            </section>
            <section className='w-full  h-full  p-2 mt-10  '>
                <div className='w-full h-[50vh] sm:h-[50vh] grid grid-cols-4 gap-2 p-3'>
                    <div className='relative overflow-hidden h-full col-span-4  md:col-span-2 rounded-lg  p-2 flex flex-col gap-2 justify-center items-center'>
                        <Image
                            src="https://plus.unsplash.com/premium_photo-1686464487058-db679d44aa89?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            width={1000}
                            height={1000}
                            alt="Premium Photo"
                            className='w-full h-full object-cover rounded-lg absolute -z-10'
                        />
                        <div style={{ backgroundColor: primary }} className='absolute w-full h-full bg-black/60 backdrop-blur-md'></div>
                        <h2 style={{ fontFamily: font, color: textColor }} className={`font-${font} text-lg md:text-xl z-10 text-white font-semibold text-center text-wrap lg:text-3xl`}>Why StyleCraft?</h2>
                        <h2 style={{ fontFamily: font, color: textColor }} className={`font-${font} text-sm md:text-lg z-10 text-white  text-center text-wrap lg:text-xl`}>Color pallets are good, but try those colors on a real website.</h2>
                    </div>
                    <div className='relative overflow-hidden h-full col-span-4 md:col-span-2 rounded-lg  px-3 flex flex-col gap-2 justify-center items-center'>
                        <Image
                            src="https://plus.unsplash.com/premium_photo-1686464487058-db679d44aa89?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            width={1000}
                            height={1000}
                            alt="Premium Photo"
                            className='w-full h-full object-cover rounded-lg absolute -z-10'
                        />
                        <div style={{ backgroundColor: primary }} className='absolute w-full h-full bg-black/60 backdrop-blur-md'></div>
                        <h2 style={{ fontFamily: font, color: textColor }} className={`font-${font} text-lg md:text-xl z-10 text-white font-semibold text-center text-wrap lg:text-3xl`}>Its simple and realistic!</h2>
                        <h2 style={{ fontFamily: font, color: textColor }} className={`font-${font} text-sm md:text-lg z-10 text-white  text-center text-wrap lg:text-xl`}>Color Palettes make it hard to pick. This tool distributes the colors on a real website,Push a few buttons, and there you have it! Your very own branding colors, ready to export.</h2>

                    </div>
                </div>
            </section>
            <section className='w-full  h-auto mt-10  '>
                <div className='w-full h-[50vh] sm:h-[45vh] p-2 grid grid-cols-4 sm:grid-cols-4 gap-2 rounded-md '>
                    <div style={{ backgroundColor: primary }} className='col-span-4  md:col-span-2 bg-neutral-950 flex justify-center items-center rounded-md h-full'>
                        <h2 style={{ fontFamily: font, color:textColor }} className={`text-white text-center text-sm sm:text-lg font-${font} font-semibold md:text-xl xl:text-2xl`}>More features coming soon!!</h2>
                    </div>
                    <div style={{ backgroundColor: secondary }} className='col-span-4  flex justify-center gap-1 items-center md:col-span-2 bg-slate-200 rounded-md  h-full'>
                        <a style={{ fontFamily: font, color:textColor }} className={`font-${font} text-center font-semibold   text-sm sm:text-lg lg:text-xl`} href="https://coolors.co/" target='_blank'>Find colour pallets    </a>
                        <svg style={{color : textColor}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 sm:size-4 md:size-5 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </div>
                    <div className='col-span-4 m:col-span-1 md:col-span-1  h-full '>
                        <div style={{ backgroundColor: secondary }} className='w-full h-full bg-slate-200 rounded-md flex p-1 justify-center items-center'>
                            <h1 style={{ fontFamily: font, color:textColor }} className={`font-${font} font-bold text-center text-sm  lg:text-xl`}>100% free forever, no login required!
                            </h1>
                        </div>
                    </div>
                    <div style={{ backgroundColor: primary }} className='col-span-4 md:col-span-3 bg-neutral-950  rounded-md h-full'>

                    </div>
                </div>

            </section>

            <section className="footer w-full p-2 h-[25vh] sm:h-[20vh]  rounded-md mt-10  ">
                <div style={{ backgroundColor: primary }} className='rounded-md bg-slate-200 w-full h-full  p-2 flex flex-col justify-evenly items-center'>
                    <div className='w-full h-auto flex flex-col sm:flex sm:flex-row justify-center items-center gap-2 mb-2 sm:mb-0 sm:gap-5'>
                        <input style={{
                            borderColor: 'black',
                            backgroundColor: secondary,
                            opacity: 0.8
                        }} className='text-lg px-6 sm:px-3 w-[90%] sm:w-[60%] lg:w-[45%]  rounded-md py-2 border-2 md:text-xl' type="text" />
                        <button style={{ backgroundColor: secondary, color: textColor, fontFamily: font }} className={`bg-neutral-950 text-white font-${font} font-semibold text-center text-sm md:text-lg px-3 py-2  md:px-5 md:py-3 rounded-md`}>Subscribe to news letter</button>
                    </div>
                    <div className='w-full h-auto flex gap-1  justify-center items-center '>
                        <h2 style={{ color: textColor, fontFamily: font }} className={`font-${font}  text-xl md:text-2xl font-semibold`}>StyleCraft ,</h2>
                        <h3 style={{ color: textColor, fontFamily: font }} className={`font-${font} text-xl md:text-2xl font-semibold`}>Made by <a className='underline' target='_blank' href="https://github.com/sanemishinazugawa11/StyleCraft">Bhuvan</a></h3>
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: bgColor }} className='w-full h-[40vh] lg:h-[20vh] '></section>
        </main>

    )
}

export default Page


