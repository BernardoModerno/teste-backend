import prismaClient from "../../prisma";

class ListPacientesService{
  async execute(){

    const pacientes = await prismaClient.paciente.findMany({
      select:{
        id: true,
        nome: true,
        cpf: true,
        data_nascimento: true,
        endereco: true,
        nome_mae: true
      }
    })

    return pacientes;

  }
}

export { ListPacientesService }