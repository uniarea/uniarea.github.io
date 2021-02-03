import * as React from 'react'
import { Jumbotron, Row } from 'react-bootstrap'

export interface PageIntroProps {
  subheading: string
}

export const PageIntro: React.FC<PageIntroProps> = ({ subheading }: PageIntroProps) => {
  return (
    <Jumbotron>
      <Row>
        <h1>Simulador de Candidatura Uniarea</h1>
      </Row>
      <Row>
        <h2>
          <small>{subheading}</small>
        </h2>
      </Row>
    </Jumbotron>
  )
}
