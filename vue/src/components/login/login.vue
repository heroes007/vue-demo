<template>
  <div class="contain">
    <div class="title">
      <h1 class="title-c">欢迎进入临床思维训练</h1>
      <h2 class="title-e">Clinical Decision Making System</h2>
    </div>
    <Card class="card">
      <div class="card-route">
        <a class="route-login" href="">登录</a>
        <a class="route-sign" href="">注册</a>
      </div>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user" class="formUsername">
          <Input type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password" class="formPassword">
          <Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem class="formBtn">
          <Button @click="handleSubmit('formInline')">注册</Button>
          <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
        </FormItem>
        <FormItem class="formChange">
          <Radio v-model="single">记住密码</Radio>
          <a href="">忘记密码</a>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
  export default {
    name: "first",
    data(){
      return {
        single:false ,
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: 'Please fill in the user name', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Please fill in the password.', trigger: 'blur' },
            { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
            this.$router.push('home')
          } else {
            this.$Message.error('Fail!');
          }
        })
      }
    }
  }
</script>

<style scoped>
  .contain{
    height: 100vh;
    width: 100%;
    position: relative;
    background-color: #364073;
  }
  .title{
    text-align: center;
    color: #fff;
  }
  .title-c{
    font-size: 40px;
    padding: 20px;
  }
  .title-e{
    font-size: 20px;
    padding-bottom: 40px;
    color: #ccc;
  }
  .card{
    width: 380px;
    height: 360px;
    padding: 10px;
    position:absolute;
    right: 30px;
    background-color: #73799d;
    border: 0;
  }
  .card-route{
    padding: 10px 0;
    border-bottom: 2px solid #999;
    margin-bottom: 20px;
    color: #fff;
  }
</style>
