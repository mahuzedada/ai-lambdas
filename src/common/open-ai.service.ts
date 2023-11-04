import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class OpenAIService {
  private openai;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async getResponse(prompt: string): Promise<any> {
    try {
      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4',
        messages: [{ content: prompt, role: 'user' }],
        temperature: 0,
        max_tokens: 3000,
      });
      return completion.choices[0].message.content.trim();
    } catch (error) {
      throw error;
    }
  }
}
