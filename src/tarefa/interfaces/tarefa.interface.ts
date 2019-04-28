import { Pessoa } from "src/entitys/pessoa.entity";

export interface ITarefa {
    nomeTarefa : string
    dataInicio: Date
    dataFinal: Date,
    pessoa: Pessoa
}