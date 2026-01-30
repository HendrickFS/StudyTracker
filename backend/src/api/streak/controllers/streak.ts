/**
 * streak controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::streak.streak', ({ strapi }) => ({
    // Get current user's streak
    async getUserStreak(ctx) {
        const user = ctx.state.user;
        
        try {
            const streaks = await strapi.documents('api::streak.streak').findMany({
                filters: { user: { id: user.id } },
                populate: ['user'],
            });

            if (!streaks || streaks.length === 0) {
                return ctx.notFound('Streak not found');
            }

            return ctx.send({ data: streaks[0] });
        } catch (error) {
            return ctx.badRequest(error.message);
        }
    },

    // Update user's streak (daily check-in)
    async checkIn(ctx) {
        const user = ctx.state.user;

        try {
            const streaks = await strapi.documents('api::streak.streak').findMany({
                filters: { user: { id: user.id } },
            });

            if (!streaks || streaks.length === 0) {
                return ctx.badRequest('Streak not found for the user');
            }

            const streak = streaks[0];

            // Check if already checked in today
            const lastCheckIn = new Date(streak.last_check_in);
            const today = new Date();
            
            if (lastCheckIn.toDateString() === today.toDateString()) {
                return ctx.send({ 
                    data: streak,
                    message: 'Already checked in today'
                });
            }

            // Check if streak should be reset (missed a day)
            const daysSinceCheckIn = Math.floor((today.getTime() - lastCheckIn.getTime()) / (1000 * 60 * 60 * 24));
            let newStreak = streak.current_streak;
            
            if (daysSinceCheckIn > 1) {
                newStreak = 1; // Reset streak if missed more than 1 day
            } else {
                newStreak = streak.current_streak + 1; // Increment streak
            }

            // Update longest streak if needed
            const longestStreak = newStreak > streak.longest_streak ? newStreak : streak.longest_streak;

            const updatedStreak = await strapi.documents('api::streak.streak').update({
                documentId: streak.documentId,
                data: {
                    current_streak: newStreak,
                    longest_streak: longestStreak,
                    last_check_in: today,
                },
            });

            return ctx.send({ data: updatedStreak });
        } catch (error) {
            return ctx.badRequest(error.message);
        }
    }
}));
