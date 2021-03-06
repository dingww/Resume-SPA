import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import VueResource from 'vue-resource';

require('./assets/js/rem.js');
require('./assets/js/iconfont.js');

Vue.config.debug = true;
Vue.use(VueResource, router);
Vue.http.options.emulateHTTP = true;

new Vue({
    router,
    el: '#root',
    render: h => h(App)
})