import { FaApple, FaGooglePlay } from 'react-icons/fa'
import { BtnLink } from '~/Components/atoms/btn'

export const StoreButtons: React.FC = () => {
    return (
        <div className="flex items-center justify-center gap-8">
            <BtnLink
                message="Play Store"
                className="z-50 text-lg text-black border-gray-950 hover:bg-secondary-500 rounded-3xl border-3 w-44 mobile:border-3"
                href="https://pawkeepr.app.br/tutor/sign-in"
                aria-label="Baixar na Play Store"
            >
                <FaGooglePlay className="w-6 h-6" />
            </BtnLink>
            <BtnLink
                message="Apple Store"
                className="z-50 text-lg text-secondary-500 border-gray-950 hover:bg-gray-600 rounded-3xl border-3 w-44 mobile:border-3"
                href="https://pawkeepr.app.br/"
                aria-label="Baixar na Apple Store"
            >
                <FaApple className="w-6 h-6" />
            </BtnLink>
        </div>
    )
}

export default StoreButtons