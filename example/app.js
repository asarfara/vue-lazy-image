import Vue from 'vue'
import App from './App.vue'
import VueLazyImage from '../src/components/VueLazyImage'

Vue.component('vue-lazy-image', VueLazyImage);

new Vue({
    el: '#app',
    render: h => h(App)
});
