import * as React from 'react'
import Nav from '../components/organisms/navbar'
import { Container, Jumbotron, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'gatsby'
import Header from '../components/organisms/header'

const EnsinoCh = () => {
  return (
    <>
      <Nav />
      <main>
        <Container>
            <Header subheading="Ensino Científico-Humanístico Regular"/>

        </Container>
      </main>
    </>
  )
}

export default EnsinoCh
