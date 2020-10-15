<template>
    <div>
        <h1 id="username">{{ userObject.username }}</h1>
        <h4>{{ userObject.email }}</h4>
        <h5>{{ userObject.bio }}</h5>
        <h5>{{ userObject.birthdate }}</h5>
    </div>
</template>

<script>
    export default {    
        name: "ProfileComponent",
        props: {
            userObject: {
                type: Number,
                required: true 
            },
        },
    }
</script>

<style scoped>
    #username {
        margin-top: 70px;
    }
</style>