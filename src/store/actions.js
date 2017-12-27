import { axiosBrowser } from "../main";

export default {
    async GET_USERS({ commit }, { axiosInstance }) {
        const api = axiosInstance || axiosBrowser;
        // commit for triggering mutations
        // dispatch for triggering other actions
        // state is grabing the state of the store
        const users = await api.get("https://jsonplaceholder.typicode.com/users")
            .then(res => res.data.map(val => ({ ...val, contacted: false })));
        commit("MUTATE_USERS", users);
    }
};
