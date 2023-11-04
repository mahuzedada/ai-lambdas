import { Test, TestingModule } from '@nestjs/testing';
import { BiteBotService } from './bite-bot.service';

describe('BiteBotService', () => {
  let service: BiteBotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BiteBotService],
    }).compile();

    service = module.get<BiteBotService>(BiteBotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
