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
import ListingFactory from "~/Components/molecules/listing-factory/listing-factory";
import { Solutions } from "./solutions";
import { BusinessDifferentials } from "./business-differentials";
import { ProblemsFacedByBeginners } from "./problems-faced-by-beginners";
import { ProblemsFacedByVeterinarians } from "./problems-faced-by-veterinarians";

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
                            <p className="p-4 font-sans text-lg font-semibold text-white lg:text-2xl">
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
                <div className="grid grid-cols-1 place-items-center md:mt-0 md:grid-cols-2 p-4">
                    <Zoom>
                        <div className="flex items-center text-center col-span-1">
                            <p className="text-lg lg:text-2xl font-semibold font-sans p-4">
                                {`
                                  Nossa startup revoluciona o mercado, oferecendo uma plataforma 
                                  exclusiva para médicos veterinários domiciliares e iniciantes. 
                                  De forma simples e intuitiva para esses profissionais, proporcionamos 
                                  cuidados de qualidade aos animais de estimação no conforto de seus lares, 
                                  preenchendo uma lacuna no setor tradicional das clínicas.
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
                <div className="grid grid-cols-1 place-items-center md:mt-0 md:grid-cols-2 p-4">
                    <div className="flex items-center text-center col-span-1">
                        <ProblemsFacedByBeginners />
                    </div>
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
                                src="/icon-pet/dog_primary.png"
                                className="w-100 h-[90%] !border-none rounded-3xl"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                    <Zoom>
                        <div className="col-span-1 pt-5 text-center mt-lg-5">
                            <p className="p-4 font-sans text-lg font-semibold text-white lg:text-2xl">
                                {`
                                   PawKeepr: a solução personalizada para veterinários oferecendo
                                   cuidados de qualidade em residências de animais de estimação.
                             
                                `}
                            </p>
                            <p className="p-4 font-sans text-lg font-semibold text-white lg:text-2xl">{`
                                    Nossa plataforma adapta-se às necessidades específicas desses profissionais,
                                    proporcionando usabilidade excepcional, identidade exclusiva e preços
                                    acessíveis, focando totalmente nos melhores cuidados para os bichinhos, em 
                                    qualquer localidade.
                                `}</p>
                            <p className="p-4 font-sans text-lg font-semibold text-white lg:text-2xl">{`      
                                   Compatível com tablets, celulares e computadores, simplifica o gerenciamento 
                                   de informações e a comunicação com os clientes, permitindo que os veterinários 
                                   acessem rapidamente as informações médicas dos pets e sincronizem automaticamente 
                                   os dados, colaborar eficientemente com os tutores.
                                   `}</p>
                        </div>
                    </Zoom>
                </div>
            </section>

            <section className="section pb-0 hero-section bg-white">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 place-items-center md:mt-0 md:grid-cols-2 p-4">
                    <div className="col-span-1 pt-5 text-center mt-lg-5">
                        <Solutions />
                        <Zoom>
                            <p className="text-lg lg:text-2xl font-semibold font-sans p-4">
                                {`
                                Em resumo, a PawKeepr promove cuidados de qualidade e acessíveis 
                                por meio de uma abordagem centrada no cliente para o compartilhamento 
                                de informações médicas.
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
                <h2 className="text-center p-1 font-sans text-lg font-semibold text-white lg:text-2xl">
                    Por que usar?
                </h2>
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 web:grid-cols-2">
                    <Zoom right>
                        <div className="col-span-1 pt-5 mt-5 text-center mt-lg-5">
                            <div className="bg-secondary rounded-xl w-3/4 shadow-md m-5">
                                <p className="p-4 font-sans text-lg font-semibold text-white lg:text-2xl">
                                    {`
                                 1. Com nosso app, você terá acesso
                                 instantâneo às informações médicas
                                 dos seus pacientes, eliminando a
                                 espera por transferências de arquivos
                                 ou consultas adicionais, garantindo
                                 um atendimento mais eficiente e
                                 preciso.
                                
                                    `}
                                </p>
                            </div>
                        </div>
                    </Zoom>
                    <Slide left>
                        <div className="col-span-1 hidden lg:block">
                            <img
                                src="/bg-three.jpg"
                                className="w-[75%]"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                </div>
                <div className="grid grid-cols-1 p-2 web:grid-cols-2">
                    <Slide right>
                        <div className="col-span-1">
                            <img
                                src="/Sem título.jpg"
                                className="w-100"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                    <Zoom left>
                        <div className="col-span-1 pt-5 text-center mt-lg-5">
                            <div className="bg-secondary rounded-xl w-3/4 shadow-md m-2">
                                <p className="p-4 font-sans text-lg font-semibold text-white lg:text-2xl">
                                    {`
                                 2. Nossa plataforma sincroniza 
                                automaticamente os dados das consultas, 
                                garantindo registros sempre atualizados 
                                e disponíveis, economizando tempo e 
                                aumentando a eficiência do atendimento.
                                
                                    `}
                                </p>
                            </div>
                        </div>
                    </Zoom>
                </div>
                <div className="grid grid-cols-1 p-4 web:grid-cols-2">
                    <Zoom right>
                        <div className="col-span-1 pt-5 text-center mt-lg-5">
                            <div className="bg-secondary rounded-xl w-3/4 shadow-md m-2">
                                <p className=" p-4 font-sans text-lg font-semibold text-white lg:text-2xl">
                                    {`
                                 3. Facilitamos a colaboração entre veterinário e
                                 clientes, permitindo que ambos
                                 compartilhem insights e informações
                                 vitais para o cuidado dos pets.
                                
                                    `}
                                </p>
                            </div>
                        </div>
                    </Zoom>
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/landing-page-01.jpg"
                                className="w-100"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                </div>
                <div className="grid grid-cols-1 p-4 web:grid-cols-2">
                    <Slide right>
                        <div className="col-span-1">
                            <img
                                src="/icon-pet/teiu-primary.png"
                                className="w-[60%]"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                    <Zoom left>
                        <div className="col-span-1 pt-5 text-center mt-lg-5">
                            <div className="bg-secondary rounded-xl w-3/4 shadow-md m-2">
                                <p className="p-4 font-sans text-lg font-semibold text-white lg:text-2xl">
                                    {`
                                 4. Investimos significativamente 
                                 em protocolos de segurança de 
                                 dados para garantir a privacidade 
                                 das informações médicas dos pets, 
                                 protegendo seus registros contra 
                                 acessos não autorizados.
                                
                                    `}
                                </p>
                            </div>
                        </div>
                    </Zoom>
                </div>
                <div className="grid grid-cols-1 p-4 web:grid-cols-2">
                    <Zoom right>
                        <div className="col-span-1 pt-5 text-center mt-lg-5">
                            <div className="bg-secondary rounded-xl w-3/4 shadow-md m-2">
                                <p className=" p-4 font-sans text-lg font-semibold text-white lg:text-2xl">
                                    {`
                                 5 .Com uma interface intuitiva e 
                                amigável, o PawKeepr oferece uma 
                                experiência de usuário fluida, 
                                simplificando o gerenciamento de  
                                informações médicas de pets por 
                                apenas $0,99 por consulta.
                                
                                    `}
                                </p>
                            </div>
                        </div>
                    </Zoom>
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/Sem título2.jpg"
                                className="w-100"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                </div>
            </section>

            <section className="section pb-0 hero-section bg-white">
                <div className="grid grid-cols-1 p-4 web:grid-cols-2">
                    <Zoom>
                        <div className="col-span-1 pt-5 text-center mt-lg-5">
                            <p className="p-2 font-sans text-lg font-semibold lg:text-2xl">
                                {`Roadmap`}
                            </p>
                            <div className="w-3/6 flex justify-start">
                                <div className="bg-secondary rounded-xl shadow-md m-2">
                                    <p className="p-3 font-sans text-lg font-semibold text-white lg:text-xl">
                                        {`Inteligência Artificial Abril de 2025`}
                                    </p>
                                </div>
                            </div>
                            <div className="w-4/6 flex justify-end">
                                <div className="bg-secondary rounded-xl shadow-md m-2">
                                    <p className=" p-3 font-sans text-lg font-semibold text-white lg:text-xl">
                                        {`VetMovel e Telemedicina Dezembro de 2024`}
                                    </p>
                                </div>
                            </div>
                            <div className="w-5/6 flex justify-end">
                                <div className="bg-secondary rounded-xl shadow-md m-2">
                                    <p className=" p-3 font-sans text-lg font-semibold text-white lg:text-xl">
                                        {`Secretaria Inteligente Agosto de 2024`}
                                    </p>
                                </div>
                            </div>
                            <div className="w-6/6 flex justify-end">
                                <div className="bg-secondary rounded-xl shadow-md m-2">
                                    <p className=" p-3 font-sans text-lg font-semibold text-white lg:text-xl">
                                        {`Consultas veterinárias Abril de 2024`}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/Sem título2.jpg"
                                className="w-100"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                </div>
            </section>

            <section className="section bg-primary-500">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 p-4 mt-5 web:grid-cols-2">
                    <Slide left>
                        <div className="col-span-1 rounded-md">
                            <div className="flex justify-center">
                                <div className="bg-white flex flex-col gap-4 items-center justify-center rounded-lg p-4 w-1/2 h-[400px]">
                                    <h3 className="lg:text-5xl text-gray-500">
                                        Grátis
                                    </h3>
                                    <p className="lg:text-4xl text-primary">
                                        $ 0,00
                                    </p>
                                    <p className="lg:text-xl">
                                        Faça 30 consultas grátis
                                    </p>
                                    <p className="lg:text-md">
                                        Tenha acesso a todos os recursos sem
                                        limitação
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex justify-center">
                                <div className="bg-white flex flex-col gap-4 items-center justify-center rounded-lg p-4 w-1/2 h-[400px]">
                                    <h3 className="lg:text-5xl text-gray-500">
                                        Premium
                                    </h3>
                                    <p className="lg:text-4xl text-primary">
                                        $ 0,99
                                    </p>
                                    <p className="lg:text-xl text-gray-700">
                                        Pague menos de 1 dólar por consulta
                                        realizada.
                                    </p>
                                    <p className="lg:text-md text-gray-700">
                                        Tenha acesso a todos os recursos sem
                                        limitação
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </section>
        </>
    );
};

export default HomePage;
