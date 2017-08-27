import Vue from "vue";
import Component from "vue-class-component";
import boom from "@/components/boom";

@Component({
    components: {
        boom
    }
})
export default class Test extends Vue {
    title = "Hello Awesome me";
    user = {
        firstName: "Aaron",
        lastName: "Lam"
    };
    show = true;
    items = [
        { title: "item1" },
        { title: "item2" },
        { title: "item3" }
    ];
    showBoom = false;

    onClick(val) {
        console.log(val);
    }

    pressKey(event) {
        console.log(event.target.value);
    }

    onEnter() {
        console.log("you hit enter");
    }

    onHover(val) {
        this.showBoom = val;
    }

    // computed methods
    get fullName() {
        return this.user.firstName + this.user.lastName;
    }
}
