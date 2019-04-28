import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PessoaService } from './pessoa.service';
import { Pessoa } from 'src/entitys/pessoa.entity';
import { PessoaController } from './pessoa.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Pessoa])],
  controllers: [PessoaController],
  providers: [PessoaService]
})
export class PessoaModule {}
