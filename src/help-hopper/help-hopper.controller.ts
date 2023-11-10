import { Controller, Post, Body, Logger, Get } from '@nestjs/common';
import { HelpHopperService } from './help-hopper.service';
import { CandidateAndJobInfoDto } from './dto';

@Controller('help-hopper')
export class HelpHopperController {
  private readonly logger = new Logger(HelpHopperController.name);
  constructor(private readonly service: HelpHopperService) {}

  @Get()
  ping(): string {
    return 'pong';
  }

  @Post('/cover-letter')
  async generateCoverLetter(@Body() data: any): Promise<string> {
    this.logger.log('New request /cover-letter');
    return this.service.generateCoverLetter(data);
  }

  @Post('/skill-gap-analysis')
  async generateSkillGapAnalysis(
    @Body() data: CandidateAndJobInfoDto,
  ): Promise<string> {
    this.logger.log('New request /skill-gap-analysis');
    return this.service.generateSkillGapAnalysis(data);
  }
}
