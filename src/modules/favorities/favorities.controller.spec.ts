import { Test, TestingModule } from '@nestjs/testing';
import { FavoritiesController } from './favorities.controller';
import { FavoritiesService } from './favorities.service';

describe('FavoritiesController', () => {
  let controller: FavoritiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoritiesController],
      providers: [FavoritiesService],
    }).compile();

    controller = module.get<FavoritiesController>(FavoritiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
