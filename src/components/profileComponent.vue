<template>
  <div>
      <div>
          <p>
              {{ profileStatus }}
          </p>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "profileComponent",
  data() {
    return {
      userId: "",
    };
  },
  methods: {
    showUserProfile() {
      axios
        .request({
          url: "https://tweeterest.ml/api/users",
          method: "get",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "EAvr7ARZpoTpcRnvMWmyGzSXNR9ynRHXtm1LCFEyjJopn"
          },
          data: {
            userId: this.userId,
            username: this.username,
            email: this.email,
            bio: this.bio,
            birthdate: this.birthdate
          }
        })
        .then(result => {
          console.log(result);
          this.profileStatus = "This is your Profile!";
          cookies.get("loginToken", result.data.loginToken);
        })
        .catch(error => {
          console.log(error);
          this.profileStatus = "There was a problem showing your profile";
        });
    }
  }
};
</script>