import * as React from 'react'
import { Form } from 'react-bootstrap'

export interface ExamDetails {
  active: boolean
  firstPhaseGrade: number
  secondPhaseGrade: number
  isFromPreviousYears: boolean
}

export interface TableRowProps {
  name: string
  internalScores: number[]
  examInternal: ExamDetails
  examExternal: ExamDetails
}

const ExamInput: React.FC<ExamDetails> = ({ active, firstPhaseGrade, secondPhaseGrade, isFromPreviousYears }: ExamDetails) => {
  return (
    <>
      <td>
        <Form.Control type="number" value={firstPhaseGrade} />
      </td>
      <td>
        <Form.Control type="number" value={secondPhaseGrade} />
      </td>
    </>
  )
}

export const TableRow: React.FC<TableRowProps> = ({ name, internalScores, examInternal, examExternal }: TableRowProps) => {

  return (
    <tr>
      <td>{name}</td>
      <td>
        <Form.Control type="number" value={internalScores[0]} />
      </td>
      <td>
        <Form.Control type="number" value={internalScores[1]} />
      </td>
      <td>
        <Form.Control type="number" value={internalScores[2]} />
      </td>
      {examInternal?.active ? ExamInput(examInternal) : <><td></td><td></td></> }
      {examExternal?.active ? ExamInput(examExternal) : <><td></td><td></td></> }
    </tr>
  )
}
