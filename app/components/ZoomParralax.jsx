'use client'
import { useRef } from "react"
import Image from "next/image"
import picture1 from "../../public/images/1.jpeg"
import picture2 from "../../public/images/2.jpeg"
import picture3 from "../../public/images/3.jpg"
import picture4 from "../../public/images/4.jpg"
import picture5 from "../../public/images/5.jpg"
import picture6 from "../../public/images/6.jpg"
import picture7 from "../../public/images/7.jpeg"
import { useScroll, useTransform, motion } from "framer-motion"

const ZoomParralax = () => {
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0,1],[1,4])
    const scale5 = useTransform(scrollYProgress, [0,1],[1,5])
    const scale6 = useTransform(scrollYProgress, [0,1],[1,6])
    const scale8 = useTransform(scrollYProgress, [0,1],[1,8])
    const scale9 = useTransform(scrollYProgress, [0,1],[1,9])





  return (
    <div ref={container} className="h-[300vh] top-0 relative mb-[50vw]">
        <div className="sticky top-0 h-[100vh] overflow-hidden">
            <motion.div style={{scale:scale4}} className="el w-full h-full absolute top-0 flex justify-center items-center ">
                <div  className="imageContainer w-[25vw] h-[25vh] relative ">
                    <Image
                        src={picture1}
                        fill
                        alt="image"
                        placeholder="blur"
                        className="object-cover	"
                    />
                </div>

             
            </motion.div>

            <motion.div style={{scale:scale5}} className="el w-full h-full absolute top-0 flex justify-center items-center">
            <div  className="imageContainer w-[35vw] h-[30vh] relative -top-[30vh] left-[5vw]">
                    <Image
                        src={picture2}
                        fill
                        alt="image"
                        placeholder="blur"
                        className="object-cover	"
                    />
                </div>
            </motion.div>

            
            <motion.div style={{scale:scale6}} className="el w-full h-full absolute top-0 flex justify-center items-center">
            <div  className="imageContainer w-[25vw] h-[45vh] relative -top-[10vh] -left-[30vw]">
                    <Image
                        src={picture3}
                        fill
                        alt="image"
                        placeholder="blur"
                        className="object-cover	"
                    />
                </div>
            </motion.div>

            <motion.div style={{scale:scale5}} className="el w-full h-full absolute top-0 flex justify-center items-center">
            <div  className="imageContainer w-[25vw] h-[25vh] relative  left-[27.5vw]">
                    <Image
                        src={picture4}
                        fill
                        alt="image"
                        placeholder="blur"
                        className="object-cover	"
                    />
                </div>
            </motion.div>

            <motion.div style={{scale:scale6}} className="el w-full h-full absolute top-0 flex justify-center items-center">
            <div  className="imageContainer w-[20vw] h-[25vh] relative top-[27.5vh] left-[5vw]">
                    <Image
                        src={picture5}
                        fill
                        alt="image"
                        placeholder="blur"
                        className="object-cover	"
                    />
                </div>
            </motion.div>

            <motion.div style={{scale:scale8}} className="el w-full h-full absolute top-0 flex justify-center items-center">
            <div  className="imageContainer w-[30vw] h-[25vh] relative top-[27.5vh] -left-[22.5vw]">
                    <Image
                        src={picture6}
                        fill
                        alt="image"
                        placeholder="blur"
                        className="object-cover	"
                    />
                </div>
            </motion.div>

            <motion.div style={{scale:scale8}} className="el w-full h-full absolute top-0 flex justify-center items-center">
            <div  className="imageContainer w-[15vw] h-[15vh] relative top-[22.5vh] left-[25vw]">
                    <Image
                        src={picture6}
                        fill
                        alt="image"
                        placeholder="blur"
                        className="object-cover	"
                    />
                </div>
            </motion.div>

          

         


        

        </div>
    </div>
  )
}

export default ZoomParralax