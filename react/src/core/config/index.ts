export const env = process.env.APP_ENV

export const environments = {
  mock: {
    beagleUrl: 'http://localhost:3001',
  },
  production: {
    beagleUrl: 'http://localhost:3001',
  },
}
// @ts-ignore
export const getCurrentEnvConfig = () => environments[env] || environments.production
