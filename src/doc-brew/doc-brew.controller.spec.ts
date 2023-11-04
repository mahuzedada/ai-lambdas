import { Test, TestingModule } from '@nestjs/testing';
import { DocBrewController } from './doc-brew.controller';

describe('DocBrewController', () => {
  let controller: DocBrewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocBrewController],
    }).compile();

    controller = module.get<DocBrewController>(DocBrewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
