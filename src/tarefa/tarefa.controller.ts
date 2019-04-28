import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { TarefaService } from './tarefa.service';
import { ITarefa } from './interfaces/tarefa.interface';
import { Tarefa } from 'src/entitys/tarefa.entity';

@Controller('tarefa')
export class TarefaController {
    constructor(
        private readonly tarefaService : TarefaService
    ){}

    @Post('create')
    create(@Body() createTarefa : ITarefa) {                
        try {
            return this.tarefaService.create(createTarefa)
        } catch (err) {
            console.log(err)
        }
    }

    @Get(':id')
    async findOne(@Param('id') id : number) : Promise<Tarefa> {
        const tarefa = await this.tarefaService.findOne(id)
        console.log(tarefa)
        if(tarefa === undefined){
            return JSON.parse(`{
                "Mensagem": "Tarefa não encontrada"
            }`)
        }
        return await tarefa
    }

    @Delete('delete/:id')
    async delete(@Param('id') id : number) : Promise<Tarefa> {
        try {
            const itemDeleted = await this.tarefaService.delete(id)            
            if(itemDeleted === undefined) {
                return JSON.parse(`{
                    "Mensagem": "Error ao deletar tarefa"
                }`)
            }
            
            return await itemDeleted
        } catch (err) {
            console.log(err)
        }
    }

    @Put('update/:id')
    async update(@Param('id') id : number, @Body() updateTarefa : ITarefa) : Promise<Tarefa> {        
        return await this.tarefaService.update(id, updateTarefa)
    }

}
