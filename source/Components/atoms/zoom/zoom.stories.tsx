import type { Meta, StoryFn } from '@storybook/react'

import Zoom from './zoom'

Zoom.prototype.displayName = 'Zoom'

const meta = {
    title: 'Components/Atoms/Zoom',
    component: Zoom,

    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Zoom>
export default meta
const Template: StoryFn<typeof Zoom> = (args) => (
    <Zoom {...args}>
        <>
            <h1>Zoom 1</h1>
            <p>Zoom 2</p>
        </>
    </Zoom>
)

export const Default = Template.bind({})
Default.args = {}

