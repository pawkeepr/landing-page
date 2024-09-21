'use client'
import cn from 'classnames'
import type React from 'react'
import { MdPerson } from 'react-icons/md'
import { BtnLink } from '../btn'

export const ButtonsNavBar: React.FC = () => {
    return (
        <div className="z-50 flex gap-2">
            <BtnLink
                message="Entre Tutor"
                className={cn(
                    'text-black text-base hover:bg-secondary-500 !border-secondary-500 border-0  w-fit ',
                )}
                href="https://tutor.pawkeepr.app.br/t/sign-in"
            >
                <MdPerson className="w-6 h-6" />
            </BtnLink>
            {/*<BtnLink
                message="Entre Vet"
                className={cn('border-primary-600 text-base hover:bg-gray-600 border-0 w-40')}
                href="https://pawkeepr.app.br/"
            >
                <FaStethoscope className="w-6 h-4" />
            </BtnLink>*/}
        </div>
    )
}

export default ButtonsNavBar
