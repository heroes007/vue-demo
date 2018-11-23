import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/index'
import NProgress from "nprogress"
import "nprogress/nprogress.css"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:"/",
      component:()=>import('../components/first/index')
    },
    {
      path: '/home',
      name:'home',
      component: home,
      meta:{
        title:'首页'
      },
      redirect: { name: 'about' },
      children:[
        {
          path:'about',
          name:'about',
          component:()=>import( '../components/about/about'),
          meta:{
            title:'详情'
          }
        },
        {
          path:'about/person',
          component:()=>import( '../components/person/person'),
          meta:{
            title:'个人主页'
          }
        },
      ]
    },
  ]
})

router.beforeEach((to,from,next)=>{
  NProgress.start()
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})

router.afterEach((to,from)=>{
  NProgress.done()
})

export default router
