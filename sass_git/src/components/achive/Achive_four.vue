<template>
  <div id="main">
    <div class="header">
      
      <table border="0" cellspacing="0" cellpadding="0" id="tables">
        <tr>
          <th>姓名</th>
          <th>性别</th>
          <th>身份证</th>
          <th>社保状态</th>
          <th>所属基地</th>
          <th>操作</th>
        </tr>
        <tr v-for="item of list" :key=item.id>
          <td>{{item.username}}</td>
          <td>{{item.gender==1?'男':'女'}}</td>
          <td>{{item.idcard}}</td>
          <td>{{item.social_require==0?'未参保':'已参保'}}</td>
          <td>北京</td>
          <td>
            <button @click="getButton_one(item)" class="chose" :class='{bacground_two:item.default_checked }' >{{ item.default_checked==1 ? '取消选择' : '选择' }}</button>
          </td>
        </tr>
      </table>
    </div>
    <div class="footer">
        <button @click="awaiting" :class='{bacground_two:bac_await}'>{{bac_await==true?'提交':'已提交' }}</button>
        <button @click="down">协议下载</button>
        <button @click="fanHui">返回</button>
        <p class="bac_message">人员已保留待协议下载</p>
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
  ischeck:false,
  index:3.0,
  list:[],
  years:'',
  handicapped_ids:[],
  handicapped_id:'',
  lis:{},
  liss:[],
  bac_await:true,
  achive:'',
  }
},
methods:{
  getButton_one(item){
    item.default_checked = !item.default_checked
  },
  awaiting(e){
    //残疾人id数组传后台
    var  box = []
    this.list.forEach(val => {
      if(val.default_checked) {
        box.push(val.handicapped_id)
      }
      //console.log(11,box)
    })
    //console.log(101,box)
    //var years=this.years;
    //console.log(121,years)
    if(this.bac_await==true){
      var obj={handicapped_ids:box}
      this.$http.post(this.host+"order/add_employee",qs.stringify(obj)).then(result=>{
        if(result.data.errorcode==0){
          //控制按钮样式
          this.achive=0;
          this.getUrl();
          //e.target.innerHTML="以上残疾人信息已保留"
          //$(e.target).addClass('bacground_two')
          this.bac_await=false;
          $('.bac_message')[0].style.visibility='visible'
        }
        else{
          Toast("信息有误，请稍后提交")
        }
    })
  }
  },
  fanHui(){
    this.index=2.2;
    this.$emit("click",this.index)
  },
  down(){
     this.index=3.0;
     this.$emit("click",this.index)
     this.$emit("downBg")
  },
  getUrl(){
    var url=this.host+"handicapped/handicapped_list"
    this.$http.post(url,qs.stringify({status:1})).then(result=>{
     // console.log(1011,result)
      if(result.data.errorcode==0){
        if(this.achive!=1){
            this.bac_await=false;
            $('.bac_message')[0].style.visibility='visible'
          }
          else{
            this.bac_await=true;
            $('.bac_message')[0].style.visibility='hidden'
          }
        // 添加一个 isSelect 属性控制选择或者不选择
        result.data.data.list = result.data.data.list.map(function(value) {
          value.isSelect = true
          return value
        })
        this.list=result.data.data.list;
         //console.log(151,this.list)
         for (var i=0;i<this.list.length;i++){
           var lis=this.list[i];
           lis.chose="false"; 
           this.liss.push(lis);
         }
      }
      else if(result.data.errorcode==3000){
        this.$router.push('/')
      }
      else{
        Toast(result.data.msg)
      }
    })
  }
},
mounted(){
   var self=this;
  Bus.$on('myFuns',function(aa){
  //console.log(111,aa)
  self.years=aa;
})
//接收侄子的参数判断是否可提交
  Bus.$on("achive",function(cc){
  self.achive=cc;
  })
  Bus.$on("bother_awite",function(){
    self.getUrl()
  })
},
props:["require_id","order_id"]

}
</script>
<style scoped lang="less">
#main{
  width:100%;
  height:100%;
}
#main .header{
  margin-top:1.1%;
  height:78%;
  overflow: scroll;
}
#main .header>p{
  margin-left:3%;
  
}
#main .header table{
  width:90%;
  margin:1% auto;
  text-align: center;
}
#main .header table>tr:nth-child(2n){
  background:#faf3eb;
}
#main .header table>tr:not(:nth-child(1)){
  height:60px;
}
#main .header table>tr:nth-child(1){
  background:#ffab35;
}
#main .header table>tr:nth-child(1)>th{
  padding:0.6% 0;
  color:#fff;
}
#main .header table>tr{
  font-size: 16px;
  color:#666;
}

#main .header table td{
 border-left:1px solid #eaeaea;
 border-bottom:1px solid #eaeaea;
}
#main .header table td:nth-child(1){
 border-left:0;
}
#main .header table>tr>td:nth-child(1),#main .header table>tr>td:nth-child(2){
 width:15%;
}
#main .header table>tr>td:last-child{
 width:15%;
}
#main .header table>tr #chex{
display: block;
  width: 16px;
  height: 16px;
  cursor: pointer;
  top: 2px;
  margin:0 auto;
  background:#fff;
}
#main .header table>tr>td:last-child button{
 color:#fff;
 padding:2% 4%;
 border-radius: 4px;
 cursor: pointer;
 margin-right:6%;
}
#main .header table>tr>td:last-child button:nth-child(1),{
  background:#ccc;
  border:0;
}
#main .footer>button:nth-child(2),#main .footer>button:nth-child(3){
 background: #f09c22;
 border:0;
}
#main .footer>button:nth-child(1){
  border:0;
}
#main .footer{
 height:22%;
 width:100%;
 text-align: center;
 margin-top:2%;
}
#main .footer>button{
 color:#fff;
 padding:0.5% 2%;
 border-radius: 4px;
 cursor: pointer;
 font-size:16px;
 margin-right:3%;
}
.bacground_three{
 background: #ccc !important;
}
.bacground_two{
  background:#f09c22 !important;
}
:focus{outline:0;}
#main .footer>p{
  margin-top:1%;
  font-size: 16px;
  color:#666;
  visibility: hidden;
}
@media screen and (min-width:768px) and(max-width:992px){
  #main .header table{
  width:84%;
  margin:1% 1%;
} 
#main .header{
  height:72%;
  }
}
</style>
