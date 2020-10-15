<template>
    <div>
        <h4 @click="DeletelikeTweet()">Unlike This Tweet</h4>
        <h5>{{ unlikeTweetStatus }}</h5>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {
        name: "DeleteLikeTweet",
        data() {
            return {
                unlikeTweetStatus: ""
            }
        },
        methods: {
            DeletelikeTweet: function() {
                axios.request ({
                    url: "https://tweeterest.ml/api/tweet-likes",
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "EAvr7ARZpoTpcRnvMWmyGzSXNR9ynRHXtm1LCFEyjJopn"
                    },
                    data: {
                        loginToken: cookies.get("loginToken"),
                        tweetId: cookies.get("tweetId")
                    }
                }).then((response) => {
                    console.log(response)
                    this.unlikeTweetStatus = "Tweet unliked successfully!"
                }).catch((error) => {
                    console.log(error)
                    this.unlikeTweetStatus = "You can't unlike a tweet you haven't liked!"
                })
            }
        }
    }
</script>

<style scoped>

</style>