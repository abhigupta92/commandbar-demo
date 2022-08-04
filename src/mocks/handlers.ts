// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  rest.get('/users', (req, res, ctx) => {
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
        { id: 3, name: 'User 3' },
      ])
    );
  }),
  rest.get('/cars', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: 'Car 1' },
        { id: 2, name: 'Car 2' },
        { id: 3, name: 'Car 3' },
      ])
    );
  }),
];
