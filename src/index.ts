import { Hono } from 'hono';

import { renderer } from './utils/renderer';
import { Worker } from './utils/types';
import { injectDB } from './utils/injectDB';
import catController from './controller';

const app = new Hono<Worker>();

app.get('*', renderer);
app.use('*', injectDB);

app.route('/api/v1', catController);

export default app;
