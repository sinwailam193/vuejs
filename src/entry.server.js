import axios from "axios";
import createApp from "./main";

export default context => new Promise((resolve, reject) => {
    const { app, router, store } = createApp;
    const { url, cookie, origin } = context;

    const axiosInstance = axios.create({
        headers: { cookie: cookie || "", origin }
    });

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
            store,
            route: router.currentRoute,
            axiosInstance
        }))).then(() => {
            context.state = store.state;
            resolve(app);
        }).catch(reject);
    }, reject);
});
