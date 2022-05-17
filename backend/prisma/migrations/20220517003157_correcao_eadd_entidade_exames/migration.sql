-- CreateTable
CREATE TABLE "pacientes" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "nome_mae" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "dados_do_plano_id" TEXT NOT NULL,
    "exames_id" TEXT NOT NULL,

    CONSTRAINT "pacientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dados_do_plano" (
    "id" TEXT NOT NULL,
    "nome_do_plano" TEXT NOT NULL,
    "numero_da_carteirinha" TEXT NOT NULL,

    CONSTRAINT "dados_do_plano_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exames" (
    "id" TEXT NOT NULL,
    "nome_exame" TEXT NOT NULL,
    "foto_escaneada_exame" TEXT NOT NULL,

    CONSTRAINT "exames_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pacientes" ADD CONSTRAINT "pacientes_dados_do_plano_id_fkey" FOREIGN KEY ("dados_do_plano_id") REFERENCES "dados_do_plano"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pacientes" ADD CONSTRAINT "pacientes_exames_id_fkey" FOREIGN KEY ("exames_id") REFERENCES "exames"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
