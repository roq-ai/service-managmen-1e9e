interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['End Customer'],
  tenantRoles: ['Business Owner', 'Service Manager', 'Service Technician', 'Service Engineer'],
  tenantName: 'Organization',
  applicationName: 'Service Managment Application',
  addOns: ['chat', 'notifications', 'file'],
  customerAbilities: ['Submit a complaint to the organization', 'View the status of submitted complaint'],
  ownerAbilities: [
    'Manage organization in the application',
    'Invite Service Managers, Service Technicians, and Service Engineers to the organization',
  ],
};
