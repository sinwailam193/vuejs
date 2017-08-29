import axios from "axios";

export default {
    async GET_USERS({ commit }) {
        // commit for triggering mutations
        // dispatch for triggering other actions
        // state is grabing the state of the store
        const users = await axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => res.data.map(val => ({ ...val, contacted: false })));
        commit("MUTATE_USERS", users);
    }
};
