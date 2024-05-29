import { Meta, StoryFn } from "@storybook/react/*";
import LoaderError from "./loader-error";

const meta = {
    title: 'Components/Molecules/Loaders/Error',
    component: LoaderError,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof LoaderError>

export default meta

const Template: StoryFn = (args) => <LoaderError {...args} />

export const Default = Template.bind({})
