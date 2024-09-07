import React from 'react'
import Slide from 'react-reveal/Slide'
import ZoomInSection from '~/Components/atoms/zoom'

const SectionSeven: React.FC = () => {
    return (
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
                    <Slide right>
                        <div className="flex justify-center col-span-1">
                            <img
                                src="/home/ilustracao5.png"
                                className="w-full py-12 md:w-9/12 "
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                </div>
            </section>

    )
}

export default SectionSeven
