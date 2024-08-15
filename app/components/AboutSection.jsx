'use client'
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import { TAB_DATA } from '../constants'

const AboutSection = () => {
    const [tab, setTab] = useState("Skills")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    const tabData = TAB_DATA.find((elem) => elem.id === tab)

    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src='/dragon.jpg' alt='About me' width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About me</h2>
                    <p className='text-base lg:text-lg'>
                        I am a full-stack developer with a passion for creating
                        efficient and user-friendly applications. I have experience
                        working with JavaScript, React, Node.js, and
                        MongoDB, and I am always looking for new challenges and
                        opportunities to grow my skills and knowledge.
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
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
                    </div>
                    <div className='mt-8'>{tabData.content}</div>
                </div>
            </div>
        </section>
    )
}
export default AboutSection