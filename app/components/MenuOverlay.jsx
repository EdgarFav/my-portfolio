import React from 'react'
import { NavLinks } from '../constants'
import Link from 'next/link'

const MenuOverlay = ({ links }) => {
    return (
        <ul className='flex flex-col py-4 items-center'>
            {
                NavLinks.map((links) => (
                    <li key={links.name}>
                        <Link href={links.link}> {links.title} </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default MenuOverlay