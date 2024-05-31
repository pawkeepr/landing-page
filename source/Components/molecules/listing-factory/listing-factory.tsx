import Zoom from "react-reveal/Zoom";
import { tv, VariantProps } from "tailwind-variants";

export type ProblemListingFactoryProps = {
    title: string;
    items: Array<string>;
} & VariantProps<typeof listing>;

const listing = tv({
    variants: {
        listPosition: {
            left: "text-lg lg:text-xl font-semibold font-sans p-4",
            right: "p-3 font-sans text-lg font-semibold text-white lg:text-xl",
        },
    },
    defaultVariants: {
        listPosition: "right",
        titleColor: "secondary",
    },
});

export const ListingFactory = (props: ProblemListingFactoryProps) => {
    return (
        <>
            <ul>
                <Zoom>
                    <h2
                        className={listing({
                            listPosition: props.listPosition,
                        })}
                    >
                        {props.title}
                    </h2>
                </Zoom>
                {props.items.map((item: string, index: number) => {
                    index = index + 1;
                    return (
                        <li key={index}>
                            <Zoom>
                                <p
                                    className={listing({
                                        listPosition: props.listPosition,
                                    })}
                                >
                                    {`${index}. ${item}`}
                                </p>
                            </Zoom>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default ListingFactory;
