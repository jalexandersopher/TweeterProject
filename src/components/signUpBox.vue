<template>
  <div id="signUp-form-container">
    <div class="signup-form">
      <div>
        <div class="input">
          <label for="email">Email</label>
          <input type="text" id="sign-up-email" v-model="email" />
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input type="password" id="sign-up-password" v-model="password" />
        </div>
        <div class="input">
          <label for="username">username</label>
          <input type="text" id="sign-up-username" v-model="username" />
        </div>
        <div class="input">
          <label for="bio">my bio</label>
          <input type="text" id="sign-up-bio" v-model="bio" />
        </div>
        <div class="input">
          <label for="birthdate">birthdate</label>
          <input type="text" id="sign-up-birthdate" v-model="birthdate" />
        </div>
        <div class="submit">
          <button @click="signUpUser" id="sign-up-submit">Submit</button>
        </div>
      </div>
    </div>
    <div>
      This is the Sign Up Page
    </div>
    <div>
      <p>
        {{ signUpStatus }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "signUpBox",
  data() {
    return {
      email: "",
      password: "",
      username: "",
      bio: "",
      birthdate: "",
      signUpStatus: "",
    };
  },
  methods: {
    signUpUser() {
      
      axios.request({
        url: "https://tweeterest.ml/api/users",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": 'EAvr7ARZpoTpcRnvMWmyGzSXNR9ynRHXtm1LCFEyjJopn'
        },
        data: {
          "email": this.email,
          "username": this.username,
          "password": this.password,
          "bio": this.bio,
          "birthdate": this.birthdate 
        }
      })
        .then( (result) => {
          console.log(result)
          this.signUpStatus = "Success! Please proceed to the Login Page to log in!"
          cookies.set('loginToken', result.data.loginToken)
          this.$router.push("/login")
          })
        .catch( (error) => {
          console.log(error)
          this.signUpStatus = "Error"
          })
    }
  }
};
</script>