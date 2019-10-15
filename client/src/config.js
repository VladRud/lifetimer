const configRules = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    isBrowser: typeof window !== 'undefined',
    apiUrl: 'http://localhost:5000/v1',
    // fbAppId: '991453140998882',
    // googleClientId: '464712936089-q953apdu1bjiqtcjndktnnk1ts4f2cgv.apps.googleusercontent.com',
    // gtmId: 'GTM-WX5ZNVC',
  },
  test: {},
  development: {},
  production: {
    apiUrl: 'https://jsonplaceholder.typicode.com',
  },
};
// TODO refactor to useEnv

const config = Object.assign(configRules.all, configRules[configRules.all.env]);
export default config;
