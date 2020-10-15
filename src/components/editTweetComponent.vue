<template>
  <div>
    <h5 @click="shouldShow = !shouldShow">Edit Tweet</h5>
    <div v-if="shouldShow">
      <textarea v-model="tweetContent"></textarea>
      <h5 @click="editTweet()">Submit</h5>
      <h6>{{ editStatus }}</h6>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";

export default {
  name: "EditTweet",
  data() {
    return {
      shouldShow: false,
      tweetContent: "",
      editStatus: ""
    };
  },
  props: {
    tweetId: {
      type: Number,
      required: true
    }
  },
  methods: {
    editTweet: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "EAvr7ARZpoTpcRnvMWmyGzSXNR9ynRHXtm1LCFEyjJopn"
          },
          method: "PATCH",
          data: {
            loginToken: cookies.get("loginToken"),
            tweetId: this.tweetId,
            content: this.tweetContent
          }
        })
        .then(response => {
            console.log(response)
            this.editStatus = "Edit Successful!",
            this.$emit("update-tweet", this.tweetContent)
            this.shouldShow = false;
        })
        .catch(error => {
            console.log(error)
            this.editStatus = "Edit Not Successful"
        });
    }
  }
};
</script>

<style scoped>
</style>