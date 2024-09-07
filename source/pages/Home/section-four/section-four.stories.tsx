import type { Meta, StoryFn } from '@storybook/react'

import SectionFour from './section-four'

SectionFour.displayName = 'SectionFour'

const meta = {
    title: 'pages/Home/SectionFour',
    component: SectionFour,

    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof SectionFour>

export default meta

const Template: StoryFn<typeof SectionFour> = () =>  <SectionFour />

export const Default = Template.bind({})
Default.args = {}
