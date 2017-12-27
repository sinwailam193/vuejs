export default {
    USERS_VIEW(state) {
        const { isToggle, users } = state;
        return {
            isToggle,
            users
        };
    }
};
