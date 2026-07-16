import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ description: 'Product name' })
  @IsString({ message: 'O nome deve ser um texto.' })
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  name: string;

  @ApiProperty({ description: 'Product description' })
  @IsString({ message: 'A descrição deve ser um texto.' })
  @IsNotEmpty({ message: 'A descrição é obrigatória.' })
  description: string;

  @ApiProperty({ description: 'Product assessment' })
  @IsNumber({}, { message: 'A avaliação deve ser um número.' })
  @IsNotEmpty({ message: 'A avaliação é obrigatória.' })
  assessment: number;

  @ApiProperty({ description: 'Product categoryId' })
  @IsString({ message: 'O ID da categoria deve ser um texto.' })
  @IsNotEmpty({ message: 'O ID da categoria é obrigatório.' })
  categoryId: string;

  @ApiProperty({ description: 'Product inStock', default: false })
  @IsBoolean({ message: 'O campo "em estoque" deve ser verdadeiro ou falso.' })
  inStock?: boolean = false;

  @ApiProperty({ description: 'Product value' })
  @IsNumber({}, { message: 'O valor deve ser um número.' })
  @IsNotEmpty({ message: 'O valor é obrigatório.' })
  value: number;

  @ApiProperty({ description: 'Product stock' })
  @IsNumber({}, { message: 'O estoque deve ser um número.' })
  @IsNotEmpty({ message: 'O estoque é obrigatório.' })
  stock: number;

  @ApiProperty({ description: 'Product images' })
  @IsArray({ message: 'As imagens devem ser uma lista.' })
  @IsString({
    each: true,
    message: 'Cada imagem deve ser uma string.',
  })
  images: string[] = [];
}
