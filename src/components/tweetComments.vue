<template>
  <div>
    <textarea v-model="tweetCommentContent"></textarea>
    <h5 @click="postComment">Post Comment</h5>
    <p> {{ commentStatus }} </p>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "TweetComments",
  data() {
    return {
      tweetCommentContent: "",
      commentStatus: ""
    };
  },
  methods: {
    postComment() {
      axios.request({
        url: "https://tweeterest.ml/api/comments",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "EAvr7ARZpoTpcRnvMWmyGzSXNR9ynRHXtm1LCFEyjJopn"
        },
        method: "POST",
        data: {
            loginToken: cookies.get("loginToken"),
            content: this.tweetCommentContent,
            tweetId: cookies.get("tweetId")
        }
      }).then((response) => {
          console.log(response)
          this.commentStatus = "Commented Successfully"
      }).catch((error) => {
          console.log(error)
          this.commentStatus = "Failed to Comment"
      })
    }
  }
};
</script>

<style scoped>
</style>