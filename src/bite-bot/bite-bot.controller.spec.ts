import { Test, TestingModule } from '@nestjs/testing';
import { BiteBotController } from './bite-bot.controller';

describe('BiteBotController', () => {
  let controller: BiteBotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BiteBotController],
    }).compile();

    controller = module.get<BiteBotController>(BiteBotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
