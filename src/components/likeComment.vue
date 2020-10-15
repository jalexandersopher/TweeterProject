<template>
    <div>
        <h4 @click="likeComment()">Like This Comment</h4>
        <h5>{{ likeCommentStatus }}</h5>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {
        name: "LikeComment",
        data() {
            return {
                likeCommentStatus: ""
            }
        },
        methods: {
            likeComment: function() {
                axios.request ({
                    url: "https://tweeterest.ml/api/comment-likes",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "EAvr7ARZpoTpcRnvMWmyGzSXNR9ynRHXtm1LCFEyjJopn"
                    },
                    data: {
                        loginToken: cookies.get("loginToken"),
                        commentId: cookies.get("commentId")
                    }
                }).then((response) => {
                    console.log(response)
                    this.likeCommentStatus = "Comment liked successfully!"
                }).catch((error) => {
                    console.log(error)
                    this.likeCommentStatus = "You can't like a comment twice!"
                })
            }
        }
    }
</script>

<style scoped>

</style>