<template>
<app-content></app-content>
<app-list></app-list>
<app-pop></app-pop>
</template>



<script>
var app_content = require('./components/app-content.vue');
var app_list = require('./components/app-list.vue');
var app_pop = require('./components/app-pop.vue');
export default {
  data () {
    return {
      msg: ''
    }
  },
  components: {
    'app-content' : app_content,
    'app-list' : app_list,
    'app-pop' : app_pop,
  }
}
</script>

