// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  name: 'DEV',
  apiUrl: 'http://localhost:3000',
  params: { 'offset': 0, 'limit': 10, 'sortBy': 'account_executive', 'sortAsc': 'ASC' },
  poll_freq: 3000,
  auth_enabled: false,
  auth_config: {
    tenant: 'emperorgrouphk.onmicrosoft.com',
    clientId: 'd3258ad5-035e-4e01-9bf9-30fca0ac4de7',
    callbackURL: 'http://localhost:4200/dashboard'
  }
};
