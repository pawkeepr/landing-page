import NavbarHome from '~/Components/molecules/nav-bar-home'
import BlogHome from '../../source/pages/Blog/blog-home/blog-home'
import Footer from '~/Layouts/Footer'
import HeaderTitle from '~/Components/atoms/header-title'

const LadingPageNext = () => {
    return (
        <section className="w-full overflow-x-hidden">
            <NavbarHome />
            <section className="relative pt-16 bg-primary-500" id="hero">
                <HeaderTitle title={'Blog'} />
            </section>
            <section className="flex flex-col items-center justify-center bg-primary-500 pb-14">
                <BlogHome />
            </section>
            <div className="inset-x-0 bottom-0 z-20">
                <Footer />
            </div>
        </section>
    )
}

export default LadingPageNext
