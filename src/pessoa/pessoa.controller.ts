import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { IPessoa } from './interfaces/pessoa.interface';
import { Pessoa } from 'src/entitys/pessoa.entity';

@Controller('pessoa')
export class PessoaController {
    constructor(
        private readonly pessoaService: PessoaService,
    ){}

    @Post('create')
    async create(@Body() createPessoa: IPessoa): Promise<Pessoa> {
        try {
            return await this.pessoaService.create(createPessoa)
        } catch (err) {
            throw new Error(err)
        }
    }

    @Get()
    async findAll(): Promise<Pessoa[]>{
        return this.pessoaService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Pessoa> {
        return this.pessoaService.findOne(id);
    }
}
