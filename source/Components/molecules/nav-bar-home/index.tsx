'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ButtonsModal from '~/Components/atoms/buttons-modal/buttons-modal'

const NavbarHome = () => {
    const [actionScroll, setActionScroll] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', scrollNavigation, true)
    }, [])

    const scrollNavigation = () => {
        const scrollUp = document.documentElement.scrollTop
        if (scrollUp > 100) {
            setActionScroll(true)
        } else {
            setActionScroll(false)
        }
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header>
            <nav className={`fixed z-50 left-0 right-0 p-2 px-4 py-1.5 transition-colors bg-white shadow-xl ${actionScroll ? 'bg-opacity-80' : ''}`}>
                <div className="container flex items-center justify-between">

                    <Link href="/">
                        <img
                            src="/logo-rgb-21.png"
                            className="w-32 h-10"
                            alt="logo dark"
                        />
                    </Link>

                    <button
                        className="block lg:hidden text-black"
                        onClick={toggleMenu}
                    >
                        <span className="text-2xl">&#9776;</span> 
                    </button>

                    <div className={`lg:flex items-center gap-4 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
                        <Link
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-black rounded-md hover:bg-secondary-500"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-black rounded-md hover:bg-secondary-500"
                        >
                            Pergunte ao especialista
                        </Link>
                        <ButtonsModal />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavbarHome
