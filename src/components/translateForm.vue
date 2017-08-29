<template>
    <div class="translate-form row">
        <div class="col-md-6 middle">
            <form class="well form-inline transform" v-on:submit="onSubmit">
                <input class="form-control margin-right-5" type="text" v-model="userInput" placeholder="Enter a word" />
                <select class="form-control margin-right-5" v-on:change="onChange" :value="selectedLang">
                    <option v-for="lang in langs" :value="lang.key">{{ lang.val }}</option>
                </select>
                <input class="btn btn-primary" type="submit" value="Translate">
            </form>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component({
        props: ["langs", "selectedLang"]
    })
    export default class TranslateForm extends Vue {
        userInput = "";

        onSubmit(event) {
            event.preventDefault();
            const { userInput } = this;
            this.$emit("formSubmit", userInput);
            this.userInput = "";
        }

        onChange(event) {
            this.$store.commit("CHANGE_STATE", { selectedLang: event.target.value });
        }
    }
</script>
