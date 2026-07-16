import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { FavoritiesService } from './favorities.service';
import { CreateFavorityDto } from './dto/create-favority.dto';

@Controller({
  version: '1',
  path: 'favorities',
})
export class FavoritiesController {
  constructor(private readonly favoritiesService: FavoritiesService) {}

  @Post()
  create(@Body() createFavorityDto: CreateFavorityDto) {
    return this.favoritiesService.create(createFavorityDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoritiesService.remove(id);
  }
}
