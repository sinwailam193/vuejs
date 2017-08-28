import Vue from "vue";
import Component from "vue-class-component";

@Component({
    title: "Users"
})
export default class Users extends Vue {
    newUser = {
        name: "",
        email: ""
    };

    get page() {
        return this.$store.getters.USERS_VIEW;
    }

    created() {
        this.$store.dispatch("GET_USERS");
    }

    onSubmit(event) {
        event.preventDefault();
        const { newUser: { name, email }, page: { users } } = this;
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
        const { users, isToggle } = this.page;
        if (index === "Toggle") {
            this.$store.commit("CHANGE_STATE", { isToggle: !isToggle });
        } else {
            users.splice(index, 1);
        }
    }
}
