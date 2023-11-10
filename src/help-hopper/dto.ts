export interface CandidateAndJobInfoDto {
  firstName: string;
  lastName: string;
  resumeText: string;
  jdText: string;
  tone: 'Formal' | 'Friendly' | 'Enthusiastic';
}
