import {Request, Response} from 'express'
import { ListDadosDoPlanoService } from '../../services/dadosdoplano/ListDadosDoPlanoService'

class ListDadosDoPlanoController{
  async handle(req: Request, res: Response){
    const paciente = req.query.paciente as string;

    const listDadosDoPlanoService = new ListDadosDoPlanoService();

    const dadosdoplano = await listDadosDoPlanoService.execute({
      paciente
    });

    return res.json(dadosdoplano);

  }
}

export { ListDadosDoPlanoController }