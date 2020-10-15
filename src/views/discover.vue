<template>
    <div>
        
        <header-component></header-component>

        <div>
          This is the Discover Page
        </div>

        <discover-component></discover-component>

        <h3 @click="getUsers()">Refresh Users</h3>
        <div v-for="user in users" :key="user.userId" >
          <discover-component :userObject="user"></discover-component>
        </div>

    </div>
</template>

<script>
import HeaderComponent from "@/components/headerComponent.vue";
import DiscoverComponent from "@/components/discoverContent.vue";
import axios from "axios";

export default {
  name: "discoverPage",
  components: {
    HeaderComponent,
    DiscoverComponent
  },
  data() {
    return {
      users: []
    }
  },
  mounted: function(){
    this.getUsers();
  },
  methods: {
    getUsers: function() {
      axios.request ({
        url: "https://tweeterest.ml/api/users",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "EAvr7ARZpoTpcRnvMWmyGzSXNR9ynRHXtm1LCFEyjJopn"
        },
      }).then((response) => {
        console.log(response)
        this.users = response.data
      }).catch((error) => {
        console.log(error)
      })
    },
  },
};

</script>