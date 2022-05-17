import {Request, Response} from 'express'
import { ListExamesByIdService } from '../../services/exames/ListExamesByIdService'

class FindByIdExamesController{
  async handle(req: Request, res: Response){
    const paciente = req.query.paciente as string;

    const listExamesByIdService = new ListExamesByIdService();

    const exames = await listExamesByIdService.execute({
      paciente
    });

    return res.json(exames);

  }
}

export { FindByIdExamesController }