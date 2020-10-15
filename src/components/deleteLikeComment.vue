<template>
    <div>
        <h4 @click="unlikeComment()">Unlike This Comment</h4>
        <h5>{{ unlikeCommentStatus }}</h5>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {
        name: "DeleteLikeComment",
        data() {
            return {
                unlikeCommentStatus: ""
            }
        },
        methods: {
            unlikeComment: function() {
                axios.request ({
                    url: "https://tweeterest.ml/api/comment-likes",
                    method: "DELETE",
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
                    this.unlikeCommentStatus = "Comment unliked successfully!"
                }).catch((error) => {
                    console.log(error)
                    this.unlikeCommentStatus = "You can't unlike a comment you haven't liked!"
                })
            }
        }
    }
</script>

<style scoped>

</style>