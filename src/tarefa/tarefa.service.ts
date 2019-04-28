import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tarefa } from 'src/entitys/tarefa.entity';
import { Repository } from 'typeorm';
import { ITarefa } from './interfaces/tarefa.interface';


@Injectable()
export class TarefaService {
    constructor(
        @InjectRepository(Tarefa)
        private readonly tarefa : Repository<Tarefa>
    ){}

    async create(tarefa : ITarefa) : Promise<Tarefa>{
        const newTarefa = this.tarefa.create({
            ...tarefa,
            pessoa: tarefa.pessoa
        })
        return await this.tarefa.save(newTarefa)
    }

    async findOne(id : number) : Promise<Tarefa> {        
        return await this.tarefa.findOne(id, {relations: ['pessoa']})
    }

    async delete(id : number) : Promise<Tarefa> {
        const tarefa = await this.tarefa.findOne(id, {relations: ['pessoa']})

        return tarefa !== undefined ? await this.tarefa.remove(tarefa) : await tarefa
    }

    async update(id: number, tarefa : ITarefa) : Promise<Tarefa>{
        const newTarefa = await this.tarefa.findOne(id, {relations: ['pessoa']})
        console.log(newTarefa)
        // this.tarefa.update(id, {})
        return await newTarefa
    }
}
