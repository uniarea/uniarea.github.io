import * as React from 'react'
import { useState } from 'react'
import { Nav } from '../components/atoms/navbar'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { PageIntro } from '../components/atoms/page-intro'
import { Table } from '../components/organisms/table'
import { ENSINO_CH_CONFIG } from '../configs/ensino-ch'
import _ from 'lodash'
import { ExtraExamTable } from '../components/organisms/extra-exam-table'
import { v4 as uuidv4 } from 'uuid'

const EnsinoCh: React.FC = () => {
  const columnTitles = ENSINO_CH_CONFIG.columnTitles
  const [courses, setCourses] = useState(ENSINO_CH_CONFIG.courses)

  const [extraExamsActive, setExtraExamsActive] = useState(ENSINO_CH_CONFIG.extraExams.active)
  const [extraExams, setExtraExams] = useState(ENSINO_CH_CONFIG.extraExams.exams)

  const handleCourseChange = (e) => {
    const { name, value, checked, type } = e.target
    let finalValue: number | boolean

    if (type === 'checkbox') finalValue = checked
    else finalValue = parseInt(value)

    const targetCourse = courses.findIndex(({ id }) => id === e.target.id)
    const newCourses = JSON.parse(JSON.stringify(courses))
    _.set(newCourses, `[${targetCourse}].${name}`, finalValue)
    setCourses(newCourses)
  }

  const handleExtraExamchange = (e) => {
    const { name, value, checked, type } = e.target
    console.log(e.target.id, name, value)
    let finalValue: number | boolean

    if (type === 'checkbox') finalValue = checked
    else if (type === 'number') finalValue = parseInt(value)
    else finalValue = value

    const targetExam = extraExams.findIndex(({ id }) => id === e.target.id)
    const newExtraExams = JSON.parse(JSON.stringify(extraExams))
    _.set(newExtraExams, `[${targetExam}].${name}`, finalValue)
    setExtraExams(newExtraExams)
  }

  const handleAddExtraExam = () => {
    setExtraExams(
      extraExams.concat({
        id: uuidv4(),
        label: 'Exam Name',
        firstPhase: {
          active: false,
          grade: 100
        },
        secondPhase: {
          active: false,
          grade: 100
        }
      })
    )
  }

  const handleRemoveExtraExam = (i) => (e) => {
    setExtraExams(extraExams.filter((item, j) => i !== j))
  }

  const handleActivetoggle = (e) => {
    const { checked } = e.target
    setExtraExamsActive(checked)
  }

  return (
    <>
      <Nav />
      <main>
        <Container fluid>
          <PageIntro subheading={'Ensino Científico-Humanístico Regular'} />
          <Table columnTitles={columnTitles} courses={courses} onChange={handleCourseChange} />
          <ExtraExamTable
            active={extraExamsActive}
            exams={extraExams}
            onActiveToggle={handleActivetoggle}
            onChange={handleExtraExamchange}
            onAdd={handleAddExtraExam}
            onRemove={handleRemoveExtraExam}
          />
        </Container>
      </main>
    </>
  )
}

export default EnsinoCh
