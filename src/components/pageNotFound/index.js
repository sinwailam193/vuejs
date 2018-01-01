const AsyncNotFoundComp = () => ({
    // The component to load. Should be a Promise
    component: import("./pageNotFound"),
});

export default AsyncNotFoundComp;
