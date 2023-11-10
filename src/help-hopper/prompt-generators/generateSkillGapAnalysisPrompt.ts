import { CandidateAndJobInfoDto } from '../dto';

export default function generateSkillGapAnalysisPrompt(
  data: CandidateAndJobInfoDto,
): string {
  return `
Based on the provided candidate and job data:

- Resume Details: \`\`\` 
      ${data.resumeText}
      \`\`\`
- Job Description: \`\`\`
      ${data.jdText}
      \`\`\`

Please perform a skill gap analysis in the following json format.
{
  "strengths": "Highlight the candidate's strengths that match the job description. This should be formatted as a array of strings where each element is a strength",
  "gaps: "Identify areas where the candidate might be lacking or could improve in relation to the job's requirements. This should be formatted as a array of strings where each element is a gap",
  "resources": "For each identified skill gap or area of improvement, suggest free online resources or courses that can help the candidate acquire or bolster those required skills. The goal is to provide the candidate with a comprehensive action plan to better align their skills with the job's demands. This should be formatted as a array of {skill: 'skill1', resources: [{shortDescription: '', link: 'resource1'}, {shortDescription: '', link: 'resource2'}]} where each element is a skill and corresponding resources",
  "matchScore: "a score out of 100 to describe how well the candidate's skills are aligned with the job description",
}
  `;
}
