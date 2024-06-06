import { tv } from "tailwind-variants";
import { Image } from "./image";
import { Text } from "./text";
import { VariantProps } from "tailwind-variants";

export type TextImagePatternProps = {
    text: string;
    imagePath: string;
} & VariantProps<typeof displayPattern>;

const displayPattern = tv({
    variants: {
        pattern: {
            textLeftImageRight: "flex flex-row-reverse justify-center items-center",
            textRightImageLeft: "flex items-center web:gap-4 mt-4",
        },
    },
    defaultVariants: {
        pattern: "textLeftImageRight",
    },
});

export const TextImagePattern = (props: TextImagePatternProps) => {
    return (
        <>
            <div className={displayPattern({ pattern: props.pattern })}>
                <Image path={props.imagePath} />
                <Text content={props.text} />
            </div>
        </>
    );
};
