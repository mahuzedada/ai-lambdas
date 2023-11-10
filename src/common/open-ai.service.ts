import { Injectable, Logger } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class OpenAIService {
  private openai;
  private readonly logger = new Logger(OpenAIService.name);

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async getResponse(prompt: string): Promise<any> {
    this.logger.log('About to Start OpenAI request');
    try {
      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4-1106-preview',
        messages: [{ content: prompt, role: 'user' }],
        temperature: 0,
        max_tokens: 3000,
      });
      this.logger.log('Got a successful response from OpenAI');
      return completion.choices[0].message.content.trim();
    } catch (error) {
      this.logger.log(
        `An error occurred while performing OpenAI request: ${error}`,
      );
      throw error;
    }
  }
}
