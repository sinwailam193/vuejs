const AsyncUsersComp = () => ({
    // The component to load. Should be a Promise
    component: import("./users"),
});

export default AsyncUsersComp;
