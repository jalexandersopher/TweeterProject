<template>
  <div id="login-form-container">
    <div class="login-form">
      <div>
        <div class="input">
          <label for="email">Email</label>
          <input type="text" id="login-email" v-model="email" />
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input type="password" id="login-password" v-model="password" />
        </div>
        <div class="submit">
          <button @click="loginUser" id="login-submit">Submit</button>
        </div>
      </div>
    </div>
    <div>
      This is the Login Page
    </div>
    <div>
      <p>
        {{ loginStatus }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "loginBox",
  data() {
    return {
      email: "",
      password: "",
      username: "",
      bio: "",
      birthdate: "",
      loginStatus: "",
    };
  },
  methods: {
    loginUser() {
      
      axios.request({
        url: "https://tweeterest.ml/api/login",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": 'EAvr7ARZpoTpcRnvMWmyGzSXNR9ynRHXtm1LCFEyjJopn'
        },
        data: {
          "email": this.email,
          "username": this.username,
          "password": this.password,
          "userId": this.userId,
          "bio": this.bio,
          "birthdate": this.birthdate,
        }
      })
        .then( (result) => {
          console.log(result)
          this.loginStatus = "Success! Please proceed to the Create Profile page to customize your profile!"
          cookies.set('loginToken', result.data.loginToken)
          cookies.set('userId', result.data.userId)
          this.$router.push("/myProfile")
          })
        .catch( (error) => {
          console.log(error)
          this.loginStatus = "Error"
          })
    }
  }
};
</script>