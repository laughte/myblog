<style lang="scss">
$type: screen;
$proto: max-width;
$value: 1000px;
a {
  text-decoration-line: none;
}

.theme--dark.v-icon {
  color: rgba(255, 255, 255, 0.3);
}

#home {
  .hometopbar {
    display: none;
    @media #{$type} and ($proto: $value) {
      //height: 100px;
      display: block;
    }
  }
  .layout {
    //margin-left: -313px;
    margin-top: 30px;
    //transition: all 0.1s;
    @media #{$type} and ($proto: $value) {
      //height: 100px;
      // display: none;
      margin-top: 40px;
    }
    .asidetool {
      position: fixed;
      z-index: 99;
      margin-right: 8px;
      transition: all 0.3s ease;
      margin-left: 0;
      @media #{$type} and ($proto: $value) {
        //height: 100px;
        //display: none;
        margin-left: -313px;
        transition: all 0.3s ease;
      }
      .homeSide {
        margin-top: -6px;
      }
    }
  }
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(300px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.6s ease;
}
.v-move {
  transition: all 0.6s ease;
}
.v-leave-active {
  position: absolute !important;
}
</style>

<template>
  <div id="home">
    <HomeTopBar @showMenufunc="showSideMenu" class="hometopbar" />
    <v-layout ref="allminContent">
      <transition enter-active-class="bounceInDown" leave-active-class="bounceOutDown">
        <blackBoard class="animated" v-show="this.$store.state.blackboardflag" />
      </transition>
      <transition enter-active-class="bounceInDown" leave-active-class="bounceOutDown">
        <v-flex
          class="animated"
          offset-xs0
          offset-md0
          offset-lg1
          offset-xl1
          v-show="this.$store.state.homeflag"
        >
          <v-layout>
            <transition appear>
              <v-flex
                ref="asidecontent"
                class="asidetool"
                xs4
                sm4
                md2
                xl2
                lg2
                v-show="this.$store.state.sideflag"
              >
                <HomeSide class="homeSide" />
                <HomeSideUser />
              </v-flex>
            </transition>
            <v-flex md0 lg3 xl3></v-flex>
            <v-flex xl8 lg8 md10 sm12 xs12>
              <HomeContent />
            </v-flex>
          </v-layout>
        </v-flex>
      </transition>
    </v-layout>
  </div>
</template>

<script>
import HomeTopBar from "@/components/HomeTopBar";
import HomeSide from "@/components/HomeSide";
import HomeSideUser from "@/components/HomeSideUser";
import HomeContent from "@/components/HomeContent";
import blackBoard from "@/components/BlackBoard";

export default {
  name: "home",
  components: {
    HomeSide,
    HomeSideUser,
    HomeContent,
    blackBoard,
    HomeTopBar
  },
  data() {
    return {};
  },
  methods: {
    showSideMenu(flag) {
      //console.log(this.$refs.minContent.style);
      if (flag === true) {
        //this.$refs.asidecontent.style.display='block'
        this.$refs.asidecontent.style.marginLeft = "0px";
      } else {
        this.$refs.asidecontent.style.marginLeft = "-310px";
        //this.$refs.asidecontent.style.display='none'
      }
    }
  },
  watch: {},
  mounted() {},
  computed: {}
};
</script>
