<template>
    <div>
        
        <header-component></header-component>

        <div id="edit-profile-link-container">
            <router-link to="/editProfile" id="editProfileLink">Edit Profile</router-link>
        </div>

        <div id="delete-profile-link-container">
            <router-link to="/deleteProfile" id="deleteProfileLink">Delete Your Profile</router-link>
        </div>

        <div id="create-tweet-link-container">
            <router-link to="/createTweet" id="createTweetLink">Create a Tweet</router-link>
        </div>

        <div v-for="user in users" :key="user.userId" >
          <discover-component :userObject="user"></discover-component>
        </div>

    </div>
</template>

<script>
import HeaderComponent from "@/components/headerComponent.vue";
import DiscoverComponent from "@/components/discoverContent.vue";
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "discoverPage",
  components: {
    HeaderComponent,
    DiscoverComponent,
  },
  data() {
    return {
      users: []
    }
  },
  mounted: function(){
    this.getUsers();
  },
  methods: {
    getUsers: function() {
      axios.request ({
        url: "https://tweeterest.ml/api/users",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "EAvr7ARZpoTpcRnvMWmyGzSXNR9ynRHXtm1LCFEyjJopn"
        },
        params: {
          userId: cookies.get("userId")
        }
      }).then((response) => {
        console.log(response)
        this.users = response.data
      }).catch((error) => {
        console.log(error)
      })
    },
  },
};

</script>