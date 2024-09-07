import React from 'react'
import Slide from 'react-reveal/Slide'
import { PricingCard } from '~/Components/molecules/pricing-card'

const SectionSix: React.FC = () => {
    return (
        <section className="pb-10 bg-primary-500">
                <h1 className="flex items-center justify-center pt-10 font-sans text-4xl font-bold text-center text-white md:text-5xl ">
                    Club de benefícios Pawkeepr
                </h1>
                <div className="bg-overlay bg-overlay-pattern " />
                <Slide left>
                    <div className="grid grid-cols-1 p-4 mt-5 mobile:space-y-16">
                        <div className="col-span-1">
                            <PricingCard
                                title="Club Free"
                                price="0,00"
                                subtitle="Use a plataforma gratuitamente"
                                details1="Cadastre seus pets e encontre veterinários"
                            />
                        </div>
                        <div className="col-span-1 hidden">
                            <PricingCard
                                title="Club Ally"
                                price="9,90 por mês"
                                subtitle="Ajude-nos a manter a plataforma funcionando"
                                details1="5% de descontos em atendimentos a domicílio"
                                details2="10% de descontos em atendimentos por telemedicina"
                            />
                        </div>
                    </div>
                </Slide>
            </section>

    )
}

export default SectionSix
