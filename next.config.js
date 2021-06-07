const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        NEXT_PUBLIC_mongodb_username: "develop",
        NEXT_PUBLIC_mongodb_password: "test",
        NEXT_PUBLIC_mongodb_clustername: "meetups",
        NEXT_PUBLIC_mongodb_database: "products",
      },
    };
  }

  return {
    env: {
      NEXT_PUBLIC_mongodb_username: "develop",
      NEXT_PUBLIC_mongodb_password: "test",
      NEXT_PUBLIC_mongodb_clustername: "meetups",
      NEXT_PUBLIC_mongodb_database: "products",
    },
  };
};
