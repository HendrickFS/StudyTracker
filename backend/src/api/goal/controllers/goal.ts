/**
 * goal controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::goal.goal', ({ strapi }) => ({
    // Custom controller actions can be added here
    async updateProgress(ctx) {
        const { id } = ctx.params;
        const { progress } = ctx.request.body;

        try {
            const updatedGoal = await strapi.documents('api::goal.goal').update({
                documentId: id,
                data: {
                    progress,
                },
            });

            return ctx.send(updatedGoal);
        } catch (error) {
            return ctx.badRequest(error.message);
        }
    }
}));
