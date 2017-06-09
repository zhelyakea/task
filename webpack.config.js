var path = require('path')

module.exports = {
    devtool: 'source-map',
    resolve: {
      alias: {
        actions: path.resolve(__dirname + "/front-end/src/actions"),
        components: path.resolve(__dirname + "/front-end/src/components"),
        search: path.resolve(__dirname + "/front-end/src/components/search"),
        services: path.resolve(__dirname + "/front-end/src/services"),
        root: path.resolve(__dirname + "/front-end/src/"),
      }
    },
    entry: [
        './front-end/src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    devServer: {
        port: 3000,
        proxy: [{
            path: '/api/',
            target: 'http://localhost:3001'
        }],
        historyApiFallback: {
          index: './front-end/public/index.html'
        }
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loaders: ['babel'],
                include: path.join(__dirname, 'front-end/src')
            },
            {
              test: /\.css$/,
              loaders: [
                'style-loader',
                'css-loader?importLoaders=1',
                'postcss-loader'
              ]
            },
            {
              test: /\.svg/,
              loader: 'svg-url'
            }
        ]
    },
    postcss: () => {
      return [
        require('precss'),
        require('postcss-cssnext'),
      ];
    }
}
