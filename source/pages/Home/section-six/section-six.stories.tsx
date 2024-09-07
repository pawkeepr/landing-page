import type { Meta, StoryFn } from '@storybook/react'

import SectionSix from './section-six'

SectionSix.displayName = 'SectionSix'

const meta = {
    title: 'pages/Home/SectionSix',
    component: SectionSix,

    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof SectionSix>

export default meta

const Template: StoryFn<typeof SectionSix> = () =>  <SectionSix />

export const Default = Template.bind({})
Default.args = {}
