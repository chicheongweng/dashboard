// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: true,
  name: 'UAT',
  apiUrl: 'http://uat.ecgdashboard.emperorgroup.net:3000',
  params: { 'offset': 0, 'limit': 10, 'sortBy': 'account_executive', 'sortAsc': 'ASC' },
  poll_freq: 5000,
  auth_enabled: false,
  auth_config: {
    tenant: 'emperorgrouphk.onmicrosoft.com',
    clientId: '4799a27d-330c-45d6-bf08-0b4ea58341c6',
    callbackURL: 'http://uat.ecgdashboard.emperorgroup.net/dashboard'
  }
};
