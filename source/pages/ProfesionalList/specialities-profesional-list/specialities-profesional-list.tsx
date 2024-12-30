import React, { useState, useEffect } from "react";

const ProfessionalCard = ({ image, name, title, rating, reviews, crp, address, price }) => (
    <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg border">
        <img
            src={image}
            alt={name}
            className="w-24 h-24 object-cover rounded-full mb-4"
        />
        <h3 className="font-bold text-lg text-black mb-1 text-center">{name}</h3>
        <p className="text-gray-600 text-sm text-center mb-1">{title}</p>
        <div className="flex items-center space-x-1 text-green-600 mb-2">
            <span className="text-sm font-semibold">{rating} ★</span>
            <span className="text-sm text-gray-500">({reviews} opiniões)</span>
        </div>
        <p className="text-gray-500 text-sm mb-1">CRP {crp}</p>
        <p className="text-gray-500 text-sm mb-4 text-center">{address}</p>
        <p className="text-black font-semibold text-sm mb-2">R$ {price}</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Agende sua consulta
        </button>
    </div>
);

const ProfessionalList = () => {
    const [professionalsData, setProfessionalsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const professionalsPerPage = 12;

    useEffect(() => {
        const data = Array.from({ length: 50 }, (_, index) => ({
            image: `/path/to/image-${index + 1}.jpg`,
            name: `Profissional ${index + 1}`,
            title: "Psicólogo(a)",
            rating: (4.5 + Math.random() * 0.5).toFixed(1),
            reviews: Math.floor(Math.random() * 20 + 1),
            crp: `06/${Math.floor(10000 + Math.random() * 90000)}`,
            address: `Endereço ${index + 1}, São Paulo`,
            price: Math.floor(150 + Math.random() * 50),
        }));
        setProfessionalsData(data);
    }, []);

    const totalPages = Math.ceil(professionalsData.length / professionalsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const currentProfessionals = professionalsData.slice(
        (currentPage - 1) * professionalsPerPage,
        currentPage * professionalsPerPage
    );

    return (
        <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {currentProfessionals.map((professional, index) => (
                    <ProfessionalCard key={index} {...professional} />
                ))}
            </div>

            <div className="flex justify-center items-center space-x-2">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 rounded-md ${
                            currentPage === index + 1
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-gray-700"
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProfessionalList;
