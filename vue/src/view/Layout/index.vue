<template>
    <div>
      <div class="top">标题</div>
      <div class="nav">
        <ul>
          <li>
            <router-link class="link" :to="{name:'home1'}">主页</router-link>
          </li>
          <li>
            <router-link class="link" :to="{name:'about1'}">收藏页</router-link>
          </li>
          <li>
            <router-link class="link" :to="{name:'login1'}">登陆页</router-link>
          </li>
        </ul>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .top{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 200px;
    height: 50px;
    background-color: skyblue;
    font-size: 24px;
  }
  .nav{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 200px;
    background-color: #233346;
  }
  .nav li{
    margin: 20px;
    list-style: none;
    text-align: center;
  }
  .link{
    text-decoration: none;
    color: #fff;

  }
  .content{
    margin-left:200px;
  }
</style>
