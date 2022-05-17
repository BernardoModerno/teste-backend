import prismaClient from "../../prisma";

interface DadosPlanoRequest{
  paciente: string;
}

class ListDadosDoPlanoService {
  async execute({ paciente }: DadosPlanoRequest){
    
    const findByPaciente = await prismaClient.paciente.findMany({
      where:{
        dados_do_plano_id: paciente
      }
    })

    return findByPaciente;

  }
}

export { ListDadosDoPlanoService }