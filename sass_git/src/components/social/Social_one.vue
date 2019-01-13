<template>
  <div id="main">
    <div class="header">
      <table border="0" cellspacing="0" cellpadding="0" v-show="table_shuju">
        <tr>
          <th><input type="checkbox" id="chex" @click="clickChex" v-model="checked"></th>
          <th>残疾人Id</th>
          <th>姓名</th>
          <th>性别</th>
          <th>年龄</th>
          <th>等级</th>
          <th>类型</th>
          <th>地区</th>
          <th>银行卡种</th>
          <th>渠道</th>
          <th>标记名称</th>
          <th>状态</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item,index) of list" :key='item.id'  id="list_">
          <td><input type="checkbox" class="chex" v-model="checkboxList[index]" :value="item.id" @change='updateChecked' ></td>
          <td>{{item.handicapped_info.handicapped_id}}</td>
          <td>{{item.handicapped_info.username}}</td>
          <td>{{item.handicapped_info.gender==1?'女':'男'}}</td>
          <td>{{item.handicapped_info.age}}</td>
          <td>{{item.handicapped_info.handicapped_level_name}}</td>
          <td>{{item.handicapped_info.handicapped_type_name}}</td>
          <td>{{item.handicapped_info.province_name  }}</td>
          <td>{{item.handicapped_info.bankcard_type}}</td>
          <td>{{item.handicapped_info.channel_username}}</td>
          <td>{{item.handicapped_info.sort_flag}}</td>
          <td>{{item.handicapped_info.status_name}}</td>
          <td>
            <div>
              <button @click="getButton(index,true)" class="salary_sure" :class='{bacground: item.salary_status ===1} '  >{{item.salary_status==0?'工资确认':'工资已确认'}}</button>
              <button @click="getButton(index,false)" class="social_sure" :class='{bacground: item.salary_status ===1} ' >{{item.social_status==0?'社保确认':'社保已确认'}}</button>
            </div>
        </td>
        </tr>
      </table>
    </div>
    <div class="footer" v-show="table_shuju">
        <button @click="allButton(true)">工资确认</button>
        <button @click="allButton(false)">社保确认</button>
    </div>
    <div class="up" v-if="isShow">
        <div> 
          <h3>提 示</h3>
          <p >{{isGz ? '北京市 当前最低工资为:1620.92元' : '北京市 当前最低社保为:1620.92元'}}</p>
        </div>
        <button @click="getSure">确 认</button>
        <button @click="outSure">取 消</button>
    </div>
    <div class="nothing" v-show="noth">
      <img src="../../assets/images/nothing.png" alt="">
      <p>此处暂无任何数据哦~</p>
    </div>
</div>  
</template>
<script>
import {Toast} from "mint-ui"
export default {
data () {
  return {
  noth:false,
  index:6.0,
  checked:false,
  checkboxList:[],
  list:[ ] ,
  isShow:false,
  title:"工资确认",
  ids:'',
  sec_id:'',
  keyId:[],
  table_shuju:false,
  isGz: true,  // 是否是工资
}
},
methods:{
  updateChecked () {
    var step = true
    this.checkboxList.length = this.list.length
    for(var i = 0; i < this.checkboxList.length;i++) {
      //console.log(this.checkboxList[i])
      if (this.checkboxList[i] !== true) {
        step = false
        //console.log(step)
      }
    }
    this.checked = step
  },
  getUrl(i){
    var url=this.host+"order/employe_visit_list"
    this.$http.post(url).then(result=>{
       //console.log(101,result)
      if(result.data.errorcode==0&&result.data.data.list.length>0){
        this.table_shuju=true;
        // var lists=result.data.data.list;
        //console.log(221,lists)
        // for(var i=0;i<lists.length;i++){ 
        // }
        //console.log(lists)
        this.list=result.data.data.list;  
      }
      else if(result.data.errorcode==3000){
          this.$router.push('/')
        }
      else{
        this.noth=true;
        //console.log(123)
      }
    })
  },
  clickChex(){
    this.checked = !this.checked
    this.checkboxList.length = this.list.length
    for(var i = 0; i < this.checkboxList.length;i++) {
      if (this.checked) {
        this.checkboxList[i] = true
      } else {
        this.checkboxList[i] = false
      }
    }
  },
  getButton(index, step){
     //阻止弹框
    if (step) {
      if ( this.list[index].social_status) {
        return
      }
    } else {
       if ( this.list[index].salary_status) {
        return
      }
    }
    this.isGz = step
    this.isShow = true; 
    this.currentIndex = index
  //   if(e.target.innerHTML=="工资确认"){
  //   this.sec_id=e.target.getAttribute("data-id");
  //   this.keyId[0]=1;
  //   this.keyId[1]=0;
  //   e.target.innerHTML="工资已确认"
  //   $(e.target).addClass("bacground");
  //   this.isShow=true;  
  // }
  // else{
  //   this.isShow=false; 
  // }
  },
  getSure(){
    var self=this;
    self.isShow=false;
    var sec_id=self.list[self.currentIndex].sec_id;
    var objTwo = {}
    var obj = {
      'sec_ids': objTwo
    }
    if (self.isGz) {
      // objTwo[sec_id] = [0,0]
     objTwo[sec_id] = [1,self.list[self.currentIndex].social_status]
    } else {
      //objTwo[sec_id] = [0,0]
      objTwo[sec_id] = [self.list[self.currentIndex].salary_status,1]
    }
    this.$http.post(this.host+"order/do_employe_visit",obj).then(result=>{
      this.getUrl()
      //console.log(101,result)
      if(result.data.errorcode==0){
        self.ids=1
    }
    else if(result.data.errorcode==3000){
          this.$router.push('/')
        }
    else{
      Toast("信息有误")
    }
  })
  },
  outSure(){
    this.isShow=false;
  },
  allButton(step){
      // 存放id的数组
        var obj={"sec_ids": {}}
        this.checkboxList.forEach((val,item) => {
          if (val === true) {
            if (step) {
              obj['sec_ids'][this.list[item].sec_id] = [1,this.list[item].social_status]
            } else {
              obj['sec_ids'][this.list[item].sec_id]= [this.list[item].salary_status,1]
            }
          }
        })
        this.$http.post(this.host+"order/do_employe_visit",obj).then(result=>{
          //console.log(1202,result)
          this.getUrl()
        })
  },
 
 },
  created(){
    this.getUrl();
  },
}
</script>
<style scoped lang="less">
#main{
  width:100%;
  height:100%;
  margin-top:0.15%;
}
#main .header{
  height:78%;
  overflow: scroll;
}
#main .nothing{
  position: absolute;
  top:0%;
  left:0%;
  width:100%;
  height:100%;
  background: #fff;
  text-align: center;
  
}
#main .nothing>img{
  margin-top:160px;
  width:320px;
}
#main .nothing>p{
  color:#999;
}
#main .header table{
  width:90%;
  margin:2% auto;
  text-align: center;
}
#main .header table>tr:nth-child(2n){
  background:#faf3eb;
}
#main .header table>tr:not(:nth-child(1)){
  height:60px;
}
#main .header table>tr:nth-child(1){
  background:#ffb443;
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
#main .header table>tr>td:nth-child(1){
  width:3%;
}
#main .header table>tr>td:nth-child(2),#main .header table>tr>td:nth-child(3),#main .header table>tr>td:nth-child(4),#main .header table>tr>td:nth-child(5),#main .header table>tr>td:nth-child(6),#main .header table>tr>td:nth-child(7)
,#main .header table>tr>td:nth-child(10),#main .header table>tr>td:nth-child(11),#main .header table>tr>td:nth-child(12)
{
 width:6%;
}
#main .header table>tr>td:nth-child(8){
 width:6%;
 }
 #main .header table>tr>td:nth-child(9){
  width:20%; 
 }
#main .header table>tr>td:last-child{
  width:22%;
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
#main .header table>tr>td:last-child button:nth-child(1),#main .footer>button:nth-child(1){
  background:#1ebfaf;
  border:0;
  
}
#main .header table>tr>td:last-child button:nth-child(2),#main .footer>button:nth-child(2){
  background: #f09c22;
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
.bacground{
  background: #e5e5e5 !important;
  color:#666 !important;
}
#main .up{
 width:100%;
 height:100%;
 background: rgba(0, 0, 0, 0.4);
 position: absolute;
 top:0;
 left:0;
 margin-top:0.2%;
}
#main .up>div{
 position: absolute;
 top:34%;
 left:38%;
 width:20%;
 height:14%;
 border-radius: 4px;
 background: #fff;
 text-align: center;
 padding-top:1.6%;
 color:#666;
}
#main .up>div>h3{
 width:90%;
 color:#333;
 margin-left:5%;
 padding-bottom:3%;
 border-bottom:1px solid #ccc;
 margin-bottom:6%;  
}
#main .up>button:nth-child(2){
 font-size: 16px;
 color:#fff;
 background: #f09c22;
 width:6%;
 height:4%;
 border:0;
 border-radius: 4px;
 position: absolute;
 top:55%;
 left:41%;
 cursor: pointer;
}
#main .up>button:nth-child(3){
font-size: 16px;
 color:#fff;
 background: #1ebfaf;
 width:6%;
 height:4%;
 border:0;
 border-radius: 4px;
 position: absolute;
 top:55%;
 left:49%;
 cursor: pointer;
}
:focus{outline:0;}
@media screen and (min-width:1201px)and(max-width:1440px){
  #main .header table>tr>td:last-child button{
    margin-bottom:1.5%;
  }
}
@media screen and (min-width:992px)and(max-width:1200px){
  #main .header table>tr>td:last-child button{
    margin-bottom:1.5%;
  }
}
@media screen and (min-width:768px)and(max-width:991px){
  #main .header table>tr>th{font-size: 14px;}
  #main .header table>tr>td{font-size: 10px}
  #main div:nth-child(2).footer>button{font-size: 14px;}
  #main .header table>tr>td:last-child>div>button{font-size: 8px;}
  #main .header table>tr>td:last-child button{
    margin-bottom:1.5%;
  }
}
</style>
