<template>
    <div class="translate-form">
        <form v-on:submit="onSubmit">
            <input type="text" v-model="userInput" placeholder="Enter a word" />
            <input type="submit" value="Translate">
        </form>
    </div>
</template>

<script>
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component
    export default class TranslateForm extends Vue {
        userInput = "";

        onSubmit(event) {
            event.preventDefault();
            const { userInput } = this;
            this.$emit("formSubmit", userInput);
            this.userInput = "";
        }
    }
</script>
