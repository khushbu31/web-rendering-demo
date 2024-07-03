'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

function Header() {
    const pathname = usePathname();
    const paths = [
        { path: '/csr', name: 'CSR' },
        { path: '/ssr', name: 'SSR' },
        { path: '/ssg', name: 'SSG' },
        { path: '/isr', name: 'ISR' }
    ];
    console.log(pathname)
    return (
        <nav className="flex bg-[#3d7c67]">
            <ul className="flex gap-3 w-full justify-center p-5">
                {
                    paths.map((path: any, index: number) => (
                        <li className={ pathname === path.path ? 'text-2xl font-bold text-black' : 'text-2xl font-bold'} key={index} >
                            <Link href={path.path}>{path.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Header