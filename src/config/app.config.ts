interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Recruitment Manager'],
  customerRoles: ['Guest'],
  tenantRoles: ['Recruitment Manager', 'HR Specialist', 'Recruitment Analyst', 'Account Manager', 'Job Candidate'],
  tenantName: 'Client',
  applicationName: 'Recruitment process outsourcing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View job openings',
    'View candidate profiles',
    'Submit job applications',
    'Provide interview feedback',
  ],
  ownerAbilities: [
    'Manage candidate qualifications',
    'Manage interview feedback',
    'Manage candidate experience',
    'Manage job applications',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/915a3347-d304-4f14-838d-632b4fc1e4f6',
};
