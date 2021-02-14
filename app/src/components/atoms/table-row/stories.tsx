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
  name: 'Course Name',
  internalScores: [19, 20, 10],
  exams: {
    internal: {
      firstPhase: {
        active: true,
        grade: 100
      },
      secondPhase: {
        active: true,
        grade: 100
      }
    },
    external: {
      firstPhase: {
        active: true,
        grade: 100
      },
      secondPhase: {
        active: true,
        grade: 100
      }
    }
  }
} as TableRowProps
