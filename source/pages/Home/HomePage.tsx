/* eslint-disable @next/next/no-img-element */
'use client'

import { BtnLink } from '~/Components/atoms/btn'

import { FaStethoscope } from 'react-icons/fa'
import { MdPerson } from 'react-icons/md'
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'
import HeaderTitle from '~/Components/atoms/header-title'
import NavbarHome from '~/Components/molecules/nav-bar-home'
import { PricingCard } from '~/Components/molecules/pricing-card'
import Footer from '~/Layouts/Footer'
import { BusinessDifferentials } from './business-differentials'
import { BusinessRoadmap } from './business-roadmap'
import { ProblemsFacedByBeginners } from './problems-faced-by-beginners'
import { ProblemsFacedByVeterinarians } from './problems-faced-by-veterinarians'
import { ReasonsToUse } from './reasons-to-use'
import { Solutions } from './solutions'

export const ButtonsNavBar = () => {
    return (
        <div className="flex items-center justify-center w-full gap-2">
            <BtnLink
                message="Entre Tutor"
                className="text-gray-500  !border-secondary-500 border-0 w-32 mobile:border-0"
                href="https://pawkeepr.app.br/tutor/sign-in"
            >
                <MdPerson className="w-6 h-6" />
            </BtnLink>
            <BtnLink
                message="Entre Vet"
                className="w-32 border-0 border-primary-600 mobile:border-0"
                href="https://pawkeepr.app.br/"
            >
                {/* icon de cadastro */}
                <FaStethoscope className="w-6 h-4" />
            </BtnLink>
        </div>
    )
}

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
                                    Imagine realizar uma consulta completa de forma simples e intuitiva, sem que você precise perder tempo aprendendo sobre o aplicativo? 
                                    Com nosso aplicativo inovador, você terá acesso a recursos poderosos na palma da sua mão.
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

            <section className="pb-0 bg-white section hero-section">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-2 p-4 mobile:grid-cols-1 place-items-center tablet:mt-0">
                    <Zoom>
                        <div className="flex items-center col-span-1 text-center">
                            <p className="p-4 font-sans text-lg font-semibold web:text-2xl">
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

            <section className="pb-0 bg-white section hero-section">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-2 p-4 mt-0 phone:grid-cols-1 place-items-center">
                    <div className="flex items-center col-span-1 text-center">
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
                            <p className="p-4 font-sans text-lg font-semibold text-white web:text-2xl">
                                {`
                                   PawKeepr: a solução personalizada para veterinários oferecendo
                                   cuidados de qualidade em residências de animais de estimação.
                             
                                `}
                            </p>
                            <p className="p-4 font-sans text-lg font-semibold text-white web:text-2xl">{`
                                    Nossa plataforma adapta-se às necessidades específicas desses profissionais,
                                    proporcionando usabilidade excepcional, identidade exclusiva e preços
                                    acessíveis, focando totalmente nos melhores cuidados para os bichinhos, em 
                                    qualquer localidade.
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

            <section className="pb-0 bg-white section hero-section">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-2 p-4 mt-0 phone:grid-cols-1 place-items-center">
                    <Zoom>
                        <div className="col-span-1 pt-5 text-center mt-lg-5">
                            <p className="p-4 font-sans text-lg font-semibold web:text-xl">{`      
                                 A PawKeepr é uma startup que resolve um problema significativo para veterinários que
                                 oferecem atendimento domiciliar a animais de estimação. Tradicionalmente, esses
                                 profissionais enfrentam dificuldades devido à falta de soluções específicas no mercado.
                                 `}</p>
                            <p className="p-4 font-sans text-lg font-semibold web:text-xl">{`      
                                   A PawKeepr preenche essa lacuna com uma plataforma adaptada, oferecendo
                                   usabilidade otimizada, identidade única e preço acessível. Isso permite aos veterinários
                                   domiciliares gerenciar facilmente informações dos pacientes, se comunicar com os
                                   clientes e melhorar a qualidade dos cuidados.
                                   `}</p>
                            <p className="p-4 font-sans text-lg font-semibold web:text-xl">{`      
                                   Com a PawKeepr, os veterinários podem acessar rapidamente as informações médicas
                                   dos pets, sincronizar automaticamente os dados, colaborar eficientemente com os
                                   tutores e focar completamente em oferecer os melhores cuidados possíveis aos
                                   animais, onde quer que estejam.`}</p>
                        </div>
                    </Zoom>
                </div>
            </section>

            <section className="pb-0 bg-white section hero-section">
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

            <section className="pb-0 bg-white section hero-section">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-2 p-4 mt-0 phone:grid-cols-1 place-items-center">
                    <div className="col-span-1 pt-5 text-center mt-lg-5">
                        <Solutions />
                        <Zoom>
                            <p className="p-4 font-sans text-lg font-semibold web:text-2xl">
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
                <h2 className="p-1 font-sans text-lg font-semibold text-center text-white web:text-2xl">
                    Por que usar?
                </h2>
                <div className="bg-overlay bg-overlay-pattern" />
                <ReasonsToUse />
            </section>

            <section className="pb-0 bg-white section hero-section">
                <BusinessRoadmap />
            </section>

            <section className="section bg-primary-500">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-2 gap-4 p-4 mt-5 phone:grid-cols-1">
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
    )
}

export default HomePage
