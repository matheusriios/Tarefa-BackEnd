import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Pessoa } from "./pessoa.entity";

@Entity()
export class Tarefa {

    @PrimaryGeneratedColumn()
    id : number

    @Column('text')
    nomeTarefa : string

    @Column('date')
    dataInicio : Date

    @Column('date')
    dataFinal : Date
    
    @ManyToOne(() =>  Pessoa, (pessoa: Pessoa) => pessoa.tarefa)
    public pessoa: Pessoa

    
}