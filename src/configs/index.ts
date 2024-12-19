import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const dev = {
  app_port: process.env.PORT || 9998,
  host:
    process.env.NODE_ENV === 'production'
      ? 'https://server.trangluongdoi2.com'
      : `http://localhost:${process.env.DEV_PORT}`,
  postgresql: {
    user: process.env.DEV_POSTGRES_USER,
    host: process.env.DEV_POSTGRES_HOST,
    database: process.env.DEV_POSTGRES_DATABASE,
    port: Number(process.env.DEV_POSTGRES_PORT),
    password: process.env.DEV_POSTGRES_PASSWORD,
  },
  jwt: {
    key: process.env.DEV_JWT_SECRET,
  },
  aws: {
    region: process.env.DEV_AWS_REGION || '',
    bucket: process.env.DEV_AWS_S3_BUCKET || '',
    access_key: process.env.DEV_AWS_ACCESS_KEY_ID || '',
    secret_key: process.env.DEV_AWS_ACCESS_SECRET_KEY || '',
    cognito_app_client_id: process.env.DEV_COGNITO_APP_CLIENT_ID || '',
    cognito_user_pool_id: process.env.DEV_COGNITO_USER_POOL_ID || '',
  },
};

const prod = {
  app_port: process.env.PORT || 9998,
  host:
    process.env.NODE_ENV === 'production'
      ? 'https://server.trangluongdoi2.com'
      : `http://localhost:${process.env.PROD_PORT}`,
  postgresql: {
    user: process.env.PROD_POSTGRES_USER,
    host: process.env.PROD_POSTGRES_HOST,
    database: process.env.PROD_POSTGRES_DATABASE,
    port: Number(process.env.PROD_POSTGRES_PORT),
    password: process.env.PROD_POSTGRES_PASSWORD,
  },
  jwt: {
    key: process.env.PROD_JWT_SECRET,
  },
  aws: {
    region: process.env.PROD_AWS_REGION || '',
    bucket: process.env.PROD_AWS_S3_BUCKET || '',
    access_key: process.env.PROD_AWS_ACCESS_KEY_ID || '',
    secret_key: process.env.PROD_AWS_ACCESS_SECRET_KEY || '',
    cognito_app_client_id: process.env.PROD_COGNITO_APP_CLIENT_ID || '',
    cognito_user_pool_id: process.env.PROD_COGNITO_USER_POOL_ID || '',
  },
};

const env = process.env.NODE_ENV || 'dev';
console.log(env, '==> env..');

const configs = { dev, prod };

export default configs[env as keyof typeof configs];
