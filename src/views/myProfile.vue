<template>
  <div>
    <header-component></header-component>

    <profile-component></profile-component>

    <h3>{{ this.username }}</h3>
    <h3>{{ this.email }}</h3>
    <h3>{{ this.bio }}</h3>
    <h3>{{ this.birthdate }}</h3>

    <div id="create-tweet-link-container">
      <router-link to="/createTweet">Create a Tweet</router-link>
    </div>

    <div id="login-link-container">
      <router-link to="/editProfile">Edit Profile</router-link>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
import HeaderComponent from "@/components/headerComponent.vue";
import profileComponent from "@/components/profileComponent.vue";

export default {
  name: "myProfilePage",
  components: {
    HeaderComponent,
    profileComponent,
  },
  data() {
    return {
      username: "",
      email: "",
      bio: "",
      birthdate: "",
      profileStatus: ""
    };
  },
  mounted: function() {
    this.showUserProfile()
  },
  methods: {
    showUserProfile() {
      axios
        .request({
          url: "https://tweeterest.ml/api/users",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "EAvr7ARZpoTpcRnvMWmyGzSXNR9ynRHXtm1LCFEyjJopn"
          },
        params: {
          userId: cookies.get("userId")
        }
        })
        .then(result => {
          console.log(result);
          this.profileStatus = "This is your Profile!";
          this.username = result.data
        })
        .catch(error => {
          console.log(error);
          this.profileStatus = "There was a problem showing your profile";
        });
    }
  }
};

</script>