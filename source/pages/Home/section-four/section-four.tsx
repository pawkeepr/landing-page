import React from 'react'
import ZoomInSection from '~/Components/atoms/zoom'

const SectionFour: React.FC = () => {
    return (
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

    )
}

export default SectionFour
