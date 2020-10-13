<template>
  <div>
    <h6 @click="deleteComment">Delete Comment</h6>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "DeleteComment",
  props: {
    commentId: {
      type: Number,
      required: true
    }
  },
  methods: {
    deleteComment: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/comments",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "EAvr7ARZpoTpcRnvMWmyGzSXNR9ynRHXtm1LCFEyjJopn"
          },
          method: "DELETE",
          data: {
              loginToken: cookies.get("loginToken"),
              commentId: this.commentId
          }
        })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        });
    }
  }
};
</script>

<style scoped>
</style>