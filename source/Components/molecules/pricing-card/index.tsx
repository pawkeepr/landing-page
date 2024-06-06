type PricingCardProps = {
    price: string
    titleLine1: string
    titleLine2: string
    subtitle: string
    details: string
}

export const PricingCard = ({
    price,
    titleLine1,
    titleLine2,
    subtitle,
    details,
}: PricingCardProps) => {
    return (
        <>
            <div className="col-span-1 rounded-md">
                <div className="flex justify-center">
                    <div className="bg-white flex flex-col gap-4 items-center justify-center rounded-lg p-4 mobile:w-3/4 w-1/2 h-[400px] shadow-lg">
                        <h3 className="text-5xl text-center text-gray-500">
                            {titleLine1}
                            <br />
                            {titleLine2}
                        </h3>
                        <p className="text-4xl text-primary">{`$${price}`}</p>
                        <p className="text-xl">{subtitle}</p>
                        <p className="text-md">{details}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
