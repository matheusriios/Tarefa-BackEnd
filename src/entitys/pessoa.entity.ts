import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Tarefa } from "./tarefa.entity";

@Entity()
export class Pessoa {

    @PrimaryGeneratedColumn()
    id : number

    @Column('text')
    nome : string

    @OneToMany(() => Tarefa, (tarefa: Tarefa) => tarefa.pessoa)
    public tarefa : Tarefa[]
}