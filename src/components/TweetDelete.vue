<template>
  <div>
    <h5 @click="deleteTweet">Delete</h5>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "TweetDelete",
  props: {
    tweetId: {
      type: Number,
      required: true
    }
  },
  methods: {
    deleteTweet: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "EAvr7ARZpoTpcRnvMWmyGzSXNR9ynRHXtm1LCFEyjJopn"
          },
          data: {
            loginToken: cookies.get("loginToken"),
            tweetId: this.tweetId
          }
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
</style>