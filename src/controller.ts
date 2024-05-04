// TODO: Define better log to console way
/* eslint-disable no-console */
import { Hono } from 'hono';
import { Cat } from '@prisma/client';
import { StatusCode } from 'status-code-enum';

import { Worker } from './utils/types';
import { CatForm } from './components/CatForm';
import { dtoValidator } from './utils/injectDB';
import { CatCreateModel } from './validators/cat';

const app = new Hono<Worker>();

app.get('/cat', async (c) => {
  try {
    const cats = await c.env.service.getAll();

    return await c.render(cats);
  } catch (err) {
    console.error(err);
    return c.text('error');
  }
});

app.put('/cat/:catId', dtoValidator(CatCreateModel), async (c) => {
  try {
    const cat = c.get('json') as Cat;
    const { catId } = c.req.param();

    await c.env.service.update(catId, cat);

    return c.text('');
  } catch (err) {
    console.error(err);
    return c.text('error');
  }
});

app.post('/cat', dtoValidator(CatCreateModel), async (c) => {
  try {
    const cat = c.get('json') as Cat;
    const template = await c.env.service.create(cat);

    return await c.html(template);
  } catch (err) {
    console.error(err);
    return c.text('error');
  }
});

app.delete('/cat/:catId', async (c) => {
  try {
    const { catId } = c.req.param();

    await c.env.service.delete(catId);

    c.status(StatusCode.SuccessNoContent);
    return c.text('');
  } catch (err) {
    console.error(err);
    return c.text('error');
  }
});

app.get('/cat/view/reset-form', async (c) => {
  try {
    return await c.html(CatForm({}));
  } catch (err) {
    console.error(err);
    return c.text('error');
  }
});

app.get('/cat/view/edit-cat/:catId', async (c) => {
  try {
    const { catId } = c.req.param();
    const catForm = c.env.service.renderForm(catId);

    return await c.html(catForm);
  } catch (err) {
    console.error(err);
    return c.text('error');
  }
});

export default app;
