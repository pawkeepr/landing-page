/* eslint-disable @next/next/no-img-element */
'use client'

import { BtnLink } from '~/Components/atoms/btn'

import { FaStethoscope } from 'react-icons/fa'
import { MdPerson } from 'react-icons/md'
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'
import HeaderTitle from '~/Components/atoms/header-title'
import NavbarHome from '~/Components/molecules/nav-bar-home'
import Footer from '~/Layouts/Footer'
import { ProblemsFacedByBeginners } from './problems-faced-by-beginners'
import { ProblemsFacedByVeterinarians } from './problems-faced-by-veterinarians'
import { Solutions } from './solutions'

export const ButtonsNavBar = () => {
    return (
        <div className="flex items-center justify-center px-20 gap-36">
            <BtnLink
                message="Entre Tutor"
                className="text-black  border-gray-950 hover:bg-yellow-400 rounded-3xl border-3 w-32 mobile:border-3 text-lg z-50"
                href="https://pawkeepr.app.br/tutor/sign-in"
            >
                <MdPerson className="w-6 h-6" />
            </BtnLink>
            <BtnLink
                message="Entre Vet"
                className="rounded-3xl border-3 border-gray-950 hover:bg-gray-600 mobile:border-3 text-lg z-50"
                href="https://pawkeepr.app.br/"
            >
                <FaStethoscope className="w-6 h-4" />
            </BtnLink>
        </div>
    )
}

const HomePage = () => {
    return (
        <>
            <NavbarHome />
            <section className="bg-primary-500 pt-16 relative" id="hero">
                <HeaderTitle title="HOME" />
                <div className="bg-overlay-pattern absolute inset-0 z-10"/>

                <div className="grid grid-cols-1 px-4 m-0 web:grid-cols-2 relative z-20">
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="\home\ilustracao5.png"
                                className="w-8/12 ml-24 mt-3"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                    <Zoom>
                        <div className="col-span-1 pl-9 pr-4 pt-10 mt-5">
                            <h1 className=" pt-10 font-sans text-4xl font-bold text-white lg:text-4xl text-left">
                                    Descubra a simplicidade<br/>
                                    e o poder de seus atendimentos!
                            </h1>
                            <p className="pb-4 pt-2 font-sans text-lg font-semibold text-white lg:text-2xl text-left">
                                {`
                                    Imagine realizar uma consulta completa de forma simples e intuitiva, 
                                    sem que você precise perder tempo aprendendo sobre o aplicativo? 
                                    Com nosso aplicativo inovador, você terá acesso a recursos poderosos 
                                    na palma da sua mão.
                                `}
                            </p>
                            <ButtonsNavBar />
                        </div>
                    </Zoom>
                </div>
                <div className="flex flex-col items-center justify-end h-full relative z-20">
                    <h1 className = " pb-2 font-sans text-5xl font-bold text-white lg:text-5xl">Qual é o nosso</h1>
                </div>
                <div className="fixed inset-x-0 bottom-0 z-20">
                    <Footer />
                </div>
            </section>

            <section className="bg-gray-200 pb-14 flex flex-col items-center justify-center">
                
                <h1 className = "font-sans pb-12 text-5xl font-bold text-stone-800 lg:text-5xl">Diferencial?</h1>
                <div className="flex space-x-10">
                    <Zoom>
                        <div className="py-12 px-4 flex flex-col rounded-3xl w-80 h-80 bg-white shadow-2xl">
                            <div className=" pb-2 flex mb-2">
                                <img src="\home\icon1.png" alt="Ícone" className="w-20 h-20" />
                                <h2 className="pl-2 text-3xl font-sans font-bold text-black">Prontuário<br/>Atualizado</h2>
                            </div>

                            <p className="text-lg text-left font-sans font-semibold">
                            Registros médicos atualizados automaticamente em todas as consultas. Acesse as informações de qualquer lugar.
                            </p>
                        </div>

                        <div className="pt-11 pb-12 px-3 flex flex-col rounded-3xl w-80 h-80 bg-white shadow-2xl">
                            <div className="flex mb-2">
                                <img src="\home\icon2.png" alt="Ícone" className="w-24 h-24" />
                                <h2 className="pl-2 pt-2 text-3xl font-sans font-bold text-black">Segurança e<br/>Privacidade</h2>
                            </div>

                            <p className="text-lg text-left font-sans font-semibold">
                            Investimos em segurança de dados para garantir a confidencialidade das informações médicas dos animais.
                            </p>
                        </div>

                        <div className="py-12 px-4 flex flex-col rounded-3xl w-80 h-80 bg-white shadow-2xl">
                            <div className=" pb-2 flex mb-2">
                                <img src="\home\icon3.png" alt="Ícone" className="w-20 h-20" />
                                <h2 className="pl-3 text-3xl font-sans font-bold text-black">Preços<br/>Acessíveis</h2>
                            </div>

                            <p className="text-lg text-left font-sans font-semibold">
                            Marca que reflete os valores dos veterinários, com um modelo de preço acessível, fortalecendo a conexão com os clientes.
                            </p>
                        </div>
                        
                        <div className="py-12 px-4 flex flex-col rounded-3xl w-80 h-80 bg-white shadow-2xl">
                            <div className=" pb-2 flex mb-2">
                                <img src="\home\icon4.png" alt="Ícone" className="w-20 h-20" />
                                <h2 className="pl-2 text-3xl font-sans font-bold text-black">Aplicação<br/>Responsiva</h2>
                            </div>

                            <p className="text-lg text-left font-sans font-semibold">
                            Acesse à PawKeepr em qualquer dispositivo móvel e conte com suporte técnico contínuo e treinamento para maximizar o uso da plataforma.
                            </p>
                        </div>
                    </Zoom>
                </div>
            </section>

            <section className="pb-0 bg-white">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 p-4 place-items-center md:mt-0 md:grid-cols-2">
                    <Zoom>
                        <div className="pl-4 flex flex-col col-span-1 text-left">
                            <h1 className="pb-3 font-sans text-4xl text-secondary-500 text-left font-bold lg:text-4xl">Conheça a Pawkeepr</h1>
                            <p className="font-sans text-lg font-semibold lg:text-2xl">
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
                        <div className="flex justify-center items-center col-span-1">
                            <img
                                src="\home\ilustracao2.png"
                                className="w-7/12"
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

            <section className="pb-8 bg-white">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 px-4 pt-10 place-items-center md:mt-0 md:grid-cols-2">
                    <div className="flex flex-col col-span-1 text-left">
                        <p className="pl-1 font-sans text-2xl text-secondary-500 text-left font-bold lg:text-2xl">Plataforma inovadora</p>
                        <h1 className="pb-4 pt-0 font-sans text-5xl text-primary-500 text-left font-bold lg:text-5xl">Por que usar Pawkeepr?</h1>
                        <ul className="pl-3  list-none space-y-4">
                            <li className="flex font-sans font-semibold text-black text-2xl items-center justify-start">
                                <img src="\home\icon-checked.png" alt="Icon" className="w-5 h-5 mr-2" />
                                <span>Prontuário atualizado</span>
                            </li>
                            <li className="flex font-sans font-semibold text-black text-2xl items-center justify-start">
                                <img src="\home\icon-checked.png" alt="Icon" className="w-5 h-5 mr-2" />
                                <span>Atendimento eficiente</span>
                            </li>
                            <li className="flex font-sans font-semibold text-black text-2xl items-center justify-start">
                                <img src="\home\icon-checked.png" alt="Icon" className="w-5 h-5 mr-2" />
                                <span>Marketing e networking</span>
                            </li>
                            <li className="flex font-sans font-semibold text-black text-2xl items-center justify-start">
                                <img src="\home\icon-checked.png" alt="Icon" className="w-5 h-5 mr-2" />
                                <span>Administração do Negócio</span>
                            </li>
                            <li className="flex font-sans font-semibold text-black text-2xl items-center justify-start">
                                <img src="\home\icon-checked.png" alt="Icon" className="w-5 h-5 mr-2" />
                                <span>Compatibilidade móvel</span>
                            </li>
                            <li className="flex font-sans font-semibold text-black text-2xl items-center justify-start">
                                <img src="\home\icon-checked.png" alt="Icon" className="w-5 h-5 mr-2" />
                                <span>Comunicação facilitada</span>
                            </li>
                            <li className="flex font-sans font-semibold text-black text-2xl items-center justify-start">
                                <img src="\home\icon-checked.png" alt="Icon" className="w-5 h-5 mr-2" />
                                <span>Segurança de dados</span>
                            </li>
                            <li className="flex font-sans font-semibold text-black text-2xl items-center justify-start">
                                <img src="\home\icon-checked.png" alt="Icon" className="w-5 h-5 mr-2" />
                                <span>Interface intuitiva</span>
                            </li>
                            <li className="flex font-sans font-semibold text-black text-2xl items-center justify-start">
                                <img src="\home\icon-checked.png" alt="Icon" className="w-5 h-5 mr-2" />
                                <span>Identidade única</span>
                            </li>
                            <li className="flex font-sans font-semibold text-black text-2xl items-center justify-start">
                                <img src="\home\icon-checked.png" alt="Icon" className="w-5 h-5 mr-2" />
                                <span>Preço acessível</span>
                            </li>
                        </ul>
                    </div>
                    <Slide left>
                        <div className="col-span-1 justify-center items-center flex">
                            <img
                                src="\home\ilustracao4.png"
                                className="w-10/12"
                                alt="..."
                            />
                        </div>
                    </Slide>
                </div>
            </section>

            <section className="pb-0 bg-white section hero-section">
                <div className="grid grid-cols-1 p-4 web:grid-cols-2">
                    <Zoom>
                        <div className="col-span-1 pt-5 text-center mt-lg-5">
                            <p className="p-2 font-sans text-lg font-semibold lg:text-2xl">
                                {`Roadmap`}
                            </p>
                            <div className="flex justify-start w-3/6">
                                <div className="m-2 shadow-md bg-secondary rounded-xl">
                                    <p className="p-3 font-sans text-lg font-semibold text-white lg:text-xl">
                                        {`Inteligência Artificial Abril de 2025`}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-end w-4/6">
                                <div className="m-2 shadow-md bg-secondary rounded-xl">
                                    <p className="p-3 font-sans text-lg font-semibold text-white lg:text-xl">
                                        {`VetMovel e Telemedicina Dezembro de 2024`}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-end w-5/6">
                                <div className="m-2 shadow-md bg-secondary rounded-xl">
                                    <p className="p-3 font-sans text-lg font-semibold text-white lg:text-xl">
                                        {`Secretaria Inteligente Agosto de 2024`}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-end w-6/6">
                                <div className="m-2 shadow-md bg-secondary rounded-xl">
                                    <p className="p-3 font-sans text-lg font-semibold text-white lg:text-xl">
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
                                    <h3 className="text-gray-500 lg:text-5xl">
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
                                    <h3 className="text-gray-500 lg:text-5xl">
                                        Premium
                                    </h3>
                                    <p className="lg:text-4xl text-primary">
                                        $ 0,99
                                    </p>
                                    <p className="text-gray-700 lg:text-xl">
                                        Pague menos de 1 dólar por consulta
                                        realizada.
                                    </p>
                                    <p className="text-gray-700 lg:text-md">
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
    )
}

export default HomePage
