import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFavorityDto {
  @ApiProperty({ description: 'Favorities user' })
  @IsString({ message: 'Id do usuário precisa ser uma string.' })
  @IsNotEmpty({ message: 'Id do usuário não pode ser vazio.' })
  userId: string;

  @ApiProperty({ description: 'Favorities product' })
  @IsString({ message: 'Id do produto precisa ser uma string.' })
  @IsNotEmpty({ message: 'Id do produto não pode ser vazio.' })
  productId: string;
}
