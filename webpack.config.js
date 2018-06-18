module.exports = {
    entry: {
        index: './src/index.tsx'
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            plugins: [
                                'babel-plugin-syntax-jsx',
                                ['babel-plugin-inferno', { imports: true }]
                            ]
                        }
                    },
                    { loader: 'ts-loader' }
                ]
            }
        ]
    }
};
