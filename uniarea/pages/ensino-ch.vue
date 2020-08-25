<template>
  <b-container>
    <h1>Hello World</h1>
    <b-table :items="items" :fields="fields">
      <template v-slot:cell(internal_10)="row">
        <b-form-input v-model="row.item.internal_10" type="number" min="0" max="20" />
      </template>
      <template v-slot:cell(internal_11)="row">
        <b-form-input v-model="row.item.internal_11" type="number" min="0" max="20" />
      </template>
      <template v-slot:cell(internal_12)="row">
        <b-form-input v-if="row.item.internal_12" v-model="row.item.internal_12" type="number" min="0" max="20" />
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
          key: 'name',
          label: 'Disciplina'
        },
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
        }
      ],
      items: [
        { name: 'Português', internal_10: 10, internal_11: 10, internal_12: 10 },
        { name: 'Filosofia', internal_10: 10, internal_11: 10, internal_12: 10 },
        { name: 'Língua Estrangeira', internal_10: 10, internal_11: 10, internal_12: 10 },
        { name: 'Educação Física', internal_10: 10, internal_11: 10, internal_12: null },
        { name: 'Nome Trienal Específica', internal_10: 10, internal_11: 10, internal_12: 10 }
      ]
    }
  }
}
</script>

<style>

</style>
