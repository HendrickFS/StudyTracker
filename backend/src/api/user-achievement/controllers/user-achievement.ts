/**
 * user-achievement controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::user-achievement.user-achievement', {
    // Custom controller actions can be added here
    async getUserUnlockedAchievements(ctx) {
        const { userId } = ctx.params;

        try {
            const achievements = await strapi.documents('api::user-achievement.user-achievement').findMany({
                filters: { user: userId, unlocked: true },
                populate: { achievement: true },
            });

            return ctx.send(achievements);
        } catch (error) {
            return ctx.badRequest(error.message);
        }
    },

    async unlockAchievement(ctx) {
        const { userId, achievementId } = ctx.request.body;

        try {
            const unlockedAchievement = await strapi.documents('api::user-achievement.user-achievement').create({
                data: {
                    user: userId,
                    achievement: achievementId,
                    unlocked: true,
                    unlocked_at: new Date(),
                },
            });

            return ctx.send(unlockedAchievement);
        } catch (error) {
            return ctx.badRequest(error.message);
        }
    },

    async getAvailableAchievements(ctx) {
        const { userId } = ctx.params;

        try {
            const unlockedAchievements = await strapi.documents('api::user-achievement.user-achievement').findMany({
                filters: { user: userId, unlocked: true },
                populate: { achievement: true },
            });

            const unlockedAchievementIds = unlockedAchievements.map(ua => ua.achievement.id);

            const availableAchievements = await strapi.documents('api::achievement.achievement').findMany({
                filters: { id: { $notIn: unlockedAchievementIds } },
            });

            return ctx.send(availableAchievements);
        } catch (error) {
            return ctx.badRequest(error.message);
        }
    }
});
