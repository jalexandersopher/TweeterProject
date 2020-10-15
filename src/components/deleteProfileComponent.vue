<template>
    <div>
        <div class="input">
          <label for="password">Password</label>
          <input type="password" id="delete-user-password" v-model="password" />
        </div>
        <div class="submit">
          <button @click="deleteUser" id="delete-user-submit">Submit</button>
        </div>
        <h4>{{ deleteProfileStatus }}</h4>
      </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {
        name: "DeleteProfile",
        data() {
            return {
                password: "",
                deleteProfileStatus: ""
            }
        },
        methods: {
            deleteUser () {
                axios.request({
                    url: "https://tweeterest.ml/api/users",
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": 'EAvr7ARZpoTpcRnvMWmyGzSXNR9ynRHXtm1LCFEyjJopn'
                    },
                    data: {
                        loginToken: cookies.get("loginToken"),
                        password: this.password
                    }
                }).then((response) => {
                    console.log(response),
                    this.deleteProfileStatus = "Your Profile was Deleted!"
                }).catch((error) => {
                    console.log(error)
                    this.deleteProfileStatus = "Profile Delete Failed!"
                })
            }
        },
    }
</script>

<style scoped>

</style>