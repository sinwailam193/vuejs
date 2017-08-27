import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Users extends Vue {
    newUser = {
        name: "",
        email: ""
    };
    users = [];

    created() {
        this.$http.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                this.users = res.data.map(val => ({ ...val, contacted: false }));
            });
    }

    onSubmit(event) {
        event.preventDefault();
        const { newUser: { name, email }, users } = this;
        if (name && email) {
            users.push({
                name,
                email,
                contacted: false
            });
            this.newUser = { name: "", email: "" };
        }
    }

    onClick(index) {
        const { users } = this;
        users.splice(index, 1);
    }
}
