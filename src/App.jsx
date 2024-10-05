import React, { useRef, useState } from 'react'
import Navbar from './components/Navbar'
import phool from './assets/phool.png'
import LocomotiveScroll from 'locomotive-scroll';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import CenterText from './components/CenterText';
import ParagraphDiv from './components/ParagraphDiv';
import BottomDiv from './components/BottomDiv';



const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  const imageRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  const mainRef = useRef(null)

  

  

  useGSAP(() =>{

    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:"mainRef.current",
        start:"top 0",
        end:"top -200%",
        scrub:1
      }
    })


    tl.to(imageRef.current, {
      transform:"translateY(-20%)",
      duration:1,
     
    })

    tl.to(imageRef.current, {
      transform:"translateY(-20%) scale(0.8)",
      duration:1,

    })

  })

  return (
    <div ref={mainRef} className="bg-[salmon]  min-h-screen text-white w-full">
      <Navbar />
      <div id="center" className="relative pb-[10vw] px-[12vw] pt-[16vw]">

        <CenterText/>
        <ParagraphDiv/>
        <BottomDiv/>
      
     
     
      
      <img ref={imageRef} src={phool} className="fixed left-7 top-0 h-[78vw]" alt="" />

      </div>
      
    </div>
  )
}

export default App