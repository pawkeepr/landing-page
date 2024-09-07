import type { Meta, StoryFn } from '@storybook/react'

import SectionThree from './section-three'

SectionThree.displayName = 'SectionThree'

const meta = {
    title: 'pages/Home/SectionThree',
    component: SectionThree,

    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof SectionThree>

export default meta

const Template: StoryFn<typeof SectionThree> = () =>  <SectionThree />

export const Default = Template.bind({})
Default.args = {}
