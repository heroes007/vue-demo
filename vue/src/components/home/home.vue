<template>
  <div>
    <div class="header">
      <img class="headerLogo" src="../../assets/icon/logo.png" alt="">
      <div class="headerUser">
        <img class="userImg" src="../../assets/icon/logo.png" alt="">
        <div class="userName">大客户</div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
    export default {
      name: "home",
    }
</script>

<style scoped>
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
    height: 60px;
    width: 100%;
    background-color: skyblue;
  }
  .headerLogo{
    height: 40px;
    float: left;
  }
  .headerUser{
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .userImg{
    height: 40px;
    border-radius: 50%;
  }
  .userName{
    color: #fff;
  }
</style>
