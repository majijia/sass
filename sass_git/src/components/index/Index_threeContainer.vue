<template>
    <div id="main">
      <img src="../../assets/images/banner.png">  
      <div class="main">    
        <div class="header"> 
          <div class="header_one">
            <img src="../../assets/images/anli_07.png" alt="">
            <ul>
              <li><h4>网易 &nbsp;–&nbsp;东直门社区&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    中国知网&nbsp;  -  &nbsp;海淀残联</h4></li>
              <li><h4>用工成本构成：最低工资（2000） + 社保五险（1376.43）  -  补贴费用（安置补贴、福利企业补贴）</h4></li>
            </ul>
          </div>
        </div>
        <div class="container">
          <ul>
            <li><h3>到岗就业</h3></li>
            <li><h3>灵活就业</h3></li>
            <li><h3>基地就业</h3></li>
          </ul>
        </div>
        <div class="footer">
          <ul>
            <li>
              <ul class="one">
                <li><h2>招聘</h2></li>
                <li><h3>定岗招聘</h3></li>
                <li>根据企业类型规模及用工需求，共同开发适合岗位，按照岗位要求定向招聘</li>
                <li><h3>集中面试 </h3></li>
                <li>依托就业基地充足候选人才，集中筛选，择优录取</li>
                <li><h3>资料齐全</h3></li>
                <li>全部基地入驻人员资料齐全，真实有效</li>
              </ul>
            </li>
            <li>
              <ul class="two">
                <li><h2>管理</h2></li>
                <li><h3>岗前培训</h3></li>
                <li>根据需求进行岗前培训，以保证残疾人职工能更好的胜任本职工作</li>
                <li><h3>专业管理</h3></li>
                <li>依托特教老师专业化管理，实现残疾人生活工作零风险</li>
                <li><h3>绩效考核</h3></li>
                <li>邮件考核     远程打卡 
                    网络共享     在线反馈</li>
              </ul>
            </li>
            <li>
              <ul class="two">
                <li><h2>审核</h2></li>
                <li><h3>材料准备</h3></li>
                <li>协助企业准备所有审核资料，保证残疾人所提供材料完善</li>
                <li><h3>申报审核</h3></li>
                <li>提供全流程申报审核及申报缴纳服务</li>
                <li><h3>风险担保</h3></li>
                <li>基地入驻人员资料齐全，真实有效，残疾人雇佣及残保金审核零风险</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div id="img">
          <img src="../../assets/images/bao.png" alt="">
      </div>
      <div id="arrow">
        <img src="../../assets/images/left.png" @click="get_twoContainer">
        <img src="../../assets/images/right.png" @click="getIndex">
      </div>
    </div>
    
</template>
<script>

export default {
  data () {
    return {
      index:1.3
    }
},
  methods:{
    get_twoContainer(){
       this.index-=0.0999999999999998;
       this.$emit("click",this.index);
    },
    getIndex(){
      this.index+=0.1;
      this.$emit("click",this.index)
    }
  }
}
</script>
<style scoped lang="less">
  #main{
    width:100%;
    height:100%;
    margin-top:0.15%;
  }
  #main>img:nth-child(1){
    width:100%;
    height:100%;
    position: relative;
  }
  #main .main{
    width:88%;
    height:80%;
    background: #fff;
    position: absolute;
    left:5%;
    top:8%;
    border-radius: 4px;
    overflow: scroll;
  }
  #main .main ul{
    list-style: none;
  }
  
  #main .main>.header{
    width:100%;
    background:#ffab35;
    border-radius: 4px;
    text-align: center;
    padding-top:1%;
    padding-bottom:1%;
  }
  #main .main>.header>.header_one{
    width:90%;
    height:80%;
    border:1px dashed #fff;
    margin:auto auto;
    display: flex;
    text-align: center;
    padding-bottom:0.2%;
  }
  #main .main>.header>.header_one ul{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color:#fff;
    font-size: 14px;
    text-align: left;
    margin-top:1.4%;
  }
  #main .main>.header>.header_one>img{
    height:54%;
    margin-top:1.4%;
    margin-left:20%;
    margin-right:1%;
    margin-bottom:0.6%;
    width:18px;
  }
  #main .main .container>ul{
    width:100%;
    height:20%;
    margin-top:3%;
    display: flex;
    justify-content: space-around;
  }
  #main .main .container>ul>li{
    width:33.2%;
    text-align: center;
    background: #eeeeee;
    padding:2% auto 2%;
    color:#000;
    padding:1% 0 1% 0;
  }
  #main .main .container>ul>li:nth-child(3){
    background: #ffab35;
    color:#fff;
  }
  #main .main .footer>ul{
    width:100%;
    height:50%;
    margin-top:8%;
    display: flex;
    justify-content: space-around;
  }
  #main .main .footer>ul>li{
    display: table-cell;
    text-align: left;
    vertical-align: middle;
    border-right:1px solid #ddd;
    width:33.3%;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom:20px;
  }
  #main .main .footer>ul>li>ul>li:nth-child(1){
    color:#f09b22;
  }
  #main .main .footer>ul>li ul.one{
    margin-left:24%;
  }
  #main .main .footer>ul>li ul.one>li:not(:nth-child(1)),#main .main .footer>ul>li ul.two>li:not(:nth-child(1)){
    margin-top:5%;
  }
  #main .main .footer>ul>li ul.one li>span.bold{
    font-weight:bold;
    font-size:16px;
  }
  #main .main .footer>ul>li ul.two{
    margin-left:8%;
  }
  #main .main .footer>ul>li ul.two>li img{
    margin-right:5%;
  }
  #main .main .footer>ul>li>ul.two li:nth-child(2){
    margin-top:4%;
  }
  #main .main .footer>ul>li>ul.two li:nth-child(4){
    margin-top:8%;
  }
  #main .main .footer>ul>li>ul>li:nth-child(2)>h3,#main .main .footer>ul>li>ul>li:nth-child(4)>h3,#main .main .footer>ul>li>ul>li:nth-child(6)>h3{
    border-left:4px solid #f09b22;
    padding-left:2%;
  }
  #main #img{
    position:fixed;
    left:90%;
    top:32%;
  }
  #main #img img{
    width:7%;
    position: fixed;
    left:84%;
  }
  #main #arrow>img:nth-child(1){
    position: absolute;
    left:7%;
    top:50%;
    height:7.5%;
    cursor: pointer;
  }
  #main #arrow>img:nth-child(2){
    position: absolute;
    left:88%;
    top:50%;
    height:8%;
    cursor: pointer;
  }

  @media screen and  (min-width:1439px) and (max-width:1660px){
  #main #img img{
    width:7%;
    position: fixed;
    top:30%;
    left:84%;
  }
  #main .main .footer>ul>li ul.one>li:nth-child(1),#main .main .footer>ul>li ul.two>li:not(:nth-child(1)){
    margin-top:6%;
  }
}
@media screen and  (min-width:1201px) and (max-width:1440px){
  #main #img img{
    width:7%;
    position: fixed;
    top:28%;
    left:87%;
  }
  #main .main>.header>.header_one>img{
    margin-top:1.6%;
    width:16px;
  }
  #main .main .footer>ul>li ul.one>li:not(:nth-child(1)){
    margin-top:10%;
  }
  #main .main .footer>ul>li ul.two>li:not(:nth-child(1)){
    margin-top:9%;
  }
}
   @media screen and (min-width:991px)and(max-width:1200px){
    #main .main>.header>.header_one>img{
    margin-left:12%;
    height: 50%;
    margin-top:1.5%;
    margin-bottom:1%;
    width:16px;
  }
   #main .main>.header>.header_one>ul>li>h4{
    font-size: 13px;
    margin-top:0.2%;
  }
    #main #img img{
    width:7%;
    position: fixed;
    top:27%;
    left:92%;
  }
  #main .main .footer>ul>li ul.one>li:not(:nth-child(1)){
    margin-top:10%;
  }
  #main .main .footer>ul>li ul.two>li:not(:nth-child(1)){
    margin-top:9%;
  }
  #main #arrow>img:nth-child(2){
    position: absolute;
    left:86%;
    top:50%;
    height:8%;
    cursor: pointer;
  }
  #main .footer ul h3{
      font-size: 16px;
    }  
    #main .footer ul h2{
      font-size: 20px;
    } 
   }
   @media screen and (min-width:768px)and(max-width:991px){
    #main .main>.header>.header_one>img{
    margin-left:12%;
    height: 30%;
    margin-top:2.6%;
    margin-bottom:1%;
    width:16px;
  }
  #main .main>.header>.header_one>ul{
   margin-top:2.2%;
  }
  #main .main>.header>.header_one>ul>li>h4{
    font-size: 10px;
    margin-top:0.2%;
    margin-bottom:0.6%;
  }
    #main #arrow>img:nth-child(2){
    position: absolute;
    left:80%;
    top:50%;
    height:8%;
    cursor: pointer;
  }
  #main .main .footer>ul>li ul.one>li:not(:nth-child(1)){
    margin-top:10%;
  }
  #main .main .footer>ul>li ul.two>li:not(:nth-child(1)){
    margin-top:9%;
  }
    #main #img img{
      position: relative;
      top:10px;
      right:50px;
    }
    #main .footer ul h3{
      font-size: 16px;
    }  
    #main .main .footer > ul > li ul> li{
      font-size:14px;
    }
   #main .main .footer > ul > li ul.one > li{
     font-size:13.5px;
   }
   #main #img img{
    width:7%;
    position: fixed;
    top:26%;
    left:90%;
  }
}  
</style>
