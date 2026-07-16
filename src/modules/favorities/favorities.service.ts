import { Injectable } from '@nestjs/common';
import { CreateFavorityDto } from './dto/create-favority.dto';
import { UpdateFavorityDto } from './dto/update-favority.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FavoritiesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createFavorityDto: CreateFavorityDto) {
    return await this.prisma.favorities.create({
      data: createFavorityDto,
    });
  }

  async remove(id: string) {
    return this.prisma.favorities.delete({
      where: {
        id,
      },
    });
  }
}
