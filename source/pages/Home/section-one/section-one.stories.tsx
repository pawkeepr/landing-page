import type { Meta, StoryFn } from '@storybook/react'

import SectionOne from './section-one'

SectionOne.displayName = 'SectionOne'

const meta = {
    title: 'pages/Home/SectionOne',
    component: SectionOne,

    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof SectionOne>

export default meta

const Template: StoryFn<typeof SectionOne> = (args) => <SectionOne {...args} />

export const Default = Template.bind({})
Default.args = {}
