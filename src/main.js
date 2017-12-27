import Vue from "vue";
import { sync } from "vuex-router-sync";
import Vuetify from "vuetify";
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

sync(store, router);

const app = new Vue({
    router,
    store,
    render: h => h(App)
});

export default { app, router, store };
