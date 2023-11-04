import { Test, TestingModule } from '@nestjs/testing';
import { HelpHopperService } from './help-hopper.service';

describe('HelpHopperService', () => {
  let service: HelpHopperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelpHopperService],
    }).compile();

    service = module.get<HelpHopperService>(HelpHopperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
