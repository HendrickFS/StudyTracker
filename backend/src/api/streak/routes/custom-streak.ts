/**
 * Custom streak routes
 */

export default {
    routes: [
        {
            method: 'GET',
            path: '/streaks/me',
            handler: 'streak.getUserStreak',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/streaks/check-in',
            handler: 'streak.checkIn',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
