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
import { PricingCard } from '~/Components/molecules/pricing-card'

export const ButtonsNavBar = () => {
    return (
        <div className="flex items-center justify-center px-60 gap-2">
            <BtnLink
                message="Entre Tutor"
                className="text-black  border-gray-950 hover:bg-yellow-400 rounded-3xl border-3 w-44 mobile:border-3 text-lg z-50"
                href="https://pawkeepr.app.br/tutor/sign-in"
            >
                <MdPerson className="w-6 h-6" />
            </BtnLink>
            {/*<BtnLink
                message="Entre Vet"
                className="rounded-3xl border-3 border-gray-950 hover:bg-gray-600 mobile:border-3 text-lg z-50"
                href="https://pawkeepr.app.br/"
            >
                <FaStethoscope className="w-6 h-4" />
            </BtnLink>*/}
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

            <section className="flex flex-col items-center justify-center bg-gray-200 pb-14">
                <h1 className="pb-10 font-sans text-5xl font-bold text-stone-800 lg:text-5xl">
                    Diferencial?
                </h1>
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
                        <div className="flex flex-col justify-center items-center col-span-1">
                            <img
                                src="\home\ilustracao2.png"
                                className="w-7/12 pb-10"
                                alt="..."
                            />
                            <ButtonsNavBar />
                        </div>
                    </Slide>
                </div>
            </section>

            <section className="bg-primary-500">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 p-4 pt-5 web:grid-cols-2">
                    <Slide left>
                        <div className="justify-center items-center flex col-span-1">
                            <img
                                src="/home/ilustracao6.png"
                                className= "w-10/12 pr-16"
                                alt="Landing Page"
                            />
                        </div>
                        <div className='col-span-1'>
                            <p className="pl-1 font-sans text-2xl font-bold text-left text-secondary-500 lg:text-2xl">
                                Nossas funcionalidades
                            </p>
                            <h1 className="pt-0 pb-4 font-sans text-5xl font-bold text-left text-white lg:text-5xl">
                                Recursos de ponta disponíveis para a sua experiência!
                            </h1>
                            <div className="flex flex-wrap justify-center gap-10">
                                {/* Primeiro Tópico */}
                                <div className="flex flex-col items-center p-6 w-80">
                                    <div className="flex items-center mb-4">
                                        <img
                                            src="/home/icon5.png"
                                            alt="Ícone"
                                            className="w-16 h-16 mr-2"
                                        />
                                        <h2 className="text-2xl font-bold text-secondary-500">
                                            Cadastro Pet Ilimitado
                                        </h2>
                                    </div>
                                    <p className="text-lg text-left text-white">
                                        Cadastre todos os seus pets e compartilhe-os entre os membros da família, mantendo seus dados atualizados de qualquer lugar.
                                    </p>
                                </div>

                                {/* Segundo Tópico */}
                                <div className="flex flex-col items-center p-6 w-80">
                                    <div className="flex items-center mb-4">
                                        <img
                                            src="/home/icon6.png"
                                            alt="Ícone"
                                            className="w-16 h-16 mr-2"
                                        />
                                        <h2 className="text-2xl font-bold text-secondary-500">
                                            Encontre Veterinários
                                        </h2>
                                    </div>
                                    <p className="text-lg text-left text-white">
                                        Encontre veterinários perto de você e escolha o melhor profissional para o seu bichinho, incluindo opções de telemedicina para consultas virtuais.
                                    </p>
                                </div>

                                {/* Terceiro Tópico */}
                                <div className="flex flex-col items-center p-6 w-80">
                                    <div className="flex items-center mb-4">
                                        <img
                                            src="/home/icon7.png"
                                            alt="Ícone"
                                            className="w-16 h-16 mr-2"
                                        />
                                        <h2 className="text-2xl font-bold text-secondary-500">
                                            Agendamento de Consultas
                                        </h2>
                                    </div>
                                    <p className="text-lg text-left text-white">
                                        Agende consultas veterinárias pela plataforma, economizando tempo com nossa interface intuitiva e
                                        amigável
                                    </p>
                                </div>

                                {/* Quarto Tópico */}
                                <div className="flex flex-col items-center p-6 w-80">
                                    <div className="flex items-center mb-4">
                                        <img
                                            src="/home/icon1-yellow.png"
                                            alt="Ícone"
                                            className="w-16 h-16 mr-2"
                                        />
                                        <h2 className="text-2xl font-bold text-secondary-500">
                                            Obtenha o Prontuário
                                        </h2>
                                    </div>
                                    <p className="text-lg text-left text-white">
                                    Nossa plataforma oferece uma
                                    sincronização automática de dados em
                                    todas as consultas veterinárias.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </Slide>
                </div>
            </section>

            <section className="pb-8 bg-white">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 pt-20 pl-32 md:mt-0 md:grid-cols-2">
                    <div className="flex flex-col col-span-1 text-left">
                        <p className="pl-1 font-sans text-2xl font-bold text-left text-secondary-500 lg:text-2xl">
                            Plataforma inovadora
                        </p>
                        <h1 className="pt-0 pb-4 font-sans text-5xl font-bold text-left text-primary-500 lg:text-5xl">
                            Veterinário, por <br/>que usar Pawkeepr?
                        </h1>
                        <ul className="pl-3 space-y-4 list-none">
                            <li className="flex items-center justify-start font-sans text-2xl font-semibold text-black">
                                <img
                                    src="\home\icon-checked.png"
                                    alt="Icon"
                                    className="w-5 h-5 mr-2"
                                />
                                <span>Plataforma intuitiva</span>
                            </li>
                            <li className="flex items-center justify-start font-sans text-2xl font-semibold text-black">
                                <img
                                    src="\home\icon-checked.png"
                                    alt="Icon"
                                    className="w-5 h-5 mr-2"
                                />
                                <span>Melhor atendimento a domicílio</span>
                            </li>
                            <li className="flex font-sans font-semibold text-black text-2xl items-center justify-start">
                                <img src="\home\icon-checked.png" alt="Icon" className="w-5 h-5 mr-2" />
                                <span>Marketing e networking</span>
                            </li>
                            <li className="flex font-sans font-semibold text-black text-2xl items-center justify-start">
                                <img src="\home\icon-checked.png" alt="Icon" className="w-5 h-5 mr-2" />
                                <span>Administração do Negócio</span>
                            </li>
                            <li className="flex items-center justify-start font-sans text-2xl font-semibold text-black">
                                <img
                                    src="\home\icon-checked.png"
                                    alt="Icon"
                                    className="w-5 h-5 mr-2"
                                />
                                <span>Atendimento de qualquer aparelho</span>
                            </li>
                            <li className="flex items-center justify-start font-sans text-2xl font-semibold text-black">
                                <img
                                    src="\home\icon-checked.png"
                                    alt="Icon"
                                    className="w-5 h-5 mr-2"
                                />
                                <span>Cobre o preço que achar melhor</span>
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

           <section className="section bg-primary-500">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 p-4 mt-5 web:grid-cols-2">
                    <Slide left>
                        <div className="col-span-1">
                            <PricingCard
                                title="PawClub Free"
                                price="0,00"
                                subtitle="Use a plataforma sem custos"
                                details="Cadastre seus pets e encontre veterinários"
                            />
                        </div>
                        <div className="col-span-1">
                            <PricingCard
                                title="PawClub Benefícios"
                                price="60,00"
                                subtitle="Pague 12x de R$5 ou R$60 anuais"
                                details="Ajude-nos a manter a plataforma funcionando"
                            />
                        </div>
                    </Slide>
                </div>
            </section>

            <section className="pt-4 pb-12 bg-white ">
                <h1 className="flex justify-center font-sans text-5xl font-bold text-black lg:text-5xl">
                    Conheça a Tagkeepr
                </h1>
                <div className="grid grid-cols-1 py-4 pl-16 pr-12 web:grid-cols-2">
                    <Zoom>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="pt-4 text-4xl font-sans font-bold text-primary-500">Traga mais segurança para<br/>o seu pet!</h1>
                            <p className="py-3 px-32 font-sans text-xl font-semibold text-justify text-black lg:text-2xl">
                            Imprima a TagKeepr e use-a em sua coleira. Caso ele se perca, quem o encontrar poderá escanear o código,
                            acessar as informações do seu pet e entrar em contato com você rapidamente.
                            </p>
                            <img src="\home\tagkeepr.jpeg" alt="Ícone" className="w-6/12" />
                        </div>
                    </Zoom>
                    <Slide left>
                        <div className="col-span-1 justify-center flex">
                            <img
                                src="/home/ilustracao1.png"
                                className="py-12 w-11/12 "
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                </div>
            </section>
        </>
    )
}

export default HomePage
