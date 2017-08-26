import Vue from "vue";
import Component from "vue-class-component";

@Component({
    props: {
        msg: {
            default: "Foobar",
            type: String
        }
    }
})
export default class Boom extends Vue {}
