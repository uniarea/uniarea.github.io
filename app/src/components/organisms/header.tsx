import * as React from 'react'
import { Jumbotron } from 'react-bootstrap'

const Header = ({ subheading }: { subheading: string }) => {
  return (
    <Jumbotron>
      <h1>Simulador de Candidatura Uniarea</h1>
      <h1>
        <small>{subheading}</small>
      </h1>
    </Jumbotron>
  )
}

export default Header
