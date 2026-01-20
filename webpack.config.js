const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',  // Режим разработки
    entry: './src/index.tsx', // Точка входа
    output: {
        path: path.resolve(__dirname, 'dist'),  // Папка для скомпилированных файлов
        filename: 'bundle.js',  // Название скомпилированного файла
        publicPath: '/',  // Публичный путь для ресурсов (например, статика)
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],  // Расширения для разрешения модулей
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
                            importLoaders: 2, // Важно для цепочки с sass-loader
                            modules: {
                                auto: true,
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                                namedExport: false, // ВАЖНО: отключаем именованные экспорты для версии 7.x
                                exportLocalsConvention: 'camelCase', // Позволяет писать styles.layoutWrapper
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
                test: /\.(png|jpg|svg|gif)$/i,  // Правило для изображений
                type: 'asset/resource',  // Импортируем ресурсы как отдельные файлы
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
            template: './src/index.html',  // Шаблон для генерируемого HTML
        }),
    ],
};
