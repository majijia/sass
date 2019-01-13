import Vue from 'vue'
import Router from 'vue-router'
import $ from 'jquery'
import HelloWorld from '@/components/HelloWorld'
import AsideLeft from '../components/AsideLeft'
import Login from '../components/login/Login'

Vue.use(Router)
const vueRouter = new Router({
  routes: [
    {
      path: '/index',
      name: 'asideleft',
      component:AsideLeft
    },
    {path:'/',
     name:'login',
     component:Login
  }
  ],linkActiveClass:"mui-active" ,
  mode: 'history'
})
export default vueRouter;
if(sessionStorage.getItem("uname")){
  vueRouter.push({ name: 'asideleft' })
}
else{
  vueRouter.push({ name: 'login' })
}


