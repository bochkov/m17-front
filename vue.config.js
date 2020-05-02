module.exports = {
    devServer: {
        proxy: {
            '/static': {
                target: 'http://127.0.0.1:5000',
                changeOrigin: false
            },
            '/api': {
                target: 'http://127.0.0.1:5000',
                changeOrigin: true,
            }
        }
    }
}