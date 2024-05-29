import { Meta, StoryFn } from "@storybook/react/*";
import LoaderPending from "./loader-pending"

const meta = {
    title: 'Components/Molecules/Loaders/Pending',
    component: LoaderPending,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof LoaderPending>

export default meta

const Template: StoryFn = (args) => <LoaderPending {...args}/>

export const Default = Template.bind({})