<template>
  <div>
    <h1>This is a Tweet!</h1>

    <h3>{{ tweetObject.username }}</h3>
    <h4>{{ content }}</h4>
    <h4>{{ tweetObject.createdAt }}</h4>
    <like-tweet></like-tweet>
    <delete-like-tweet></delete-like-tweet>
    <edit-tweet @update-tweet="updateTweet" v-if="isOwned" :tweetId="tweetObject.tweetId"></edit-tweet>
    <tweet-delete v-if="isOwned" :tweetId="tweetObject.tweetId"></tweet-delete>
    <tweet-comments></tweet-comments>
  </div>
</template>

<script>
import TweetComments from "./tweetComments.vue";
import TweetDelete from "./TweetDelete.vue";
import cookies from "vue-cookies";
import EditTweet from "./editTweetComponent.vue";
import LikeTweet from "./likeTweet.vue";
import DeleteLikeTweet from "./deleteLikeTweet.vue";
export default {
  name: "FeedTweetContent",
  components: {
    TweetDelete,
    TweetComments,
    EditTweet,
    LikeTweet,
    DeleteLikeTweet
  },
  props: {
    tweetObject: {
      type: Object,
      required: true
    },
  },
  data() {
      return {
          isOwned: cookies.get("userId") == this.tweetObject.userId,
          content: this.tweetObject.content
      }
  },
  methods: {
    updateTweet(newContent) {
      this.content = newContent;
    }
  },
};
</script>

<style scoped>
</style>