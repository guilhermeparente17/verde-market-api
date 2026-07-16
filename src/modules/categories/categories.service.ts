import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    return await this.prisma.category.create({
      data: createCategoryDto,
    });
  }

  async findAll() {
    return await this.prisma.category.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.category.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const user = await this.prisma.category.findFirst({
      where: {
        id,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Usuário não existe');
    }

    return await this.prisma.category.update({
      where: {
        id,
      },
      data: updateCategoryDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.category.delete({
      where: {
        id,
      },
    });
  }
}
