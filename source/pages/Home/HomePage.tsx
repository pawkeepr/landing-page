/* eslint-disable @next/next/no-img-element */
'use client'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import { MdPerson } from 'react-icons/md'
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'
import { BtnLink } from '~/Components/atoms/btn'
import HeaderTitle from '~/Components/atoms/header-title'
import SlideInSection from '~/Components/atoms/slide'
import ZoomInSection from '~/Components/atoms/zoom'
import NavbarHome from '~/Components/molecules/nav-bar-home'
import { PricingCard } from '~/Components/molecules/pricing-card'
import Footer from '~/Layouts/Footer'

export const ButtonsNavBar = () => {
    return (
        <div className="flex items-center justify-center gap-2 px-60">
            <BtnLink
                message="Entre Tutor"
                className="z-50 text-lg text-black border-gray-950 hover:bg-secondary-500 rounded-3xl border-3 w-44 mobile:w-52 mobile:border-3"
                href="https://pawkeepr.app.br/tutor/sign-in"
            >
                <MdPerson className="w-6 h-6" />
            </BtnLink>
            {/*<BtnLink
                message="Entre Vet"
                className="z-50 text-lg rounded-3xl border-3 border-gray-950 hover:bg-gray-600 mobile:border-3"
                href="https://pawkeepr.app.br/"
            >
                <FaStethoscope className="w-6 h-4" />
            </BtnLink>*/}
        </div>
    )
}

export const StoreButtons = () => {
    return (
        <div className="flex items-center justify-center gap-8">
            <BtnLink
                message="Play Store"
                className="z-50 text-lg text-black border-gray-950 hover:bg-secondary-500 rounded-3xl border-3 w-44 mobile:border-3"
                href="https://pawkeepr.app.br/tutor/sign-in"
            >
                <FaGooglePlay className="w-6 h-6" />
            </BtnLink>
            <BtnLink
                message="Aple Store"
                className="z-50 text-lg rounded-3xl border-3 text-secondary-500 border-gray-950 hover:bg-gray-600 w-44 mobile:border-3"
                href="https://pawkeepr.app.br/"
            >
                <FaApple className="w-6 h-6" />
            </BtnLink>
        </div>
    )
}

const HomePage = () => {
    return (
        <section className="w-full overflow-x-hidden">
            <NavbarHome />
            <section className="relative pt-16 bg-primary-500" id="hero">
                <HeaderTitle title="Sobre nós" />
                <div className="absolute inset-0 z-10 bg-overlay-pattern" />

                <div className="relative z-20 grid grid-cols-1 px-4 m-0 web:grid-cols-2">
                    <SlideInSection>
                        <div className="col-span-1">
                            <img
                                src="/home/ilustracao1.png"
                                className="w-9/12 mt-3 mobile:w-11/12 mobile:ml-4 web:ml-24"
                                alt="Landing Page"
                            />
                        </div>
                    </SlideInSection>
                    <ZoomInSection>
                        <div className="col-span-1 pt-10 pr-4 mt-5 pl-9 mobile:pt-0 mobile:mt-0">
                            <h1 className="pt-10 font-sans text-4xl font-bold text-left text-white mobile:pb-4 lg:text-4xl">
                                Você tutor, pode transformar o Cuidado do Seu Pet
                                com o app Pawkeepr!
                            </h1>
                            <p className="pt-2 pb-4 font-sans text-lg font-semibold text-left text-white mobile:mb-5 lg:text-2xl">
                                {`
                                        Imagine poder gerenciar a saúde do seu pet de forma
                                    simples e intuitiva, sem perder tempo aprendendo a usar
                                    o aplicativo. Com o Pawkeepr, você tem acesso a recursos
                                    poderosos na palma da sua mão, tornando o cuidado com
                                    seu pet mais fácil e eficiente.
                                    `}
                            </p>
                            {/*<div className='px-28'>
                                    <StoreButtons/>
                                </div>*/}
                        </div>
                    </ZoomInSection>
                </div>
                <div className="relative z-20 flex flex-col items-center justify-end h-full">
                    <h1 className="pb-2 font-sans text-5xl font-bold text-white lg:text-5xl">
                        Qual é o nosso
                    </h1>
                </div>
            </section>

            <section className="flex flex-col items-center justify-center bg-gray-200 pb-14">
                <h1 className="pb-10 font-sans text-5xl font-bold text-stone-800 lg:text-5xl">
                    Diferencial?
                </h1>
                <div className="flex flex-col mobile:space-y-10 web:flex-row web:space-x-10">
                    <ZoomInSection>
                        <div className="flex flex-col px-4 py-12 bg-white shadow-2xl rounded-3xl w-80 h-80">
                            <div className="flex pb-2 mb-2 ">
                                <img
                                    src="\home\icon1.png"
                                    alt="Ícone"
                                    className="w-20 h-20"
                                />
                                <h2 className="pl-2 font-sans text-3xl font-bold text-black">
                                    Prontuário
                                    <br />
                                    Atualizado
                                </h2>
                            </div>
                        

                            <p className="font-sans text-lg font-semibold text-left">
                                Registros médicos atualizados automaticamente em
                                todas as consultas. Acesse as informações de
                                qualquer lugar.
                            </p>
                        </div>
                    </ZoomInSection>

                    <ZoomInSection>
                        <div className="flex flex-col px-3 pb-12 bg-white shadow-2xl pt-11 rounded-3xl w-80 h-80">
                            <div className="flex mb-2">
                                <img
                                    src="\home\icon2.png"
                                    alt="Ícone"
                                    className="w-24 h-24"
                                />
                                <h2 className="pt-2 pl-2 font-sans text-3xl font-bold text-black">
                                    Segurança e<br />
                                    Privacidade
                                </h2>
                            </div>

                            <p className="font-sans text-lg font-semibold text-left">
                                Investimos em segurança de dados para garantir a
                                confidencialidade das informações médicas dos
                                animais.
                            </p>
                        </div>
                    </ZoomInSection>

                    <ZoomInSection>
                        <div className="flex flex-col px-4 py-12 bg-white shadow-2xl rounded-3xl w-80 h-80">
                            <div className="flex pb-2 mb-2 ">
                                <img
                                    src="\home\icon3.png"
                                    alt="Ícone"
                                    className="w-20 h-20"
                                />
                                <h2 className="pl-3 font-sans text-3xl font-bold text-black">
                                    Clube de
                                    <br />
                                    Benefícios
                                </h2>
                            </div>

                            <p className="font-sans text-lg font-semibold text-left">
                                Use todos os recursos da plataforma gratuitamente.
                                Contribua para a manutenção da Pawkeepr assinando
                                nosso clube de benefícios e aproveite vantagens
                                exclusivas.
                            </p>
                        </div>
                    </ZoomInSection>

                    <ZoomInSection>
                        <div className="flex flex-col px-4 py-12 bg-white shadow-2xl rounded-3xl w-80 h-80">
                            <div className="flex pb-2 mb-2 ">
                                <img
                                    src="\home\icon4.png"
                                    alt="Ícone"
                                    className="w-20 h-20"
                                />
                                <h2 className="pl-2 font-sans text-3xl font-bold text-black">
                                    Aplicação
                                    <br />
                                    Responsiva
                                </h2>
                            </div>

                            <p className="font-sans text-lg font-semibold text-left">
                                Acesse à PawKeepr em qualquer dispositivo móvel e
                                conte com suporte técnico contínuo e treinamento
                                para maximizar o uso da plataforma.
                            </p>
                        </div>
                    </ZoomInSection>
                </div>
            </section>

            <section className="pb-0 bg-white">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 p-4 place-items-center md:mt-0 md:grid-cols-2">
                    <ZoomInSection>
                        <div className="flex flex-col col-span-1 pl-4 text-left">
                            <h1 className="pb-3 font-sans text-4xl font-bold text-left text-secondary-500 lg:text-4xl">
                                Conheça a Pawkeepr
                            </h1>
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
                    </ZoomInSection>
                    <SlideInSection>
                        <div className="flex flex-col items-center justify-center col-span-1">
                            <img
                                src="\home\ilustracao7.png"
                                className="w-9/12 pb-10 pt-5 mobile:w-6/12 mobile:pt-8"
                                alt="..."
                            />
                            <ButtonsNavBar />
                        </div>
                    </SlideInSection>
                </div>
            </section>

            <section className="bg-primary-500">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 p-4 pt-5 web:grid-cols-2">
                    <SlideInSection>
                        <div className="flex flex-col pt-32 mobile:pt-0 items-center justify-center col-span-1">
                            <img
                                src="/home/ilustracao6.png"
                                className="w-full pb-8 pr-16 md:w-10/12"
                                alt="Landing Page"
                            />
                            {/*<StoreButtons/>*/}
                        </div>
                    </SlideInSection>

                    <ZoomInSection>
                        <div className="col-span-1">
                            <p className="pl-1 font-sans text-2xl font-bold text-left text-secondary-500 lg:text-2xl">
                                Nossas funcionalidades
                            </p>
                            <h1 className="pt-0 pb-4 font-sans text-5xl font-bold text-left text-white lg:text-5xl">
                                Recursos de ponta disponíveis para a sua
                                experiência!
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
                                        Cadastre todos os seus pets e compartilhe-os
                                        entre os membros da família, mantendo seus
                                        dados atualizados de qualquer lugar.
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
                                        Encontre veterinários perto de você e
                                        escolha o melhor profissional para o seu
                                        bichinho, incluindo opções de telemedicina
                                        para consultas virtuais.
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
                                        Agende consultas veterinárias pela
                                        plataforma, economizando tempo com nossa
                                        interface intuitiva e amigável
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
                                        Nossa plataforma oferece uma sincronização
                                        automática de dados em todas as consultas
                                        veterinárias. Acesse informações atualizadas
                                        de qualquer hora ou lugar
                                    </p>
                                </div>
                            </div>
                            <p className="py-2 font-sans text-2xl font-semibold text-center md:px-20 text-secondary-500">
                                Aproveite todos os recursos da plataforma de forma
                                gratuita e contribua para sua manutenção com o
                                clubede benefícios.
                            </p>
                        </div>
                    </ZoomInSection>
                </div>
            </section>

            <section className="pb-8 bg-white">
                <div className="bg-overlay bg-overlay-pattern" />
                <h1 className="px-40 pt-8 font-sans text-4xl font-bold text-center text-primary-500 mobile:justify-start mobile:px-4 md:text-5xl">
                    Veterinário, descubra como a Pawkeepr pode transformar seu
                    atendimento domiciliar!
                </h1>
                <div className="grid grid-cols-1 pt-20 pl-32 mobile:pl-4 md:mt-0 lg:grid-cols-2">
                    <SlideInSection>
                        <div className="flex flex-col col-span-1 text-left">
                            <p className="pl-1 font-sans text-2xl font-bold text-left text-secondary-500 lg:text-2xl">
                                Plataforma inovadora
                            </p>

                            <div className="space-y-4 mobile:pb-8">
                                <div className="flex flex-col pt-6 pr-6">
                                    <div className="flex items-center">
                                        <img
                                            src="/home/icon8.png"
                                            alt="Ícone"
                                            className="w-16 h-16 mr-2"
                                        />
                                        <h2 className="text-2xl font-bold text-primary-500">
                                            Melhore o atendimento a domicílio
                                        </h2>
                                    </div>
                                    <p className="pl-2 text-lg text-left text-black">
                                        Facilite consultas domiciliares com acesso a
                                        prontuários eletrônicos e agendamentos
                                        diretamente no app, proporcionando um serviço de
                                        alta qualidade. Com uma interface simples e
                                        intuitiva.
                                    </p>
                                </div>

                                <div className="flex flex-col pt-2 pr-6">
                                    <div className="flex items-center">
                                        <img
                                            src="/home/icon9.png"
                                            alt="Ícone"
                                            className="w-16 h-16 mr-2"
                                        />
                                        <h2 className="text-2xl font-bold text-primary-500">
                                            Marketing e networking
                                        </h2>
                                    </div>
                                    <p className="pl-2 text-lg text-left text-black">
                                        Aumente sua visibilidade e conecte-se com mais
                                        clientes através da nossa plataforma, melhorando
                                        seu marketing e expandindo sua rede de contatos.
                                    </p>
                                </div>

                                <div className="flex flex-col pt-2 pr-6">
                                    <div className="flex items-center">
                                        <img
                                            src="/home/icon10.png"
                                            alt="Ícone"
                                            className="w-16 h-16 mr-2"
                                        />
                                        <h2 className="text-2xl font-bold text-primary-500">
                                            Administração do negócio
                                        </h2>
                                    </div>
                                    <p className="pl-2 text-lg text-left text-black">
                                        Gerencie sua clínica ou serviço domiciliar com
                                        ferramentas que ajudam na administração de
                                        agendamentos, finanças e históricos de
                                        pacientes.
                                    </p>
                                </div>

                                <div className="flex flex-col pt-2 pr-6">
                                    <div className="flex items-center">
                                        <img
                                            src="/home/icon4-green.png"
                                            alt="Ícone"
                                            className="w-16 h-16 mr-2"
                                        />
                                        <h2 className="text-2xl font-bold text-primary-500">
                                            Atendimento de qualquer aparelho
                                        </h2>
                                    </div>
                                    <p className="pl-2 text-lg text-left text-black">
                                        Acesse Pawkeepr de qualquer dispositivo, seja um
                                        smartphone, tablet ou computador, mantendo sua
                                        prática móvel e eficiente.
                                    </p>
                                </div>

                                <div className="flex flex-col pt-2 pr-6">
                                    <div className="flex items-center">
                                        <img
                                            src="/home/icon3-green.png"
                                            alt="Ícone"
                                            className="w-16 h-16 mr-2"
                                        />
                                        <h2 className="text-2xl font-bold text-primary-500">
                                            Cobre o preço que achar melhor
                                        </h2>
                                    </div>
                                    <p className="pl-2 text-lg text-left text-black">
                                        Tenha total liberdade para definir os preços de
                                        seus serviços, ajustando conforme a necessidade
                                        e valorizando seu trabalho.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SlideInSection>
                
                    <SlideInSection>
                        <div className="flex items-center justify-center col-span-1">
                            <img
                                src="\home\ilustracao3.png"
                                className="w-11/12 md:w-10/12"
                                alt="..."
                            />
                        </div>
                    </SlideInSection>
                </div>
            </section>

            <section className="pb-10 bg-primary-500">
                <h1 className="flex items-center justify-center pt-10 font-sans text-4xl font-bold text-center text-white md:text-5xl ">
                    Club de benefícios Pawkeepr
                </h1>
                <div className="bg-overlay bg-overlay-pattern " />
                <SlideInSection>
                    <div className="grid grid-cols-1 p-4 mt-5 mobile:space-y-16 web:grid-cols-2">
                        <div className="col-span-1">
                            <PricingCard
                                title="Club Free"
                                price="0,00"
                                subtitle="Use a plataforma gratuitamente"
                                details1="Cadastre seus pets e encontre veterinários"
                            />
                        </div>
                        <div className="col-span-1">
                            <PricingCard
                                title="Club Ally"
                                price="9,90 por mês"
                                subtitle="Ajude-nos a manter a plataforma funcionando"
                                details1="5% de descontos em atendimentos a domicílio"
                                details2="10% de descontos em atendimentos por telemedicina"
                            />
                        </div>
                    </div>
                </SlideInSection>
            </section>

            <section className="pt-4 pb-12 bg-white ">
                <h1 className="flex justify-center font-sans text-4xl font-bold text-black md:text-5xl">
                    Conheça a Tagkeepr
                </h1>
                <div className="grid grid-cols-1 py-4 pl-16 pr-12 web:grid-cols-2">
                    <ZoomInSection>
                        <div className="flex flex-col items-center justify-center ">
                            <h1 className="pt-4 font-sans text-3xl font-bold md:px-32 md:text-4xl text-primary-500">
                                Traga mais segurança para o seu pet!
                            </h1>
                            <p className="py-3 font-sans text-xl font-semibold text-justify text-black md:px-32 lg:text-2xl">
                                Imprima a TagKeepr e use-a em sua coleira. Caso ele
                                se perca, quem o encontrar poderá escanear o código,
                                acessar as informações do seu pet e entrar em
                                contato com você rapidamente.
                            </p>
                            <img
                                src="\home\tagkeepr.jpeg"
                                alt="Ícone"
                                className="w-10/12 md:w-6/12"
                            />
                        </div>
                    </ZoomInSection>
                    <SlideInSection>
                        <div className="flex justify-center col-span-1">
                            <img
                                src="/home/ilustracao5.png"
                                className="w-full py-12 md:w-9/12 "
                                alt="Landing Page"
                            />
                        </div>
                    </SlideInSection>
                </div>
            </section>
            <div className="inset-x-0 bottom-0 z-20">
                <Footer />
            </div>
        </section>
    )
}

export default HomePage
