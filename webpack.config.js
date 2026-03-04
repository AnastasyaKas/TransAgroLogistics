const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
    mode: "development",

    entry: "./src/index.tsx",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/",
        clean: true,
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },

    module: {
        rules: [
            // =========================
            // TS / TSX
            // =========================
            {
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true,
                    },
                },
                exclude: /node_modules/,
            },

            // =========================
            // SCSS MODULES (*.module.scss)
            // =========================
            {
                test: /\.module\.scss$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            esModule: false,
                            importLoaders: 1,
                            url: true,
                            modules: {
                                localIdentName: "[name]__[local]__[hash:base64:5]",
                                exportLocalsConvention: "camelCase",
                            },
                        },
                    },
                    "sass-loader",
                ],
            },

            // =========================
            // GLOBAL SCSS
            // =========================
            {
                test: /\.scss$/i,
                exclude: /\.module\.scss$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            esModule: false,
                            importLoaders: 1,
                            url: true,
                            modules: false,
                        },
                    },
                    "sass-loader",
                ],
            },

            // =========================
            // CSS MODULES (*.module.css)
            // =========================
            {
                test: /\.module\.css$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            esModule: false,
                            modules: {
                                localIdentName: "[name]__[local]__[hash:base64:5]",
                                exportLocalsConvention: "camelCase",
                            },
                        },
                    },
                ],
            },

            // =========================
            // GLOBAL CSS
            // =========================
            {
                test: /\.css$/i,
                exclude: /\.module\.css$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            esModule: false,
                            modules: false,
                        },
                    },
                ],
            },

            // =========================
            // Fonts
            // =========================
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: "fonts/[name].[hash:8][ext]",
                },
            },

            // =========================
            // SVG as URL (for <img src="...">)
            // import logoUrl from "./logo.svg?url"
            // =========================
            {
                test: /\.svg$/i,
                resourceQuery: /url/, // *.svg?url
                type: "asset/resource",
                generator: {
                    filename: "assets/images/[name].[contenthash:8][ext]",
                },
            },

            // =========================
            // SVG as React Component (SVGR)
            // import Icon from "./icon.svg"
            // =========================
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                resourceQuery: { not: [/url/] },
                use: [
                    {
                        loader: "@svgr/webpack",
                        options: {
                            icon: true,
                            svgo: true,
                            svgoConfig: {
                                plugins: [
                                    {
                                        name: "preset-default",
                                        params: {
                                            overrides: {
                                                removeViewBox: false,
                                            },
                                        },
                                    },
                                ],
                            },
                        },
                    },
                ],
            },

            // =========================
            // Images (NO SVG here!)
            // =========================
            {
                test: /\.(png|jpe?g|gif|webp|avif|ico)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/images/[name].[contenthash:8][ext]",
                },
            },
        ],
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 9000,
        historyApiFallback: true,
        hot: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            favicon: "./src/assets/images/favicon.ico",
        }),
        new ForkTsCheckerWebpackPlugin(),
    ],
};