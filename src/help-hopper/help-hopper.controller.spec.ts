import { Test, TestingModule } from '@nestjs/testing';
import { HelpHopperController } from './help-hopper.controller';

describe('HelpHopperController', () => {
  let controller: HelpHopperController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelpHopperController],
    }).compile();

    controller = module.get<HelpHopperController>(HelpHopperController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
