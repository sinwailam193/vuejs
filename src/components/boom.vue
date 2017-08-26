<template>
    <p>This is {{ msg }}</p>
</template>

<script>
    export default {
        name: "boom",
        props: {
            msg: {
                default: "Foobar",
                type: String
            }
        }
    };
</script>
