<template>
    <div>
        
        <header-component></header-component>

        <sign-up-box></sign-up-box>

    </div>
</template>

<script>
import HeaderComponent from "@/components/headerComponent.vue";
import signUpBox from "@/components/signUpBox.vue";

export default {
  name: "signUpPage",
  components: {
    HeaderComponent,
    signUpBox
  }
};

</script>