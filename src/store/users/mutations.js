export const MUTATE_USERS = "MUTATE_USERS";
export const CHANGE_STATE = "CHANGE_STATE";

export default {
    [CHANGE_STATE](state, payload) {
        Object.keys(payload).forEach(key => { state[key] = payload[key]; });
    },
    [MUTATE_USERS](state, users) {
        state.users = users;
    }
};
