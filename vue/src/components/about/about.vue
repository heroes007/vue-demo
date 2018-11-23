<template>
  <div class="main">
    <div class="wel">
      <h1>欢迎进入临床思维训练</h1>
      <h3>welcome</h3>
    </div>
    <div class="content">
      <div class="content-per">
        <h1>个人主页</h1>
        <h4>查看学校历史记录及评分统计</h4>
        <img src="" alt="">
        <Button shape="circle" @click="enter">进入</Button>
      </div>
      <div class="content-per">
        <h1>个人主页</h1>
        <h4>查看学校历史记录及评分统计</h4>
        <img src="" alt="">
        <Button shape="circle">进入</Button>
      </div>
      <div class="content-per">
        <h1>个人主页</h1>
        <h4>查看学校历史记录及评分统计</h4>
        <img src="" alt="">
        <Button shape="circle">进入</Button>
      </div>
      <div class="content-per">
        <h1>个人主页</h1>
        <h4>查看学校历史记录及评分统计</h4>
        <img src="" alt="">
        <Button shape="circle">进入</Button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "about",
    methods:{
      enter(){
        this.$router.push('about/person')
      }
    }
  }
</script>

<style scoped>
  .wel{
    height: 120px;
    padding: 40px;
  }
  .content{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #eee;
    padding: 20px;
  }
  .content-per{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    height: 260px;
    width: 180px;
    background-color: #fff;
    border: 1px solid #000000;
  }
</style>
