<template>
    <div>
        <header-component></header-component>
        This is the Create Tweet Page
        <create-tweet-component></create-tweet-component>
    </div>
</template>

<script>
import HeaderComponent from "@/components/headerComponent.vue";
import CreateTweetComponent from "@/components/createTweetComponent"

    export default {
        name: "CreateTweetPage",
        components: {
            HeaderComponent,
            CreateTweetComponent
        }
    }
</script>

<style scoped>

</style>