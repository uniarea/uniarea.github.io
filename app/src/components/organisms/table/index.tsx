import * as React from 'react'
import { Table as BTable, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { TableRow, TableRowProps } from '../../atoms/table-row'

export interface TableColumnProps {
  name: string
  tooltip?: string
}

export interface TableProps {
  columnTitles: TableColumnProps[]
  courses: TableRowProps[] 
  // TODO: add more specific type
  onChange: any
}

export const Table: React.FC<TableProps> = ({ columnTitles, courses, onChange }: TableProps) => {

  return (
    <BTable striped hover>
      <thead>
        <tr>
          {columnTitles.map(({ name, tooltip }: TableColumnProps, i: number) => (
            <th key={i}>
              {name}
              <OverlayTrigger placement="top" overlay={<Tooltip id={i + name}>{tooltip}</Tooltip>}>
                <span>
                  <sup>(?)</sup>
                </span>
              </OverlayTrigger>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {courses.map((course: TableRowProps, i) => (
          <TableRow key={i} {...course} onChange={onChange} />
        ))}
      </tbody>
    </BTable>
  )
}
