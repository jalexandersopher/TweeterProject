<template>
    <div>
        <div class="input">
          <label for="email">Email</label>
          <input type="text" id="edit-user-email" v-model="email" />
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input type="password" id="edit-user-password" v-model="password" />
        </div>
        <div class="input">
          <label for="username">username</label>
          <input type="text" id="edit-user-username" v-model="username" />
        </div>
        <div class="input">
          <label for="bio">my bio</label>
          <input type="text" id="edit-user-bio" v-model="bio" />
        </div>
        <div class="input">
          <label for="birthdate">birthdate</label>
          <input type="text" id="edit-user-birthdate" v-model="birthdate" />
        </div>
        <div class="submit">
          <button @click="editUser" id="edit-user-submit">Submit</button>
        </div>
        <h4>{{ editProfileStatus }}</h4>
      </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {
        name: "EditProfile",
        data() {
            return {
                email: "",
                password: "",
                username: "",
                bio: "",
                birthdate: "",
                editProfileStatus: ""
            }
        },
        props: {
            userId: {
                type: Number,
                required: true
            }
        },
        methods: {
            editUser () {
                axios.request({
                    url: "https://tweeterest.ml/api/users",
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": 'EAvr7ARZpoTpcRnvMWmyGzSXNR9ynRHXtm1LCFEyjJopn'
                    },
                    data: {
                        loginToken: cookies.get("loginToken"),
                        email: this.email,
                        password: this.password,
                        username: this.username,
                        bio: this.bio,
                        birthdate: this.birthdate
                    }
                }).then((response) => {
                    console.log(response),
                    this.editProfileStatus = "The Edit was Successful!"
                }).catch((error) => {
                    console.log(error)
                    this.editProfileStatus = "The Edit Failed!"
                })
            }
        },
    }
</script>

<style scoped>

</style>