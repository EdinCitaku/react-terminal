module.exports = {
    webpack: {
        configure: {
            module: {
                rules: [{
                    test: /\.md$/i,
                    use: 'raw-loader',
                }, ],
            },
        },
    },
};