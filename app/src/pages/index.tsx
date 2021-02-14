import * as React from 'react'
import { Nav } from '../components/atoms/navbar'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'gatsby'
import { PageIntro } from '../components/atoms/page-intro'

const IndexPage: React.FC = () => {
  return (
    <>
      <Nav />
      <main>
        <Container>
          <PageIntro subheading="Cálculo da Nota de Acesso ao Ensino Superior" />
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
