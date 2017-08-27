import createApp from "./main";

const { app, router } = createApp();

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

        return Promise.all(asyncDataHooks.map(hook => hook({ route: to })))
      .then(() => {
          next();
      })
      .catch(next);
    });
    app.$mount("#app");
});
