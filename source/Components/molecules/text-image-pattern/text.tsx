import Zoom from "react-reveal/Zoom";

export const Text = (props: { content: string }) => {
    return (
        <>
            <Zoom right>
                <div className="pt-2 m-5 text-center mt-lg-5">
                    <div className="bg-secondary rounded-xl w-[100%] web:w-3/4 shadow-md m-2">
                        <p className="p-4 font-sans text-lg font-semibold text-white web:text-2xl">
                            {props.content}
                        </p>
                    </div>
                </div>
            </Zoom>
        </>
    );
};