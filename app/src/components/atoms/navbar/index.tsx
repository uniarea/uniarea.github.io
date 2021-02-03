import * as React from 'react'
import { Navbar } from 'react-bootstrap'

export const Nav: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Uniarea</Navbar.Brand>
    </Navbar>
  )
}