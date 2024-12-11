'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SectionCarouselSpecialties = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const mockData = [
            {
                name: 'Dra. Heloisa Nardoni',
                address: 'Generalista, Curitiba',
                profile: '/profile1',
                img: '/path/to/image1.jpg',
            },
            {
                name: 'Camila Simões de Freitas',
                address: 'Nutricionista, Belo Horizonte',
                profile: '/profile2',
                img: '/path/to/image2.jpg',
            },
            {
                name: 'José Sanchez',
                address: 'Psicanalista, Brasília',
                profile: '/profile3',
                img: '/path/to/image3.jpg',
            },
            {
                name: 'Carla Pereira',
                address: 'Fisioterapeuta, Salvador',
                profile: '/profile4',
                img: '/path/to/image4.jpg',
            },
        ];
        setData(mockData);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
                                src={item.img || '/path/to/default-image.jpg'}
                                alt={item.name}
                                className="w-20 h-20 mx-auto rounded-full mb-2 object-cover"
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
