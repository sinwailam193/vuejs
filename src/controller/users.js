import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Users extends Vue {
    name = "users";

    newUser = {
        name: ""
    };

    users = [
        { name: "John Doe", contacted: false, email: "jdoe@gmail.com" },
        { name: "Steve Smith", contacted: false, email: "smith@gmail.com" },
        { name: "Tom Brady", contacted: false, email: "tbrady@gmail.com" }
    ];

    onSubmit(event) {
        event.preventDefault();
        this.newUser = {
            name: ""
        };
    }
}
