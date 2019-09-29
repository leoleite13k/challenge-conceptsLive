import { Router } from 'express';

import AuthController from './app/controllers/AuthController';
import LiveController from './app/controllers/LiveController';

const routes = new Router();

routes.get('/auth', AuthController.index);
routes.get('/auth/callback', AuthController.callback);
routes.get('/live', LiveController.index);

export default routes;
