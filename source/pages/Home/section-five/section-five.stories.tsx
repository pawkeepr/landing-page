import type { Meta, StoryFn } from '@storybook/react'

import SectionFive from './section-five'

SectionFive.displayName = 'SectionFive'

const meta = {
    title: 'pages/Home/SectionFive',
    component: SectionFive,

    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof SectionFive>

export default meta

const Template: StoryFn<typeof SectionFive> = () =>  <SectionFive />

export const Default = Template.bind({})
Default.args = {}
