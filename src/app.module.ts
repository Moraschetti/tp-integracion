import { Module } from '@nestjs/common';
import { ListaModule } from './lista/lista.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1289',
      database: 'lista',
      entities: [__dirname + '/**/**/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ListaModule,
  ]
})
export class AppModule {}
