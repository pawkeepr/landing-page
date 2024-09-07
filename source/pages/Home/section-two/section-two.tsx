import React from 'react'
import Slide from 'react-reveal/Slide'

const SectionTwo: React.FC = () => {
    return (
        <section className="pb-8 bg-white">
                <div className="bg-overlay bg-overlay-pattern" />
                <h1 className="px-40 pt-8 font-sans text-4xl font-bold text-center text-primary-500 mobile:justify-start mobile:px-4 md:text-5xl">
                    Veterinário, descubra como a Pawkeepr pode transformar seu
                    atendimento domiciliar!
                </h1>
                <div className="grid grid-cols-1 pt-20 pl-32 mobile:pl-4 md:mt-0 lg:grid-cols-2">
                    <Slide left>
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
                    </Slide>
                
                    <Slide right>
                        <div className="flex items-center web:pt-20 justify-center col-span-1">
                            <img
                                src="\home\ilustracao3.png"
                                className="w-11/12 md:w-10/12"
                                alt="..."
                            />
                        </div>
                    </Slide>
                </div>
            </section>
    )
}

export default SectionTwo
