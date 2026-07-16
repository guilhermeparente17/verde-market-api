import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ description: 'Category name' })
  @IsString({ message: 'O nome precisa ser um texto.' })
  @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
  name: string;
}
