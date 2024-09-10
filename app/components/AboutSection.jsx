'use client'
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import { TAB_DATA } from '../constants'

const AboutSection = () => {
    // const [tab, setTab] = useState("Skills")
    // const [isPending, startTransition] = useTransition()

    // const handleTabChange = (id) => {
    //     startTransition(() => {
    //         setTab(id)
    //     })
    // }

    // const tabData = TAB_DATA.find((elem) => elem.id === tab)

    return (
        <section className='flex flex-col items-center justify-center gap-8 md:flex-row lg:px-40' >

            <div className='mt-4 md:mt-0 text-left order-2 md:order-1'>
                <p className='text-base lg:text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsam dolorum vel excepturi expedita culpa iste dignissimos tempore doloremque, beatae asperiores perferendis nisi in hic facere aperiam, placeat saepe laudantium.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus perspiciatis maiores unde, animi nemo numquam quisquam expedita ducimus nobis id deleniti? Perferendis dolorum vel optio inventore incidunt rerum, sequi enim!
                </p>
                {/* <div className='flex flex-row justify-center mt-8'>
                        <TabButton
                            selectTab={() => handleTabChange("Skills")}
                            active={tab === "Skills"}>
                            {" "}Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("Education")}
                            active={tab === "Education"}>
                            {" "}Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("Certifications")}
                            active={tab === "Certifications"}>
                            {" "}Certifications{" "}
                        </TabButton>
                    </div> */}
                {/* <div className='mt-8'>{tabData.content}</div> */}
            </div>
            <Image src='/dragon.jpg' alt='About me' width="200" height="200"
                className=' order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20' style="object-position: 50% 50%" />
        </section>
    )
}
export default AboutSection