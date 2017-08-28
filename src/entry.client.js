import Vue from "vue";
import createApp from "./main";

const { app, router, store } = createApp();

// a global mixin that calls `asyncData` when a route component's params change
Vue.mixin({
    beforeRouteUpdate(to, from, next) {
        const { asyncData } = this.$options;
        if (asyncData) {
            asyncData({
                store: this.$store,
                route: to
            }).then(next).catch(next);
        } else {
            next();
        }
    }
});

const initialState = window.__INITIAL_STATE__;
if (initialState) {
    store.replaceState(initialState);
}

router.onReady(() => {
    router.beforeResolve((to, from, next) => {
        const matched = router.getMatchedComponents(to);
        const prevMatched = router.getMatchedComponents(from);
        const diffed = false;
        const activated = matched.filter((c, i) => diffed || (diffed === (prevMatched[i] !== c)));
        const asyncDataHooks = activated.map(c => c.asyncData).filter(_ => _);
        if (!asyncDataHooks.length) {
            return next();
        }

        return Promise.all(asyncDataHooks.map(hook => hook({ store, route: to })))
      .then(() => {
          next();
      })
      .catch(next);
    });
    app.$mount("#app");
});

// service worker
if (location.protocol === "https:" && navigator.serviceWorker) {
    navigator.serviceWorker.register("/service-worker.js");
}
