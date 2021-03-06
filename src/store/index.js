import Vue from "vue";
import Vuex, { Store } from "vuex";
import users from "./users";

Vue.use(Vuex);

export default new Store({
    modules: {
        users
    }
});
