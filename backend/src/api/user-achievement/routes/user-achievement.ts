/**
 * user-achievement router
 */

export default {
    routes: [
        {
            method: 'GET',
            path: '/user-achievements/:userId/unlocked',
            handler: 'user-achievement.getUserUnlockedAchievements',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/user-achievements/unlock',
            handler: 'user-achievement.unlockAchievement',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/user-achievements/:userId/available',
            handler: 'user-achievement.getAvailableAchievements',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ]
};