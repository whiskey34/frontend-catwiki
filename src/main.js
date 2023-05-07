import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

// import Vue from 'vue'
// import { AisInstantSearch } from 'vue-instantsearch'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';

// createApp(App).mount('#app')

// Vue.component('ais-instant-search', AisInstantSearch)

const app = createApp(App);

app.use(router);
app.mount('#app');