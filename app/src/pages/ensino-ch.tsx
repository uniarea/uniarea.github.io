import * as React from 'react'
import { useState } from 'react'
import { Nav } from '../components/atoms/navbar'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { PageIntro } from '../components/atoms/page-intro'
import { Table } from '../components/organisms/table'
import { ENSINO_CH_CONFIG } from '../configs/ensino-ch'
import _ from 'lodash'

const EnsinoCh: React.FC = () => {
  const columnTitles = ENSINO_CH_CONFIG.columnTitles
  const [courses, setCourses] = useState(ENSINO_CH_CONFIG.courses)

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target
    let finalValue: number | boolean

    if (type === 'checkbox') 
      finalValue = checked
    else 
      finalValue = parseInt(value)
    
    const targetCourse = courses.findIndex(({id}) => id === e.target.id)
    const newCourses = JSON.parse(JSON.stringify(courses))
    _.set(newCourses, `[${targetCourse}].${name}`, finalValue)
    setCourses(newCourses)
  }

  return (
    <>
      <Nav />
      <main>
        <Container fluid>
          <PageIntro subheading={'Ensino Científico-Humanístico Regular'} />
          <Table columnTitles={columnTitles} courses={courses} onChange={handleInputChange} />
        </Container>
      </main>
    </>
  )
}

export default EnsinoCh
