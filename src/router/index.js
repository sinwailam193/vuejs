import Vue from "vue";
import Router from "vue-router";
import notFound from "@/components/views/pageNotFound";
import mainPage from "@/components/views/mainPage";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "mainPage",
            component: mainPage
        },
        {
            path: "*",
            name: "notFound",
            component: notFound
        }
    ],
});
