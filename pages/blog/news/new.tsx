'use client';

import NavbarHome from '~/Components/molecules/nav-bar-home';
import Footer from '~/Layouts/Footer';
import HeaderTitle from '~/Components/atoms/header-title';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const NewsDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const fetchNewsDetail = async () => {
            try {
                const response = await axios.get(
                    `https://pawkeepr.blog/wp-json/wp/v2/posts/${id}`
                );
                setNews(response.data);
            } catch (error) {
                console.error("Erro ao buscar a notícia:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNewsDetail();
    }, [id]);

    if (loading) {
        return <p>Carregando notícia...</p>;
    }

    if (!news) {
        return <p>Notícia não encontrada.</p>;
    }

    return (
        <section className="w-full min-h-screen flex flex-col">
            <NavbarHome />
            <section className="relative pt-16 bg-primary-500" id="hero">
                <HeaderTitle title={news.title.rendered || "Notícia"} />
            </section>
            <section className="flex-grow flex flex-col items-center justify-start bg-primary-500 pb-14">
                <div className="p-6 w-full max-w-5xl bg-white shadow-lg rounded-md mb-6">
                    <img
                        src={news.featured_media_url || "/Tutor1.png"}
                        alt={news.title.rendered}
                        className="w-full h-64 object-cover rounded-md mb-6"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/Tutor1.png';
                        }}
                    />
                    <p className="text-gray-500 text-sm mb-2">
                        {new Date(news.date).toLocaleDateString()}
                    </p>
                    <h1 className="font-bold text-3xl text-black mb-6">{news.title.rendered}</h1>
                    <div
                        className="prose prose-lg text-gray-800"
                        dangerouslySetInnerHTML={{ __html: news.content.rendered }}
                    />
                </div>
            </section>
            <Footer />
        </section>
    );
};

export default NewsDetail;
