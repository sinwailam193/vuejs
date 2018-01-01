const AsyncTestComp = () => ({
    // The component to load. Should be a Promise
    component: import("./test"),
});

export default AsyncTestComp;
