type PricingCardProps = {
    price: string
    title: string
    subtitle: string
    details1: string
    details2?: string
}

export const PricingCard = ({
    price,
    title,
    subtitle,
    details1,
    details2,
}: PricingCardProps) => {
    return (
        <>
            <div className="col-span-1 rounded-md">
                <div className="flex justify-center">
                    <div className="bg-white flex flex-col gap-4 items-center justify-center rounded-lg p-4 w-11/12 md:w-1/2 h-[400px] shadow-lg">
                        <h3 className="text-5xl text-center text-gray-500">
                            {title}
                        </h3>
                        <p className="text-4xl text-primary">{`R$${price}`}</p>
                        <p className="text-xl text-center">{subtitle}</p>
                        <p className="text-md text-center">{details1}</p>
                        {details2 && <p className="text-md text-center">{details2}</p>}
                    </div>
                </div>
            </div>
        </>
    )
}
