import { Controller, Get } from '@nestjs/common';
import { HelpHopperService } from './help-hopper.service';

@Controller('help-hopper')
export class HelpHopperController {
  constructor(private readonly service: HelpHopperService) {}

  @Get('/')
  handleEndpointA() {
    return this.service.performAction();
  }
}
