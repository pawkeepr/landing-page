import type { Meta, StoryFn } from '@storybook/react'

import ButtonsNavBar from './buttons-nav-bar'

ButtonsNavBar.displayName = 'ButtonsNavBar'

const meta = {
    title: 'Components/Atoms/ButtonsNavBar',
    component: ButtonsNavBar,

    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ButtonsNavBar>

export default meta

const Template: StoryFn<typeof ButtonsNavBar> = () =>  <ButtonsNavBar />

export const Default = Template.bind({})
Default.args = {}
