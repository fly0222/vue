var vue = require('vue');

//开启调试
vue.config.debug = true;

//引入css
require("./css/flexible.css");

//引入vue组件
var app = require('./app.vue');

new vue({
  el: 'body',
  components: {
    'app' : app,
  }
})