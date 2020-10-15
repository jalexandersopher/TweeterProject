<template>
    <div>
        <h5 @click="shouldShowComment = !shouldShowComment">Edit Comment</h5>
        <div v-if="shouldShowComment">
            <textarea v-model="commentContent"></textarea>
            <h5 @click="editComment()">Submit</h5>
        </div>
        <h5>{{ commentEditStatus }}</h5>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
    export default {
        name: "EditComment",
        data() {
            return {
                shouldShowComment: false,
                commentContent: "",
                commentEditStatus: ""
            }
        },
        props: {
            commentId: {
                type: Number,
                required: true
            }
        },
        methods: {
            editComment: function() {
                axios.request({
                    url: "https://tweeterest.ml/api/comments",
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "EAvr7ARZpoTpcRnvMWmyGzSXNR9ynRHXtm1LCFEyjJopn"
                    },
                    data: {
                        loginToken: cookies.get("loginToken"),
                        commentId: this.commentId,
                        content: this.commentContent
                    }
                }).then((response) => {
                    console.log(response)
                    this.commentEditStatus = "The comment was edited successfully"
                }).catch((error) => {
                    console.log(error)
                    this.commentEditStatus = "The comment failed to be edited"
                })
            }
        },
    }
</script>

<style scoped>

</style>