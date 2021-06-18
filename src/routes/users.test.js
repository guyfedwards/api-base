import { buildApp } from '../server';
import db from '../db';

describe('Users', () => {
  let app = null;

  beforeAll(() => {
    app = buildApp();
  });

  it('should return {hello: "world"}', async () => {
    const dbName = (await db.raw('select current_database();')).rows;
    const res = await app.inject({
      url: '/',
      method: 'get'
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toBe(JSON.stringify({ hello: 'world' }));
    expect(dbName).toEqual([{ current_database: 'api' }]);
  });
});
