<template>
    <div id="main">
      <img src="../../assets/images/bac_liucheng.png" alt="">
      <div class="container">
        <div class="header_title"><img src="../../../static/img/title_03.png" alt=""></div>
        <div>
          <ul>
            <li>
              <div>
                <img :src="src_one" alt="">
                <input type="text" v-model="file_name" readonly="readonly" title="请点击图标下载文件" data-minlength="4" data-maxlength="32">
                <img :src="src_down" alt="" @click="file_down">
              </div>
              <div>
                <img :src="src_three" alt="">
                <input type="checkbox" @click="getInput" v-model="checked">
              </div>
              <div>
                <img :src="src_five" alt="">
              </div>
            </li>
            <li>
              <img :src="src_seven" alt="">
            </li>
            <li>
              <div>
                <img :src="src_two" alt="">
              </div>
              <div>
                <img :src="src_four" alt="">
              </div>
              <div>
                <img :src="src_six" alt="">
              </div>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
      <div class="footer">
          <img src="../../assets/images/left_jiantou_21.png" class="img" @click="getIndex">
      </div>
  </div>  
</template>
<script>
import Bus from '../../assets/js/bus.js'
import {Toast} from "mint-ui"
import qs from 'qs'
export default {
  data () {
    return {
      file_name:'',
      index:3.0,
      src_one:require("../../../static/img/title_01_10.png"),
      src_three:require("../../../static/img/title_03_23.png"),
      src_five:require("../../../static/img/title_05_42.png"),
      src_two:require("../../../static/img/title_02_07.png"),
      src_four:require("../../../static/img/title_04_29.png"),
      src_six:require("../../../static/img/title_06_31.png"),
      src_seven:require("../../../static/img/bac_two_03.png"),
      src_down:require("../../../static/img/down.png"),
      checked:false,
      audit_statu:'',
      audit_status:'',
    }
},
methods:{
  getIndex(){
    this.index=7.0;
    this.$emit("click",this.index)
  },
  file_down(){
    var url=this.host+"audit/download_modify"
     this.$http.post(url).then(result=>{
      // console.log(101,result)
       let a = document.createElement('a');
       a.href = url;
       a.click()
     })
  },
  getInput(){
    if(this.checked==false){
      this.audit_status=4;
      this.$http.post(this.host+"audit/do_saas_order",qs.stringify({audit_status:this.audit_status})).then(result=>{
        if(result.data.errorcode==0){
          //console.log(120,result)
          this.src_three=require("../../../static/img/title_03_11_27.png");
        }
        else{
          Toast(result.data.msg)
        }
      })
    }else{
      this.src_three=require("../../../static/img/title_03_23.png")
    }
  },
  getUrl(){
    this.$http.post(this.host+"audit/saas_order_detail").then(result=>{
      if(result.data.errorcode==0){
        this.file_name=localStorage.getItem("audit_name");
        this.audit_status=result.data.data.order_detail.audit_status;
       // console.log(this.audit_status)
        if(this.audit_status==0){
          //console.log(123)
          this.src_one=require("../../../static/img/01_qian_10.png");
        }
        else if(this.audit_status==1){
          this.src_one=require("../../../static/img/title_01_10.png");
        }
        else if(this.audit_status==2){
          this.src_one=require("../../../static/img/title_01_10.png");
          this.src_two=require("../../../static/img/title_02_18.png");
        }
        else if(this.audit_status==3){
          this.src_one=require("../../../static/img/title_01_10.png");
          this.src_two=require("../../../static/img/fair_02_06.png");
        }
        else if(this.audit_status==4){
          this.src_one=require("../../../static/img/title_01_10.png");
          this.src_two=require("../../../static/img/title_02_18.png");
          this.src_three=require("../../../static/img/title_03_11_27.png");
        }
        else if(this.audit_status==5){
          this.src_one=require("../../../static/img/title_01_10.png");
          this.src_two=require("../../../static/img/title_02_18.png");
          this.src_three=require("../../../static/img/title_03_11_27.png");
          this.src_four=require("../../../static/img/title_04_22.png")
        }
        else if(this.audit_status==6){
          this.src_one=require("../../../static/img/title_01_10.png");
          this.src_two=require("../../../static/img/title_02_18.png");
          this.src_three=require("../../../static/img/title_03_11_27.png");
          this.src_four=require("../../../static/img/title_04_22.png")
          this.src_five=require("../../../static/img/title_05_2_42.png")
        }
        else if(this.audit_status==7){
          this.src_one=require("../../../static/img/title_01_10.png");
          this.src_two=require("../../../static/img/title_02_18.png");
          this.src_three=require("../../../static/img/title_03_11_27.png");
          this.src_four=require("../../../static/img/title_04_22.png")
          this.src_five=require("../../../static/img/fair_05_46.png")
        }
        else{
          this.src_one=require("../../../static/img/title_01_10.png");
          this.src_two=require("../../../static/img/title_02_18.png");
          this.src_three=require("../../../static/img/title_03_11_27.png");
          this.src_four=require("../../../static/img/title_04_22.png")
          this.src_five=require("../../../static/img/title_05_2_42.png")
          this.src_six=require("../../../static/img/title_06_38.png")
        }
      }
      else if(result.data.errorcode==3000){
          this.$router.push('/')
        }
      else{
        Toast("信息有误")
      }
      //console.log(102,result)
    })
  },
},
 mounted(){
    var self=this;
    Bus.$on("borther_methods",function(){
      self.getUrl();
      
    })
    //console.log(202,self.msg) 
  }
}
</script>
<style scoped lang="less">
  #main{
    width:100%;
    height:100%;
    margin-top:0.2%;
  }
  #main .container{
    width:80%;
    text-align: center;
    overflow: scroll;
  }
  #main .container>div:nth-child(3){
    clear: both;
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(1)>input:nth-child(2){
    width:14%;
    position: absolute;
    top:31%;
    left:25%; 
    display: block;
    border:1px solid #ccc;
    cursor: pointer;
    margin:0 auto;
    border-radius: 4px;
    padding:10px;
    font-size: 15px; 
    overflow:hidden;   
    text-overflow:ellipsis;   
    white-space:nowrap;   
    
  }
  #main>.container>.header_title>img{
    position: absolute;
    top:2%;
    left:34%;
    width:18%;
  }
  #main ul{
    list-style: none;
  }
  #main>.container>div:nth-child(2){
    margin-top:20%;
  }
  #main>.container>div:nth-child(2)>ul{
    display: flex;
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(1){
    flex-direction: column;
    z-index: 10;
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(1)>img:nth-child(1){
    width:26%;
    position: absolute;
    top:22%;
    left:17.6%; 
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(1)>img:nth-child(3){
    width:1.8%;
    position: absolute;
    top:31.5%;
    left:37.5%; 
    cursor: pointer;
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(2)>img{
    width:21.8%;
    position: absolute;
    top:42%;
    left:21.8%; 
  }

  #main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(2)>input:nth-child(2){
    width:24%;
    position: absolute;
    top:48%;
    left:18%; 
    display: block;
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin:0 auto;
  }
  
  #main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(3)>img{
    width:22%;
    position: absolute;
    top:68%;
    left:21.6%; 
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(3)>div>img:nth-child(1){
    width:24%;
    position: absolute;
    top:29%;
    left:41.6%; 
  }

  #main>.container>div:nth-child(2)>ul>li:nth-child(3)>div:nth-child(2)>img{
    width:24%;
    position: absolute;
    top:49%;
    left:41.8%; 
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(3)>div:nth-child(3)>img{
    width:24%;
    position: absolute;
    top:75%;
    left:41.6%; 
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(2)>img{
    width:2%;
    position:fixed;
    top:22%;
    left:47.2%;
  }
 #main .footer>img{
    position: absolute;
    left:6%;
    top:40%;
    animation: load 1.2s linear infinite;
    -moz-animation: load 1.2s linear infinite;
    -webkit-animation: load 1.2s linear infinite;
    -o-animation: load 1.2s linear infinite;
    cursor: pointer;
  }
  #main .footer>img:hover{
    animation: load 0s linear infinite;
    -moz-animation: load 0s linear infinite;
    -webkit-animation: load 0s linear infinite;
    -o-animation: load 0s linear infinite;
  }
  @-webkit-keyframes load{
    from{-webkit-transform:scale(0.3);}
    to{-webkit-transform:scale(1);}
  }
  @-moz-keyframes load{
    from{-moz-transform:scale(0.3);}
    to{-moz-transform:scale(1);}
  }
  @-o-keyframes load{
    from{-o-transform:scale(0.3);}
    to{-o-transform:scale(1);}
  }

  :focus{outline:0;}
  @media screen and (min-width:1600px)and(max-width:1680px){
    #main>.container>div:nth-child(2)>ul>li:nth-child(2)>img{
    width:32px;
    top:25%;
    left:49.3%;
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(3)>div:nth-child(3)>img{
    width:20%;
    position: absolute;
    top:70%;
    left:41.7%; 
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(3)>div:nth-child(2)>img{
    width:21%;
    position: absolute;
    top:46%;
    left:41.8%; 
  }
  
 
  #main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(3)>img,{
    width:20%;
    position: absolute;
    top:64%;
    left:23.5%; 
  }
  
  #main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(2)>img{
    width:19%;
    position: absolute;
    top:40%;
    left:24.5%; 
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(2)>input:nth-child(2){
    width:10%;
    position: absolute;
    top:47%;
    left:30%;
    padding:0.6%;
    border-radius: 4px;
    border:2px solid #ddd;
    font-size: 14px;
  }
 
  #main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(1)>img{
    width:23%;
    position: absolute;
    top:22%;
    left:20.5%; 
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(3)>div:nth-child(1)>img:nth-child(1){
    width:21%;
    position: absolute;
    top:27%;
    left:41.8%; 
  }
 
} 
@media screen and (min-width:1440px)and(max-width:1679px){
    #main>.container>div:nth-child(2)>ul>li:nth-child(2)>img{
    width:32px;
    top:25%;
    left:49.3%;
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(3)>div:nth-child(3)>img{
    width:20%;
    position: absolute;
    top:70%;
    left:41.7%; 
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(3)>div:nth-child(2)>img{
    width:21%;
    position: absolute;
    top:46%;
    left:41.8%; 
  }
 
  #main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(3)>img,{
    width:20%;
    position: absolute;
    top:64%;
    left:23.5%; 
  }
 
  #main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(2)>img{
    width:19%;
    position: absolute;
    top:40%;
    left:24.5%; 
  }
 
  #main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(2)>input:nth-child(2){
    top:44%;
    left:18%;
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(1)>img{
    width:23%;
    position: absolute;
    top:22%;
    left:20.5%; 
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(3)>div:nth-child(1)>img:nth-child(1){
    width:21%;
    position: absolute;
    top:27%;
    left:41.8%; 
  }

  }
  @media screen and (min-width:1220px)and(max-width:1439px){
    #main>.container>div:nth-child(2)>ul>li:nth-child(2)>img{
    width:32px;
    top:25%;
    left:50.6%;
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(1)>input:nth-child(2){
    width:14%;
    position: absolute;
    top:29%;
    left:25%; 
    display: block;
    border:1px solid #ccc;
    cursor: pointer;
    margin:0 auto;
    border-radius: 4px;
    padding:10px;
    font-size: 14px; 
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(1)>img:nth-child(3){
    width:2%;
    position: absolute;
    top:29.5%;
    left:37.5%; 
    cursor: pointer;
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(2)>input:nth-child(2){
    width:24%;
    position: absolute;
    top:45.5%;
    left:18%; 
    display: block;
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin:0 auto;
  }
  }
  @media screen and (min-width:992px)and(max-width:1219px){
    #main>.container>div:nth-child(2)>ul>li:nth-child(2)>img{
    width:32px;
    top:25%;
    left:52.4%;
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(3)>div:nth-child(3)>img{
    width:23%;
    position: absolute;
    top:70%;
    left:41.7%; 
  }

#main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(1)>input:nth-child(2){
    width:14%;
    position: absolute;
    top:27.5%;
    left:24%; 
    display: block;
    border:1px solid #ccc;
    cursor: pointer;
    margin:0 auto;
    border-radius: 4px;
    padding:10px;
    font-size: 14px; 
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(1)>img:nth-child(3){
    position: absolute;
    top:28.5%;
    left:35.5%; 
    width:20px;
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(3)>img{
    width:22%;
    position: absolute;
    top:64%;
    left:21.5%; 
  }
 
  #main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(2)>img{
    width:21%;
    position: absolute;
    top:40%;
    left:22.5%; 
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(2)>input:nth-child(2){
    width:10%;
    position: absolute;
    top:43.2%;
    left:14%;
    padding:0.6%;
    border-radius: 4px;
    border:2px solid #ddd;
    font-size: 12px;
  }
 
  #main>.container>div:nth-child(2)>ul>li:nth-child(3)>div:nth-child(1)>img:nth-child(1){
    width:23%;
    position: absolute;
    top:27%;
    left:41.5%; 
  }
 
  }
  @media screen and (min-width:768px)and(max-width:991px){
    #main>.container>div:nth-child(2)>ul>li:nth-child(2)>img{
    width:32px;
    top:25%;
    left:55.8%;
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(1)>input:nth-child(2){
    width:14%;
    position: absolute;
    top:27.5%;
    left:22%; 
    display: block;
    border:1px solid #ccc;
    cursor: pointer;
    margin:0 auto;
    border-radius: 4px;
    padding:10px;
    font-size: 14px; 
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(3)>div:nth-child(3)>img{
    width:23%;
    position: absolute;
    top:70%;
    left:41.7%; 
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(3)>div:nth-child(2)>img{
    width:24%;
    position: absolute;
    top:46%;
    left:41.5%; 
  }


  #main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(3)>img,{
    width:22%;
    position: absolute;
    top:64%;
    left:21.5%; 
  }
 
  #main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(2)>img{
    width:21%;
    position: absolute;
    top:40%;
    left:22.5%; 
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(2)>input:nth-child(2){
    width:10%;
    position: absolute;
    top:42.2%;
    left:14%;
    padding:0.6%;
    border-radius: 4px;
    border:2px solid #ddd;
    font-size: 12px;
  }
  
  #main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(1)>img{
    width:25%;
    position: absolute;
    top:22%;
    left:18.5%; 
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(3)>div:nth-child(1)>img:nth-child(1){
    width:23%;
    position: absolute;
    top:27%;
    left:41.5%; 
  }
  #main>.container>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(1)>img:nth-child(3){
    position: absolute;
    top:28.2%;
    left:35.5%; 
    width:20px;
  }
  }
</style>
