<template>
    <div>
        <h4 @click="likeTweet()">Like This Tweet</h4>
        <h5>{{ likeTweetStatus }}</h5>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {
        name: "LikeTweet",
        data() {
            return {
                likeTweetStatus: ""
            }
        },
        methods: {
            likeTweet: function() {
                axios.request ({
                    url: "https://tweeterest.ml/api/tweet-likes",
                    method: "POST",
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
                    this.likeTweetStatus = "Tweet liked successfully!"
                }).catch((error) => {
                    console.log(error)
                    this.likeTweetStatus = "You can't like a tweet more than once!"
                })
            }
        }
    }
</script>

<style scoped>

</style>