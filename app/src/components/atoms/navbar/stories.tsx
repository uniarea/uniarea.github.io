import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Nav } from '.'

export default {
  title: 'Nav',
  component: Nav,
} as Meta

const Template: Story = (args) => <Nav {...args} />

export const Default = Template.bind({})
Default.args = { }

