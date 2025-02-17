import React from 'react'

function Hero() {
    return (
        <section className=" w-full h-screen p-5 col-span-4 flex flex-col leading-3 text-wrap justify-center items-center">
            <h1 className="font-clashDisplay text-2xl scale-90 xl:scale-100 sm:font-extrabold sm:text-5xl text-center text-indigo-500">Style and craft your website by taking inspiration from real world projects.</h1>
            <h1 className="font-clashDisplay text-2xl sm:text-5xl scale-90 sm:font-semibold xl:scale-100 text-center text-indigo-300">Visualize your fonts and color combinations on a real site,</h1>
            <h2 className="font-clashDisplay text-xl sm:text-3xl scale-90 sm:font-medium xl:scale-100 text-center text-indigo-100">We have some sample websites where you can try and visualize font and color combination.</h2>
        </section>
    )
}

export default Hero