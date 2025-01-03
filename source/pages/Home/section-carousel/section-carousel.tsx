'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

const SectionCarouselSpecialties = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://wqwkbo2249.execute-api.us-east-1.amazonaws.com/testdevelopment/api-external/all-vet-address?city=S%C3%A3o%20Crist%C3%B3v%C3%A3o'
                );

                const formattedData = response.data.map((item) => ({
                    name: item.name || `${item.first_name} ${item.last_name}`,
                    address: `${item.veterinary_information?.specialty || 'Especialidade não informada'}, ${
                        item.address?.city || 'Cidade não informada'
                    }`,
                    profile: `/profile/${item.id || ''}`,
                    img: item.url_img || '/Tutor1.png',
                }));

                setData(formattedData);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchData();
    }, []);

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
