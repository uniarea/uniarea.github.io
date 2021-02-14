import * as React from 'react'
import { Nav } from '../components/atoms/navbar'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { PageIntro } from '../components/atoms/page-intro'

const EnsinoCh: React.FC = () => {
  return (
    <>
      <Nav />
      <main>
        <Container>
          <PageIntro subheading={'Ensino Científico-Humanístico Regular'}/>
        </Container>
      </main>
    </>
  )
}

export default EnsinoCh
