import { Controller, Get } from '@nestjs/common';
import { BiteBotService } from './bite-bot.service';

@Controller('bite-bot')
export class BiteBotController {
  constructor(private readonly service: BiteBotService) {}

  @Get('/')
  handleEndpointA() {
    return this.service.performAction();
  }
}
