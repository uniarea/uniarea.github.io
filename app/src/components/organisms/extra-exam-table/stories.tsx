import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ExtraExamRowProps, ExtraExamTable, ExtraExamTableProps } from '.'

export default {
  title: 'ExtraExamTable',
  component: ExtraExamTable
} as Meta

const Template: Story<ExtraExamRowProps> = (args) => <ExtraExamTable {...args} />

export const Default = Template.bind({})
Default.args = {
  active: true,
  exams: [
    {
      id: 'exam-1',
      label: 'Exam 1',
      firstPhase: {
        active: true,
        grade: 150
      },
      secondPhase: {
        active: true,
        grade: 175
      }
    },
    {
      id: 'exam-2',
      label: 'Exam 2',
      firstPhase: {
        active: true,
        grade: 150
      },
      secondPhase: {
        active: true,
        grade: 175
      }
    }
  ]
} as ExtraExamTableProps
