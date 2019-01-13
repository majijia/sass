<template>
    <div id="main">
      <img src="../../assets/images/banner.png">  
      <div class="message">
        <div class="message_header">
          <ul>
            <li>
              <ul>
                <li>
                  <h4>如常和残联的关系</h4>
                  <p>如常和全国66家省市地区残联保持良好的合作关系，并且在残联的内刊中国残疾人杂志以及中国残疾人网都留一个版块帮助我们做宣传</p>
                </li>
                <li>
                  <img src="../../assets/images/index_03.png" alt="">
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <h4>如常合作帮扶基地</h4>
                  <p>北京市在2018年建设100家残疾人帮扶性就业基地，如常现已和其中34家基地签署合作协议，达成合作意向的有41家，合计75家；</p>
                </li>
                <li><img src="../../assets/images/index_04.png" alt=""></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="message_body">
          <ul>
            <li>
              <h4>如常助残活动</h4>
              <p>如常协助大兴区残疾人专场招聘活动</p>
              <img src="../../assets/images/index_05.png" alt="">
            </li>
            <li>
              <h4>如常与残联职康站活动</h4>
              <img src="../../assets/images/index_06.png" alt="">
            </li>
            <li>
              <h4>签约仪式</h4>
              <p>在如常的帮助下天宫院职康站的2名重度残疾人顺利与企业签订劳动合同</p>
              <img src="../../assets/images/index_07.png" alt="">
            </li>
            <li>
              <h4>企业参观职康站</h4>
              <p>如常邀请企业参观海淀苏家坨职康站</p>
              <img src="../../assets/images/index_08.png" alt="">
            </li>
            <li>
              <h4>领导参观如常基地</h4>
              <p>河南省残联领导莅临如常残疾人就业基地指导工作，参观了解如常残疾人就业模式</p>
              <img src="../../assets/images/index_09.png" alt="">
            </li>
            <li>
              <h4>基地化培训</h4>
              <p>郓城基地残疾人数据标注培训结业</p>
              <img src="../../assets/images/index_10.png" alt="">
            </li>
          </ul>
        </div>
      </div>
      <img src="../../assets/images/left_jiantou_21.png" class="img" @click="getIndex">
  </div>  
</template>
<script>
export default {
  data () {
    return {
      index:1.4000000000000001
    }
},
methods:{
    getIndex(){
      this.index=1.4000000000000001;
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
  #main ul{
    list-style: none;
  }
  #main>img:nth-child(1){
    width:100%;
    height:100%;
    position: relative;
  }
  #main .message{
    width:88%;
    height:80%;
    background: #fff;
    position: absolute;
    left:5%;
    top:8%;
    border-radius: 4px;
    overflow: scroll;
  }
  #main .message .message_header{
      width:100%;
      height:28%;
      margin-top:1%;
    }
  #main .message .message_header>ul{
    display: flex;
    justify-content: space-around;
    padding-left:5%;
    padding-top:2%;
  }
  #main .message .message_header>ul>li>ul{
    width:80%;
    display: flex;
    justify-content: space-around;
  }

  #main .message .message_header>ul>li>ul>li>h4,#main .message .message_body>ul>li>h4{
    border-left:4px solid #f09b22;
    padding-left:2%;
  }
  #main .message .message_header>ul>li>ul>li>p,#main .message .message_body>ul>li>p{
    margin-top:3%;
    font-size:14px;
    color:#666;
    width:70%;
  }
  #main .message .message_header>ul>li>ul>li>img{
    margin-left:6%;
  }
  #main .message .message_body{
    width:100%;
    height:66%;
  }  
  #main .message .message_body>ul{
    width:100%;
    height:100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    
  }
  #main .message .message_body>ul>li{
    width:33%;
    border-right:1px dashed #e5e5e5;
    border-top:1px dashed #e5e5e5;
    padding-top:1%;
  }
  #main .message .message_body>ul>li>img{
    margin-top:2%;
  }
  #main .message .message_body>ul>li>img,#main .message .message_body>ul>li>p,#main .message .message_body>ul>li>h4{
    margin-left:18%;
  
  }
  #main .message .message_body>ul>li:nth-child(1)>img,#main .message .message_body>ul>li:nth-child(4)>img,
  #main .message .message_body>ul>li:nth-child(6)>img{
    margin-top:5.4%;
  }
  #main .message .message_body>ul>li:nth-child(2)>img{
    margin-top:12%;
  }
  #main img.img{
    position: absolute;
    left:6%;
    top:50%;
    animation: load 1.4s linear infinite;
    -moz-animation: load 1.4s linear infinite;
    -webkit-animation: load 1.4s linear infinite;
    -o-animation: load 1.4s linear infinite;
    cursor: pointer;
  }
  #main img.img:hover{
    animation: load 0s linear infinite;
    -moz-animation: load 0s linear infinite;
    -webkit-animation: load 0s linear infinite;
    -o-animation: load 0s linear infinite;
  }
  @-webkit-keyframes load{
    from{-webkit-transform:scale(0.5);}
    to{-webkit-transform:scale(1.2);}
  }
  @-moz-keyframes load{
    from{-moz-transform:scale(0.5);}
    to{-moz-transform:scale(1.2);}
  }
  @-o-keyframes load{
    from{-o-transform:scale(0.5);}
    to{-o-transform:scale(1.2);}
  }
  @media screen and (min-width:994px)and(max-width:1300px){
    #main .message ul li h4{font-size: 14px }
    #main .message .message_header>ul>li>ul>li>p,#main .message .message_body>ul>li>p{font-size: 8px }
    #main .message .message_header>ul>li>ul>li>img,#main .message .message_body>ul>li>img{width:80%;}
    #main .message .message_body>ul>li:nth-child(1)>img{margin-top:8%;}
    #main .message .message_body>ul>li:nth-child(2)>img{margin-top:16%;}
    #main .message .message_body>ul>li:nth-child(4)>img,
  #main .message .message_body>ul>li:nth-child(6)>img{margin-top:14%;}
  #main .message .message_header>ul>li>ul>li>img{width:180px;}
} 
 @media screen and (min-width:768px)and(max-width:993px){
     #main .message .message_header>ul>li:nth-child(1)>ul, #main .message .message_header>ul>li:nth-child(2)>ul{
       display: flex;
       flex-direction: column;
     }
       #main .message .message_header{
      width:100%;
      height:48%;
      margin-top:1%;
    }
    #main .message .message_header>ul>li>ul{
      width:122%;
    }
    #main .message .message_header>ul>li>ul>li>img{
      margin-left:0%;
      margin-top:4%;}
     #main .message .message_body>ul{
       display: flex;
      width:100%;
     } 
     #main .message .message_body>ul>li{
       width:40%;
      padding-bottom:2%;
      padding-top:2%;
     }
     #main .message .message_body>ul>li>img,#main .message .message_body>ul>li>p,#main .message .message_body>ul>li>h4{
       margin-left:-5%;
     }
     #main .message .message_body>ul>li:nth-child(2)>img{
       margin-top:22%;
     }
     #main .message .message_body>ul>li>img{
       width:90%;
     }
      }
</style>
