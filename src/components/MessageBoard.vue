<style lang="scss">
.messageboard {
  width: 100%;
  height: 300px;
  background: rgb(220, 221, 221);
  //background: red;
  .msgtitle {
    background: rgb(28, 31, 34);
    //width: 100%;
    height: 30px;
  }
  .msgform {
    width: 90%;
    height: 55px;
    margin: 15px auto;
    display: flex;
    justify-content: center;
    .msguserinfo {
      margin-left: 0;
      width: 65px;
      height: 65px;
      background: whitesmoke;
      // border: 1px solid rgba(255, 166, 0,0.2);
    }
    textarea {
      height: 65px;
      margin-left: 10px;
      width: 90%;
      background: rgb(250, 250, 250);
      // border: 1px solid rgba(255, 166, 0,0.2);
      resize: none;
    }
  }
  hr {
    background-color: rgba(255, 255, 255, 0.5);
    height: 1px;
    border: none;
  }
  .msgbtn {
    margin: 15px auto;
    width: 92%;
    display: flex;
    justify-content: space-between;
  }
  .msgcontent {
    height: 600px;
  }
}
</style>
<template>
  <div class="messageboard">
    <div class="msgtitle"></div>
    <div class="msgform">
      <div class="msguserinfo"></div>
      <textarea></textarea>
    </div>
    <div class="msgbtn">
      <v-btn icon>
        <v-icon>thumb_up</v-icon>
      </v-btn>
      <v-btn small color="warning">评论</v-btn>
    </div>
    <hr>
    <div class="msgcontent">
      <Leavemsg/>
    </div>
    <div class="msgfooter"></div>
  </div>
</template>
<script>
import Leavemsg from "./LeaveMsg.vue";
export default {
  components: { Leavemsg },
  data() {
    return {};
  },
  methods: {
    smggui() {
      console.log("nideyeasdf");
    }
  }
};
</script>