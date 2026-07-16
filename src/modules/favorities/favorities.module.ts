import { Module } from '@nestjs/common';
import { FavoritiesService } from './favorities.service';
import { FavoritiesController } from './favorities.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FavoritiesController],
  providers: [FavoritiesService, PrismaService],
})
export class FavoritiesModule {}
