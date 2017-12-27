import api from "@/utils/axiosInstance";
import { MUTATE_USERS } from "./mutations";

export const GET_USERS = "GET_USERS";

export default {
    async [GET_USERS]({ commit }, { axiosInstance }) {
        const instance = axiosInstance || api();
        // commit for triggering mutations
        // dispatch for triggering other actions
        // state is grabing the state of the store
        const users = await instance.get("/users")
            .then(res => res.data.map(val => ({ ...val, contacted: false })));
        commit(MUTATE_USERS, users);
    }
};
