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
                <button v-on:click="onClick(index)">delete</button>
            </li>
        </ul>
        <hr />
        <button type="button" v-on:click="onClick('Toggle')">Toggle Button</button>
        <p v-show="page.isToggle">Paragrah being shown</p>
    </div>
</template>

<script type="text/javascript" src="@/controllers/users.js"></script>
