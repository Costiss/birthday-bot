import { RouteHandler } from 'fastify';
import birthdaysService from '../service/birthdays.service';

const triggerBirthdays: RouteHandler = async (request, reply) => {
    await birthdaysService.alertTodayBirthdays();
    return reply.status(200);
};

export default {
    triggerBirthdays
};
