<template>
    <div id="main">
      <ul class="body_one">
        <li><input type="checkbox"></li>
        <li><img src="../../assets/images/qq_03.png" alt=""></li>
        <li><h2>企业一</h2></li>
        <li><button>查看</button></li>
      </ul>
      <ul class="body_one">
          <li><input type="checkbox"></li>
          <li><img src="../../assets/images/qq_03.png" alt=""></li>
          <li><h2>企业二</h2></li>
          <li><button>查看</button></li>
        </ul>
        <ul class="body_one">
            <li><input type="checkbox"></li>
            <li><img src="../../assets/images/qq_03.png" alt=""></li>
            <li><h2>企业三</h2></li>
            <li><button>查看</button></li>
        </ul>
  </div>  
</template>
<script>
export default {
  data () {
    return {
      index:2.2
    }
},
methods:{
  getClick(){
    this.index+=0.1;
    //console.log(this.index)
    this.$emit("click",this.index)
  }
  }
}
</script>
<style scoped lang="less">
  #main{
    width:100%;
    height:100%;
    background:#fff;
    
  }
  #main .body_one{
    width:100%;
    display: flex;
    align-items: center;
    margin-left:6%;
    margin-top:3%;
  }
  #main ul{
    list-style: none;

  }
  #main ul li{
    margin-right:3%;
  }
  #main .body_one>li:nth-child(3){
    margin-right:62%;
  }
  
  #main .body_one>li:nth-child(4)>button{
    background: #1ebfaf;
    color:#fff;
    border:0;
    padding:2% 4%;
    border-radius: 4px;
    cursor: pointer;
  }
  #main .body_one>li:nth-child(1)>input{
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
</style>
