import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfessionalCard = ({ image, name, specialty, crmv, address }) => (
    <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg border">
        <img
            src={image}
            alt={name}
            className="w-24 h-24 object-cover rounded-full mb-4"
            onError={(e) => {
                e.target.onerror = null; // Evitando loops infinitos
                e.target.src = "/Tutor1.png"; // Substituindo por imagem padrão
            }}
        />
        <h3 className="font-bold text-lg text-black mb-1 text-center">{name}</h3>
        <p className="text-gray-600 text-sm text-center mb-1">{specialty || "Especialidade não informada"}</p>
        <p className="text-gray-500 text-sm mb-1">CRMV {crmv || "Não informado"}</p>
        <p className="text-gray-500 text-sm mb-4 text-center">{address || "Endereço não informado"}</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Agende sua consulta
        </button>
    </div>
);

const ProfessionalList = ({ city }) => {
    const [professionalsData, setProfessionalsData] = useState([]);
    const [isClient, setIsClient] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState(false);
    const professionalsPerPage = 12;

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        const fetchProfessionals = async () => {
            if (!city) {
                setError(true);
                return;
            }

            try {
                const response = await axios.get(
                    `https://wqwkbo2249.execute-api.us-east-1.amazonaws.com/testdevelopment/api-external/all-vet-address?city=${encodeURIComponent(city)}`
                );

                if (response.data.length === 0) {
                    setError(true);
                } else {
                    const formattedData = response.data.map((item) => ({
                        image: item.url_img || "Tutor1.png",
                        name: item.name || `${item.first_name} ${item.last_name}`,
                        specialty: item.veterinary_information?.specialty || "Especialidade não informada",
                        crmv: item.veterinary_information?.crmv || "Não informado",
                        address: `${item.address?.street || "Rua desconhecida"}, ${item.address?.number || "S/N"}, ${item.address?.neighborhood || "Bairro desconhecido"}, ${item.address?.city || "Cidade desconhecida"}, ${item.address?.state || "Estado desconhecido"}, ${item.address?.zipCode || "CEP desconhecido"}`,
                    }));
                    setProfessionalsData(formattedData);
                    setError(false);
                }
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
                setError(true);
            }
        };

        fetchProfessionals();
    }, [city]);

    if (!isClient) return null;

    const totalPages = Math.ceil(professionalsData.length / professionalsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const currentProfessionals = professionalsData.slice(
        (currentPage - 1) * professionalsPerPage,
        currentPage * professionalsPerPage
    );

    if (error) {
        return (
            <div className="text-center py-8 text-red-600">
                <p>Não foram encontrados profissionais para esta região.</p>
            </div>
        );
    }

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
                        className={`px-4 py-2 rounded-md ${currentPage === index + 1
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
