module.exports = {
    pages: {
        index: {
            entry: 'src/main.js',
        },
        promo: {
            entry: 'src/promo.js',
            template: 'public/promo.html'
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:5000',
                changeOrigin: true,
            }
        }
    }
}