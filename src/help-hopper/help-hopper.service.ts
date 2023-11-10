import { Injectable, Logger } from '@nestjs/common';
import { OpenAIService } from '../common/open-ai.service';
import { CandidateAndJobInfoDto } from './dto';
import generateCoverLetterPrompt from './prompt-generators/generateCoverLetterPrompt';
import generateSkillGapAnalysisPrompt from './prompt-generators/generateSkillGapAnalysisPrompt';

@Injectable()
export class HelpHopperService {
  private readonly logger = new Logger(HelpHopperService.name);

  constructor(private readonly openAIService: OpenAIService) {}

  async generateCoverLetter(data: CandidateAndJobInfoDto): Promise<any> {
    this.logger.log('Started generateCoverLetter requests');
    return this.openAIService.getResponse(generateCoverLetterPrompt(data));
  }

  async generateSkillGapAnalysis(data: CandidateAndJobInfoDto): Promise<any> {
    this.logger.log('Started skill gap analysis request');
    return this.openAIService.getResponse(generateSkillGapAnalysisPrompt(data));
  }
}
