import React, { useState, useEffect } from "react";
import axios from "axios";
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
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("https://pawkeepr.blog/wp-json/wp/v2/posts");
                const formattedPosts = response.data.map((post) => ({
                    image: post.featured_media_url,
                    date: new Date(post.date).toLocaleDateString(),
                    title: post.title.rendered,
                    description: post.excerpt.rendered.replace(/<[^>]+>/g, ""),
                    link: post.link,
                }));
                setPosts(formattedPosts);
            } catch (error) {
                console.error("Erro ao buscar posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 6;
    const totalPages = Math.ceil(posts.length / newsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const currentNews = posts.slice(
        (currentPage - 1) * newsPerPage,
        currentPage * newsPerPage
    );

    return (
        <div className="p-4">
            <ZoomInSection>
                {loading ? (
                    <p>Carregando notícias...</p>
                ) : (
                    <div className="flex flex-col md:flex-row items-center bg-white shadow-2xl rounded-3xl p-6 mb-12">
                        <img
                            src={currentNews[0]?.image || "/placeholder.png"}
                            alt="Featured"
                            className="w-full md:w-1/3 h-64 object-cover rounded-md mb-4 md:mb-0 md:mr-6"
                        />
                        <div className="flex flex-col w-full md:w-2/3">
                            <p className="text-gray-500 text-sm mb-2">{currentNews[0]?.date}</p>
                            <h2 className="font-bold text-2xl text-black mb-4">
                                {currentNews[0]?.title || "Sem título"}
                            </h2>
                            <p className="text-gray-600 text-lg mb-4">
                                {currentNews[0]?.description || "Sem descrição disponível."}
                            </p>
                            <a
                                href={currentNews[0]?.link || "#"}
                                className="text-blue-500 text-sm font-semibold hover:underline"
                            >
                                Leia mais
                            </a>
                        </div>
                    </div>
                )}
            </ZoomInSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {currentNews.slice(1).map((news, index) => (
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
