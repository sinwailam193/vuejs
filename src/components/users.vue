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
            <li v-for="user in users">
                {{ user.name }}: {{ user.email }}
            </li>
        </ul>
    </div>
</template>

<script type="text/javascript" src="@/controller/users.js"></script>
<style>
    input {
        display: block;
        margin-bottom: 10px;
        margin-left: auto;
        margin-right: auto;
    }
</style>
