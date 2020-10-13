<template>
  <div>
    <h1>This is a Tweet!</h1>

    <h3>{{ tweetObject.username }}</h3>
    <h4>{{ tweetObject.content }}</h4>
    <h4>{{ tweetObject.createdAt }}</h4>
    <tweet-delete v-if="isOwned" :tweetId="tweetObject.tweetId"></tweet-delete>
    <tweet-comments></tweet-comments>
  </div>
</template>

<script>
import TweetComments from "./tweetComments.vue";
import TweetDelete from "./TweetDelete.vue";
import cookies from "vue-cookies";
export default {
  name: "FeedTweetContent",
  components: {
    TweetDelete,
    TweetComments,
  },
  props: {
    tweetObject: {
      type: Object,
      required: true
    },
  },
  data() {
      return {
          isOwned: cookies.get("userId") == this.tweetObject.userId
      }
  },
};
</script>

<style scoped>
</style>