<template>
    <div>
        <header-component></header-component>
        <delete-profile></delete-profile>
    </div>
</template>

<script>
import DeleteProfile from "../components/deleteProfileComponent.vue";
import HeaderComponent from "../components/headerComponent.vue";
    export default {
        name: "deleteProfilePage",
        components: {
            DeleteProfile,
            HeaderComponent
        }
    }
</script>

<style scoped>

</style>