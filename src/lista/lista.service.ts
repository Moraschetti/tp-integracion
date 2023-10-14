import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateListaDto } from './dto/create-lista.dto';
import { UpdateListaDto } from './dto/update-lista.dto';
import { Lista } from './entities/lista.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class ListaService {
  constructor(
    @InjectRepository(Lista)
    private readonly listaRepository: Repository<Lista>
  ){}

 async create(createListaDto: CreateListaDto) {
    const lista = this.listaRepository.create(createListaDto)
    return await this.listaRepository.save(lista) ;
  }

 async findAll():Promise<Lista[]> {
    return await this.listaRepository.find()
  }

  async findOne(id: number) {
    return await this.listaRepository.findOneBy({id});
  }

  async update(id: number, updateListaDto: UpdateListaDto) {
    return await this.listaRepository.update(id, updateListaDto);
  }

  async remove(id:number): Promise<any>{
    try{
        const criterio : FindOneOptions = { where : {id:id} }
        let lista : Lista = await this.listaRepository.findOne(criterio);
        if(!lista)
            throw new Error('no se puede eliminar persona ');
        else{
            await this.listaRepository.remove(lista);
            return { id:id,
                    message:'se elimino exitosamente'
                }
            }
    }
    catch(error){
        throw new HttpException({
            status: HttpStatus.NOT_FOUND,
            error: 'Error en lista - ' + error
        },HttpStatus.NOT_FOUND)
    }
}
}