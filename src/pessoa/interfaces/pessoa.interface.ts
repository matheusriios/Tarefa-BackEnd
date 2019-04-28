import { Tarefa } from "src/entitys/tarefa.entity";

export interface IPessoa {
    nome: string    
    tarefas : Tarefa[]
}
