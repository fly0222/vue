var vue = require('vue');

//开启调试
vue.config.debug = true;

//引入css
require("./css/flexible.css");

//引入vue组件
var list_a = require('./components/list_a.vue');

new vue({
  el: 'body',
  components: {
    'list_a' : list_a,
  }
})