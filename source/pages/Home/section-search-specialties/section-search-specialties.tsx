'use client'

import React, { useState } from 'react';
import { tv } from 'tailwind-variants';
import Select from 'react-select';

const buttonStyle = tv({
    base: 'rounded-full px-6 py-2 border text-base',
    variants: {
        variant: {
            active: 'bg-white text-black border-gray-300',
            inactive: 'text-white border-transparent',
        },
    },
});

const searchButtonStyle =
    'px-6 py-2 bg-blue-500 text-white text-base rounded-full';

const SearchSpecialties = () => {
    const [isLocal, setIsLocal] = useState(true);

    const specialtiesOptions = [
        { value: 'cardiology', label: 'Cardiologia' },
        { value: 'neurology', label: 'Neurologia' },
        { value: 'orthopedics', label: 'Ortopedia' },
        { value: 'dermatology', label: 'Dermatologia' },
        { value: 'pediatrics', label: 'Pediatria' },
        { value: 'ophthalmology', label: 'Oftalmologia' }
    ];

    const citiesOptions = [
        { value: 'sao-paulo', label: 'São Paulo' },
        { value: 'rio-de-janeiro', label: 'Rio de Janeiro' },
        { value: 'belo-horizonte', label: 'Belo Horizonte' }
    ];

    return (
        <div className="text-black p-5 space-y-6">
            <div className="flex space-x-4">
                <button
                    className={buttonStyle({
                        variant: isLocal ? 'active' : 'inactive',
                    })}
                    onClick={() => setIsLocal(true)}
                >
                    No local
                </button>
                <button
                    className={buttonStyle({
                        variant: !isLocal ? 'active' : 'inactive',
                    })}
                    onClick={() => setIsLocal(false)}
                >
                    Teleconsulta
                </button>
            </div>

            <div>
                {isLocal ? (
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_3fr_1fr] gap-4 items-center">
                        <Select
                            className="w-full h-12 text-base"
                            options={specialtiesOptions}
                            placeholder="Especialidade"
                        />
                        <Select
                            className="w-full h-12 text-base"
                            options={citiesOptions}
                            placeholder="Cidade ou região"
                        />
                        <button className={searchButtonStyle}>Pesquisar</button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr] gap-4 items-center">
                        <Select
                            className="w-full h-12 text-base"
                            options={specialtiesOptions}
                            placeholder="Escolher a especialidade"
                        />
                        <button className={searchButtonStyle}>Pesquisar</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchSpecialties;
