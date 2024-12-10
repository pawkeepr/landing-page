'use client'

import React, { useState } from 'react';
import { tv } from 'tailwind-variants';

const buttonStyle = tv({
    base: 'rounded-full px-6 py-2 border text-base',
    variants: {
        variant: {
            active: 'bg-white text-black border-gray-300',
            inactive: 'text-white border-transparent',
        },
    },
});

const selectStyle =
    'border rounded px-6 py-2 bg-white text-base';

const searchButtonStyle =
    'px-6 py-2 bg-blue-500 text-white text-base rounded-full';

const SearchSpecialties = () => {
    const [isLocal, setIsLocal] = useState(true);

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
                        <select className={selectStyle}>
                            <option value="">Especialidade, doença ou nome</option>
                            <option value="cardiology">Cardiologia</option>
                            <option value="neurology">Neurologia</option>
                            <option value="orthopedics">Ortopedia</option>
                        </select>
                        <select className={selectStyle}>
                            <option value="">Cidade ou região</option>
                            <option value="sao-paulo">São Paulo</option>
                            <option value="rio-de-janeiro">Rio de Janeiro</option>
                            <option value="belo-horizonte">Belo Horizonte</option>
                        </select>
                        <button className={searchButtonStyle}>Pesquisar</button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr] gap-4 items-center">
                        <select className={selectStyle}>
                            <option value="">Escolher a especialidade</option>
                            <option value="dermatology">Dermatologia</option>
                            <option value="pediatrics">Pediatria</option>
                            <option value="ophthalmology">Oftalmologia</option>
                        </select>
                        <button className={searchButtonStyle}>Pesquisar</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchSpecialties;
