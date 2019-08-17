<style lang="scss">
#homeSideUser {
  // position: sticky !important;
  // top: 2px;

  .v-card {
    border-bottom: solid 5px #646470 !important;
    color: #8d917d;
    font-size: 14px !important;
    .v-image {
      height: 120px;

      .v-image__image {
        width: 90px;
        height: 90px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 9;
        border: 2px solid rgba(255, 255, 255, 0.5);
        border-style: inset;
        border-radius: 50%;
        overflow: hidden;
        transition: all 0.5s ease;
        &:hover {
          transform: rotate(360deg);
        }
      }
    }
    .v-card__title {
      margin: 0 !important;
      padding: 0 !important;
      div {
        width: 100%;
        text-align: center;
        h3 {
          text-align: center;
        }
        button {
          margin-top: 10px;
          margin-bottom: 0;
        }
      }
    }
    .v-card__actions {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      a {
        text-decoration-line: none;
        color: #929977;
        font-size: 13px;
        margin: 10px;
      }
    }
  }
}
</style>
<template>
  <v-layout id="homeSideUser">
    <v-flex xs12>
      <v-card color="#283134">
        <v-img src="https://www.touimg.com/i/?i=u/20190809/11571675.png" aspect-ratio="2.75"></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">laughter</h3>
            <button
              class="icon iconfont icon-edit-fill"
              @click="showBlackBoard()"
              to="/blackBoard"
            >写文章</button>
          </div>
        </v-card-title>
        <v-card-actions>
          <a class="icon iconfont icon-twitter" href>twitter</a>
          <a class="icon iconfont icon-github-fill" href="https://github.com/laughte">gitHub</a>
          <a class="icon iconfont icon-google-circle-fill" href>google</a>
          <a class="icon iconfont icon-skype-fill" href>skype</a>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: "homeSideUser",
  data: function() {
    return {
      // imgsrc: '../assets/248.jpg'
    };
  },
  methods: {
    showBlackBoard() {
      this.$store.commit("change");
    }
  }
};
</script>
