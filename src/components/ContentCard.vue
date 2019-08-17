
<style lang="scss">
#contentCard {
  border-radius: 4px;
  -webkit-box-shadow: 0 0 0.3px inset rgb(196, 196, 239);
  box-shadow: 0 0 1px inset rgb(196, 196, 239);
  position: relative;
  padding: 3% 0 3%;
  height: auto;
  width: 100%;
  margin: 0 3% 20px auto;
  color: #2c3e50;
  @media screen and (max-width: 1260px) {
    //height: 100px;
    margin: 0 7% 20px auto;
  }
  .mainContent {
    margin: 0 auto;
    background-color: rgb(28, 31, 34);
    width: 90%;
    max-height: 250px;
    transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    overflow: hidden;
    // @media screen and (max-width: 890px) {
    //   //height: 100px;
    //   max-height: 100px;
    // }
    &:hover {
      box-shadow: 0px -5px 0 rgb(100, 100, 112);
    }

    .contentTitle {
      .headicon {
        position: absolute;
        top: 40px;
        right: 6%;
      }
      padding: 15px 10px 5px 10px;
      text-align: center;
      .mainheadinfo {
        position: absolute;
        i {
          transition: all 1s ease;
          margin: 10px;
          cursor: pointer;
          color: #2c3e50;
          &:hover {
            color: rgb(146, 153, 129);
          }
        }
      }
      h2 {
        margin: 0;
      }
      p {
        text-align: center;
        padding-top: 3px;
        font-size: 12px;
        margin: 0;
      }
    }
    .contentArticle {
      padding: 0 0% 0px;
      //background-color: aliceblue;
      span {
        padding: 0 2% 0;
      }
      p {
        text-indent: 30px;
        text-align: justify;
        line-height: 20px;
        font-size: 14px;
        color: rgb(146, 153, 129);
      }
    }
  }
  .moreinfobtn {
    background-color: rgb(28, 31, 34);
    color: #2c3e50;
    width: 90%;
    margin: 0 auto;
    padding: 10px 0px;
    box-shadow: 0px 5px 0 rgb(100, 100, 112);
    text-align: center;
    .mainfootinfo {
      //position: absolute;
      right: 8%;
      bottom: 35px;
      i {
        transition: all 1s ease;
        margin: 10px;
        cursor: pointer;
        @media screen and (max-width: 890px) {
          //right:50%;
          margin: 2px;
        }
        &:hover {
          color: rgb(146, 153, 129);
        }
      }
    }
    .morebtngroup {
      cursor: pointer;
      transition: all 1s ease;
      &:hover {
        color: rgb(146, 153, 129);
      }
      i {
        margin: 3px;
      }
    }
    .foottime {
      left: 8%;
      bottom: 35px;
      font-size: 10px;
      //position: absolute;
    }
  }
  .MsgBoard {
    width: 90%;
    margin: 15px auto;
  }
}
</style>

<template>
  <div id="contentCard">
    <div ref="mainContentHeight" class="mainContent" v-ripple>
      <div class="contentTitle">
        <h2 ref="articaltitle">{{contentdata.articleTitle}}</h2>
        <p>作者:{{contentdata.articleName}}</p>
        <div class="headicon">
          <i class="icon iconfont icon-desktop" @click="fullscreen()"></i>
        </div>
      </div>

      <div class="contentArticle" v-html="contentdata.articleComment"></div>
    </div>
    <v-footer class="pa-2 moreinfobtn">
      <div>&copy;{{ contentdata.articleTime }}</div>
      <v-spacer>
        <i class="morebtngroup" @click="readMore(4000)" ref="moreinfo" v-show="readmoreflag">
          <i class="icon iconfont icon-down-circle-fill"></i>
          <i>more</i>
        </i>
      </v-spacer>
      <div class="mainfootinfo">
        <i class="icon iconfont icon-heart-fill">{{contentdata.articleLike}}</i>
        <i class="icon iconfont icon-star-fill">{{contentdata.articleCollect}}</i>
        <i
          class="icon iconfont icon-comment"
          @click="msgBoardFlag = !msgBoardFlag"
        >{{contentdata.articleReply}}</i>
        <i class="icon iconfont icon-eye-fill">{{contentdata.articleSee}}</i>
        <i class="icon iconfont icon-delete" @click="deleteitem()"></i>
      </div>
    </v-footer>
    <messageboard class="MsgBoard" v-show="msgBoardFlag" />
  </div>
</template>
<script>
import messageboard from "@/components/MessageBoard";
export default {
  components: { messageboard },
  props: {
    contentdata: {},
    itemKey: ""
  },
  data() {
    return {
      readmoreflag: true,
      msgBoardFlag: false
    };
  },
  methods: {
    readMore(h) {
      let mainContentDOM = this.$refs.mainContentHeight;
      let mainCTH = mainContentDOM.offsetHeight;
      let moreinfo = this.$refs.moreinfo;
      if (mainCTH == 250) {
        mainContentDOM.style.maxHeight = `${h}px`;
        //console.log(moreinfo)
        if (h == 250) {
          moreinfo.children[0].className =
            "icon iconfont icon-down-circle-fill";
          moreinfo.children[1].innerText = "more";
        } else {
          moreinfo.children[0].className = "icon iconfont icon-up-circle-fill";
          moreinfo.children[1].innerText = "packUp";
        }
        this.readmoreflag = true;
      } else if (mainCTH > 250) {
        moreinfo.children[0].className = "icon iconfont icon-down-circle-fill";
        moreinfo.children[1].innerText = "more";
        this.readmoreflag = true;
        mainContentDOM.style.maxHeight = "250px";
        //this.$store.commit('changesideflag')
      } else {
        this.readmoreflag = false;
      }
    },
    showMessageBoard() {},
    deleteitem() {
      //console.log(this.contentdata.articleId);
      let e = this.contentdata.articleId;
      this.$store.commit("deleteItem", e);
    },
    fullscreen() {}
  },
  mounted() {
    this.readMore(250);
  }
};
</script>
