<template>
  <div>
    <router-view/>
    <div class="menu" v-if="isShow">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </div>
    <button style="margin-left: 100px" @click="change">点击</button>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return{
        isShow:false
      }
    },
    methods:{
      change(){
        if(!this.isShow){
          this.isShow =  true
          setInterval(()=>{this.isShow = false},2000)
        }
      }
    },
    created(){
      eventBus.onclick = function () {
        console.log(1)
      }
    },
  }
</script>

<style>
  .menu{
    position: fixed;
    border: 1px solid #000;
    left: 0;
    top: 80px;
    border-radius: 0 4px 4px 0;
    background-color: #fff;
  }
  .menu li{
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
