const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'mark',
        mongodb_password: 'XBIMy29EXnpacMJC',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'events-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'mark',
      mongodb_password: 'XBIMy29EXnpacMJC',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'events',
    },
  };
};