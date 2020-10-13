<template>
    <div>
        
        <header-component></header-component>

        <div>
          This is the Discover Page
        </div>

    </div>
</template>

<script>
import HeaderComponent from "@/components/headerComponent.vue";

export default {
  name: "discoverComponent",
  components: {
    HeaderComponent,
  }
};

</script>