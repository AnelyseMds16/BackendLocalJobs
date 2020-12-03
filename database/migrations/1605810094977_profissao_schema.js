'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfissaoSchema extends Schema {
  up () {
    this.create('profissao', (table) => {
      table.increments()
      table.string('nome', 50).notNullable().unique()
      table.string('descricao', 250).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('profissao')
  }
}

module.exports = ProfissaoSchema
