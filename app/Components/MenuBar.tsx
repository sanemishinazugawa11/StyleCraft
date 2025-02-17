"use client"

import React, { useEffect, useState } from 'react'

interface menuprops {
    fonts: string[],
    states: {
        font: string;
        primary: string;
        secondary: string;
        textColor: string;
        bgColor: string;
        setBgColor: (color: string) => void;
        setFont: (font: string) => void;
        setPrimarycolor: (color: string) => void;
        setSecondarycolor: (color: string) => void;
        setTextColor: (color: string) => void;
    }
}



const MenuBar: React.FC<menuprops> = ({states, fonts }) => {

    


   


    return (
        <section className="menubar grid grid-cols-5  md:justify-center md:items-center gap-1  md:gap-3 md:flex md:flex-row fixed z-50   bottom-10 left-5 lg:left-10 py-2 px-3 md:px-6 md:py-3 rounded-lg backdrop-blur-md w-[95%] h-[25vh] md:h-[15vh] text-slate-100 bg-neutral-600/80">

            <div className='col-span-2 md:w-full h-full flex flex-col gap-1 justify-center px-2 py-2  bg-black/60 rounded-md backdrop-blur-xl  ' >
                <h2 className='font-redHat text-lg md:text-xl'>Background</h2>
                <input onChange={((e)=>{states.setBgColor(e.target.value)})} className='w-full bg-transparent h-8' type="color" name="bgColor" id="bg" />
            </div>
            <div className='col-span-3  md:w-full h-full px-2 py-2 flex flex-col justify-center gap-1   bg-black/60 rounded-md backdrop-blur-xl ' >
                <h2 className='font-redHat text-lg md:text-xl'>Font</h2>
                <select onChange={(e)=>{states.setFont(e.target.value)
                    console.log(states.font)
                }} name="" id="fonts" className='bg-neutral-800  border-[0.5px] border-neutral-500 w-full font-redHat px-2 py-2 rounded-sm' >
                    {fonts.map((fonts, index) => {
                        return <option className='bg-neutral-600  font-redHat tracking-wide gap-2' key={index} value={fonts}>{fonts}</option>
                    })}
                </select>
            </div>
            <div className='col-span-2 md:w-full h-full flex flex-col justify-center px-2 py-2    bg-black/60 rounded-md backdrop-blur-xl  ' >
                <h2 className='font-redHat text-lg md:text-xl'>Primary heading</h2>
                    <input  onChange={(e)=>{
                        states.setPrimarycolor(e.target.value);
                    }} className='w-full bg-transparent h-8' type="color" name="PrimaryColor" id="bg" />
            </div>
            <div className='col-span-3 md:w-full h-full flex flex-col justify-center px-2 py-2    bg-black/60 rounded-md backdrop-blur-xl  ' >
                <h2 className='font-redHat text-lg md:text-xl'>Secondary heading</h2>
                <input onChange={((e)=>{states.setSecondarycolor(e.target.value)})} className='w-full bg-transparent h-8' type="color" name="secondaryColor" id="bg" />
            </div>
            {/* <div className='col-span-1 md:w-full h-full flex flex-col justify-center px-2 py-2    bg-black/60 rounded-md backdrop-blur-xl  ' >
                <h2 className='font-redHat text-sm md:text-lg'>Text</h2>
                <input onChange={((e)=>{states.setTextColor(e.target.value)})} className='w-full bg-transparent h-8' type="color" name="textColor" id="bg" />
            </div> */}






        </section>
    )
}

export default MenuBar ;