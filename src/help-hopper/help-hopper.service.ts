import { Injectable } from '@nestjs/common';
import { OpenAIService } from '../common/open-ai.service';

@Injectable()
export class HelpHopperService {
  constructor(private readonly openAIService: OpenAIService) {}
  async performAction() {
    return await this.openAIService.getResponse('Help Me Write A Resume');
  }
}
