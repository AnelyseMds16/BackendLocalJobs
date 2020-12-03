'use strict'

const { RouteResource } = require("@adonisjs/framework/src/Route/Manager")

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/* @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route') //vai nos dar as funcionalidadesde rotas 

Route.get('/', ({ request }) => { //rota get na raiz que vai retornar o objeto q é a frase
  return { greeting: 'Hello world in JSON' }
})

Route.post('/registro', 'AuthController.register')
Route.post('/authentication', 'AuthController.authenticate')


Route.resource("agendamentos", "AgendamentoController")
/* Route.post('/agendamentos', 'AgendamentoController.store')
Route.get('/agendamentos', 'AgendamentoController.index')
Route.get('/agendamentos/:id', 'AgendamentoController.show')
Route.delete('/agendamentos/:id', 'AgendamentoController.destroy')
Route.put('/agendamentos/:id', 'AgendamentoController.update') */

Route.resource('categorias', 'CategoriaController')
Route.resource('profissaos', 'ProfissaoController')
