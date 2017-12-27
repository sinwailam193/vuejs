import axios from "axios";

export default function api(context) {
    const obj = { baseURL: "https://jsonplaceholder.typicode.com" };
    if (context) {
        obj.headers = { cookie: context.cookie || "", origin: context.origin };
    }
    return axios.create(obj);
}
