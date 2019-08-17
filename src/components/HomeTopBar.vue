<style lang="scss">
    #topbar{
      color: #2c3e50;
      .v-toolbar__content{
          .v-toolbar__title{
              color: #2c3e50!important;
          }
          .material-icons{
               color: #2c3e50;
          }
      }
    }
</style>
<template>
  <v-toolbar id="topbar" dark color="#1c1f22" :fixed='true'>
    <v-toolbar-side-icon @click="Menufunc()"></v-toolbar-side-icon>

    <v-toolbar-title class="white--text">情似烟轻</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

   
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>
<script>
export default {
    name:'topBar',
    data(){
        return{
            menuflag:false,
        }
    },
    methods:{
        Menufunc(){
            this.menuflag=!this.menuflag
            this.$emit('showMenufunc',this.menuflag)
        }
    }
}
</script>