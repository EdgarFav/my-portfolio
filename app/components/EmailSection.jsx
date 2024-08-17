/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GithubIcon from '/public/github.svg'
import LinkedinIcon from '/public/linkedin.svg'

const EmailSection = () => {
    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
            <div>
                <h5 className='text-xl font-bold text-white my-2'>Let's connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}
                    I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className='social flex flex-row gap-2'>
                    <Link href="github.com">
                        <Image src={GithubIcon} alt='Github-icon' />
                    </Link>
                    <Link href="linkedin.com">
                        <Image src={LinkedinIcon} alt='Linkedin-icon' />
                    </Link>
                </div>
            </div>
            <div>
            </div>
        </section>
    )
}

export default EmailSection