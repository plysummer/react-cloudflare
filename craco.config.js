module.exports = {
    // ...
    devServer: {
        port: 8090,
        proxy: {
            '/api': {
                target: 'https://helloworker.ipfsummer789.workers.dev',
                pathRewrite: { '^/api': '' },
            },
        },
    },
};