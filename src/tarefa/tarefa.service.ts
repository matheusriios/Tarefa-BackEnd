import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tarefa } from 'src/entitys/tarefa.entity';
import { Repository } from 'typeorm';
import { ITarefa } from './interfaces/tarefa.interface';
import { Pessoa } from 'src/entitys/pessoa.entity';

@Injectable()
export class TarefaService {
    constructor(
        @InjectRepository(Tarefa)
        private readonly tarefa: Repository<Tarefa>,
    ) {}

    async create(tarefa: ITarefa, pessoa: Pessoa): Promise<Tarefa> {

        const newTarefa = new Tarefa();

        newTarefa.nomeTarefa = tarefa.nomeTarefa;
        newTarefa.dataInicio = tarefa.dataInicio;
        newTarefa.dataFinal  = tarefa.dataFinal;
        newTarefa.pessoa     = pessoa;
        return await this.tarefa.save(newTarefa);
    }

    async findAll(): Promise<Tarefa[]> {
        return this.tarefa.find({relations: ['pessoa']});
    }

    async findOne(id: number): Promise<Tarefa> {
        return await this.tarefa.findOne(id, {relations: ['pessoa']});
    }

    async delete(id: number): Promise<Tarefa> {
        const tarefa = await this.tarefa.findOne(id, {relations: ['pessoa']});
        return tarefa !== undefined ? await this.tarefa.remove(tarefa) : await tarefa;
    }

    async deleteAll(): Promise<Tarefa> {
        return this.tarefa.query('DELETE FROM tarefa;');
    }

    async update(id: number, tarefa: ITarefa): Promise<Tarefa> {
        const newTarefa = await this.tarefa.findOne(id, {relations: ['pessoa']});
        // this.tarefa.update(id, {})
        return await newTarefa;
    }
}
