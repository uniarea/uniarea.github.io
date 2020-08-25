<template>
  <b-container>
    <h1>Hello World</h1>
    <b-table striped :items="items" :fields="fields">
      <!-- Internal Scores -->
      <template v-slot:cell(internal_10)="row">
        <b-form-input v-model="row.item.internal_10" type="number" min="0" max="20" />
      </template>
      <template v-slot:cell(internal_11)="row">
        <b-form-input v-model="row.item.internal_11" type="number" min="0" max="20" />
      </template>
      <template v-slot:cell(internal_12)="row">
        <b-form-input v-if="row.item.internal_12" v-model="row.item.internal_12" type="number" min="0" max="20" />
      </template>

      <!-- Internal Exams -->
      <template v-slot:cell(exam_internal)="row">
        <b-row>
          <b-col cols="1">
          <b-form-checkbox v-model="row.item.exam_internal.is_active" type="checkbox" />
          </b-col>
          <template v-if="row.item.exam_internal.is_active">
            <b-col cols="4">
            <b-input-group prepend="1ª Fase">
              <b-form-input v-if="row.item.exam_internal" v-model="row.item.exam_internal.first_phase_grade" type="number" min="0" max="200" />
            </b-input-group>
            </b-col>
            <b-col cols="4">
            <b-input-group prepend="2ª Fase">
              <b-form-input v-if="row.item.exam_internal" v-model="row.item.exam_internal.second_phase_grade" type="number" min="0" max="200" />
            </b-input-group>
            </b-col>
            <b-col cols="1">
            <b-form-checkbox v-model="row.item.exam_internal.is_from_previous_years" type="checkbox"> <span v-b-tooltip.hover :title="messages.previous_year"> (?) </span>  </b-form-checkbox>
          </b-col>
          </template>
        </b-row>
      </template>

      <!-- External Exams -->
    </b-table>
    {{ items }}
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      messages: {
        previous_year: 'Assinalar a caixa se os exames foram realizados num ano anterior ao ano de candidatura.'
      },
      fields: [
        {
          key: 'name',
          label: 'Disciplina'
        },
        // Internal Scores
        {
          key: 'internal_10',
          label: '10º Ano'
        },
        {
          key: 'internal_11',
          label: '11º Ano'
        },
        {
          key: 'internal_12',
          label: '12º Ano'
        },
        // Exams
        // Internal Exams
        {
          key: 'exam_internal',
          label: 'Exames Internos'
        }

      ],
      items: [
        { name: 'Português', internal_10: 10, internal_11: 10, internal_12: 10, exam_internal: { is_active: false, first_phase_grade: 100, second_phase_grade: 100, is_from_previous_years: false } },
        { name: 'Português', internal_10: 10, internal_11: 10, internal_12: 10, exam_internal: { is_active: false, first_phase_grade: 100, second_phase_grade: 100, is_from_previous_years: false } },
        { name: 'Português', internal_10: 10, internal_11: 10, internal_12: 10, exam_internal: { is_active: false, first_phase_grade: 100, second_phase_grade: 100, is_from_previous_years: false } },
        { name: 'Português', internal_10: 10, internal_11: 10, internal_12: 10, exam_internal: { is_active: false, first_phase_grade: 100, second_phase_grade: 100, is_from_previous_years: false } },
        { name: 'Português', internal_10: 10, internal_11: 10, internal_12: 10, exam_internal: { is_active: false, first_phase_grade: 100, second_phase_grade: 100, is_from_previous_years: false } },
        { name: 'Português', internal_10: 10, internal_11: 10, internal_12: 10, exam_internal: { is_active: false, first_phase_grade: 100, second_phase_grade: 100, is_from_previous_years: false } }
      ]
    }
  }
}
</script>

<style>

</style>
