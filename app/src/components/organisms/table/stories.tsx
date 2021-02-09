import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Table, TableProps } from '.'
import { Row } from 'react-bootstrap'

export default {
  title: 'Table',
  component: Table
} as Meta

const Template: Story<TableProps> = ({ columnTitles, courses }) => <Row className="mt-5"><Table columnTitles={columnTitles} courses={courses} /> </Row>

export const Default = Template.bind({})
Default.args = {
  columnTitles: [
    {
      name: 'Name 1',
      tooltip: 'This is additional information that is shown on hover.'
    },
    {
      name: 'Name 2',
      tooltip: 'This is additional information that is shown on hover.'
    },
    {
      name: 'Name 3',
      tooltip: 'This is additional information that is shown on hover.'
    },
    {
      name: 'Name 4',
      tooltip: 'This is additional information that is shown on hover.'
    },
    {
      name: 'Name 5',
      tooltip: 'This is additional information that is shown on hover.'
    },
    {
      name: 'Name 6',
      tooltip: 'This is additional information that is shown on hover.'
    },
    {
      name: 'Name 7',
      tooltip: 'This is additional information that is shown on hover.'
    },
    {
      name: 'Name 8',
      tooltip: 'This is additional information that is shown on hover.'
    },
  ],
  courses: [
    {
      name: 'Course Name',
      internalScores: [19, 20, 10],
      examInternal: {
        active: true,
        firstPhaseGrade: 150,
        secondPhaseGrade: 150,
        isFromPreviousYears: true
      },
      examExternal: {
        active: true,
        firstPhaseGrade: 100,
        secondPhaseGrade: 100,
        isFromPreviousYears: true
      }
    },
    {
      name: 'Course Name',
      internalScores: [19, 20, 10],
      examInternal: {
        active: true,
        firstPhaseGrade: 150,
        secondPhaseGrade: 150,
        isFromPreviousYears: true
      },
      examExternal: {
        active: true,
        firstPhaseGrade: 100,
        secondPhaseGrade: 100,
        isFromPreviousYears: true
      }
    },
    {
      name: 'Course Name',
      internalScores: [19, 20, 10],
      examInternal: {
        active: true,
        firstPhaseGrade: 150,
        secondPhaseGrade: 150,
        isFromPreviousYears: true
      },
      examExternal: {
        active: true,
        firstPhaseGrade: 100,
        secondPhaseGrade: 100,
        isFromPreviousYears: true
      }
    }
  ]
}
