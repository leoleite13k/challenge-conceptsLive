import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.execptionHandler();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }

  execptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        return res.status(500).json(err);
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;
