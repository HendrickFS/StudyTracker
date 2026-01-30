/**
 * Custom Auth controller to extend users-permissions plugin
 */

export default (plugin) => {
  // Override the default register method
  plugin.controllers.auth.register = async (ctx) => {
    const { username, email, password } = ctx.request.body;

    try {
      // Call the default registration service
      const response = await strapi.service('plugin::users-permissions.user').add({
        username,
        email,
        password,
        provider: 'local',
      });

      // Auto-create a streak record for the new user
      await strapi.documents('api::streak.streak').create({
        data: {
          user: response.id,
          current_streak: 0,
          longest_streak: 0,
          last_check_in: null,
        },
      });

      // Initialize user stats
      await strapi.documents('plugin::users-permissions.user').update({
        documentId: response.documentId,
        data: {
          streak_count: 0,
          total_achievements: 0,
          last_activity_date: new Date(),
        },
      });

      // Generate JWT token
      const jwt = strapi.service('plugin::users-permissions.jwt').issue({
        id: response.id,
      });

      return ctx.send({
        jwt,
        user: response,
      });
    } catch (error) {
      return ctx.badRequest(error.message);
    }
  };

  return plugin;
};
