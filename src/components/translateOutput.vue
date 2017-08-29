<template lang="html">
    <div class="translate-output">
        <p v-if="loading">Loading...</p>
        <h2 class="text-success" v-else>{{ translation }}</h2>
    </div>
</template>

<script>
    export default {
        name: "translateOutput",
        props: ["translation", "loading"]
    }
</script>
