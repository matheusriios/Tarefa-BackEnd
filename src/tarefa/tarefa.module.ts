import { Module } from '@nestjs/common';
import { TarefaService } from './tarefa.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarefa } from 'src/entitys/tarefa.entity';
import { TarefaController } from './tarefa.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Tarefa])],
  controllers: [TarefaController],
  providers: [TarefaService]
})
export class TarefaModule {}
