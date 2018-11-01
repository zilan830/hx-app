const vuxLoader = require('vux-loader');

// mock code
const posts = require('./src/mock/post.json');// 文章列表数据源
const users = require('./src/mock/user.json'); // 用户列表数据源
const test = require('./src/mock/test.json'); //测试

module.exports = {
    baseUrl: './',
    assetsDir: "static",

    devServer: {
        port: 9999,
        before(app){
            app.post('/api/posts', (req, res) => {
                res.json(posts)
            });
            app.get('/api/users', (req, res) => {
                res.json(users)
            });
            app.get('/api/test',(req,res) => {
                res.json(test)
            })
        }
    },

    css:{
      sourceMap: false,
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    productionSourceMap: false,
    lintOnSave: false,

    configureWebpack: config => {
        vuxLoader.merge(config, {
            plugins: ['vux-ui']
        });
        console.log(config);
    },

    runtimeCompiler: true,

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    }
};
