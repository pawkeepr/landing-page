import type { Meta, StoryFn } from '@storybook/react'

import StoreButtons from './storebuttons'

StoreButtons.displayName = 'StoreButtons'

const meta = {
    title: 'pages/Home/StoreButtons',
    component: StoreButtons,

    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof StoreButtons>

export default meta

const Template: StoryFn<typeof StoreButtons> = () =>  <StoreButtons />

export const Default = Template.bind({})
Default.args = {}
