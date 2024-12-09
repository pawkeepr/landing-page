'use client';
import React from 'react';
import cn from 'classnames';
import { MdPerson } from 'react-icons/md';
import { BtnLink } from '../btn';

interface ButtonsNavBarProps {
    type: 'login' | 'register';
}

export const ButtonsNavBar: React.FC<ButtonsNavBarProps> = ({ type }) => {
    return (
        <div className="z-50 flex gap-2">
            {type === 'login' ? (
                <>
                    <BtnLink
                        message="Entre como Tutor"
                        className={cn(
                            'text-black text-base hover:bg-secondary-500 !border-secondary-500 border-0 w-fit',
                        )}
                        href="https://b75d4674.homolog.tutor.pawkeepr.app.br/t/sign-in"
                    >
                        <MdPerson className="w-6 h-6" />
                    </BtnLink>
                    <BtnLink
                        message="Entre como Veterinário"
                        className={cn('border-primary-600 text-base hover:bg-gray-600 border-0 w-fit')}
                        href="https://0730c0c5.homolog.vet.pawkeepr.app.br/v/sign-in"
                    >
                        <MdPerson className="w-6 h-6" />
                    </BtnLink>
                </>
            ) : (
                <>
                    <BtnLink
                        message="Cadastre-se como Tutor"
                        className={cn(
                            'text-black text-base hover:bg-secondary-500 !border-secondary-500 border-0 w-fit',
                        )}
                        href="https://b75d4674.homolog.tutor.pawkeepr.app.br/t/sign-up"
                    >
                        <MdPerson className="w-6 h-6" />
                    </BtnLink>
                    <BtnLink
                        message="Cadastre-se como Veterinário"
                        className={cn('border-primary-600 text-base hover:bg-gray-600 border-0 w-fit')}
                        href="https://0730c0c5.homolog.vet.pawkeepr.app.br/v/sign-up"
                    >
                        <MdPerson className="w-6 h-6" />
                    </BtnLink>
                </>
            )}
        </div>
    );
};

export default ButtonsNavBar;
