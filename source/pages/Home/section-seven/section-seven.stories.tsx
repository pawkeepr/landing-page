import type { Meta, StoryFn } from '@storybook/react'

import SectionSeven from './section-seven'

SectionSeven.displayName = 'SectionSeven'

const meta = {
    title: 'pages/Home/SectionSeven',
    component: SectionSeven,

    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof SectionSeven>

export default meta

const Template: StoryFn<typeof SectionSeven> = () =>  <SectionSeven />

export const Default = Template.bind({})
Default.args = {}
