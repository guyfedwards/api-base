import fastify, { FastifyInstance, FastifyServerOptions } from 'fastify';
import * as routes from './routes';

const PORT = process.env.PORT || 8008;

const buildApp = (options?: FastifyServerOptions): FastifyInstance => {
  const s = fastify(options);

  s.register(routes.users);

  return s;
};

let server: FastifyInstance | undefined;

const start = async (): Promise<void> => {
  server = buildApp({
    logger: true
  });

  try {
    await server.listen(PORT);
  } catch (e) {
    server.log.error(e);
    process.exit(1);
  }
};

const stop = (): void => {
  if (server) {
    server.close();
  }
};

export {
  buildApp,
  start,
  stop
};
