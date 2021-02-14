import * as React from 'react'
import { Form, Row, Col, InputGroup } from 'react-bootstrap'

export interface ExamDetails {
  active: boolean
  grade: number
  isFromPreviousYears: boolean
}

export interface TableRowProps {
  name: string
  internalScores: number[]
  exams: {
    internal: {
      firstPhase: ExamDetails
      secondPhase: ExamDetails
    }
    external: {
      firstPhase: ExamDetails
      secondPhase: ExamDetails
    }
  },
  isAccessExam: boolean 
}

const ExamInput: React.FC<ExamDetails> = ({ active, grade, isFromPreviousYears }: ExamDetails) => {
  return (
    <Row>
      <Col md="1">
        <Form.Group>
          <Form.Check type="checkbox" checked={active} />
        </Form.Group>
      </Col>
      {active && (
        <>
          <Col>
            <InputGroup>
              <Form.Control type="number" disabled={!active} value={grade} />
              <InputGroup.Append>
                <InputGroup.Checkbox checked={isFromPreviousYears} />
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </>
      )}
    </Row>
  )
}

export const TableRow: React.FC<TableRowProps> = ({ name, internalScores, exams, isAccessExam }: TableRowProps) => {
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
      <td>
        <ExamInput {...exams.internal.firstPhase} />
      </td>
      <td>
        <ExamInput {...exams.internal.secondPhase} />
      </td>
      <td>
        <ExamInput {...exams.external.firstPhase} />
      </td>
      <td>
        <ExamInput {...exams.external.secondPhase} />
      </td>
      <td>
        <Form.Check type="checkbox" label="Sim" checked={isAccessExam} />
      </td>
    </tr>
  )
}
