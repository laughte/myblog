<style lang="scss">
    #pagination{
        .v-pagination{
            color: #2c3e50;
            .v-pagination__item{
                background-color: rgb(28, 31, 34);
                 color: #2c3e50;
            }
            .v-pagination__navigation{
                 background-color: rgb(28, 31, 34);
                 .v-icon{
                  color: #2c3e50;
                }
            }
        }
    }
</style>
<template>
  <div id="pagination" class="text-xs-center">
    <v-pagination
      v-model="page"
      :length="artlength"
      color="#8d917d"
      circle
    ></v-pagination>
  </div>
</template>
<script>
export default {
    name:'pagination',
    props:{
        artlength:Number
    },
    data(){
        return{
            page:1,
        }
    },
    methods:{
    },
    watch:{
        page(newval,oldval){
         this.$store.commit('splicedata',newval)
        }
    }
}
</script>