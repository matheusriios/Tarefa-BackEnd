import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoaController } from './pessoa/pessoa.controller';
import { PessoaModule } from './pessoa/pessoa.module';
import { TarefaController } from './tarefa/tarefa.controller';
import { TarefaModule } from './tarefa/tarefa.module';
import { PessoaService } from './pessoa/pessoa.service';
import { TarefaService } from './tarefa/tarefa.service';

@Module({
  imports: [TypeOrmModule.forRoot(), PessoaModule, TarefaModule],
  controllers: [AppController, PessoaController, TarefaController],
  providers: [AppService, PessoaService, TarefaService],
})
export class AppModule {}
