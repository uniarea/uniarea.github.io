import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import 'bootstrap/dist/css/bootstrap.min.css'
import { TableRow, TableRowProps } from '.'
import { Table } from 'react-bootstrap'

export default {
  title: 'TableRow',
  component: TableRow
} as Meta

const Template: Story<TableRowProps> = (args) => (
  <Table>
    <TableRow {...args} />
  </Table>
)

export const Default = Template.bind({})
Default.args = {
  id: 'course-0',
  label: 'Course Name',
  isAccessExam: true,
  internalScores: {
    year10: 15,
    year11: 15,
    year12: 16
  },
  exams: {
    internal: {
      firstPhase: {
        grade: 150,
        active: true,
        isFromPreviousYears: false
      },
      secondPhase: {
        grade: 150,
        active: true,
        isFromPreviousYears: false
      }
    },
    external: {
      firstPhase: {
        grade: 150,
        active: true,
        isFromPreviousYears: false
      },
      secondPhase: {
        grade: 150,
        active: true,
        isFromPreviousYears: false
      }
    }
  }
} as TableRowProps
