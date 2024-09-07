import React from 'react'
import Slide from 'react-reveal/Slide'
import ZoomInSection from '~/Components/atoms/zoom'
import { ButtonsTutorVet } from '../buttons-tutor-vet/buttons-tutor-vet'

const SectionFive: React.FC = () => {
    return (
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
                    <Slide right>
                        <div className="flex flex-col items-center justify-center col-span-1">
                            <img
                                src="\home\ilustracao7.png"
                                className="w-9/12 pb-10 pt-5 mobile:w-6/12 mobile:pt-8"
                                alt="..."
                            />
                            <ButtonsTutorVet />
                        </div>
                    </Slide>
                </div>
            </section>

    )
}

export default SectionFive
