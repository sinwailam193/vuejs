import createApp from "./main";

export default context => new Promise((resolve, reject) => {
    const { app, router } = createApp();

    const { url } = context;
    const fullPath = router.resolve(url).route.fullPath;

    if (fullPath !== url) {
        reject({ url: fullPath });
    }

    router.push(url);

    router.onReady(() => {
        const matchedComponents = router.getMatchedComponents();
        if (!matchedComponents.length) {
            reject({ code: 404 });
        }
        Promise.all(matchedComponents.map(({ asyncData }) => asyncData && asyncData({
            route: router.currentRoute
        }))).then(() => {
            resolve(app);
        }).catch(reject);
    }, reject);
});
