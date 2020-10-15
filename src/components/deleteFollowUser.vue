<template>
  <div>
    <h4 @click="unfollowUser()">Unfollow This User</h4>
    <h4>{{ unfollowStatus }}</h4>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
export default {
  name: "DeleteFollow",
  data() {
    return {
      unfollowStatus: ""
    };
  },
  methods: {
    unfollowUser: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/follows",
          method: "DELETE",
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
          this.unfollowStatus = "Successfully unfollowed this User!";
        })
        .catch(error => {
          console.log(error);
          this.unfollowStatus = "You can't unfollow a User you aren't following!";
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