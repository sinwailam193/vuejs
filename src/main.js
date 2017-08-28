import Vue from "vue";
import { sync } from "vuex-router-sync";
import App from "./App";
import router from "./router";
import store from "./store";
import titleMixin from "./utils/title";

Vue.mixin(titleMixin);
Vue.config.productionTip = false;

export default function createApp() {
    sync(store, router);

    const app = new Vue({
        router,
        store,
        render: h => h(App)
    });

    return { app, router, store };
}
