'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Profissao extends Model {
    categoria() {
        return this.belongsToMany('App/Models/Categoria').pivotTable('categoria_has_profissao')
    }
    user(){
        return this.belongsTo("App/Models/User").pivotTable('profissao_has_user')
    }
}

module.exports = Profissao
