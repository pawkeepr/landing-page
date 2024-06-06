import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";

export const BusinessRoadmap = () => {
    return (
        <>
            <div className="grid mobile:grid-cols-1 p-4 grid-cols-2">
                <Zoom>
                    <div className="col-span-1 tablet:pt-5 text-center tablet:mt-lg-5">
                        <p className="p-2 font-sans text-lg font-semibold web:text-2xl">
                            {`Roadmap`}
                        </p>
                        <div className="tablet:w-3/6 flex phone:justify-center justify-start">
                            <div className="bg-primary web:bg-secondary rounded-xl shadow-md m-2">
                                <p className="p-3 font-sans text-md font-semibold text-white web:text-xl">
                                    {`Inteligência Artificial Abril de 2025`}
                                </p>
                            </div>
                        </div>
                        <div className="w-4/6 flex phone:w-full justify-center">
                            <div className="bg-secondary rounded-xl shadow-md m-2">
                                <p className=" p-3 font-sans text-md font-semibold text-white web:text-xl">
                                    {`VetMovel e Telemedicina Dezembro de 2024`}
                                </p>
                            </div>
                        </div>
                        <div className="w-5/6 phone:w-full flex phone:justify-center justify-end">
                            <div className="bg-primary web:bg-secondary rounded-xl shadow-md m-2">
                                <p className=" p-3 font-sans text-md font-semibold text-white web:text-xl">
                                    {`Secretaria Inteligente Agosto de 2024`}
                                </p>
                            </div>
                        </div>
                        <div className="flex phone:justify-center justify-end">
                            <div className="bg-secondary rounded-xl shadow-md m-2">
                                <p className=" p-3 font-sans text-md font-semibold text-white web:text-xl">
                                    {`Consultas veterinárias Abril de 2024`}
                                </p>
                            </div>
                        </div>
                    </div>
                </Zoom>
                <Slide left>
                    <div className="col-span-1">
                        <img
                            src="/Sem título2.jpg"
                            className="w-100"
                            alt="Landing Page"
                        />
                    </div>
                </Slide>
            </div>
        </>
    );
};
