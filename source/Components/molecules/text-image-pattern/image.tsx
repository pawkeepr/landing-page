import Slide from "react-reveal/Slide";

export const Image = (props: { path: string }) => {
    return (
        <>
            <Slide left>
                <div className="phone:hidden ">
                    <img
                        src={props.path}
                        className=""
                        alt="Landing Page"
                    />
                </div>
            </Slide>
            ;
        </>
    );
};