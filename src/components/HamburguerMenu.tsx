'use client'
import { Sling as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { linksNavBar } from '@/mocks/linksNavBar';


export function HamburguerMenu() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className='md:hidden'>
                <div className="relative z-[100] block text-white">
                    <Hamburger
                        size={28}
                        toggle={setIsOpen}
                        toggled={isOpen}
                    />
                </div>

                {(isOpen) &&

                    <ul className=" flex flex-col items-center justify-center pt-24 pb-10 gap-7 bg-zinc-400 w-[40%] fixed right-0 top-0 text-white">
                        {
                            linksNavBar.map((link) => (
                                <li key={link.id}>
                                    <a href={link.link}>{link.value}</a>
                                </li>
                            )
                            )}
                    </ul>

                }
            </div>
        </>
    )
}