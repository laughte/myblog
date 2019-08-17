<style lang="scss">
.writenoteparent {
  background-color: rgb(28, 31, 34);
  width: 70%;
  left: 15%;
  top: 90px;
  height: 700px;
  z-index: 99;
  position: fixed;
  border-bottom: 8px solid rgb(100, 100, 112);
  @media screen and (max-width: 890px) {
    width: 95%;
    margin: auto;
    left: 0;
    right: 0;
    top: 80px;
    height: 300px;
  }
  form {
    widows: 100%;
    height: 100%;
    position: relative;
    margin: 0;
    padding: 0;
    color: rgb(104, 133, 107);
    .title {
      position: relative;
      width: 320px;
      height: 50px;
      margin: 0 auto;
      letter-spacing: 4px;
      font-size: 25px;
      top: 20px;
      opacity: 0.6;
      .titlelabel {
        position: absolute;
        right: 80%;
      }
      .articletitle {
        right: 10%;
        width: 67%;
        border: none;
        cursor: text;
        background: rgba(255, 255, 255, 0);
        border-bottom: 1px dashed rgba(160, 141, 124, 0.2);
        text-indent: 70px;
      }
    }
    .auther {
      position: relative;
      width: 320px;
      height: 50px;
      font-size: 15px;
      margin: 0 auto;
      top: 10px;
      letter-spacing: 4px;
      opacity: 0.6;
      .namelabel {
        position: absolute;
        right: 80%;
      }
      .articlename {
        text-indent: 70px;
        right: 10%;
        width: 67%;
        border: none;
        border-bottom: 1px dashed rgba(160, 141, 124, 0.2);
        cursor: text;
        background: rgba(255, 255, 255, 0);
      }
    }
    .btn {
      position: absolute;
      width: 60px;
      background: rgba(151, 148, 148, 0.8);
      letter-spacing: 6px;
      color: rgb(62, 66, 71);
      right: 4%;
      bottom: 0;
      height: 20px;
      border: none;
      transition: all 1s;
    }
  }
  .comment {
    outline: 0;
    top: 80px;
    left: 45px;
    height: 82%;
    position: absolute;
    -web-kit-appearance: none;
    -moz-appearance: none;
    border: none;
    width: 92%;
    /* height: 80%; */
    font-size: 18px;
    color: rgb(146, 153, 129);
    background: rgba(255, 255, 255, 0);
    filter: alpha(opacity=0);
    resize: inherit;
  }
}

/*滚动条样式*/
.writenoteparent .comment::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 0px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 0px;
}

.writenoteparent .comment::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 0px;
  box-shadow: inset 0 0 5px rgba(230, 203, 233, 0.2);
  background: rgba(211, 196, 228, 0.2);
}

.writenoteparent .comment::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(223, 206, 235, 0.2);
  border-radius: 0;
  background: rgba(234, 204, 235, 0.1);
}

.writenoteparent form .btn:hover {
  color: rgb(146, 153, 129);
  background-color: rgb(62, 66, 71);
}
.writenoteparent .icon-plus-circle {
  position: absolute;
  top: 1%;
  right: 1%;
  font-size: 20px;
  transition: all 1s;
  color: rgba(146, 153, 129, 0.3);
  z-index: 99;
}
.writenoteparent .iconfont:hover {
  color: rgba(185, 62, 58, 0.4);
  transform: rotate(135deg);
}
.c-tool {
  position: relative;
  display: flex;
  margin-top: 40px;
  margin-left: 15%;
  width: 70%;
  height: 60px;
  /* overflow: hidden; */
  /* background-color: aquamarine; */
}
.c-tool .icon {
  font-size: 20px;
  position: absolute;
  left: 31%;
  background: linear-gradient(to left, rgb(253, 194, 0), rgb(255, 0, 106));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
<template>
  <div class="writenoteparent">
    <i class="icon iconfont icon-plus-circle" @click="closeBoard()"></i>
    <form>
      <div class="title">
        <span class="titlelabel">标题:</span>
        <input type="text" class="articletitle" v-model="articleTitle">
      </div>
      <div class="auther">
        <span class="namelabel">作者:</span>
        <input type="text" class="articlename" v-model="articleName">
      </div>

      <textarea class="comment" ref="textareacom" placeholder="随便写点什么吧!" v-model="articleComment"></textarea>
      
      <input class="btn" @click="submitdata" type="button" value="提交">
    </form>
    <div class="c-tool">
      <div :key="i" v-for="i in 7">
        <colorstyle @setclasscolor="setclass" ref="colorsetool" :index="i"/>
      </div>
      <span class="icon iconfont icon-sync" @click="changecolor"></span>
    </div>
  </div>
</template>
<script>
import EditorJS from '@editorjs/editorjs'; 

import colorstyle from "./ColorStyle";

export default {
  name: "blackBoard",
  components: {
    colorstyle
  },
  data: function() {
    return {
      items: [
        { name: "代码", lable: ["python", "java", "PHP", "JavaScript"] },
        { name: " 文学", lable: ["诗经", "古诗词", "小说", "散文"] },
        { name: "绘画", lable: ["素描", "水彩", "油画", "插画"] },
        { name: " 音乐", lable: ["纯音乐", "古风", "流行"] },
        { name: " 软件", lable: ["photoshop", "painter", "AfterEfact"] }
      ],
      articleComment: "",
      articleName: "",
      articleTitle: "",
      setColorComment: "",
      colordata: "",
      savestorage: []
    };
  },
  methods: {
    closeBoard() {
      this.$store.commit("change");
    },
    randomWord(randomFlag, min, max) {
      let str = "",
        range = min,
        arr = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z"
        ];
      // 随机产生
      if (randomFlag) {
        range = Math.round(Math.random() * (max - min)) + min;
      }
      for (var i = 0; i < range; i++) {
        let pos = Math.round(Math.random() * (arr.length - 1));
        str += arr[pos];
      }
      return str;
    },
    //获取hashcode
    gethashcode() {
      let timestamp = new Date().valueOf();
      let myRandom = this.randomWord(false, 6);
      let hashcode = myRandom + timestamp.toString();
      return hashcode;
    },
    submitdata() {
      this.setColorComment = `<span style="color:${this.colordata}">${
        this.articleComment
      }</span>`;
      let date = new Date();
      let timenow =`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}&${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      let hashcode = this.gethashcode();
      if (this.articleComment !== "") {
        let data = {
          // articleLable:
          articleId: hashcode,
          articleComment: this.setColorComment,
          articleName: this.articleName,
          articleTitle: this.articleTitle,
          articleTime: timenow,
          articleLike: 0,
          articleCollect: 0,
          articleSee: 0,
          articleReply: 0
        };
        let newdata = this.savestorage.unshift(data);
        this.$store.commit("addArticleItem", JSON.stringify(data));
        this.closeBoard();
        this.articleComment = this.articleName = this.articleTitle = "";
      } else {
        return;
      }
    },

    setclass(cc) {
      this.$refs.textareacom.style.color = cc;
      this.colordata = cc;
      // console.log(this.$refs);
    },
    changecolor() {
      this.$refs.colorsetool.forEach(element => {
        element.stylecolor();
        element.setstylecolor();
      });
    }
  }
};
</script>
