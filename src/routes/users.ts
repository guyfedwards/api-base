import { FastifyInstance, FastifyServerOptions } from 'fastify';

async function routes (
  fastify:FastifyInstance,
  options: FastifyServerOptions
): Promise<void> {
  fastify.get('/', options, async () => {
    return { hello: 'world' };
  });
}

export default routes;
