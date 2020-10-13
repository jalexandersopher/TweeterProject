<template>
    <div>
        
        <header-component></header-component>

        <login-box></login-box>

    </div>
</template>

<script>
import HeaderComponent from "@/components/headerComponent.vue";
import LoginBox from "@/components/loginBox.vue";

export default {
  name: "loginPage",
  components: {
    HeaderComponent,
    LoginBox
  }
};

</script>

