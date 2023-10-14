import { IsString } from "class-validator";

export class CreateListaDto {
    @IsString()
    nombre:string;
   
    @IsString()
    apellido:string;

    @IsString()
    nacionalidad:string;
}
