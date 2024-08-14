'use client'
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }
    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src='/dragon.jpg' alt='About me' width={500} height={500} />
                <div>
                    <h2 className='text-4xl font-bold text-white mb-4'>About me</h2>
                    <p className='text-base lg:text-lg'>
                        I am a full-stack developer with a passion for creating
                        efficient and user-friendly applications. I have experience
                        working with JavaScript, React, Node.js, and
                        MongoDB, and I am always looking for new challenges and
                        opportunities to grow my skills and knowledge.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <TabButton
                            selectTab={() => handleTabChange("Skills")}
                            active={tab === "Skills"}>
                            {" "}Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("Experience")}
                            active={tab === "Experience"}>
                            {" "}Experience{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("Education")}
                            active={tab === "Education"}>
                            {" "}Education{" "}
                        </TabButton>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutSection