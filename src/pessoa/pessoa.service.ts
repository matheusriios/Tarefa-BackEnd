import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Pessoa } from 'src/entitys/pessoa.entity';
import { Repository } from 'typeorm';
import { IPessoa } from './interfaces/pessoa.interface';

@Injectable()
export class PessoaService {
    constructor(
        @InjectRepository(Pessoa)
        private readonly pessoa : Repository<Pessoa>
    ){}

    async create(pessoa : IPessoa) : Promise<Pessoa>{                
        const newPessoa = await this.pessoa.create(pessoa)
        return await this.pessoa.save(newPessoa)
    }

    async findAll() : Promise<Pessoa[]>{
        return await this.pessoa.find({ relations: [ 'tarefa' ] });
    }
}   
