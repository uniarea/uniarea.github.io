<template>
  <b-container>
    <h1>Hello World</h1>
    <b-table :items="items" :fields="fields" >
           <template v-slot:cell(year_10)="row">
        <b-form-input v-model="row.item.year_10" type="number"/>
      </template>
           <template v-slot:cell(year_11)="row">
        <b-form-input v-model="row.item.year_11" type="number"/>
      </template>
           <template v-slot:cell(year_12)="row">
        <b-form-input v-model="row.item.year_12" type="number"/>
      </template>
    </b-table>
    {{ items }}
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      fields: [
        {
          key: 'subject',
          label: 'Disciplina'
        },
        {
          key: 'year_10',
          label: '10º Ano'
        },
        {
          key: 'year_11',
          label: '11º Ano'
        },
        {
          key: 'year_12',
          label: '12º Ano'
        }
      ],
      items: [
        { subject: 'Português', year_10: 10, year_11: 10, year_12: 10 },
        { subject: 'Filosofia', year_10: 10, year_11: 10, year_12: 10 },
        { subject: 'Língua Estrangeira', year_10: 10, year_11: 10, year_12: 10 },
        { subject: 'Educação Física', year_10: 10, year_11: 10, year_12: 10 },
        { subject: 'Nome Trienal Específica', year_10: 10, year_11: 10, year_12: 10 }
      ]
    }
  }
}
</script>

<style>

</style>
