import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import birthdaysController from '../controller/birthdays.controller';

const birthdaysRouter: FastifyPluginAsyncTypebox = async (fastify) => {
    fastify.get('/trigger', birthdaysController.triggerBirthdays);
};

export default birthdaysRouter;
