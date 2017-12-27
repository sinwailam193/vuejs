<template>
    <div class="users">
        <h1>Users</h1>
        <form v-on:submit="onSubmit">
            <input type="text" v-model="newUser.name" placeholder="Enter name" />
            <input type="text" v-model="newUser.email" placeholder="Enter email" />
            <input type="submit">
        </form>
        <hr />
        <ul>
            <li v-for="(user, index) in page.users">
                <input type="checkbox" class="toggle" v-model="user.contacted">
                <!-- if user's contacted is true, then it will get a class contcted -->
                <span :class="{contacted: user.contacted}">{{ user.name }}: {{ user.email }}</span>
                <button @click="onClick(index)">delete</button>
            </li>
        </ul>
        <hr />
        <button type="button" @click="onClick('Toggle')">Toggle Button</button>
        <p v-show="page.isToggle">Paragrah being shown</p>
        <v-btn color="primary">Primary</v-btn>
    </div>
</template>

<script>
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

        static asyncData({ store, axiosInstance }) {
            return store.dispatch("GET_USERS", { axiosInstance });
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
</script>
