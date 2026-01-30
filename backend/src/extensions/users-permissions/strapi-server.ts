/**
 * Extension to users-permissions plugin
 */

import auth from './controllers/Auth';

export default (plugin) => {
  // Extend the auth controller
  auth(plugin);

  return plugin;
};
