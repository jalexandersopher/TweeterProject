<template>
  <div>
    <h1 id="username">{{ userObject.username }}</h1>
    <h4>{{ userObject.email }}</h4>
    <h5>{{ userObject.bio }}</h5>
    <h5>{{ userObject.birthdate }}</h5>
    <h4 @click="followUser()">Follow This User</h4>
    <delete-follow></delete-follow>
    <h4>{{ followStatus }}</h4>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
import DeleteFollow from "./deleteFollowUser.vue";
export default {
  name: "DiscoverComponent",
  components: {
    DeleteFollow
  },
  props: {
    userObject: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      followStatus: ""
    };
  },
  methods: {
    followUser: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/follows",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "EAvr7ARZpoTpcRnvMWmyGzSXNR9ynRHXtm1LCFEyjJopn"
          },
          data: {
            loginToken: cookies.get("loginToken"),
            followId: cookies.get("followId")
          }
        })
        .then(response => {
          console.log(response);
          this.followStatus = "Successfully followed this User!";
        })
        .catch(error => {
          console.log(error);
          this.followStatus = "You can't follow a User twice!";
        });
    }
  }
};
</script>

<style scoped>
#username {
  margin-top: 70px;
}
</style>