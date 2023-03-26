module.exports = ({ env }) => ({
    auth: {
        secret: env('ADMIN_JWT_SECRET', 'fwfwfwjgw23r424242'),
    },
    apiToken: {
        salt: env('API_TOKEN_SALT', 'gwgwgwg69797070007'),
    },
});