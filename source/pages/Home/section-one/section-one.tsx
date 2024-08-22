import React from 'react'
import Slide from 'react-reveal/Slide'
import ZoomInSection from '~/Components/atoms/zoom'
import HeaderTitle from '~/Components/atoms/header-title'

const SectionOne: React.FC = () => {
    return (
        <section className="relative pt-16 bg-primary-500" id="hero">
            <HeaderTitle title="Sobre nós" />
            <div className="absolute inset-0 z-10 bg-overlay-pattern" />
            <div className="relative z-20 grid grid-cols-1 p-4 m-0 web:grid-cols-2">
                <Slide left>
                    <div className="col-span-1">
                        <img
                            src="/home/ilustracao1.png"
                            className="w-9/12 mt-3 mobile:w-11/12 mobile:ml-4 web:ml-24"
                            alt="Landing Page"
                        />
                    </div>
                </Slide>
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
                    </div>
                </ZoomInSection>
            </div>
        </section>
    )
}

export default SectionOne
