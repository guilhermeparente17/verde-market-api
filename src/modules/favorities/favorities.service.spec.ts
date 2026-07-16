import { Test, TestingModule } from '@nestjs/testing';
import { FavoritiesService } from './favorities.service';

describe('FavoritiesService', () => {
  let service: FavoritiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoritiesService],
    }).compile();

    service = module.get<FavoritiesService>(FavoritiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
