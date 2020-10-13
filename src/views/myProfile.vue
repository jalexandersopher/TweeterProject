<template>
    <div>
        
        <header-component></header-component>

        <profile-component></profile-component>

        <div id="create-tweet-link-container">
            <router-link to="/createTweet">Create a Tweet</router-link>
        </div>


    </div>
</template>

<script>
import HeaderComponent from "@/components/headerComponent.vue";
import profileComponent from "@/components/profileComponent.vue";

export default {
  name: "myProfilePage",
  components: {
    HeaderComponent,
    profileComponent
  }
};

</script>