<template>
    <div id="main" v-if="this.date_bus.length>0">
      <ul class="body_one" >
        <li><img src="../../assets/images/qq_03.png" alt=""></li>
        <li><h2>{{this.date_bus[0][0]}}~{{date_bus[0][1]}}(三年期方案)</h2>
          <p>共节省{{this.date_bus[0][6][0]}}元</p></li>
        <li><button @click="watch">查 看</button></li>
      </ul>
      <ul class="body_two">

          <li><img src="../../assets/images/qq_03.png" alt=""></li>
          <li><h2>{{date_bus[0][2]}}~{{date_bus[0][3]}}(两年期方案)</h2>
              <p>共节省{{this.date_bus[0][6][1]}}元</p>
          </li>
          <li><button @click="watch_one">查 看</button></li>
        </ul>
        <ul class="body_three">
  
            <li><img src="../../assets/images/qq_03.png" alt=""></li>
            <li><h2>{{date_bus[0][4]}}(一年期方案)</h2>
              <p>共节省{{this.date_bus[0][6][2]}}元</p></li>
            <li><button @click="watch_two">查 看</button></li>
      </ul>
      <img src="../../assets/images/left_jiantou_21.png" class="img" @click="getIndex">
  </div>  
</template>
<script>
import Bus from '../../assets/js/bus.js'
export default {
  data () {
    return {
      index:2.0,
      msg:[],
      date_bus:[],
    }
},
methods:{
  watch(){
    this.index=2.1;
    this.$emit("click",this.index)
    
  },
  watch_one(){
   this.index=2.5;
    this.$emit("click",this.index)
    
  },
  watch_two(){
    this.index=2.6;
    this.$emit("click",this.index)
    
  },
  getIndex(){
      this.index=2.0;
      this.$emit("click",this.index)
    },
  },
  mounted(){
    Bus.$on('myDate',(aa)=>{
    this.date_bus=new Array(aa);
    //console.log(212,this.date_bus)
   })
}
}
</script>
<style scoped lang="less">
  #main{
    width:100%;
    height:100%;
    background:#fff;
    
  }
  #main .body_one,#main .body_two,#main .body_three{
    width:100%;
    display: flex;
    align-items: center;
    margin-left:6%;
    margin-top:4.2%;
  }
  #main ul{
    list-style: none;
  }
  #main ul li{
    margin-right:3%;
  }
  #main .body_one>li:nth-child(2),#main .body_two>li:nth-child(2),#main .body_three>li:nth-child(2){
    margin-right:62%;
  }
  #main .body_one>li:nth-child(2)>p,#main .body_two>li:nth-child(2)>p,#main .body_three>li:nth-child(2)>p{
    font-size: 18px;
    margin-top:10px;
    color:#666;
  }
  #main .body_one>li:nth-child(3)>button{
    background: #f09b22;
    color:#fff;
    border:0;
    padding:10px 34px;
    border-radius: 4px;
    cursor: pointer;
    position: fixed;
    top:130px;
    left:89%;
    font-size: 16px;
  }
  #main .body_two>li:nth-child(3)>button{
    background: #f09b22;
    color:#fff;
    border:0;
    padding:10px 34px;
    border-radius: 4px;
    cursor: pointer;
    position: fixed;
    top:282px;
    left:89%;
    font-size: 16px;
  }
   #main li h2{
     color:#333;
   }
    #main .body_three>li:nth-child(3)>button{
    background: #f09b22;
    color:#fff;
    border:0;
    padding:10px 34px;
    border-radius: 4px;
    cursor: pointer;
    position: fixed;
    top:432px;
    left:89%;
    font-size: 16px;
  }
 
  #main .body_one>li:nth-child(1)>input,#main .body_two>li:nth-child(1)>input,#main .body_three>li:nth-child(1)>input{
  display: block;
    width: 18px;
    height: 18px;
    cursor: pointer;
    top: 2px;
    margin:0 auto;
    background:#fff;
 }

 #main .img_right{
      position: absolute;
      top:50%;
      left:6%;
  }
  :focus{outline:0;}
  #main img.img{
    position: absolute;
    left:6%;
    top:440px;
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
  @media screen and (min-width:1280px) and(max-width:1600px){
   #main li h2{
     font-size:22px;
   }
   #main .body_three>li:nth-child(3)>button,#main .body_two>li:nth-child(3)>button,#main .body_one>li:nth-child(3)>button{
     left:88%;
   }
  #main .body_two>li:nth-child(3)>button{
     top:252px;
   }
  #main .body_three>li:nth-child(3)>button{
     top:370px;
   }
}
 @media screen and (min-width:992px) and(max-width:1279px){
   #main li h2{
     font-size:20px;
   }
   #main .body_three>li:nth-child(3)>button,#main .body_two>li:nth-child(3)>button,#main .body_one>li:nth-child(3)>button{
     left:88%;
   }
   #main .body_two>li:nth-child(3)>button{
     top:120px;
   }
   #main .body_three>li:nth-child(3)>button{
     top:240px;
   }
   #main .body_one>li:nth-child(3)>button{
     top:360px;
   }
}
@media screen and (min-width:768px) and(max-width:991px){
 #main li h2{
     font-size:16px;
   }
   #main .body_three>li:nth-child(3)>button,#main .body_two>li:nth-child(3)>button,#main .body_one>li:nth-child(3)>button{
     left:80%;
   }
   #main .body_two>li:nth-child(3)>button{
     top:120px;
   }
   #main .body_three>li:nth-child(3)>button{
     top:220px;
   }
   #main .body_one>li:nth-child(3)>button{
     top:330px;
   }
   #main .body_one>li:nth-child(2)>p,#main .body_two>li:nth-child(2)>p,#main .body_three>li:nth-child(2)>p{
     font-size: 14px;
   }
   #main .body_one{
     margin-top:8.2%;
   }
} 
</style>
