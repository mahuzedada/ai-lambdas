import { CandidateAndJobInfoDto } from '../dto';

export default function generateCoverLetterPrompt(
  data: CandidateAndJobInfoDto,
): string {
  return `
Based on the provided CoverLetterDTO data:

- First Name: ${data.firstName}
- Last Name: ${data.lastName}
- Resume Details: \`\`\`
${data.resumeText}
      \`\`\`
- Job Description: \`\`\`
${data.jdText}
      \`\`\`
- Tone: ${data.tone}

Please generate a cover letter that incorporates all the provided details. The tone of the cover letter should match the specified tone. Ensure it begins with an appropriate salutation, followed by an introduction, a body detailing the applicant's suitability for the job based on the resume details and job description, and a conclusion expressing gratitude for considering the application. The letter should close with a formal sign-off.
  `;
}
