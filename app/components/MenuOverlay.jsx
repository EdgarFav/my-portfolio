import React from 'react'
import { NAV_LINKS } from '../constants'
import Link from 'next/link'

const MenuOverlay = ({ links }) => {
    return (
        <ul className='flex flex-col py-4 items-center'>
            {
                NAV_LINKS.map((links) => (
                    <li key={links.name}>
                        <Link href={links.link}> {links.title} </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default MenuOverlay