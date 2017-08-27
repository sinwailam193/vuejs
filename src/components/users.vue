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
            <li v-for="(user, index) in users">
                <input type="checkbox" class="toggle" v-model="user.contacted">
                <!-- if user's contacted is true, then it will get a class contcted -->
                <span :class="{contacted: user.contacted}">{{ user.name }}: {{ user.email }}</span>
                <button v-on:click="onClick(index)">delete</button>
            </li>
        </ul>
    </div>
</template>

<script type="text/javascript" src="@/controllers/users.js"></script>
<style scoped="">
    input[type=text] {
        display: block;
        margin-bottom: 10px;
        margin-left: auto;
        margin-right: auto;
    }
    .contacted {
        text-decoration: line-through;
    }
</style>
