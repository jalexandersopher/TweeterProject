<template>
  <div>
    <header-component></header-component>

    <div>
      This is the My Feed Page
    </div>

    <feed-tweet-content></feed-tweet-content>

    <h3 @click="getTweets">Refresh Tweets</h3>

    <div v-for="tweet in tweets" :key="tweet.tweetId">
      <feed-tweet-content :tweetObject="tweet"></feed-tweet-content>
    </div>

    <div v-for="comment in comments" :key="comment.commentId">
      <feed-comment-content :commentObject="comment"></feed-comment-content>
    </div>  
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import HeaderComponent from "@/components/headerComponent.vue";
import FeedTweetContent from "@/components/myFeedTweetContent.vue";
import FeedCommentContent from "@/components/myFeedCommentContent.vue";

export default {
  name: "myFeedComponent",
  data() {
    return {
      tweets: [],
      comments: []
    };
  },
  components: {
    HeaderComponent,
    FeedTweetContent,
    FeedCommentContent
  },
  mounted: function() {
    this.getTweets();
    this.getComments();
  },
  
  methods: {
    getTweets: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "EAvr7ARZpoTpcRnvMWmyGzSXNR9ynRHXtm1LCFEyjJopn"
          }
        })
        .then(response => {
          console.log(response);
          this.tweets = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getComments: function() {
      axios.request({
        url: "https://tweeterest.ml/api/comments",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "EAvr7ARZpoTpcRnvMWmyGzSXNR9ynRHXtm1LCFEyjJopn"
        },
        params: {
          tweetId: cookies.get("tweetId")
        }

      }).then((response) => {
        console.log(response);
        this.comments = response.data;
      }).catch((error) => {
        console.log(error);
      })
    }
  }
};
</script>