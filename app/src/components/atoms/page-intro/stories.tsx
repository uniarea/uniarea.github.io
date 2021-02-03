import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import 'bootstrap/dist/css/bootstrap.min.css'

import { PageIntro, PageIntroProps } from './index'

export default {
  title: 'PageIntro',
  component: PageIntro,
} as Meta

const Template: Story<PageIntroProps> = (args) => <PageIntro {...args} />

export const Default = Template.bind({})
Default.args = {
  subheading: 'This is an example subheading'
}

