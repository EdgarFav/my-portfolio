import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
            <div className='container p-12 flex flex-col md:flex-row justify-between items-center'>
                <span><Image src="/logo-wbg.png" alt='Logo' width="100" height="100" /></span>
                <p className='text-slate-600'>All rights reserved 2024.</p>
            </div>
        </footer>
    )
}

export default Footer