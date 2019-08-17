<style  lang="scss">
.colorparent {
  width: 30px;
  height: 15px;
  margin-left: 10px;
  margin-bottom: 5px;
  /* overflow: hidden; */
  .colorstyle {
    width: 30px;
    height: 15px;
    /* margin-left: 10px; */
    margin-bottom: 5px;
    .colortool {
      width: 30px;
      height: 15px;
      margin-bottom: 5px;
    }
  }
}
</style>
<template>
  <div class="colorparent" ref="colorparent">
    <div class="colorstyle" @click="chiocecolor" ref="colorstyle"></div>
    <!-- <el-collapse-transition>
      <div v-show="true">
        <div class="transition-box" :key="i" v-for="i in 2">
          <div class="colortool" ref="selecolortool"></div>
        </div>
      </div>
    </el-collapse-transition>-->
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    index: Number,
    sonindex: Number
  },
  data: function() {
    return {
      rgbcolor: ""
      //colorflag: false
    };
  },
  methods: {
    chiocecolor() {
      let cc = this.rgbcolor;
      this.$emit("setclasscolor", cc);
    },
    stylecolor() {
      this.rgbcolor = `rgb(
        ${Math.floor(Math.random() * 255)},${Math.floor(
        Math.random() * 255
      )},${Math.floor(Math.random() * 255)})`;
    },
    setstylecolor() {
      this.$refs.colorstyle.style.backgroundColor = this.rgbcolor;

      // this.$refs.selecolortool.forEach((element, i) => {
      //   element.style.backgroundColor = this.rgbcolor;
      //   element.style.opacity = 0.25 * (i + 1);
      // });
    }
  },
  created: function() {
    this.stylecolor();
  },
  mounted: function() {
    this.setstylecolor();
    //console.log(this.rgb )
  }
};
</script>