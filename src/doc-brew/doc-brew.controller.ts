import { Controller, Get } from '@nestjs/common';
import { DocBrewService } from './doc-brew.service';

@Controller('doc-brew')
export class DocBrewController {
  constructor(private readonly service: DocBrewService) {}

  @Get('/')
  handleEndpointA() {
    return this.service.performAction();
  }
}
