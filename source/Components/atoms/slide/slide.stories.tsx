import type { Meta, StoryFn } from '@storybook/react'

import Slide from './slide'

Slide.prototype.displayName = 'Slide'

const meta = {
    title: 'Components/Atoms/Slide',
    component: Slide,

    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Slide>
export default meta
const Template: StoryFn<typeof Slide> = (args) => (
    <Slide {...args}>
        <>
            <h1>slide 1</h1>
            <p>slide 2</p>
        </>
    </Slide>
)

export const Default = Template.bind({})
Default.args = {}

