/* eslint-disable @next/next/no-img-element */
'use client'
import cn from 'classnames'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MdPerson } from 'react-icons/md'
import { BtnLink } from '~/Components/atoms/btn'
import ButtonsNavBar from '~/Components/atoms/buttons-nav-bar'

const NavbarHome = () => {
    // const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [actionScroll, setActionScroll] = useState(false)

    // const toggle = () => setIsOpenMenu(!isOpenMenu);

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

    return (
        <header>
            <nav
                className="fixed z-50 left-0 right-0 mobile:p-2 px-4 py-2.5 transition-colors bg-white shadow-xl"
                // data-scroll-action={actionScroll}
            >
                <div className="container flex flex-wrap items-center justify-between gap-2 ">
                    <Link href="/">
                        {/*<img
                            src="/logo-rgb-04.png"
                            className="hidden h-10 w-32  data-[logo-light=false]:flex"
                            data-logo-light={actionScroll}
                            alt="logo light"
                        />*/}
                        <img
                            src="/logo-rgb-21.png"
                            className="w-32 h-10 "
                            alt="logo dark"
                        />
                    </Link>
                    <ButtonsNavBar />

                    {/* </Collapse> */}
                </div>
            </nav>
        </header>
    )
}

export default NavbarHome
