<template>
    <div id="main">
      <ul >
        <li  @click="getIndex">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="../../assets/images/actice_03.png" >
            <span>服务合作协议</span>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所谓协议(Protocol)就是对数据格式和计算之间交换数据时必须遵守的规则的正式描述，它的作用和普通话的作用如出一辙。依据网络的不同通常使用
              Ethernet(以太网)。</p>
        </li>
        <li @click="getIndex_two">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="../../assets/images/actice_03.png" >
          <span>服务合作协议之补充协议</span>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;它的作用和普通话的作用如出一辙。依据网络的不同通常使用
              、IPX/SPX以及TCP/IP协议。议中最常见的网络低层协议，安装容易且造价便宜
              </p>
        </li>
        <li @click="getIndex_seven">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="../../assets/images/actice_03.png" >
          <span>残疾人就业扶持协议</span>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;它的作用和普通话的作用如出一辙。依据网络的不同通常使用
              Ethernet(以太网)、NetBEUI、IPX/SPX以及TCP/IP协议。安装容易且造价便宜；。</p>
        </li>
        <li @click="getIndex_three">
            &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="../../assets/images/actice_03.png" >
          <span>担保协议</span>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ethernet是总线型协议中最常见的网络低层协议，安装容易且造价便宜；而NetBEUI可以说是专为
              小型局域网设计的网络协议。对那些无需跨经路由器与大型主机通信的小型局域网</p>
        </li>
          <li @click="getIndex_four">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="../../assets/images/actice_03.png" >
            <span>三方协议</span>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;安装容易且造价便宜；而NetBEUI可以说是专为
                小型局域网设计的网络协议。对那些无需跨经路由器与大型主机通信的小型局域网</p>
        </li>
        <li  @click="getIndex_five">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="../../assets/images/actice_03.png">
          <span>代理协议</span>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ethernet是总线型协议中最常见的网络低层协议，安装容易且造价便宜；而NetBEUI可以说是专为
              小型局域网设计的网络协议。需要路由到另外的局域网，</p>
        </li>
        
</ul>
  </div>  
</template>
<script>
  import qs from 'qs'
export default {
  data () {
    return {
      index:3.0,
      name:{
      service_agreement:'service_agreement',
      job_agreement:'job_agreement',
      proxy_agreement:'proxy_agreement',
      third_agreement:'third_agreement',
      }
    }
},
methods:{
  getIndex(){
      this.index+=0.1;
      this.$emit("click",this.index)
    },
  getIndex_two(){
      this.index+=0.2;
      this.$emit("click",this.index)
    },
    getIndex_three(){
      this.index+=0.3;
      this.$emit("click",this.index)
    },
    getIndex_four(){
      this.index+=0.4;
      this.$emit("click",this.index)
    },
    getIndex_five(){
      this.index+=0.5;
      this.$emit("click",this.index)
    },
    getIndex_seven(){
      this.index+=0.6;
      this.$emit("click",this.index)
    },
    getAgreement(){
      this.$http({
        methods:'post',
        url:this.host+'agreement/download',
        data:{
          name:
          {
          service_agreement:'service_agreement',
          job_agreement:'job_agreement',
          proxy_agreement:'proxy_agreement',
          third_agreement:'third_agreement'
        }
      },
      transformResponse:[function(data){
        return qs.stringify(data)
      }]
      }).then(result=>{
        //console.log(result)
      })
    }
  },
    created(){
      this.getAgreement()
  }
}
</script>
<style scoped lang="less">
  #main{
    width:100%;
    margin-top:0.2%;
  }
  #main ul{
    list-style: none;
    display: flex;
    justify-content:space-around;
    margin-top:80px;
    margin-left:5%;
    flex-wrap:wrap;
    width:90%;
  }
  #main ul>li{
    border:1px dashed #ddd;
   /* display:flex; */
    cursor: pointer;
    width:33.2%;
    align-items:center;
    margin-right:0;
    /* margin-bottom:5%; */ 
  }
  #main ul>li>img{
    margin-top:4%;
    width:5%;
  }
  #main ul>li>p{
    margin: 3% 4% 6% 4%;
    color:#666;
    margin-bottom:4%;
  }
  #main ul>li>span{
    font-size: 18px;
    font-weight: bold;
  }
  #main ul>li:nth-child(1),#main ul>li:nth-child(2),#main ul>li:nth-child(3){
    border-bottom:0;
  }
  #main ul>li:nth-child(1),#main ul>li:nth-child(2),#main ul>li:nth-child(4),#main ul>li:nth-child(5){
    border-right:0;
  }
  #main ul>li>h3{
    margin-left:4%;
  }
   :focus{outline:0;}
   @media screen and (min-width:1201px)and(max-width:1440px){
    #main ul{
    width:86%;
  }
  #main ul>li{
    width:33%;
    /* margin-bottom:5%; */ 
  }
  #main ul>li>p{
    font-size: 14px;
  }
   }
   @media screen and (min-width:768px)and(max-width:1200px){
    #main>ul>li h3{font-size: 16px}
    #main ul{
    width:80%;
  }
  #main ul>li{
    width:49.7%;
    /* margin-bottom:5%; */ 
  }
  #main ul>li:nth-child(4){
    border-bottom:0;
  }
  #main ul>li>p{
    font-size: 14px;
  }
  #main ul>li:nth-child(3){
    border-right:0;
  }
  #main ul>li:nth-child(4),#main ul>li:nth-child(2){
    border-right:1px dashed #ddd;
  }
    }
    
</style>
