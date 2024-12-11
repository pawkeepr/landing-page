'use client';

import React from 'react'
import Link from 'next/link'
import { tv } from 'tailwind-variants'

const container = tv({
    base: 'bg-white text-black p-3',
    variants: {
        columns: {
            two: 'grid grid-cols-2 gap-4',
            three: 'grid grid-cols-3 gap-4',
            four: 'grid grid-cols-4 gap-4',
        },
        spacing: {
            small: 'gap-2',
            medium: 'gap-4',
            large: 'gap-8',
        },
    },
    defaultVariants: {
        columns: 'two',
        spacing: 'medium',
    },
});

const Specialties = () => {
    return (
        <div className={`${container({ spacing: 'large' })} sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}>
            <Link href={''}>
                Coluna 1
            </Link>
            <Link href={''}>
                Coluna 2
            </Link>
            <Link href={''}>
                Coluna 3
            </Link>
            <Link href={''}>
                Coluna 4
            </Link>
            <Link href={''}>
                Coluna 5
            </Link>
            <Link href={''}>
                Coluna 6
            </Link>
            <Link href={''}>
                Coluna 7
            </Link>
            <Link href={''}>
                Coluna 8
            </Link>
        </div>
    );
};

export default Specialties;
