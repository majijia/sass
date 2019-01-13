<template>
    <div id="main">
      <img src="../../assets/images/banner.png">  
      <div class="main">    
      <div id="message">
        <div class="message_header">
          <div class="title">
           <h2>关于印发《残疾人就业促进“十三五”实施方案》的通知</h2>
           <p>残联发〔2016〕48号</p>
          </div>
           <ul>
             <li>
               <p>第三条  鼓励扶持自主创业、灵活就业。</p>
               <p>制定发展残疾人自主创业、灵活就业政策，加大对“互联网+”就业、居家就业、社区就业、灵活就业等适合残疾人的新就业形态的扶持力度。</p>
             </li>
             <li>
               <img src="../../assets/images/erweima_03.png" alt="">
             </li>
           </ul>
         </div>
         <div class="message_body">
           <ul>
             <li><img src="../../assets/images/img_01.png" alt=""></li>
             <li>
               <ul>
                 <li>如常已在北京、上海、深圳、天津、杭州、沈阳、长春、济南、昆明、郑州、贵阳、重庆、成都、内蒙、山西、福建等16个城市开设分公司，
                   在北京、上海、天津、沈阳、西安、成都、呼和浩特等29个城市开设如常残障人才就业工作站，同时，在北京及全国各地拟成立残障人才就业基地数量42个，
                   可容纳残障就业人才20000人。
                 </li>
                 <li>
                   <p><img src="../../assets/images/btn.png" alt=""><span>残疾人灵活居家就业新模式</span></p>
                   <p><img src="../../assets/images/btn.png" alt=""><span>残疾人就业基地已成功实现就业3000余人</span></p>
                   <p><img src="../../assets/images/btn.png" alt=""><span>如常全国拟成立42个就业基地</span></p>
                   <p><img src="../../assets/images/btn.png" alt=""><span>全国容纳残疾人就业20000人</span></p>
                 </li>
               </ul>
             </li>
           </ul>
         </div>
         <div class="footer">
           <ul>
             <li>
               <img src="../../assets/images/img_02.png" alt="">
               <h4>北京基地</h4>
             </li>
             <li>
               <img src="../../assets/images/img_03.png" alt="">
               <h4>山东基地</h4>
             </li>
             <li>
                 <img src="../../assets/images/img_04.png" alt="">
                 <h4>承德基地</h4>
             </li>
             <li>
                 <img src="../../assets/images/img_05.png" alt="">
                 <h4>河南基地岗前培训</h4>
             </li>
             <li>
                 <img src="../../assets/images/img_06.png" alt="">
                 <h4>山东基地岗前培训</h4>
             </li>
           </ul>
         </div>
     </div>
      <div id="arrow">
        <img src="../../assets/images/left.png" @click="get_twoContainer">
        <img src="../../assets/images/right.png" @click="getIndex">
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  data () {
    return {
      index:1.4
    }
},
methods:{
    get_twoContainer(){
       this.index-=0.0999999999999999;
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
  #message{
      width:100%;
      /* height:100%; */
      margin-top:1%;
    }
    #message ul{
      list-style: none;
    }
    #message>.message_header>.title{
      text-align: center;
    }
    #message>.message_header ul:nth-child(2),#message>.message_header ul:nth-child(2)>li>p:nth-child(2){
      margin-top:1%;
    }
    #message>.message_header ul:nth-child(2)>li>p:nth-child(2){
      width:90%;
    }
    #message>.message_header>ul{
      display: flex;
      justify-content: space-around;
    }
    #message>.message_body>ul{
      display: flex;
      justify-content: space-around;
      margin-top:1.5%;
    }
    #message>.message_body>ul>li:nth-child(1){
      width:40%;
      padding-left:2%;
    }
    #message>.message_body>ul>li:nth-child(2){
      width:70%;
      margin-left:4%;
    }
   
    #message>.message_body>ul>li:nth-child(2)>ul>li{
      width:90%;
      margin-top:4%;
    }
    #message>.message_body>ul>li:nth-child(2)>ul>li:nth-child(2){
      margin-top:8%;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      width:100%;
    }
    #message>.message_header>.title h2{
      /* font-size: 22px;*/
      margin-bottom:1%; 
      margin-top:2%;
    }
    #message>.message_body>ul>li:nth-child(2)>ul>li:nth-child(2)>p{
      padding-bottom:2%;
      padding-right:10%;
    }
    #message>.message_body>ul>li:nth-child(2)>ul>li:nth-child(2)>p:nth-child(2){
      margin-left:4%;
    }
    #message>.message_body>ul>li:nth-child(2)>ul>li:nth-child(2)>p:nth-child(4){
      margin-left:1.8%;
    }
    #message>.message_body>ul>li:nth-child(2)>ul>li:nth-child(2)>p>img{
      margin-right:5px;
    }
    #message>.footer{
      text-align: center;
    }
    #message>.footer>ul{
      display: flex;
      justify-content: space-around;
      margin-top:2%;
    }
    #message>.footer>ul>li{
      width:20%;
    }
    #main #arrow>img:nth-child(1){
    position: absolute;
    left:3%;
    top:52%;
    height:7.5%;
    cursor: pointer;
  }
  #main #arrow>img:nth-child(2){
    position: absolute;
    left:96%;
    top:52%;
    height:8%;
    cursor: pointer;
  }

  @media screen and (min-width:1299px)and(max-width:1660px){
    #message>.message_header ul:nth-child(2)>li>p{
      font-size: 16px;
      margin-left:2%;
    }
    #message>.message_body>ul>li:nth-child(1)>img{
      margin-left:2%;
      width:120%;
      margin-top:5%;
    }
    #message>.message_body>ul>li:nth-child(2)>ul>li{
      margin-top:4%;
      margin-left:10%;
    }
    #message>.message_body>ul>li:nth-child(2)>ul>li:nth-child(2)>p{
      padding-right:1%;
      font-size: 15px;
      /* color:#666; */
    }
    #message>.footer>ul>li>img{
       width:80%;
       margin-top:2%;
     }
     #message>.message_header>.title h2{
      font-size: 22px;
      margin-bottom:2%;
      margin-top:4%;
    }
  }
  @media screen and (min-width:992px)and(max-width:1300px){
     #message>.message_header>.title h2{
      font-size: 22px;
      margin-bottom:2%;
      margin-top:4%;
    }
    #message>.message_body>ul{
      display: flex;
      flex-direction: column;
    }
    #message>.message_body>ul>li:nth-child(1)>img{
      margin-left:8%;
      width:188%;
    }
    #message>.message_body>ul>li:nth-child(2)>ul>li:nth-child(1){
      margin-left:2%;
      width:110%;
    }
    #message>.message_body>ul>li:nth-child(2)>ul>li:nth-child(2){
      font-size: 14px;
      margin-top:4%;
      display: flex;
      width:140%;
      margin-left:2%;
    }
     #message>.footer>ul{
       width:100%;
     }
     #message>.footer>ul>li>img{
       width:70%;
     }
     #message>.footer>ul>li>h4{
       font-size: 11px;
       margin-bottom:4%;
     }
     #message>.message_header ul:nth-child(2)>li>p{
       font-size: 16px;
       margin-left:6%;
     }
     #main #arrow>img:nth-child(2){
      position: absolute;
      left:92%;
      top:52%;
      height:8%;
      cursor: pointer;
  }
} 
  @media screen and (min-width:768px)and(max-width:991px){
    #message>.message_header>.title h2{
      font-size: 18px;
      margin-bottom:2%;
      margin-top:4%;
    }
    #message>.message_body>ul{
      display: flex;
      flex-direction: column;
    }
    #message>.message_body>ul>li:nth-child(1)>img{
      margin-left:8%;
      width:188%;
    }
    #message>.message_body>ul>li:nth-child(2)>ul>li:nth-child(1){
      margin-left:2%;
      width:110%;
    }
    #message>.message_body>ul>li:nth-child(2)>ul>li:nth-child(2){
      font-size: 14px;
      margin-top:4%;
      display: flex;
      width:140%;
    }
     #message>.footer>ul{
       width:100%;
     }
     #message>.footer>ul>li>img{
       width:70%;
     }
     #message>.footer>ul>li>h4{
       font-size: 11px;
       margin-bottom:4%;
     }
     #message>.message_header ul:nth-child(2)>li>p{
       font-size: 14px;
       margin-left:6%;
     }
     #main #arrow>img:nth-child(2){
      position: absolute;
      left:90%;
      top:52%;
      height:8%;
      cursor: pointer;
  }
} 
</style>
