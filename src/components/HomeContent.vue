<style lang="scss">
#homeContent {
  height: 900px;
  ul {
    padding: 0;
  }
  #pagination {
    margin-bottom: 0 !important;
  }
}
</style>

<template>
  <div id="homeContent" >
    <transition-group appear tag="ul"  >
      <contentCard
        :key="data.articleId"
        v-for="(data) in this.$store.state.newarticle"
        :contentdata="data"
        draggable="true"
     
      />
    </transition-group>
    <pagination v-show="this.$store.state.pagiflag" :artlength="datalength"/>
  </div>
</template>

<script>
import contentCard from "./ContentCard";
import pagination from "./pagination";
export default {
  components: {
    contentCard,
    pagination
  },
  data: function() {
    return {
      articledata: []
      //datalength:Number,
    };
  },
  methods: {
  },
  computed: {
    datalength() {
      return this.$store.getters.slicedata;
    },
    listenstage() {
      return this.$store.state.ArticleData;
    }
  },
  mounted() {},
  created() {
    this.$store.commit("ReadStoragedata");
    this.$store.commit("getdatalist");
  },
  watch: {
    listenstage: function(n, o) {
      this.$store.commit("getdatalist");
      if (this.$store.state.ArticleData) {
        this.$store.commit("saveStorageData");
      }
    }
  }
};
</script>