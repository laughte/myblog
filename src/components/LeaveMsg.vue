<style lang="scss">
.leavemsg {
  margin: 20px auto;
  width: 90%;
  height: 60px;
  display: flex;
  justify-content: center;
  //background: red;
  .usericon {
    height: 55px;
    width: 55px;
    background: rgb(190, 55, 55);
  }
  .msgcontent {
      margin-left: 10PX;
    width: 90%;
    height: 80px;
    background: whitesmoke;
  }
}
</style>
<template>
  <div class="leavemsg">
    <div class="usericon"></div>
    <div class="msgcontent"></div>
  </div>
</template>
<script>
export default {};
</script>