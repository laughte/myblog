<style lang="scss">
html {
  background: #2f3338;
  .theme--dark.application {
    background: #2f3338;
  }
}
#app {
}
</style>

<template>
  <v-app dark>
    <!-- <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>-->

    <v-content>
      <home />
    </v-content>
  </v-app>
</template>

<script>
import home from "./views/Home";

export default {
  name: "App",
  components: {
    home
  },
  data() {
    return {
      //
    };
  },
  mounted() {
    //console.log(this.$vuetify.breakpoint)
  }
};
</script>
