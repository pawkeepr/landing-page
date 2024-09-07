import type { Meta, StoryFn } from '@storybook/react'

import ButtonsTutorVet from './buttons-tutor-vet'

ButtonsTutorVet.displayName = 'ButtonsTutorVet'

const meta = {
    title: 'pages/Home/ButtonsTutorVet',
    component: ButtonsTutorVet,

    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ButtonsTutorVet>

export default meta

const Template: StoryFn<typeof ButtonsTutorVet> = () =>  <ButtonsTutorVet />

export const Default = Template.bind({})
Default.args = {}
