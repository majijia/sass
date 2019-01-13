<template>
  <div id="main">
    <div class="container">
      <div class="header">
        <h2>资料准备说明</h2>
      </div>
      <div class="header_one">
        <ul>
          <li>
            <ul>
              <li>甲    方：  （以下简称“甲方”）</li>
              <li>公司地址：</li>
              <li>联 系 人：</li>
              <li>联系电话：</li>
            </ul>
          </li>
          <li> 
            <ul>
                <li>乙      方 ：  如常（北京）科技有限公司          （以下简称“乙方”）</li>
                <li>公司地址： 北京市海淀区上地三街9号金隅嘉华大厦D座802</li>
                <li>联 系 人：</li>
                <li>联系电话：</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="main">
        <h4>一、合作内容</h4>
        <p>甲方委托乙方招聘、培训、管理残疾人员工；乙方根据甲方要求，按期按需完成所有工作。</p>
      </div>
      <div class="main_two">
          <h4>二、甲方权利及义务</h4>
          <ul>
            <li>1.	甲方有权根据岗位需求向乙方提出招聘需求；</li>
            <li>2.	甲方有权对乙方提供的候选人名单进行筛选，并最终确认是否录用；</li>
            <li>3.	甲方有权监督并考核乙方的残疾人管理过程；</li>
            <li>4.	甲方对乙方一切受托行为有充分知情权；</li>
            <li>5.	甲方应向乙方提出明确的招聘需求，包括但不限于残疾人等级、类型及工作技能等；</li>
            <li>6.	甲方应与残疾人员工签订一年期及以上的劳动合同；</li>
            <li>7.	甲方应按期为残疾人员工发放薪资（工资卡实际到款：不得低于甲方注册地最低工资标准），并为残疾人员工足额缴纳社会保险，包括养老保
              险、医疗保险、失业保险、生育保险以及工伤保险；</li>
            <li>8.	甲方应充分配合乙方完成残疾人员工管理工作；</li>
            <li>9.	甲方不得无故解聘残疾人员工，如有人员调整需同乙方协商处理；</li>
            <li>10.	如甲方合作信息变更，包括不限于公司名称、注册地址、对接人及联系方式、社保缴纳方式、工资发放方式等，请及时告知乙方。因甲方变更未告知已方导致甲方未能通过残疾人按比例就业审核申报，甲方承担全部责任；</li>
            <li>11.	如因甲方未能履行本协议《甲方权利及义务》中第6、7条款、或因甲方其他原因导致甲方未能通过残疾人按比例就业审核申报，甲方应足额支付乙方管理服务费用。</li>
          </ul>
      </div>
      <div class="main_three">
          <h4>三、乙方权利及义务</h4>
          <ul>
            <li>1.	乙方有权要求甲方提供明确的残疾人招聘需求及管理标准；</li>
            <li>2.	乙方有权要求甲方按本协议约定足额支付管理服务费用；</li>
            <li>3.	乙方有义务向甲方提供符合甲方招聘需求的候选人名单；</li>
            <li>4.	乙方应根据甲方需求和管理标准对甲方残疾人员工进行培训和在岗管理；</li>
            <li>5.	如因残疾人员工未能达到甲方在岗要求，乙方应负责残疾人候选人的再次推荐，并协助  甲方办理离职残疾人员工的全部手续；</li>
            <li>6.	如因残疾人员工自身过失导致的甲方损失，乙方承担全部责任；</li>
            <li>7.	乙方负责甲方残疾人按比例就业审核申报的全部事宜；</li>
            <li>8.	如因乙方原因及残疾人员工原因造成甲方残疾人按比例就业审核申报未能通过，乙方承担全部责任。</li>
          </ul>
      </div>
    </div>
    <div class="footer">
           <button @click="down_message" class="up" >下 载</button>
          <el-upload
              :show-file-list='false' :on-success="file_success"  :before-upload="upload"
              accept='zip'
              action="http://123.57.56.167:8010/api/audit/upload">
              <p ref="loading">上传资料</p>
          </el-upload>
          <button class="down" @click="status">查看状态</button>
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
    index:3.0,
    audit_statu:'',
    //上传资料
    // dialogImageUrl: '',
    // dialogVisible: false
    file_:'',
    file_old:'',
    audit_name:'',
  }
},
methods:{
//上传前的方法
upload(file){
  var btn=this.$refs.loading
  // 复制给this变量 别的地方也可以用
  this.loadingInstance =this.Loading.service({spinnerType:'fading-circle',target:btn});
},
//上传成功的方法
file_success(result){
  // 上传成功关闭
  this.loadingInstance.close()
  if(result.errorcode==0){
    Toast("上传文件成功")
    //this.getUrl()
  }
  else if(result.errorcode==3000){
    this.$router.push('/')
  }
  else{
    Toast("上传文件失败,请重新上传zip文件")
  }
},
getUrl(){
  this.$http.post(this.host+"audit/saas_order_detail").then(result=>{
    if(result.data.errorcode==0){
      this.audit_statu=result.data.data.order_detail.audit_status
      //文件名
      this.audit_name=result.data.data.order_detail.audit_name
      localStorage.setItem("audit_name",this.audit_name) 
    }
    else if(result.data.errorcode==3000){
        this.$router.push('/')
      }
    else{
        Toast("信息有误")
      }
  })
},
//查看状态
status(){
  if(localStorage.getItem("audit_name")){
    /*触发兄弟组件的方法*/
    Bus.$emit("borther_methods")
    this.index=7.1;
    this.$emit("click",this.index)
}
else{
  Toast("请先上传资料(zip格式)")
}
 },
 down_up(){
   var url=this.host+"audit/download_modify"
   this.$http.post(url).then(result=>{
     let a = document.createElement('a');
    a.href = url;
    a.click()
   })
 },
down_message(){
  var btn=document.querySelector("#main .footer .up")
  let loadingInstance =this.Loading.service({spinnerType:'fading-circle',target:btn,});
  this.$nextTick(() => {
  var url=this.host+"audit/download"
  this.$http.post(url).then(result=>{
  loadingInstance.close();
  let a = document.createElement('a');
  a.href = url;
  a.click()
   })
  })
 }

},
created(){
  this.getUrl();
 }
}
</script>
<style scoped lang="less">
#main{
  width:100%;
  height:100%;
  margin-top:0.15%;
}
#main>.container{
  padding-top:0.5%;
  width:90%;
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
  width:130px;
  background:#f09b22;
  color:#fff;
  border:0;
  border-radius: 4px; 
  font-size:14px; 
  cursor: pointer; 
  margin-right:4%;
  padding-top:12px;
  padding-bottom:14px; 
}
#main .footer{
  width:70%;
  overflow: none;
  position: absolute;
  top:76%;
  left:33%;
  text-align: center;
  margin-top:3%;
  display: flex;
  
}
#main .footer p{
 /* width:50%; */
  background:#f09b22;
  /* padding:14% 28% 14% 28%; */
  width:130px;
  padding-top:16px;
  padding-bottom:16px;
  color:#fff;
  border:0;
  border-radius: 4px; 
  font-size:14px;
  cursor: pointer; 
}
#main .footer button.down{
  background:#f09b22;
  /* padding:4px 20px 4px 20px; */
  width:130px;
  color:#fff;
  border:0;
  border-radius: 4px; 
  cursor: pointer;
  margin-left:4%;
}

#main .header_one li,#main .main p,#main .main_two li,#main .main_three li{
  margin-top:0.5%;
  width:90%;
}
/**文件下载*/

#main .el-upload-list{
  display: none;
}
.el-upload-list{
  display: flex;
}
.el-upload{
  width:54%;
}
.el-upload-list__item{
  display: none;
}
/*加载*/
p /deep/.el-loading-mask,button /deep/.el-loading-mask{
  background-color:rgba(255,255,255,0) !important;
} 
.el-loading-spinner .circular{
  width:10px;
  height:10px;
}
p /deep/ .el-loading-spinner .circular,button /deep/ .el-loading-spinner .circular{
  width:18px;
  height:18px;
  padding:14px;
  top:2%;
  margin-left:80px;
}
p /deep/ .el-loading-spinner .path,button /deep/ .el-loading-spinner .path{
  stroke:#fff;
}
:focus{outline:0;}
@media screen and (min-width:1200px)and(max-width:1440px){
  #main .footer{
    left:30%;
  }
}
@media screen and (min-width:992px)and(max-width:1199px){
  #main .footer{
    left:25%;
  }
}
@media screen and (min-width:768px)and(max-width:991px){
  #main>.container>.header>h2{font-size: 18px;}
  #main>.container ul,#main .main>p{font-size: 14px;}
  #main .main>p{margin:2% 0;color:#666;}
  #main>.container ul>li{margin-bottom:2%;}
  #main>.container h4{font-size: 16px;}
  #main>.footer button{font-size: 14px !important;width:20%!important}
  #main .footer{
    left:18%;
  }
} 
#btn_file{
display:none;
}
</style>
