import { MdPerson } from "react-icons/md"
import { BtnLink } from "../../../Components/atoms/btn"
import { FaStethoscope } from "react-icons/fa"


export const ButtonsTutorVet: React.FC = () => {
    return (
        <div className="flex items-center justify-center gap-2 px-60">
            <BtnLink
                message="Entre Tutor"
                className="z-50 text-lg text-black border-gray-950 hover:bg-secondary-500 rounded-3xl border-3 w-44 mobile:w-52 mobile:border-3"
                href="https://tutor.pawkeepr.app.br/t/sign-in"
            >
                <MdPerson className="w-6 h-6" />
            </BtnLink >
            {/*<BtnLink
                message="Entre Vet"
                className="z-50 text-lg rounded-3xl border-3 border-gray-950 hover:bg-gray-600 mobile:border-3"
                href="https://pawkeepr.app.br/"
            >
                <FaStethoscope className="w-6 h-4" />
            </BtnLink>*/}
        </div>
    )
}

export default ButtonsTutorVet