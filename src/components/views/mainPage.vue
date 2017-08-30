<template lang="html">
    <div class="main-page text-center">
        <h1 class="text-center">Word Translator</h1>
        <h5>Powerd By Vue</h5>
        <translateForm
            :langs="page.langs"
            :selectedLang="page.selectedLang"
            @formSubmit="formSubmit"
        ></translateForm>
        <translateOutput
            :loading="page.loading"
            :translation="page.translation"
        ></translateOutput>
    </div>
</template>

<script>
    import Vue from "vue";
    import Component from "vue-class-component";
    import translateForm from "@/components/translateForm";
    import translateOutput from "@/components/translateOutput";

    @Component({
        title: "Main Page",
        components: {
            translateForm,
            translateOutput
        }
    })
    export default class MainPage extends Vue {
        get page() {
            return this.$store.getters.MAIN_VIEW;
        }

        created() {
            this.$store.dispatch("GET_LANGS");
        }

        formSubmit(userInput) {
            if (userInput) {
                this.$store.commit("CHANGE_STATE", { loading: true });
                this.$store.dispatch("TRANSLATE_WORD", { userInput });
            }
        }
    }
</script>
