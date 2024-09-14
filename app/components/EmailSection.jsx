'use client'
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GithubIcon from '/public/github.svg'
import LinkedinIcon from '/public/linkedin.svg'

const EmailSection = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
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
        <section id="contact" className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
            <div>
                <h5 className='text-xl font-bold text-white my-2'>Let's connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}
                    I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className='social flex flex-row gap-2'>
                    <Link href="https://github.com/EdgarFav" target="_blank">
                        <Image src={GithubIcon} alt='Github-icon' />
                    </Link>
                    <Link href="https://www.linkedin.com/in/edgar-nah%C3%BA-favela-b3a639239/" target="_blank">
                        <Image src={LinkedinIcon} alt='Linkedin-icon' />
                    </Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>Your email</label>
                        <input className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" name="email" type="email" id="email" required placeholder='jace@google.com' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>Subject</label>
                        <input className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" name="subject" type="text" id="subject" required placeholder='Just saying hi' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='message' className='text-white block mb-2 text-sm font-medium'>Message</label>
                        <textarea name="message" id="message" className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder="Let's talk..."></textarea>
                    </div>
                    <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>Send message</button>
                    {
                        isSubmitted && (
                            <p className='text-green-500 text-sm mt-2'>Message sent successfully!</p>
                        )
                    }
                </form>
            </div>
        </section>
    )
}

export default EmailSection