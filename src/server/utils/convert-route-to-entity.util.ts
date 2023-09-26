const mapping: Record<string, string> = {
  candidates: 'candidate',
  'candidate-experiences': 'candidate_experience',
  'candidate-qualifications': 'candidate_qualifications',
  clients: 'client',
  'hiring-managers': 'hiring_manager',
  interviews: 'interview',
  'interview-feedbacks': 'interview_feedback',
  'job-applications': 'job_application',
  'job-openings': 'job_opening',
  'recruitment-processes': 'recruitment_process',
  skills: 'skills',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
