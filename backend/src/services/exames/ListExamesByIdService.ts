import prismaClient from "../../prisma";

interface Exames{
  paciente: string;
}

class ListExamesByIdService {
  async execute({ paciente }: Exames){
    
    const findByPaciente = await prismaClient.paciente.findMany({
      where:{
        exames_id: paciente
      }
    })

    return findByPaciente;

  }
}

export { ListExamesByIdService }