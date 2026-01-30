/**
 * streak router
 */

import { factories } from '@strapi/strapi';
import path from 'path';

export default {
    routes: [
        {
            method: 'GET',
            path: '/streaks/:userId',
            handler: 'streak.getUserStreak',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'PATCH',
            path: '/streaks/:userId',
            handler: 'streak.checkIn',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
}