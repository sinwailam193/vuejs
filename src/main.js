import Vue from "vue";
import axios from "axios";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

export default function createApp() {
    const app = new Vue({
        router,
        render: h => h(App)
    });
    return { app, router };
}
