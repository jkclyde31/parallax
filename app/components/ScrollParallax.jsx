'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
]

export default function ScrollParallax() {
  
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect( () => {
    const lenis = new Lenis()

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <>
    <main className=''>
        {/* <div className="h-[100vh] gallery"></div> */}
        <div ref={gallery} className="gallery h-[175vh] relative flex gap-[2vw] p-[2vw] overflow-hidden border-box bg-[rgb(45,45,45)]">
            <Column images={[images[0], images[1], images[2]]} y={y} top={"-top-[45%]"} layout={"hidden lg:flex"}/>
            <Column images={[images[3], images[4], images[5]]} y={y2} top={"-top-[95%]"} layout={"flex"}/>
            <Column images={[images[6], images[7], images[8]]} y={y3} top={"-top-[45%]"}/>
            <Column images={[images[9], images[10], images[11]]} y={y4} top={"-top-[75%]" } layout={"hidden lg:flex"}/>
        </div>
        {/* <div className="h-[100vh]"></div> */}
    </main>
 
    </>
    
  )
}

const Column = ({images, y, top, layout}) => {
  return (
    <motion.div 
    className={`relative h-[100%]  w-[50%] lg:w-[25%] min-w-[25%] ${layout} flex-col gap-[2vw] ${top}`}
    style={{y}}
      >
      {
        images.map( (src, i) => {
          return <div key={i} className="h-[100%] w-[100%] relative rounded-[1vw]">
            <Image 
              src={`/projects/${src}`}
              alt='image'
              fill
              className="object-cover" 

            />
          </div>
        })
      }
    </motion.div>
  )
}