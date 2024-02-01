module.exports = {
    apps: [{
        script  : 'app.js',
        watch   : '.',
        env_dev : {
            NODE_ENV                             : 'development',
            PORT                                 : 8000,
            JWT_SECRET                           : "mysecreat",
            JWT_ACCESS_EXPIRATION_MINUTES        : 1440,
            JWT_REFRESH_EXPIRATION_DAYS          : 3,
            JWT_RESET_PASSWORD_EXPIRATION_MINUTES: 60,
            JWT_VERIFY_EMAIL_EXPIRATION_MINUTES  : 120,
        },
        env_test: {
            PORT        : 2222,
            NODE_ENV    : "test",
            TOKEN_SECRET: "key"
        },
        env_prod: {
            PORT        : 2222,
            NODE_ENV    : "production",
            TOKEN_SECRET: "key"
        },
    }],
};