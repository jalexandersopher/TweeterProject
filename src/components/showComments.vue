<template>
  <div>
    <h5>{{ commentObject.username }}</h5>
    <h6>{{ commentObject.content }}</h6>
    <h6>{{ commentObject.createdAt }}</h6>
  </div>
</template>

<script>
export default {
  name: "ShowComments",
  props: {
    commentObject: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
</style>