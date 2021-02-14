export const ENSINO_CH_CONFIG = {
  columnTitles: [
    {
      name: 'Name 1',
      tooltip: 'This is additional information that is shown on hover.'
    },
    {
      name: 'Name 2',
      tooltip: 'This is additional information that is shown on hover.'
    },
    {
      name: 'Name 3',
      tooltip: 'This is additional information that is shown on hover.'
    },
    {
      name: 'Name 4',
      tooltip: 'This is additional information that is shown on hover.'
    },
    {
      name: 'Interno 1ª Fase',
      tooltip: 'This is additional information that is shown on hover.'
    },
    {
      name: 'Interno 2ª Fase',
      tooltip: 'This is additional information that is shown on hover.'
    },
    {
      name: 'Externo 1ª Fase',
      tooltip: 'This is additional information that is shown on hover.'
    },
    {
      name: 'Externo 2ª Fase',
      tooltip: 'This is additional information that is shown on hover.'
    },
    {
      name: 'Prova de Ingresso',
      tooltip: 'This is additional information that is shown on hover.'
    }
  ],
  courses: [
    {
      id: 'course-0',
      label: 'Course Name',
      isAccessExam: true,
      internalScores: {
        year10: 15,
        year11: 15,
        year12: 16
      },
      exams: {
        internal: {
          firstPhase: {
            grade: 150,
            active: true,
            isFromPreviousYears: false
          },
          secondPhase: {
            grade: 150,
            active: true,
            isFromPreviousYears: false
          }
        },
        external: {
          firstPhase: {
            grade: 150,
            active: true,
            isFromPreviousYears: false
          },
          secondPhase: {
            grade: 150,
            active: true,
            isFromPreviousYears: false
          }
        }
      }
    },
    {
      id: 'course-1',
      label: 'Course Name',
      isAccessExam: false,
      internalScores: {
        year10: 15,
        year11: 15,
        year12: 16
      },
      exams: {
        internal: {
          firstPhase: {
            grade: 150,
            active: true,
            isFromPreviousYears: false
          },
          secondPhase: {
            grade: 150,
            active: true,
            isFromPreviousYears: false
          }
        },
        external: {
          firstPhase: {
            grade: 150,
            active: true,
            isFromPreviousYears: false
          },
          secondPhase: {
            grade: 150,
            active: true,
            isFromPreviousYears: false
          }
        }
      }
    },
    {
      id: 'course-2',
      label: 'Course Name',
      isAccessExam: true,
      internalScores: {
        year10: 15,
        year11: 15,
        year12: 16
      },
      exams: {
        internal: {
          firstPhase: {
            grade: 150,
            active: true,
            isFromPreviousYears: false
          },
          secondPhase: {
            grade: 150,
            active: false,
            isFromPreviousYears: false
          }
        },
        external: {
          firstPhase: {
            grade: 150,
            active: true,
            isFromPreviousYears: false
          },
          secondPhase: {
            grade: 150,
            active: true,
            isFromPreviousYears: false
          }
        }
      }
    }
  ]
}
