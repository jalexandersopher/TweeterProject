<template>
    <div>
        <h4>This is a Comment!</h4>
        <h5>{{ commentObject.username }}</h5>
        <h6>{{ commentObject.content }}</h6>
        <p>{{ commentObject.createdAt }}</p>
        <edit-comment :commentId="commentObject.commentId"></edit-comment>
        <delete-comment :commentId="commentObject.commentId"></delete-comment>
    </div>
</template>

<script>
import DeleteComment from "./deleteComment.vue";
import EditComment from "./editCommentComponent.vue";
    export default {
        name: "FeedCommentContent",
        components: {
            DeleteComment,
            EditComment,
        },
        props: {
            commentObject: {
                type: Object,
                required: true
            }
        },
    
    }
</script>

<style scoped>

</style>