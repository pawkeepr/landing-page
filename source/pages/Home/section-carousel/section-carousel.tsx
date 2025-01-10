'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

const SectionCarouselSpecialties = ({ city }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            // Verificando se a cidade foi passada como parâmetro
            if (!city) {
                setLoading(false);
                setError(true);
                return; // Caso não tenha cidade, não faz a requisição
            }

            try {
                setLoading(true);
                setError(false);
                const response = await axios.get(
                    `https://wqwkbo2249.execute-api.us-east-1.amazonaws.com/testdevelopment/api-external/all-vet-address?city=${encodeURIComponent(city)}`
                );

                // Se não encontrar dados para a cidade, seta o erro
                if (response.data.length === 0) {
                    setError(true);
                } else {
                    const formattedData = response.data.map((item) => ({
                        name: item.name || `${item.first_name} ${item.last_name}`,
                        address: `${item.veterinary_information?.specialty || 'Especialidade não informada'}, ${
                            item.address?.city || 'Cidade não informada'
                        }`,
                        profile: `/profile/${item.id || ''}`,
                        img: item.url_img || '/Tutor1.png',
                    }));
                    setData(formattedData);
                }
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [city]); // A requisição será feita toda vez que o parâmetro "city" mudar

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: Math.min(data.length, 3),
        slidesToScroll: 1,
        vertical: false,
        verticalSwiping: false,
        autoplay: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: Math.min(data.length, 2),
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    if (loading) {
        return (
            <div className="text-center py-8">
                <p>Carregando...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-8 text-red-600">
                <p>Não foram encontrados profissionais para essa região.</p>
            </div>
        );
    }

    return (
        <div className="mx-auto px-4 py-8 max-w-full">
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className="p-2">
                        <div className="bg-white rounded-lg shadow-md p-4 text-center max-w-xs mx-auto">
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-20 h-20 mx-auto rounded-full mb-2 object-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = '/Tutor1.png';
                                }}
                            />
                            <h3 className="text-base font-bold">{item.name || 'Nome não disponível'}</h3>
                            <p className="text-gray-600 text-sm">{item.address || 'Endereço não disponível'}</p>
                            <Link
                                href={item.profile || '/'}
                                className="text-blue-500 font-medium hover:underline mt-2 inline-block text-sm"
                            >
                                Mostrar perfil
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SectionCarouselSpecialties;
