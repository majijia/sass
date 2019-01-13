<template>
    <div id="container">
        <div id="header">
      <ul>
        <li>欢迎您&nbsp;:&nbsp;&nbsp;&nbsp;{{username}}</li>
        <li @click="logout">退出</li>
      </ul>
    </div>
        <div id="left">
          <img src="../../src/assets/images/index-logo.png" alt="">
          <ul>
            <li class="bac" index="1" @click="getClick" ref="forbidden" :class="{'bac_two':bac_show===true,}" >如常介绍<span><img src="../../src/assets/images/jieshao_one.png"></span></li>
            <li index="2" @click="getClick" ref="forbidden" :class="{'bac_two':bac_show===true}">获取方案<span><img src="../../src/assets/images/geu_two.png"></span></li>
            <li index="3" @click="getClick" class="agreement">协议下载<span><img src="../../src/assets/images/guanli_three.png"></span></li>
            <li index="4" @click="getClick">打款/发票<span><img src="../../src/assets/images/dakuan_four.png"></span></li>
            <li index="6" @click="getClick">社保/工资<span><img src="../../src/assets/images/shebao_six.png"></span></li>
            <li index="7" @click="getClick">审核资料<span><img src="../../src/assets/images/shenhe_seven.png"></span></li>
          </ul>
        </div>
         <div id="right">
            <index-one v-if="clickCrent==1.0"  @click="getIndex"></index-one>
            <index-one1 v-if="clickCrent==1.1" @click="getIndex"></index-one1>
            <index-one2 v-if="clickCrent==1.2000000000000002" @click="getIndex"></index-one2>
            <index-one3 v-if="clickCrent==1.3" @click="getIndex"></index-one3>
            <index-one4 v-if="clickCrent==1.4000000000000001" @click="getIndex"></index-one4>
            <index-one5 v-if="clickCrent==1.5" @click="getIndex"></index-one5>
            <achive-one ref='name'
              v-for='(val,key) in box' :key='key' 
              v-show="clickCrent==2.0" @click="getIndex">
            </achive-one>
            <achive-two v-show="clickCrent==2.1" @click="getIndex"></achive-two>
            <achive-three v-show="clickCrent==2.2" @click="getIndex" :name='name'></achive-three>
            <achive-four v-show="clickCrent==2.3000000000000003" @click="getIndex"  v-on:downBg="child_agree"></achive-four>
            <achive-five v-if="clickCrent==2.4" @click="getIndex"></achive-five>
            <achive-six v-show="clickCrent==2.5" @click="getIndex"></achive-six>
            <achive-seven v-show="clickCrent==2.6" @click="getIndex"></achive-seven>
           <commen-one v-if="clickCrent==3.0" @click="getIndex"></commen-one>
           <commen-two v-if="clickCrent==3.1" @click="getIndex"></commen-two>
           <commen-three v-if="clickCrent==3.2" @click="getIndex"></commen-three>
           <commen-four v-if="clickCrent==3.3" @click="getIndex"></commen-four>
           <commen-five v-if="clickCrent==3.4" @click="getIndex"></commen-five>
           <commen-six v-if="clickCrent==3.5" @click="getIndex"></commen-six>
           <commen-seven v-if="clickCrent==3.6" @click="getIndex"></commen-seven>
           <money-one v-if="clickCrent==4.0" @click="getIndex"></money-one>
           <shenhe-one v-show="clickCrent==7.0" @click="getIndex"></shenhe-one>
           <shenhe-two v-show="clickCrent==7.1" @click="getIndex"></shenhe-two>
           <shenhe-three v-if="clickCrent==7.2" @click="getIndex"></shenhe-three>
           <social-one v-if="clickCrent==6.0" @click="getIndex"></social-one>
         </div>
    </div>
</template>
<script>
import indexOne from './index/IndexOne.vue'
import indexContainer from './index/IndexContainer.vue'
import index_twoContainer from './index/Index_twoContainer.vue'
import index_threeContainer from './index/Index_threeContainer.vue'
import index_fourTitle from './index/Index_fourTitle.vue'
import index_fiveTitle from './index/Index_fiveTitle.vue'
import moneyOne from './money_four/MoneyOne.vue'
import commenOne from './xieyi/Commen_one.vue'
import commenTwo from './xieyi/Commen_two.vue'
import commenThree from './xieyi/Commen_three.vue'
import commenFour from './xieyi/Commen_four.vue'
import commenFive from './xieyi/Commen_five.vue'
import commenSix from './xieyi/Commen_six.vue'
import commenSeven from './xieyi/Commen_seven.vue'
import shenheOne from './shenheziliao/ShenHe_one.vue'
import socialOne from './social/Social_one.vue'
import achiveOne from './achive/Achive_one.vue'
import achiveTwo from './achive/Achive_two.vue'
import achiveThree from './achive/Achive_three.vue'
import achiveFour from './achive/Achive_four.vue'
import achiveFive from './achive/Achive_five.vue'
import achiveSix from './achive/Achive_six.vue'
import achiveSeven from './achive/Achive_seven.vue'
import shenheTwo from './shenheziliao/ShenHe_two.vue'
import shenheThree from './shenheziliao/ShenHe_three.vue'
import {Toast} from "mint-ui"
export default {
  data () {
    return {
       clickCrent:1.0,
       name: '',
       box: [1],
       account:'',
       order_id:'',
       require_id:'',
       list_two:[],
       username:'',
       saas_order_status:'',
       bac_show:false,
       bac_one:false,
    }
},
methods:{
  //预约不可点击
   getClick(e){
     if(this.saas_order_status==1){
      this.clickCrent=e.target.getAttribute("index");
        this.bac_show=true;
        $(e.target).siblings('li').removeClass("bac")
        $(e.target).addClass("bac")
     }
     else{
        this.clickCrent=e.target.getAttribute("index");
        $(e.target).siblings('li').removeClass("bac")
        $(e.target).addClass("bac")
      }
   },
   getIndex(index, name,order_id,require_id){
       this.name = name
      //  console.log(this.name)
       this.clickCrent=index; // 把子组件的名字场地给父组件  父组件得到子组件传递过来的参数
       this.require_id=require_id;
       this.order_id=order_id;
   },
   getStorage(){
      this.$http.post(this.host+"user/admin_info").then(result=>{
        if(result.data.errorcode==0){
          this.username=result.data.data.username;
        }
        else if(result.data.errorcode==3000){
          this.$router.push('/')
        }
        else{
          Toast(result.data.msg)
        }
      })
      this.$http.post(this.host+'company/company_info').then(result=>{
        //console.log(11,result)
        this.saas_order_status=0;
        if(this.saas_order_status==1){
          this.bac_show=true;
        }
      })
   },
   logout(){
    this.$http.post(this.host+"user/logout").then(result=>{
      if(result.data.msg="退出成功"){
        sessionStorage.clear("uname")
        this.username="";
        this.$router.push("/")
      }
    })
   },
    //跳转协议下载--变背景
   child_agree () {
        var agreement=document.querySelector('.agreement');
        $(agreement).addClass('bac');
        $(agreement).siblings('li').removeClass("bac")
     }
},
   components:{
     indexOne:  indexOne,
     indexOne1:indexContainer,
     indexOne2:index_twoContainer,
     indexOne3:index_threeContainer,
     indexOne4:index_fourTitle,
     indexOne5:index_fiveTitle,
     moneyOne:moneyOne,
     commenOne:commenOne,
     commenTwo:commenTwo,
     commenThree:commenThree,
     commenFour:commenFour,
     commenFive:commenFive,
     commenSix:commenSix,
     commenSeven:commenSeven,
     shenheOne:shenheOne,
     socialOne:socialOne,
     achiveOne:achiveOne,
     achiveTwo:achiveTwo,
     achiveThree:achiveThree,
     achiveFour:achiveFour,
     achiveFive:achiveFive,
     achiveSix:achiveSix,
     achiveSeven:achiveSeven,
     shenheTwo :shenheTwo,
     shenheThree:shenheThree,
   },
   created(){
     this.getStorage();
   },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#container{
  width:100%;
}
*{
  margin:0;
  padding:0;
}

#container>#header{
  width:91.5%;
  /* margin-left:172px; */
  height:49px;
  box-shadow:3px 3px 5px rgba(00,00,00,.2);
  -webkit-box-shadow:3px 3px 5px rgba(00,00,00,.2);
  -moz-box-shadow:3px 3px 5px rgba(00,00,00,.2);
  position:fixed;
  top:0%;
  left:168px;
  z-index: 10;
  
}
#container>#header>ul{
 display: flex;
 margin-top:1.3%;
 margin-left: 82%;
 width:50%;
 font-size:15px;
 line-height: 100%;
 list-style: none;
}
#container>#header>ul>li{
  color:#505050;
}
#container>#header>ul>li:nth-child(1){
  margin-right:4%;
}
#container>#header>ul>li:nth-child(2){
  cursor: pointer;
}
#left{
  position: fixed;
  width:210px;
  height:100%;
}
#left>img{
  width:168px;
  position: fixed;
  top:0;
  left:0;
  z-index: 20;
}
#left>ul{
  position: fixed;
  left:0;
  top:0;
  width:168px;
  background: #505050;
  height:100%;
  padding-top:100px;
  margin-top:-2%;
}
#left>ul>li{
  display: flex;
  justify-content: space-between;
  height:56px;
  width:68%;
  font-size: 15px;
  line-height: 56px;
  padding-left:18%;
  padding-right:14%;
  color:#fff;
  cursor: pointer;
}
.bac{
  width:68%;
  padding-left:18%;
  padding-right:14%;
  background:#333;
}
.bac_two{
  width:68%;
  padding-left:18%;
  padding-right:14%;
  background:#777;
  pointer-events: none;
}
#right,#right>.right{
  height:100%;
  width:92.5%;
  position: fixed;
  left:168px;
  top:46.5px;
}
@media screen and (min-width:1201px) and(max-width:1440px){
  #container>#header>ul{
    margin-left:75%;
  }
}
@media screen and (min-width:992px) and(max-width:1200px){
 #left>ul{
   padding-top:94px;
 }
 #container>#header>ul{
    margin-left:69%;
  }
}
@media screen and (min-width:768px) and(max-width:991px){
 #left>ul{
   padding-top:88px;
 }
 #container>#header>ul{
    margin-left:60%;
    margin-top:2%;
  }
}
</style>
