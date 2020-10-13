<template>

    <div id="header-container">
        <div id="login-link-container">
            <router-link to="/login">Login</router-link>
        </div>
        
        <div id="signUp-link-container">
            <router-link to="/signUp">Sign Up</router-link>
        </div>
        
        <div id="myProfile-link-container">
            <router-link to="/myProfile">My Profile</router-link>
        </div>
        
        <div id="discover-link-container">
            <router-link to="/discover">Discover</router-link>
        </div>
        
        <div id="myFeed-link-container">
            <router-link to="/myFeed">My Feed</router-link>
        </div>
    </div>

</template>

<script>
export default {
    name: "HeaderComponent",
};
</script>