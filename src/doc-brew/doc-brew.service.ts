import { Injectable } from '@nestjs/common';
import { OpenAIService } from '../common/open-ai.service';

@Injectable()
export class DocBrewService {
  constructor(private readonly openAIService: OpenAIService) {}
  async performAction() {
    return await this.openAIService.getResponse(
      'Help Me Create A Custom Documentation For Developers',
    );
  }
}
