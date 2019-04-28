import { Module } from '@nestjs/common';
import { TarefaService } from './tarefa.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarefa } from 'src/entitys/tarefa.entity';
import { TarefaController } from './tarefa.controller';
import { Pessoa } from 'src/entitys/pessoa.entity';
import { PessoaService } from 'src/pessoa/pessoa.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tarefa, Pessoa])],
  controllers: [TarefaController],
  providers: [TarefaService, PessoaService],
})
export class TarefaModule {}
