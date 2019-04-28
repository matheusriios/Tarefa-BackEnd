import { Pessoa } from "src/entitys/pessoa.entity";

export interface ITarefa {
    nome : string
    dataInicio: Date
    dataFinal: Date,
    pessoa: Pessoa
}