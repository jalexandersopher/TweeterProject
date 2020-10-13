<template>
    <div>
        <h3>Tweet Here!</h3>
        <textarea v-model="tweetContent"></textarea>
        <h3 @click="postTweet">Post!</h3>    
        <h4>{{ tweetStatus }}</h4>
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"

    export default {
        name: "CreateTweetComponent",
        data() {
            return {
                tweetContent: "",
                tweetStatus: "Waiting to Tweet"
            }
        },
        methods: {
            postTweet: function() {
                this.tweetStatus = "Tweeting!"
                axios.request({
                    url: "https://tweeterest.ml/api/tweets",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "EAvr7ARZpoTpcRnvMWmyGzSXNR9ynRHXtm1LCFEyjJopn"
                    },
                    method: "POST",
                    data: {
                        loginToken: cookies.get("loginToken"),
                        content: this.tweetContent
                    }
                }).then((response) => 
                    {console.log(response)
                    cookies.set('tweetId', response.data.tweetId)
                    this.tweetStatus = "Tweet Successful!"
                }).catch((error) =>
                    {console.log(error)
                    this.tweetStatus = "Tweet Failed!"
                })
            }
        },
    }
</script>

<style scoped>

</style>