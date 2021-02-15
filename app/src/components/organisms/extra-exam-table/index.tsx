import * as React from 'react'
import { Table as BTable, Button, Tooltip, OverlayTrigger, Form, Row, Col } from 'react-bootstrap'

export interface ExtraExamTableProps {
  active: boolean
  exams: ExtraExamFormat[]
  // TODO: add more specific types
  onChange?: any
  onAdd?: any
  onRemove?: any
}

export interface ExtraExamFormat {
  id: string
  label: string
  firstPhase: ExtraExamRowProps
  secondPhase: ExtraExamRowProps
}

export interface ExtraExamRowProps {
  active: boolean
  grade: number
  name?: string
}

export const ExtraExamTable: React.FC<ExtraExamTableProps> = ({ exams, onChange, onAdd, onRemove }: ExtraExamTableProps) => {
  const ExtraExamRow: React.FC<ExtraExamRowProps & { id: string }> = ({ id, active, grade, name }: ExtraExamRowProps & { id: string }) => {
    return (
      <Row>
        <Col sm="1">
          <Form.Check type="checkbox" id={id} name={`${name}.active`} checked={active} onClick={onChange} />
        </Col>
        {active && (
          <Col>
            <Form.Control type="number" value={grade} onChange={onChange} id={id} name={`${name}.grade`} />
          </Col>
        )}
      </Row>
    )
  }

  return (
    <BTable striped hover>
      <thead>
        <tr>
          <th> Nome </th>
          <th> 1ª Fase </th>
          <th> 2ª Fase </th>
        </tr>
      </thead>
      <tbody>
        {exams.map((exam: ExtraExamFormat, i) => (
          <tr key={i}>
            <td>
              <Row>
                <Col sm="1">
                  <Button onClick={onRemove(i)} size="sm" variant="danger">
                    {' '}
                    x{' '}
                  </Button>
                </Col>
                <Col>
                  <Form.Control type="text" id={exam.id} name={'label'} value={exam.label} onChange={onChange} />
                </Col>
              </Row>
            </td>
            <td>
              <ExtraExamRow grade={exam.firstPhase.grade} active={exam.firstPhase.active} id={exam.id} name={'firstPhase'} />
            </td>
            <td>
              <ExtraExamRow grade={exam.secondPhase.grade} active={exam.secondPhase.active} id={exam.id} name={'secondPhase'} />
            </td>
          </tr>
        ))}
        <Button className="mt-2" onClick={onAdd} size="sm" variant="primary">
          {' '}
          +{' '}
        </Button>
      </tbody>
    </BTable>
  )
}
