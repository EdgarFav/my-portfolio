/* eslint-disable react/no-unescaped-entities */
// import React, { useState, useTransition } from 'react'
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

            <div className='[&>p]:mb-4 text-left order-2 md:order-1 text-base lg:text-lg text-pretty'>
                <p>
                    Me llamo Edgar Favela pero mis conocidos me dicen 'Nahú' (mi segundo nombre). Empece en la programacion en el colegio con Java y C#, años mas tarde conoci el fascinante mundo de la programación web con JavaScript.
                </p>
                <p><strong className='italic text-yellow-200'>
                    Desde entonces me he dedicado a disfrutar aprendiendo y crear experiencias web increibles para los usuarios.
                </strong></p>
                <p>
                    Algunos de mis exitos incluyen terminar mis estudios a la par de mis negocios y colaborar activamente con mi equipo de proyecto final en el cual <strong className='italic text-yellow-200'>desarrollamos una e-commerce de productos saludables para el mercado local.</strong>
                </p>
                <p><strong className='italic text-yellow-200'>
                    El proyecto fue muy exitoso y bien recibido por parte de nuestros profesores y compañeros.
                </strong></p>
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
            <Image src='/me.avif' alt='About me' width="200" height="200"
                className=' order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20' style="object-position: 50% 50%" />
        </section>
    )
}
export default AboutSection