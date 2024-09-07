import type { Meta, StoryFn } from '@storybook/react'

import SectionTwo from './section-two'

SectionTwo.displayName = 'SectionTwo'

const meta = {
    title: 'pages/Home/SectionTwo',
    component: SectionTwo,

    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof SectionTwo>

export default meta

const Template: StoryFn<typeof SectionTwo> = () =>  <SectionTwo />

export const Default = Template.bind({})
Default.args = {}
