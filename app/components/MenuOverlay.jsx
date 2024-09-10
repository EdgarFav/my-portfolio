import React from 'react'
import { NAV_LINKS } from '../constants'
import Link from 'next/link'
import { motion } from 'framer-motion'

const MenuOverlay = ({ links }) => {
    return (
        <ul className='flex flex-col py-4 items-center'>
            {
                NAV_LINKS.map((links) => (
                    <motion.li
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        key={links.name}>
                        <Link href={links.link}> {links.title} </Link>
                    </motion.li>
                ))
            }
        </ul>
    )
}

export default MenuOverlay