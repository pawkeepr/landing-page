/* eslint-disable @next/next/no-img-element */
"use client";

import { BtnLink } from "~/Components/atoms/btn";

import { FaStethoscope } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import HeaderTitle from "~/Components/atoms/header-title";
import NavbarHome from "~/Components/molecules/nav-bar-home";
import Footer from "~/Layouts/Footer";
import { Solutions } from "./solutions";
import { BusinessDifferentials } from "./business-differentials";
import { BusinessRoadmap } from "./business-roadmap";
import { ProblemsFacedByBeginners } from "./problems-faced-by-beginners";
import { ProblemsFacedByVeterinarians } from "./problems-faced-by-veterinarians";
import { PricingCard } from "~/Components/molecules/pricing-card";
import { ReasonsToUse } from "./reasons-to-use";

export const ButtonsNavBar = () => {
    return (
        <div className="flex items-center justify-center w-full gap-2">
            <BtnLink
                message="Saiba + Tutor"
                className="text-gray-500 hover:!bg-secondary-500 !border-secondary-500 border-0 w-32 mobile:border-0"
                href="/tutor/landing-page"
            >
                <MdPerson className="w-6 h-6" />
            </BtnLink>
            <BtnLink
                message="Saiba + Vet"
                className="border-primary-600 hover:!bg-secondary-500 border-0 w-32 mobile:border-0"
                href="/veterinary/landing-page"
            >
                {/* icon de cadastro */}
                <FaStethoscope className="w-6 h-4" />
            </BtnLink>
        </div>
    );
};

const HomePage = () => {
    return (
        <>
            <NavbarHome />
            <section className="min-h-screen section bg-primary-500" id="hero">
                <HeaderTitle title="HOME" />
                <div className="bg-overlay bg-overlay-pattern" />

                <div className="grid grid-cols-1 p-4 mt-5 web:grid-cols-2">
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/landing-page-01.jpg"
                                className="w-100"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                    <Zoom>
                        <div className="col-span-1 pt-5 text-center mt-lg-5">
                            <p className="p-4 font-sans text-lg font-semibold text-white web:text-2xl">
                                {`
                                    Imagine realizar uma consulta completa em no máximo 5 minutos, 
                                    sem sacrificar a qualidade do atendimento. 
                                    Com nosso aplicativo inovador, você terá acesso a recursos poderosos 
                                    na palma da sua mão.
                                `}
                            </p>
                            <ButtonsNavBar />
                        </div>
                    </Zoom>
                </div>
                <div className="fixed inset-x-0 bottom-0">
                    <Footer />
                </div>
            </section>

            <section className="section pb-0 hero-section bg-white">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid mobile:grid-cols-1 place-items-center tablet:mt-0 grid-cols-2 p-4">
                    <Zoom>
                        <div className="flex items-center text-center col-span-1">
                            <p className="text-lg web:text-2xl font-semibold font-sans p-4">
                                {`
                                  Nossa startup preenche uma lacuna no mercado, fornecendo uma
                                  plataforma adaptada para médicos veterinários que atendem a domicílio e
                                  aqueles que estão iniciando. Enquanto as soluções existentes se concentram
                                  em clínicas estabelecidas, nosso aplicativo é uma ferramenta específica para
                                  esses profissionais, permitindo que eles forneçam cuidados de qualidade aos
                                  animais de estimação diretamente em seus lares, com uma ferramenta
                                  simples e intuitiva.
                                `}
                            </p>
                        </div>
                    </Zoom>
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/landing-page-02.webp"
                                className="w-100 h-[90%] !border-none rounded-3xl"
                                alt="..."
                            />
                        </div>
                    </Slide>
                </div>
            </section>

            <section className="section bg-primary-500">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 p-4 mt-5 web:grid-cols-2">
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/landing-page-01.jpg"
                                className="w-100"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                    <ProblemsFacedByVeterinarians />
                </div>
            </section>

            <section className="section pb-0 hero-section bg-white">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid phone:grid-cols-1 place-items-center mt-0 grid-cols-2 p-4">
                    <div className="flex items-center text-center col-span-1">
                        <ProblemsFacedByBeginners />
                    </div>
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/landing-page-02.webp"
                                className="w-100 h-[90%] !border-none rounded-3xl"
                                alt="..."
                            />
                        </div>
                    </Slide>
                </div>
            </section>

            <section className="section bg-primary-500">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 p-4 mt-5 web:grid-cols-2">
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/icon-pet/dog_primary.png"
                                className="w-100 h-[90%] !border-none rounded-3xl"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                    <Zoom>
                        <div className="col-span-1 pt-5 text-center mt-lg-5">
                            <p className="p-4 font-sans text-lg font-semibold text-white web:text-2xl">
                                {`
                                   PawKeepr é uma solução personalizada para veterinários que oferecem
                                   cuidados de qualidade diretamente nas residências dos animais de estimação.
                             
                                `}
                            </p>
                            <p className="p-4 font-sans text-lg font-semibold text-white web:text-2xl">{`
                                    Nossa plataforma adapta-se às necessidades específicas desses profissionais,
                                    proporcionando usabilidade excepcional, identidade exclusiva e preços
                                    acessíveis.
                                `}</p>
                            <p className="p-4 font-sans text-lg font-semibold text-white web:text-2xl">{`      
                                   Compatível com tablets, celulares e computadores, facilita o gerenciamento de
                                   informações do paciente e a comunicação com os clientes, permitindo que os
                                   veterinários se concentrem em oferecer os melhores cuidados possíveis, onde
                                   quer que estejam.`}</p>
                        </div>
                    </Zoom>
                </div>
            </section>

            <section className="section pb-0 hero-section bg-white">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid phone:grid-cols-1 place-items-center mt-0 grid-cols-2 p-4">
                    <Zoom>
                        <div className="col-span-1 pt-5 text-center mt-lg-5">
                            <p className="text-lg web:text-xl font-semibold font-sans p-4">{`      
                                 A PawKeepr é uma startup que resolve um problema significativo para veterinários que
                                 oferecem atendimento domiciliar a animais de estimação. Tradicionalmente, esses
                                 profissionais enfrentam dificuldades devido à falta de soluções específicas no mercado.
                                 `}</p>
                            <p className="text-lg web:text-xl font-semibold font-sans p-4">{`      
                                   A PawKeepr preenche essa lacuna com uma plataforma adaptada, oferecendo
                                   usabilidade otimizada, identidade única e preço acessível. Isso permite aos veterinários
                                   domiciliares gerenciar facilmente informações dos pacientes, se comunicar com os
                                   clientes e melhorar a qualidade dos cuidados.
                                   `}</p>
                            <p className="text-lg web:text-xl font-semibold font-sans p-4">{`      
                                   Com a PawKeepr, os veterinários podem acessar rapidamente as informações médicas
                                   dos pets, sincronizar automaticamente os dados, colaborar eficientemente com os
                                   tutores e focar completamente em oferecer os melhores cuidados possíveis aos
                                   animais, onde quer que estejam.`}</p>
                        </div>
                    </Zoom>

                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/icon-pet/cat_secondary.png"
                                className="w-100 h-[90%] !border-none rounded-3xl"
                                alt="..."
                            />
                        </div>
                    </Slide>
                </div>
            </section>

            <section className="section bg-primary-500">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 p-4 mt-5 web:grid-cols-2">
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/landing-page-01.jpg"
                                className="w-100"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                    <BusinessDifferentials />
                </div>
            </section>

            <section className="section pb-0 hero-section bg-white">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid phone:grid-cols-1 place-items-center mt-0 grid-cols-2 p-4">
                    <div className="col-span-1 pt-5 text-center mt-lg-5">
                        <Solutions />
                        <Zoom>
                            <p className="text-lg web:text-2xl font-semibold font-sans p-4">
                                {`
                                 Nossa solução resolve o problema de acesso restrito às informações
                                 médicas dos pets, permitindo compartilhamento fácil entre tutores e
                                 veterinários. Em resumo, a PawKeepr promove cuidados de qualidade e
                                 acessíveis por meio de uma abordagem centrada no cliente para o
                                 compartilhamento de informações médicas.
                                `}
                            </p>
                        </Zoom>
                    </div>
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/icon-pet/jabuti-secondary.png"
                                className="w-100 "
                                alt="..."
                            />
                        </div>
                    </Slide>
                </div>
            </section>

            <section className="section bg-primary-500">
                <h2 className="text-center p-1 font-sans text-lg font-semibold text-white web:text-2xl">
                    Por que usar?
                </h2>
                <div className="bg-overlay bg-overlay-pattern" />
                <ReasonsToUse/>
            </section>

            <section className="section pb-0 hero-section bg-white">
                <BusinessRoadmap />
            </section>

            <section className="section bg-primary-500">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid gap-4 phone:grid-cols-1 p-4 mt-5 grid-cols-2">
                    <Slide left>
                        <div className="col-span-1">
                            <PricingCard
                                title="Grátis"
                                price="0,00"
                                subtitle="Faça 30 consultas grátis"
                                details="Tenha acesso a todos os recursos sem limitação"
                            />
                        </div>
                        <div className="col-span-1">
                            <PricingCard
                                title="Premium"
                                price="0,99"
                                subtitle="Pague menos de 1 dólar por consulta realizada."
                                details="Tenha acesso a todos os recursos sem limitação"
                            />
                        </div>
                    </Slide>
                </div>
            </section>
        </>
    );
};

export default HomePage;
