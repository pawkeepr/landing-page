import NavbarHome from '~/Components/molecules/nav-bar-home'
import Footer from '~/Layouts/Footer'
import HeaderTitle from '~/Components/atoms/header-title'
import ProfessionalList from '~/pages/ProfesionalList/specialities-profesional-list/specialities-profesional-list'
import SearchSpecialties from '~/pages/Home/section-search-specialties/section-search-specialties'

const LadingPageNext = () => {
    return (
        <section className="w-full overflow-x-hidden">
            <NavbarHome />
            <section className="relative pt-16 bg-primary-500" id="hero">
                <HeaderTitle title={'Profissionais'} />
            </section>
            <section className="flex flex-col items-center justify-center bg-primary-500 pb-14">
                <SearchSpecialties />
                <ProfessionalList />
            </section>
            <div className="inset-x-0 bottom-0 z-20">
                <Footer />
            </div>
        </section>
    )
}

export default LadingPageNext
