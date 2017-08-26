<template>
    <div class="test">
        <h1>{{ title }}</h1>
        <p>{{ user.firstName }} {{ user.lastName }}</p>

        <!-- if else -->
        <p v-if="show">Show is true</p>
        <p v-else>Show is not true</p>

        <!-- for loops -->
        <p v-for="item in items">{{ item.title }}</p>

        <!-- input binding -->
        <input type="text" v-model="title" />
        <button class="click-button" type="button" v-on:click="onClick(title)">Click Me</button>

        <!-- for hitting button and pressing enter -->
        <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="onEnter">

        <hr />
        <label>First Name</label><input type="text" v-model="user.firstName">
        <br />
        <label>Last Name</label><input type="text" v-model="user.lastName">
        <!-- using computed methods it is able to return it as one variable -->
        <h3>{{ fullName }}</h3>

        <boom msg="Pass down from test"></boom>
    </div>
</template>

<script>
    import boom from "./boom";

    export default {
        name: "test",
        components: {
            boom
        },
        data() {
            return {
                title: "Hello Awesome me",
                user: {
                    firstName: "Aaron",
                    lastName: "Lam"
                },
                show: true,
                items: [
                    { title: "item1" },
                    { title: "item2" },
                    { title: "item3" }
                ]
            };
        },
        methods: {
            onClick(val) {
                console.log(val);
            },
            pressKey(event) {
                console.log(event.target.value);
            },
            onEnter() {
                console.log("you hit enter");
            }
        },
        computed: {
            fullName() {
                return this.user.firstName + this.user.lastName;
            }
        }
    };
</script>

<style scoped>
    .click-button {
        margin-top: 10px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
</style>
