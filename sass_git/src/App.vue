<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
  
</template>

<script>
import login from './components/login/Login.vue'
export default {
  name: 'App',
  components:{login:login}
}
</script>

<style lang="less">
*{
  margin:0;
  padding:0;
}

#app>#header{
  width:89.1%;
  margin-left:10.9%;
  height:5.7%;
  box-shadow:3px 3px 5px rgba(00,00,00,.2);
  -webkit-box-shadow:3px 3px 5px rgba(00,00,00,.2);
  -moz-box-shadow:3px 3px 5px rgba(00,00,00,.2);
  position:fixed;
  top:0%;
  left:0%;
  z-index: 10;
}
#app>#header>ul{
 display: flex;
 margin-top:1.3%;
 padding-left:84%;
 width:200px;
 font-size:15px;
 line-height: 100%;
 list-style: none;
 
}
#app>#header>ul>li{
  color:#505050;
  padding-right:10%;
}
#app>#header>ul>li:nth-child(2){
  cursor: pointer;
}
@media screen and (min-width:768px)and(max-width:991px){
    #app>#header{height:4.9%}
    #app>#header>ul{font-size: 8px}
    
}
</style>
