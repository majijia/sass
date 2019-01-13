<template>
    <div id="main">
      <div id="main_banner">
          <img src="../../assets/images/banner.png">
          <img class="img" src="../../assets/images/left_road.png"  @click="getIndexContainer">
      </div>
      <div> 
       <p>用心实现无障碍</p>
       <p>与中国8502万残障同胞一起创造属于我们的小故事</p>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      index:1.0
    }
  },
  methods:{
    getIndexContainer(){
      this.index+=0.1;
      this.$emit("click",this.index);  //子组件传值给父组件
    }
  }
}
</script>
<style scoped lang="less">
  #main{
    height:100%;
    width:100%;
  }
  #main>#main_banner>img:nth-child(1){
    width:100%;
    height:100%;
    position: fixed;
    top:49px;
    left:168px;
  }
  #main>#main_banner img.img{
    position: fixed;
    left:94%;
    top:50%;
    animation: load 1.4s linear infinite;
    -moz-animation: load 1.4s linear infinite;
    -webkit-animation: load 1.4s linear infinite;
    -o-animation: load 1.4s linear infinite;
    cursor: pointer;
  }
  #main>#main_banner img.img:hover{
    animation: load 0s linear infinite;
    -moz-animation: load 0s linear infinite;
    -webkit-animation: load 0s linear infinite;
    -o-animation: load 0s linear infinite;
  }
  #main>div:nth-child(2){
    display: flex;
    flex-direction: column;
    justify-content: start;
    position: absolute;
    top:248px;
    left:10%;
    color:#fff;
  }
  #main>div:nth-child(2)>p:nth-child(1){
    font-size: 96px;
    font-weight: bold;
  }
  #main>div:nth-child(2)>p:nth-child(2){
    font-size: 24px;
    margin-top:2%;
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
@media screen and (min-width:768px) and(max-width: 991px){
    #main>#main_banner img.img{
      position: fixed;
      left:90%;
      top:50%;
    }
  #main>div:nth-child(2){
    left:6%;
  }
  #main>div:nth-child(2)>p:nth-child(1){
    font-size: 56px;
    font-weight: bold;
  }
  #main>div:nth-child(2)>p:nth-child(2){
    font-size: 14px;
    margin-top:2%;
  }
}
@media screen and (min-width:1200px) and(max-width: 1440px){
  #main>div:nth-child(2){
    left:6%;
  }
  #main>div:nth-child(2)>p:nth-child(1){
    font-size: 86px;
    font-weight: bold;
  }
  #main>div:nth-child(2)>p:nth-child(2){
    font-size: 20px;
    margin-top:2%;
  }
}
@media screen and (min-width:992px) and(max-width: 1199px){
  #main>div:nth-child(2){
    left:6%;
  }
  #main>div:nth-child(2)>p:nth-child(1){
    font-size: 76px;
    font-weight: bold;
  }
  #main>div:nth-child(2)>p:nth-child(2){
    font-size: 16px;
    margin-top:2%;
  }
}
</style>
