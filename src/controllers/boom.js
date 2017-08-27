import Vue from "vue";
import Component from "vue-class-component";

@Component({
    props: {
        msg: {
            type: String
        }
    }
})
export default class Boom extends Vue {}
