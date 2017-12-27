import Vue from "vue";
import { sync } from "vuex-router-sync";
import Vuetify from "vuetify";
import axios from "axios";
import App from "./App";
import router from "./router";
import store from "./store";
import titleMixin from "./utils/title";

Vue.use(Vuetify, {
    theme: {
        primary: "#26a69a",
        secondary: "#00B8D4"
    }
});
Vue.mixin(titleMixin);
Vue.config.productionTip = false;

export const axiosBrowser = axios.create({});

export default function createApp() {
    sync(store, router);

    const app = new Vue({
        router,
        store,
        render: h => h(App)
    });

    return { app, router, store };
}
