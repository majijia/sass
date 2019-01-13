<template>
    <div id="main">
      <div>
        <ul>
          <li>用户登录</li>
          <li><input type="account" placeholder="请输入账号" v-model="account"></li>
          <li><input type="password" placeholder="请输入密码" v-model="password" v-on:keyup.13="submit"></li>
          <li class="message">您输入的信息有误</li>
          <li><button @click="login">登录</button></li>
        </ul>
      </div>
    </div>
</template>
<script>
import qs from "qs"
export default {
  data () {
    return {
      index:1.1,
      account:'',
      password:'',
      uname:'',
    }
  },
  methods:{
    submit(){
      this.login();
    },
    login(){
      var self=this;
      this.$http.post(this.host+"user/login",qs.stringify({account:self.account,password:self.password})).then(result=>{
        // console.log(self.account)
        //console.log(22,result)
        if(result.data.errorcode==0){
          this.$http.post(this.host+"user/admin_info").then(result=>{
            sessionStorage.setItem("uname",self.account);
            //console.log(88,result)
          })
          // alert("用户信息有错")
          this.$router.push('/index')
        }
        else if(result.data.errorcode==3000){
          this.$router.push('/')
        }
        else{
          $('.message')[0].style.visibility='visible'
        }
      })
    }
  }
}
</script>
<style scoped lang="less">
  #main{
    background-image:url(../../assets/images/bannerb.png);
    width:100%;
    height:100%;
    position: absolute;
    top:0%;
    left:0%;
  }
#main>div{
  width:22%;
  border-radius: 10px;
  background: rgba(#3d3d35, 0.4);
  position: fixed;
  top:30%;
  left:60%;
}
#main>div>ul{
  list-style: none;
  text-align: center;
  margin-top:8%;
}
#main>div>ul>li:nth-child(1){
  font-size: 32px;
  color:#f09b22;
}
#main>div>ul>li>input,#main>div>ul>li>button{
  width:63.5%;
  border:0;
  border-radius: 60px;
  padding:2.2% 0;
  margin-top:8%;
  text-align: start;
  padding-left:4%;
  color:#030303;
  font-size: 16px;
  outline:0 none !important;
  font-family:"微软雅黑";
  background: #f3f3f3;
}
#main>div>ul>li:nth-child(3)>input{
  margin-top:10%;
}
#main>div>ul>li>button{
  padding:2.4% 0;
  margin-top:4%;
  margin-bottom:26%;
}
#main>div>ul>li:nth-child(5)>button{
  background: #f09b22;
  color:#fff;
  text-align: center;
  padding-left:0;
  font-size: 16px;
  margin-bottom:15%;
  font-family:"微软雅黑"
}
.message{
  color:#eb3903;
  font-size: 14px;
  margin-top:1.2%;
  visibility: hidden;
  text-align: start;
  margin-left:21%;
}
@media screen and (min-width:768px)and(max-width:991px){
  #main>div>ul>li:nth-child(1){font-size: 30px;}
  #main>div>ul>li>input,#main>div>ul>li>button{font-size: 14px}
  #main>div>ul>li:nth-child(4)>button{font-size: 16px;}
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
color: #bbb; 
}

::-moz-placeholder { /* Mozilla Firefox 19+ */
color: #bbb;
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
color: #bbb;
}

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
color: #bbb;
}
input:-webkit-autofill {

background-color: #FAFFBD;

background-image: none;

color: #000;

}

</style>
