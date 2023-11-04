import { Test, TestingModule } from '@nestjs/testing';
import { DocBrewService } from './doc-brew.service';

describe('DocBrewService', () => {
  let service: DocBrewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocBrewService],
    }).compile();

    service = module.get<DocBrewService>(DocBrewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
