import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { TarefaService } from './tarefa.service';
import { ITarefa } from './interfaces/tarefa.interface';
import { Tarefa } from 'src/entitys/tarefa.entity';
import { PessoaService } from 'src/pessoa/pessoa.service';

@Controller('tarefa')
export class TarefaController {
    constructor(
        private readonly tarefaService: TarefaService,
        private readonly pessoaService: PessoaService,
    ) {}

    @Post('create')
    async create(@Body() createTarefa) {
        try {
            const idPessoa = createTarefa.idPessoa;
            const pessoa = await this.pessoaService.findOne(idPessoa);
            if (pessoa !== undefined){
                return this.tarefaService.create(createTarefa, pessoa);
            }

            return 'Erro ao criar tarefa';
        } catch (err) {
            throw new Error(err);
        }
    }

    @Get()
    async findAll(): Promise<Tarefa[]> {
        return this.tarefaService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Tarefa> {
        const tarefa = await this.tarefaService.findOne(id);
        if (tarefa === undefined) {
            return JSON.parse(`{
                "Mensagem": "Tarefa não encontrada"
            }`);
        }
        return await tarefa;
    }

    @Delete('delete/:id')
    async delete(@Param('id') id: number): Promise<Tarefa> {
        try {
            const itemDeleted = await this.tarefaService.delete(id);
            if (itemDeleted === undefined) {
                return JSON.parse(`{
                    "Mensagem": "Error ao deletar tarefa"
                }`)
            }

            return await itemDeleted;
        } catch (err) {
            throw new Error(err);
        }
    }

    @Put('update/:id')
    async update(@Param('id') id: number, @Body() updateTarefa: ITarefa): Promise<Tarefa> {
        return await this.tarefaService.update(id, updateTarefa);
    }



}
