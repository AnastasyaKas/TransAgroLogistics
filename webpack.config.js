const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',  // Режим разработки
    entry: './src/index.tsx', // Точка входа
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/', // Убедись, что это здесь
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src'), // Теперь @ = папка src
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,  // Правило для TypeScript файлов
                use: 'ts-loader',  // Используем ts-loader для компиляции TS
                exclude: /node_modules/,  // Исключаем node_modules
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: true, // Включает обработку url()
                            importLoaders: 1,
                            modules: {
                                auto: true,
                                namedExport: false,
                                exportLocalsConvention: 'camelCase',
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: true,
                                namedExport: false, // И здесь тоже
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    // Добавляем хеш [hash]. Это поможет нам понять, работает ли Webpack.
                    // Если Webpack работает, в браузере ссылка будет типа /fonts/Name.a1b2c3.woff2
                    filename: 'fonts/[name].[hash:8][ext]'
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext]'
                }
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),  // Папка для статичных файлов
        },
        compress: true,  // Включаем сжатие
        port: 9000,  // Порт сервера
        historyApiFallback: true,  // Поддержка для React Router
        hot: true,  // Включаем горячую перезагрузку
        client: {
            webSocketURL: {
                hostname: 'localhost',  // Указываем локальный хост для WebSocket
                port: 9000,  // Порт для WebSocket
                protocol: 'ws',  // Протокол WebSocket
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // Путь должен быть верным! Проверь, лежит ли там файл
            favicon: './src/assets/images/favicon.ico',
        }),
    ],
};
