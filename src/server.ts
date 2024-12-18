import express, { Response } from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import { AppDataSource } from '@/config/db-connection';
import swaggerPlugin from '@/config/swagger';
import config from './config';
import logger from './config/logger';

function initApp() {
  try {
    AppDataSource.initialize().then(() => {
      const app = express();
      app.use(
        cors({
          origin: '*',
          methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
          credentials: true,
          allowedHeaders: ['*']
        })
      );
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(bodyParser.json());
      app.get('/', (_, res: Response) => {
        res.send('<h1>My Todo App!!</h1>');
      });
      swaggerPlugin(app);
      app.listen(config.app_port, () => {
        const url = `http://localhost:${config.app_port}`;
        console.log(`App is running on ${url}`);
        console.log(`Swagger is running on ${url}/api-docs`);
        logger.info(`App is running on ${url}`);
      });
    });
  } catch (error) {
    console.log(`Database connection failed with error ${error}`);
  }
}

initApp();
