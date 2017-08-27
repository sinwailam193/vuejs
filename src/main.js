import Vue from "vue";
import axios from "axios";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    template: "<App />",
    components: { App },
});
