"use client"
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
const Fonts = () => {
  // useGSAP(()=>{
  //   gsap.from('.fonts h1',{
  //     x:5300,
  //     repeat:-1,
  //     duration:5,
  //     transition:'ease-in-out'
  //     // ease:'power1.inOut'
  //   })
  //   gsap.to('.fonts h1',{
  //     x:-5300,
  //     repeat:-1,
  //     duration:5,
  //     transition:'ease'
  //     // ease:'power1.inOut  '
  //   })
  // })
  return (
    <div className='fonts w-full h-[40vh] col-span-4 flex justify-center items-center text-center gap-10 p-5 bg-indigo-500 mt-10  text-black overflow-hidden'>
      <h1 className='text-6xl font-alexBrush'>Alex Brush</h1>
      <h1 className='text-6xl font-anybody'>Anybody</h1>
      <h1 className='text-6xl font-bagnardSans'>BagnardSans</h1>
      <h1 className='text-6xl font-brolimo'>Brolimo</h1>
      <h1 className='text-6xl font-cabinetGrotesk'>CabinetGrotesk</h1>
      <h1 className='text-6xl font-casta'>Casta</h1>
      <h1 className='text-6xl font-cinzel'>Cinzel</h1>
      <h1 className='text-6xl font-droidSans'>Droid</h1>
      <h1 className='text-6xl font-clashDisplay'>ClashDisplay</h1>
      <h1 className='text-6xl font-excon'>Excon</h1>
      <h1 className='text-6xl font-highrise'>Highrise</h1>
      <h1 className='text-6xl font-fira'>Fira</h1>
      <h1 className='text-6xl font-inconsolata'>Inconsolata</h1>
      <h1 className='text-6xl font-inter'>Inter</h1>
      <h1 className='text-6xl font-leagueScript'>LeagueScript</h1>
      <h1 className='text-6xl font-leagueMono'>LeagueMono</h1>
      <h1 className='text-6xl font-leagueSpartan'>LeagueSpartan</h1>
      <h1 className='text-6xl font-lemonMilk'>LemonMilk</h1>
      <h1 className='text-6xl font-lindenHill'>LindenHill</h1>
      <h1 className='text-6xl font-majorMono'>MajorMono</h1>
      <h1 className='text-6xl font-manrope'>Manrope</h1>
      <h1 className='text-6xl font-melodrama'>Melodrama</h1>
      <h1 className='text-6xl font-montserrat'>Montserrat</h1>
      <h1 className='text-6xl font-leMurmure'>LeMurmure</h1>
      <h1 className='text-6xl font-muscularStrength'>MuscularStrength</h1>
      <h1 className='text-6xl font-openSans'>OpenSans</h1>
      <h1 className='text-6xl font-orbitron'>Orbitron</h1>
      <h1 className='text-6xl font-outward'>Outward</h1>
      <h1 className='text-6xl font-pencerio'>Pencerio</h1>
      <h1 className='text-6xl font-prociono'>Prociono</h1>
      <h1 className='text-6xl font-pilowlava'>Pilowlava</h1>
      <h1 className='text-6xl font-ptMono'>PtMono</h1>
      <h1 className='text-6xl font-raleway'>Raleway</h1>
      <h1 className='text-6xl font-ranade'>Ranade</h1>
      <h1 className='text-6xl font-redHat'>Redhat</h1>
      <h1 className='text-6xl font-rokkitt'>Rokkitt</h1>
      <h1 className='text-6xl font-satoshi'>Satoshi</h1>
      <h1 className='text-6xl font-skyscapers'>SkyScapers</h1>
      <h1 className='text-6xl font-soria'>Soria</h1>
      <h1 className='text-6xl font-vercetti'>Vercetti</h1>
      <h1 className='text-6xl font-wangi'>Wangi</h1>
      <h1 className='text-6xl font-workSans'>Worksans</h1>
      <h1 className='text-6xl font-yatra'>Yatra</h1>
      
    </div>
  )
}

export default Fonts