'use client'
import { Sling as Hamburger } from 'hamburger-react';
import { useState } from 'react';


export function HamburguerMenu() {

    const [isOpen, setOpen] = useState(false)

    return (
        <>
        <div className="text-white md:hidden">
            <Hamburger 
            size={28}
            toggled={isOpen}
            toggle={setOpen}
            />
        </div>
        </>
    )
}