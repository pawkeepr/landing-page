import { Meta, StoryFn } from "@storybook/react/*";
import LoaderSuccess from "./loader-success"

const meta = {
    title: 'Components/Molecules/Loaders/Success',
    component: LoaderSuccess,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof LoaderSuccess>

export default meta

const Template: StoryFn = (args) => <LoaderSuccess {...args}/>

export const Default = Template.bind({})