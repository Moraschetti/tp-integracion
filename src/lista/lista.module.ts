import { Module } from '@nestjs/common';
import { ListaService } from './lista.service';
import { ListaController } from './lista.controller';
import { Lista } from './entities/lista.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Lista])],
  controllers: [ListaController],
  providers: [ListaService],
})
export class ListaModule {}
