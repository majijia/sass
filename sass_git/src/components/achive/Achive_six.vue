<template>
    <div id="main">
      <div class="container">
        <div class="header">
          <h2>{{list.company_name}}按比例安置残疾人就业解决残保金征缴定制方案</h2>
        </div>
        <div class="main_two">
            <h3>两年期就业执行方案</h3>
            <ul>
              <li>应缴金额：<span>{{list.pay_residual_premium}}元</span></li>
              <li>安置期限：<span>{{date.start[0]}}</span>年<span>{{date.start[1]}}</span> 月 <span>{{date.start[2]}} </span>日 至<span>{{date.end[0]}}</span>年 <span>{{date.end[1]}}</span> 月 <span>{{date.end[2]}} </span>日</li>
              <li>安置人员：<span>{{list.beijing_counts}}</span> 名 京籍 ，<span>{{list.un_beijing_counts}}</span> 名 非京籍 ，共计安置 <span>{{list.beijing_months+list.un_beijing_months}}</span> 个月</li>
              <li>支出成本：<span>{{list.total_fee}}</span>元 , 工资：<span>{{list.salary}}</span>,社保：<span>{{list.social}}</span> ,服务费：<span>{{list.service}}</span></li>
              <li>补贴申请：<span>{{list.total_subsidy}}</span>元  岗位补贴：<span>{{list.job_subsidy}}</span> 元, 社保补贴：<span>{{list.social_subsidy}}</span> 元</li>
              <li>节省金额：<span>{{list.save_residual_premium}}</span>元</li>
              <li>节省比例：<span>{{list.save_residual_percent}}%</span></li>
            </ul>
        </div>
        <div class="main_three">
            <h3>其他优惠政策</h3>
            <ul>
                <li>增值税优惠 ：招用残疾人的用人单位，符合政策规定的，可享受增值税即征即退优惠。招用的每位残疾人每月可退还的增值税具体限额，按当年本市月最低工资标准的4倍确定。</li>
                <li>所得税优惠 ：安置残疾人的企业，在计算企业所得税应纳税所得额时，可按规定对残疾人职工工资执行100%加计扣除。</li>
            </ul>
        </div>
      </div>
      <div class="footer">
        <button @click="down" ref="loading">下 载</button>
        <button @click="getIndex">保 存</button>
        <button @click="outIndec">关 闭</button>
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
      index:2.1,
      list:{},
      list_three:[],
      province_id:'',
      city_id:'',
      employee_counts:'',
      salary:'',
      handicapped_counts:'',
      msg:[],
      date:{},
      years:2,
    }
  },
  methods:{
    outIndec(){
      this.index=2.2;
      this.$emit("click",this.index)
    },
     getIndex(){
      //兄弟间传参---保存中
      //Bus.$emit("myFuns",this.years)
      this.$http.post(this.host+"order/add_order",qs.stringify({years:this.years})).then(result=>{
        //console.log(1,result)
        if(result.data.errorcode==0){
          Bus.$emit("bother_awite")
          this.index=2.3000000000000003;
          this.$emit("click",this.index)
        }
        else if(result.data.errorcode==3000){
          this.$router.push('/')
        }
        else{
          Toast("信息有误")
        }
      }) 
      
    },
    getUrl(){ 
        //console.log(this.list_three)
        var obj={company_name:this.msg[5],province_id:this.msg[0],city_id:this.msg[1],employee_counts:this.msg[2],salary:this.msg[3],handicapped_counts:this.msg[4],is_beijing:this.msg[6]}
        this.$http.post(this.host+"scheme/generate_scheme",qs.stringify(obj)).then(result=>{
          //console.log(2201,result)
          //console.log(222,result.data.data.list[2])
          if(result.data.errorcode==0){
            this.list=result.data.data.list[2];  
            this.date=result.data.data.list[2].arrange_date;
            
            //console.log(111,this.date)
          }
          else if(result.data.errorcode==3000){
          this.$router.push('/')
        }
        else{
          Toast("信息有误")
        }
        })
      
    },
    down(){
      var btn=this.$refs.loading
      //console.log(222,btn)
      let loadingInstance =this.Loading.service({spinnerType:'fading-circle',target:btn});
      this.$nextTick(() => {
      var url=this.host+"scheme/download_scheme"
      // console.log(110,this.years)
      this.$http.post(url,qs.stringify({years:this.years})).then(result=>{
        loadingInstance.close(); 
        var blob = new Blob([result.data], {type: "application/msword"});  
		                var objectUrl = URL.createObjectURL(blob);  
		                var a = document.createElement('a');  
		                document.body.appendChild(a);  
		                a.setAttribute('style', 'display:none');  
		                a.setAttribute('href', objectUrl);  
		                var filename="2年期方案.doc";  
		                a.setAttribute('download', filename);  
		                a.click();  
                   URL.revokeObjectURL(objectUrl);
      })
    })
  }
  },
  mounted(){
    var self=this;
    Bus.$on('myFun',function(aa){
      self.msg=aa;
      self.getUrl();
    //console.log(202,self.msg)
  })
  }
}
</script>
<style scoped lang="less">
  #main{
    width:100%;
    height:100%;
    background:#fff;
    padding-top:2%;
  }
  #main>.container{
    padding-top:0.5%;
    width:94%;
    height:76%;
    background:#fff;
    border-radius: 4px;
    margin:0 auto;
    text-align: start;
    overflow: scroll;
  }
  #main>.container>.header{
    text-align: center;
  }
  #main>.container>.header>h2{
    border-bottom:1px solid #f09b22;
    padding-bottom:1%;
    width:94%;
  }
  #main>.container ul{
    list-style: none;
    margin-top:0.6%;
    font-size: 14px;
    color:#666;
    
  }
  #main>.container div{
    margin-top:0.8%;
    margin-left:1%;
  }
  #main>.container .header_one>ul{
    margin-top:1%;
    display: flex;
    justify-content: space-around;
    width:100%;
    height:30%;
  }
  #main>.container .header_one>ul>li{
    margin-right:18%;
    
  }
  #main>.container .header_one>ul>li>ul{
    text-align: start;
  }
  #main .footer button:nth-child(1){
    width:8%;
    background:#f09b22;
    padding:12px 6px 12px 6px;
    color:#fff;
    border:0;
    border-radius: 4px; 
    font-size:16px; 
    cursor: pointer; 
  }
  #main .footer button:nth-child(2){
    width:8%;
    background:#f09b22;
    padding:12px 6px 12px 6px;
    color:#fff;
    border:0;
    border-radius: 4px; 
    font-size:16px;
    margin-left:4%;
    cursor: pointer; 
  }
   #main .footer button:nth-child(3){
      width:8%;
    background:#f09b22;
    padding:12px 6px 12px 6px;
    color:#fff;
    border:0;
    border-radius: 4px; 
    font-size:16px;
    margin-left:4%;
    cursor: pointer; 
   }
  #main .footer{
    text-align: center;
    margin-top:2%;
  }
  #main .header_one li,#main .main p,#main .main_two li,#main .main_three li{
    margin-top:1%;
    width:90%;
    
  }
  #main .img_right{
      position: absolute;
      top:50%;
      left:94%;
  }
  #main .main_two,#main .main_three,#main .main_one{
      border-bottom:1px dashed #ddd;
      padding-bottom:1.4%;
      padding-left:2%;
  }
  #main .container .main_two li,#main .container .main_three li{
    font-size: 18px;
  }
  #main .container h3{
    border-left:4px solid #f09b22;
    padding-left:0.4%;
    width:94%;
    margin-top:1.4%;
    margin-bottom:1.4%;
  }
  #main span{
    font-size: 20px;
    color:#333333;
    margin:0 1%;
  }
    /*加载*/
    button /deep/.el-loading-mask{
    background-color:rgba(255,255,255,0) !important;
  } 
  .el-loading-spinner .circular{
    width:18px;
    height:18px;
  }
  button /deep/ .el-loading-spinner .circular{
    width:18px;
    height:18px;
    padding:14px;
    top:2%;
    margin-left:68px;
  }
  button /deep/ .el-loading-spinner .path{
    stroke:#fff;
  }
  :focus{outline:0;}
  @media screen and (min-width:768px) and(max-width:992px){
    #main>.container>.header>h2{
     font-size: 18px;
    }
    #main .container h3{
      font-size: 16px;
      margin-top:20px;
    }
   #main .main_two ul>li,#main .main_three ul>li{
      font-size:14px !important;
    }
    #main{
      width:95%;
    }
    #main .footer button:nth-child(3),#main .footer button:nth-child(2),#main .footer button:nth-child(1){
      width:10%;
    }
    #main>.container{
      height:64%;
    }
  }
</style>
