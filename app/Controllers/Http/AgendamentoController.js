'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Agendamento = use("App/Models/Agendamento")

/**
 * Resourceful controller for interacting with agendamentos
 */
class AgendamentoController {
  /**
   * Show a list of all agendamentos.
   * GET agendamentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const Agendamentos = await Agendamento.all();
    return Agendamentos; 
  }
  /**
   * Create/save a new agendamento.
   * POST agendamentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }){
    const dado = request.only(["data", "id_user", "id_user1"]);
    const Agendamentos = await Agendamento.create(dado);

    return Agendamentos;
  }

  /**
   * Display a single agendamento.
   * GET agendamentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({params}){
    const Agendamentos = await Agendamento.findOrFail(params.id);

    return Agendamentos;
  }

  /**
   * Update agendamento details.
   * PUT or PATCH agendamentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request}) {
    const Agendamentos = await Agendamento.findOrFail(params.id);
    const dado = request.only(["idagendamento", "data"]);

    Agendamentos.merge(dado);
    await Agendamentos.save();

    return Agendamentos;
  }

  /**
   * Delete a agendamento with id.
   * DELETE agendamentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params}) {
    const Agendamentos = await Agendamento.findOrFail(params.id);

    await Agendamentos.delete();

    return Agendamentos;
  }
}

module.exports = AgendamentoController
