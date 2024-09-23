'use client'
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GithubIcon from '/public/github.svg'
import LinkedinIcon from '/public/linkedin.svg'
import GmailIcon from '/public/gmail.svg'

const EmailSection = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            email: e.target.email.value,
            firstName: e.target.firstName.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data)
        const endpoint = '/api/send'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }
        const response = await fetch(endpoint, options)
        const resData = await response.json()
        // console.log(resData)

        if (response.status === 200) {
            console.log('Message sent.')
            setIsSubmitted(true)
        };
    }

    return (
        <section id="contacto" className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
            <div>
                <h5 className='text-xl font-bold text-white my-2'>Conectemos!</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}
                    Actualmente estoy buscando nuevas oportunidades, mi bandeja de entrada está siempre abierta. Si tienes alguna pregunta o simplemente quieres saludar, ¡haré todo lo posible para responderte!
                </p>
                <div className='social flex flex-row gap-2'>
                    <Link href="https://github.com/EdgarFav" target="_blank">
                        <Image src={GithubIcon} alt='Github-icon' />
                    </Link>
                    <Link href="https://www.linkedin.com/in/edgar-nah%C3%BA-favela-b3a639239/" target="_blank">
                        <Image src={LinkedinIcon} alt='Linkedin-icon' />
                    </Link>
                    <Link href="mailto:edgarfda17@gmail.com" target="_blank">
                        <Image src={GmailIcon} alt='Gmail-icon' />
                    </Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>Tu email</label>
                        <input className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" name="email" type="email" id="email" required placeholder='jace@google.com' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='firstName' className='text-white block mb-2 text-sm font-medium'>Tu Nombre</label>
                        <input className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" name="firstName" type="text" id="firstName" required placeholder='Jace' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='message' className='text-white block mb-2 text-sm font-medium'>Mensaje</label>
                        <textarea name="message" id="message" className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder="Hablemos..."></textarea>
                    </div>
                    <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>Enviar mensaje</button>
                    {
                        isSubmitted && (
                            <p className='text-green-500 text-sm mt-2'>Mensaje enviado exitosamente!</p>
                        )
                    }
                </form>
            </div>
        </section>
    )
}

export default EmailSection