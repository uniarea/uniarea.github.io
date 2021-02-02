import * as React from 'react'
import Nav from '../components/organisms/navbar'
import { Container, Jumbotron, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'gatsby'
import Header from '../components/organisms/header'

const IndexPage = () => {
  return (
    <>
      <Nav />
      <main>
        <Container>
          <Header subheading="Cálculo da Nota de Acesso ao Ensino Superior"/>

          <p>
            <ul>
              <li>
                <Link to="ensino-ch">Ensino Científico-Humanístico Regular</Link>
              </li>
              <li>
                <Link to="ensino-chrec">Ensino Científico-Humanístico Recorrente</Link>
              </li>
              <li>
                <Link to="ensino-prof">Ensino Profissional</Link>
              </li>
            </ul>
          </p>
        </Container>
      </main>
    </>
  )
}

export default IndexPage
