import React, { useState } from "react";
import ZoomInSection from "~/Components/atoms/zoom/zoom";

const NewsCard = ({ image, date, title, description, link }) => (
    <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
        <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
        <p className="text-gray-500 text-sm mb-2">{date}</p>
        <h3 className="font-bold text-lg text-black mb-2 text-center">{title}</h3>
        <p className="text-gray-600 text-sm text-center mb-2">{description}</p>
        <a href={link} className="text-blue-500 text-sm font-semibold hover:underline">
            Leia mais
        </a>
    </div>
);

const BlogHome = () => {
    const featuredNews = {
        image: "/home/featured.png",
        date: "13 Dez 2024",
        title: "Título da Notícia Principal",
        description: "Descrição da notícia.",
        link: "/noticia-destaque",
    };

    const newsData = Array.from({ length: 50 }, (_, index) => ({
        image: `/home/news-${index + 1}.png`,
        date: `12 Dez 2024`,
        title: `Título da Notícia ${index + 1}`,
        description: `Descrição da notícia ${index + 1}.`,
        link: `/noticia-${index + 1}`,
    }));

    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 12;
    const totalPages = Math.ceil(newsData.length / newsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const currentNews = newsData.slice(
        (currentPage - 1) * newsPerPage,
        currentPage * newsPerPage
    );

    return (
        <div className="p-4">
            <ZoomInSection>
                <div className="flex flex-col md:flex-row items-center bg-white shadow-2xl rounded-3xl p-6 mb-12">
                    <img
                        src={featuredNews.image}
                        alt="Featured"
                        className="w-full md:w-1/3 h-64 object-cover rounded-md mb-4 md:mb-0 md:mr-6"
                    />
                    <div className="flex flex-col w-full md:w-2/3">
                        <p className="text-gray-500 text-sm mb-2">{featuredNews.date}</p>
                        <h2 className="font-bold text-2xl text-black mb-4">{featuredNews.title}</h2>
                        <p className="text-gray-600 text-lg mb-4">{featuredNews.description}</p>
                        <a href={featuredNews.link} className="text-blue-500 text-sm font-semibold hover:underline">
                            Leia mais
                        </a>
                    </div>
                </div>
            </ZoomInSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {currentNews.map((news, index) => (
                    <NewsCard
                        key={index}
                        image={news.image}
                        date={news.date}
                        title={news.title}
                        description={news.description}
                        link={news.link}
                    />
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

export default BlogHome;
