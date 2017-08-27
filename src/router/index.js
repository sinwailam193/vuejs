import Vue from "vue";
import Router from "vue-router";
import test from "@/components/test";
import users from "@/components/users";
import notFound from "@/components/pageNotFound";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "users",
            component: users
        },
        {
            path: "/basics",
            name: "test",
            component: test
        },
        {
            path: "*",
            name: "NotFound",
            component: notFound
        }
    ],
});
