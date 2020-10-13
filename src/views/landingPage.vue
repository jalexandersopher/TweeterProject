<template>
    <div>
        
        <header-component></header-component>

        <div>
            Welcome to Tweeter!
        </div>

    </div>
</template>

<script>
import HeaderComponent from "@/components/headerComponent.vue";

export default {
  name: "landingPageComponent",
  components: {
    HeaderComponent,
  }
};

</script>