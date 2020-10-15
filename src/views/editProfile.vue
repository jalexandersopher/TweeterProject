<template>
    <div>
        <header-component></header-component>
        <edit-profile></edit-profile>
    </div>
</template>

<script>
import EditProfile from "@/components/editProfileComponent.vue";
import HeaderComponent from "@/components/headerComponent.vue";
    export default {
        name: "editProfilePage",
        components: {
            HeaderComponent,
            EditProfile
        }
    }    
</script>

<style scoped>

</style>