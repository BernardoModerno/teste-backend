import {Request, Response} from 'express'
import { ListPacientesService } from '../../services/pacientes/ListPacientesService'

class ListPacientesController{
  async handle(req: Request, res: Response){
    const listPacientesService = new ListPacientesService();

    const pacientes = await listPacientesService.execute();

    return res.json(pacientes);

  }
}

export { ListPacientesController }