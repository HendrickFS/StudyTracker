/**
 * Custom goal routes
 */

export default {
    routes: [
        {
            method: 'PATCH',
            path: '/goals/:id/progress',
            handler: 'goal.updateProgress',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
