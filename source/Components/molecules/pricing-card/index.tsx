type PricingCardProps = {
    price: string;
    title: string;
    subtitle: string;
    details: string;
};

export const PricingCard = (props: PricingCardProps) => {
    return (
        <>
            <div className="col-span-1 rounded-md">
                <div className="flex justify-center">
                    <div className="bg-white flex flex-col gap-4 items-center justify-center rounded-lg p-4 mobile:w-3/4 w-1/2 h-[400px] shadow-lg">
                        <h3 className="text-5xl text-gray-500">
                            {props.title}
                        </h3>
                        <p className="text-4xl text-primary">{`$${props.price}`}</p>
                        <p className="text-xl">{props.subtitle}</p>
                        <p className="text-md">{props.details}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
