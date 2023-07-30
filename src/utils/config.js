
const config = {
  API_BASE_URL:
    process.env.REACT_APP_API_URL || 'http://127.0.0.1:4010/api/',
  AUTH_TOKEN: 'x-auth-token',
  AUTH_USER_ID: 'x-auth-user',
};

export default config;
