<template lang="html">
    <div class="main-page">
        <h1>Word Translator</h1>
        <h5>Powerd By Vue</h5>
        <translateForm v-on:formSubmit="formSubmit"></translateForm>
    </div>
</template>

<script>
    import Vue from "vue";
    import Component from "vue-class-component";
    import translateForm from "@/components/translateForm";

    @Component({
        title: "Main Page",
        components: {
            translateForm
        }
    })
    export default class MainPage extends Vue {
        formSubmit(userInput) {
            this.$store.dispatch("TRANSLATE_WORD", { userInput });
        }
    }
</script>
