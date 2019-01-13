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
                <li><h2>优势</h2></li>
                <li><h3>分散就业</h3></li>
                <li>灵活就业可实现风险的有效规避，尤其是交通风险及其他健康类风险，灵活就业形式包括：</li>
                <li><h3>居家就业  社区就业  街道就业   远程办公</h3></li>
                <li><h3>易于管理</h3></li>
                <li>灵活就业的主力军均有较好的网络及计算机操作能力，可更好的适应远程办公，企业可通过业绩及线上考核来实现人员管理</li>
              </ul>
            </li>
            <li>
              <ul class="two">
                <li><h2>劣势</h2></li>
                <li><h3>效率较低</h3></li>
                <li>灵活建议安置非核心岗位，以保证企业核心业务的顺利发展，可安置客服类,文档类职位</li>
                <li><h3>团队松散</h3></li>
                <li>分散就业，不利于团队凝聚。</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div id="img">
          <img src="../../assets/images/sheng.png" alt="">
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
      index:1.1
    }
},
  methods:{
    get_twoContainer(){
       this.index=1.1;
       this.$emit("click",this.index);
    },
    getIndex(){
      this.index+=0.2;
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
  /* #main .main>.header>.header_one ul>li:nth-child(1)>h3{
    margin-bottom:0.4%;
    font-size: 1rem;
  } 
  #main .main>.header>.header_one>img{
    height:54%;
    margin-top:1.4%;
    margin-left:20%;
    margin-right:1%;
    margin-bottom:0.6%;
  }*/
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
  #main .main .container>ul>li:nth-child(2){
    background: #ffab35;
    color:#fff;
  }
  #main .main .footer>ul{
    width:100%;
    height:50%;
    margin-top:5%;
    display: flex;
    justify-content: space-around;
  }
  #main .main .footer>ul>li{
    display: table-cell;
    text-align: left;
    vertical-align: middle;
    border-right:1px solid #ddd;
    width:59.2%;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom:20px;
  }
  #main .main .footer>ul>li ul.one{
    margin-left:24%;
  }
  #main .main .footer>ul>li ul.one>li:not(:nth-child(1)){
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
  #main .main .footer>ul>li ul.two>li:not(:nth-child(1)){
    margin-top:3%;
  }
  #main .main .footer>ul>li ul.one>li:nth-child(1){
    padding-top:4%;
  }
  #main .main .footer>ul>li ul.two>li:nth-child(1){
    padding-top:5%;
  }
  #main .main .footer>ul>li ul.two>li:nth-child(3){
    margin-top:3.2%;
  }
  #main .main .footer>ul>li ul.two>li:nth-child(4){
    margin-top:15%;
  }
  #main .main .footer>ul>li ul.two>li:nth-child(5){
    margin-top:4%;
  }
  #main .main .footer>ul>li>ul>li:nth-child(1)>h2{
    border-left:4px solid #f09b22;
    padding-left:2%;
    color:#f09b22;
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
  #main .main .footer>ul>li ul.one>li:nth-child(1),#main .main .footer>ul>li ul.two>li:not(:nth-child(1)){
    margin-top:6%;
  }
}
@media screen and  (min-width:991px) and (max-width:1200px){
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
  #main #arrow>img:nth-child(2){
    position: absolute;
    left:86%;
    top:50%;
    height:8%;
    cursor: pointer;
  }
   #main .main .container>ul>li>h4{
     font-size: 16px;
   }
   #main .main .footer>ul>li ul.one>li>h3,
   #main .main .footer>ul>li ul.two>li>h3{
     font-size: 16px;
   }
   #main .main .footer>ul>li ul.one>li>h2,
   #main .main .footer>ul>li ul.two>li>h2{
     font-size: 20px;
   }
     #main .main .footer>ul>li ul.two{
      margin-left:10%;
  }
  #main .main .footer>ul>li span.bold{
    font-weight:bold;
    font-size:14px;
  }
  #main .main .footer>ul>li span.bold_two{
    font-size: 14px;
  }
  #main .main .footer>ul>li ul.one{
    margin-left:20%;
  }
  #main .main .footer>ul>li ul.two>li:not(:nth-child(1)){
    margin-top:10%;
  }
  #main .main .footer>ul>li ul.one>li:not(:nth-child(1)){
    margin-top:12%;
  }
}
@media screen and  (min-width:768px) and (max-width:991px){
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
   #main .main .container>ul>li>h3{
     font-size: 16px;
   }
   #main .main .footer>ul>li ul.one>li>h3,
   #main .main .footer>ul>li ul.two>li>h3{
     font-size: 16px;
   }
     #main .main .footer>ul>li ul.two{
      margin-left:8%;
  }
  #main .main .footer>ul>li span.bold{
    font-weight:bold;
    font-size:14px;
  }
  #main .main .footer>ul>li span.bold_two{
    font-size: 13px;
  }
  #main .main .footer>ul>li ul.one{
    margin-left:20%;
  }
  #main .main .footer>ul>li ul.two>li:not(:nth-child(1)){
    margin-top:15%;
    font-size:15px;
  }
  #main #img img{
    width:7%;
    position: fixed;
    top:26%;
    left:90%;
  }
   #main .main .footer>ul>li ul.one>li:not(:nth-child(1)){
    margin-top:10%;
    font-size:13px;
  }
}
  
</style>
