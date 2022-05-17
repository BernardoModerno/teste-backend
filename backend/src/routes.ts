import { Router } from 'express';
import { ListDadosDoPlanoController } from './controllers/dadosdoplano/ListDadosDoPlanoController';
import { FindByIdExamesController } from './controllers/exames/FindByIdExamesController';
import { ListPacientesController } from './controllers/paciente/ListPacientesController';

import uploadConfig from './config/multer'
import multer from 'multer';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

router.get('/dadosdoplano', new ListDadosDoPlanoController().handle )

router.get('/pacientes', new ListPacientesController().handle )

router.get('/findByIdExames', new FindByIdExamesController().handle )


export { router }; 