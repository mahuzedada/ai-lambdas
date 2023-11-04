import { Injectable } from '@nestjs/common';
import { OpenAIService } from '../common/open-ai.service';

@Injectable()
export class BiteBotService {
  constructor(private readonly openAIService: OpenAIService) {}
  async performAction() {
    return await this.openAIService.getResponse(
      'Help Me Create A Custom Meal Plan',
    );
  }
}
