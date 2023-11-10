import fastify from 'fastify';
import cloudSchedulerService from './service/cloud-scheduler.service';

const server = fastify();

await server.register(
    async (fastify) => {
        await fastify.register(import('./router/birthdays.router'), { prefix: '/birthdays' });
    },
    { prefix: '/v1' }
);

await cloudSchedulerService.createCronScheduler();

server.listen({ port: Number(process.env.PORT) ?? 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
