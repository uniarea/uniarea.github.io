import * as React from 'react'
import { Form, Row, Col, InputGroup } from 'react-bootstrap'

export interface ExamDetails {
  active: boolean
  grade: number
  isFromPreviousYears: boolean
}

export interface TableRowProps {
  id: string
  label: string
  internalScores: {
    year10?: number,
    year11?: number,
    year12?: number
  }
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
  // TODO: add more specific type
  onChange?: any
}

export const TableRow: React.FC<TableRowProps> = ({ id, label, internalScores, exams, isAccessExam, onChange }: TableRowProps) => {

  const ExamInput: React.FC<ExamDetails & { name: string}> = ({ active, grade, isFromPreviousYears, name }: ExamDetails & { name: string}) => {
    return (
      <Row>
        <Col md="1">
          <Form.Group>
            <Form.Check type="checkbox" id={id} name={`${name}.active`} checked={active} onClick={onChange} />
          </Form.Group>
        </Col>
        {active && (
          <>
            <Col>
              <InputGroup>
                <Form.Control type="number" id={id} name={`${name}.grade`} disabled={!active} value={grade} onChange={onChange}/>
                <InputGroup.Append>
                  <InputGroup.Checkbox onClick={onChange} id={id} name={`${name}.isFromPreviousYears`} checked={isFromPreviousYears} />
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </>
        )}
      </Row>
    )
  }

  return (
    <tr>
      <td>{label}</td>
      <td>
        <Form.Control type="number" value={internalScores.year10} onChange={onChange} id={id} name={'internalScores.year10'}/>
      </td>
      <td>
        <Form.Control type="number" value={internalScores.year11} onChange={onChange} id={id} name={'internalScores.year11'}/>
      </td>
      <td>
        <Form.Control type="number" value={internalScores.year12} onChange={onChange} id={id} name={'internalScores.year12'}/>
      </td>
      <td>
        <ExamInput {...exams.internal.firstPhase} name={'exams.internal.firstPhase'} />
      </td>
      <td>
        <ExamInput {...exams.internal.secondPhase} name={'exams.internal.secondPhase'} />
      </td>
      <td>
        <ExamInput {...exams.external.firstPhase} name={'exams.external.firstPhase'} />
      </td>
      <td>
        <ExamInput {...exams.external.secondPhase} name={'exams.external.secondPhase'} />
      </td>
      <td>
        <Form.Check type="checkbox" label="Sim" onClick={onChange} id={id} checked={isAccessExam} name={'isAccessExam'} />
      </td>
    </tr>
  )
}
