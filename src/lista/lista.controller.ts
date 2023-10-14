import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListaService } from './lista.service';
import { CreateListaDto } from './dto/create-lista.dto';
import { UpdateListaDto } from './dto/update-lista.dto';

@Controller('lista')
export class ListaController {
  constructor(private readonly listaService: ListaService) {}

  @Post()
  create(@Body() createListaDto: CreateListaDto) {
    return this.listaService.create(createListaDto);
  }

  @Get()
  findAll() {
    return this.listaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListaDto: UpdateListaDto) {
    return this.listaService.update(+id, updateListaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listaService.remove(+id);
  }
}
