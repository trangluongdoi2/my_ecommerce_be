import { DataSource } from 'typeorm';
import { User } from '@/entity/user.entity';
import configs from './index';

console.log(configs, '==> configs..');

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: configs.postgresql.host,
  port: configs.postgresql.port,
  username: configs.postgresql.user,
  password: configs.postgresql.password,
  database: configs.postgresql.database,
  synchronize: true,
  entities: [User],
});
