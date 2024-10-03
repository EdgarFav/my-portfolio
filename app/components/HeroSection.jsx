'use client'
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import Link from 'next/link'

const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='mb-4 text-4xl sm-text-5xl lg:text-6xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-t from-purple-400 to-blue-600'>Hey, soy{" "}</span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'Nahú',
                                1000,
                                'Fullstack Developer',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    {/* <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-5'>+2 years of experience, I am passionate Fullstack Web Developer with a disciplined and organized work ethic, driven by self-motivation, responsibility, and strong commitment to teamwork. Always eager to embrace challenges and continuously pursue personal and professional growth</p> */}
                    <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-5 text-left text-pretty'><strong className='text-yellow-200'>+2 años de experiencia. Desarrollador Web Full Stack</strong> de Tamaulipas, Mexico, especializado en el desarrollo de aplicaciones web y APIs con un enfoque en la arquitectura y diseño de software.</p>
                    <div>

                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'><Link href="https://www.linkedin.com/in/edgar-nah%C3%BA-favela-b3a639239/" target="_blank" >Hire me</Link></button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
                            <a href="/cv.pdf" target='_blank' download="EdgarFavela-CV"><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span></a>
                        </button>
                    </div>
                </motion.div>
                {/* <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-5 place-self-center mt-6 lg:mt-0'>
                    <div className='w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            src="/xmen.jpeg"
                            alt='xmen'
                            width={300}
                            height={300}
                            className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        />
                    </div>
                </motion.div> */}
            </div>
        </section>
    )
}

export default HeroSection