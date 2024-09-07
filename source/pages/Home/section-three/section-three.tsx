import React from 'react'
import Slide from 'react-reveal/Slide'
import ZoomInSection from '~/Components/atoms/zoom'

const SectionThree: React.FC = () => {
    return (
        <section className="bg-primary-500">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 p-4 pt-5 web:grid-cols-2">
                    <Slide left>
                        <div className="flex flex-col pt-32 mobile:pt-0 items-center justify-center col-span-1">
                            <img
                                src="/home/ilustracao6.png"
                                className="w-full pb-8 pr-16 md:w-10/12"
                                alt="Landing Page"
                            />
                            {/*<StoreButtons/>*/}
                        </div>
                    </Slide>

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
                <div className="relative z-20 flex flex-col items-center justify-end h-full">
                    <h1 className="pb-2 font-sans text-5xl font-bold text-white lg:text-5xl">
                        Qual é o nosso
                    </h1>
                </div>
            </section>
    )
}

export default SectionThree
