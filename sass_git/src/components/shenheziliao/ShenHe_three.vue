<template>
    <div id="main">
      <div class="container">
        <div class="header">
          <h2>资料说明</h2>
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
        <a href="../../../static/one.docx"><button>下 载</button></a>
        <button type="file" @click="add">上传成功</button>
        <a href="../../../static/one.docx"><button class="down">下载上传资料</button></a>
      </div>
      <div class="footer_message">
        <ul>
          <li><img src="../../assets/images/shenhe_03.png" alt=""></li>
          <li>未收到资料</li>
        </ul>
        <ul>
          <li><img src="../../assets/images/shenhe_two_06.png" alt=""></li>
          <li>需要补充资料</li>
        </ul>
      </div>
  </div>  
</template>
<script>
export default {
  data () {
    return {
      index:3.0
    }
},
methods:{
  getIndex(){
    this.index=3.0;
    this.$emit("click",this.index)
  },
  add(){
     this.index=7.1;
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
    margin-left:5%;
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
    width:10%;
    background:#f09b22;
    padding:12px 6px 12px 6px;
    color:#fff;
    border:0;
    border-radius: 4px; 
    font-size:16px; 
    cursor: pointer; 
  }
  #main .footer button:nth-child(2){
    width:10%;
    background:#1ebfae;
    padding:12px 6px 12px 6px;
    color:#fff;
    border:0;
    border-radius: 4px; 
    font-size:16px;
    margin-left:4%;
    margin-right:4%;
    cursor: pointer; 
  }
  #main .footer button.down{
    background:#51bff0;
  }
  #main .footer{
    text-align: center;
    margin-top:1%;
  }
  #main .header_one li,#main .main p,#main .main_two li,#main .main_three li{
    margin-top:0.5%;
    width:90%;
  }
  #main ul{
    list-style: none;
  }
  #main .footer_message{
    text-align: center;
  }
  #main .footer_message>ul{
    display: flex;
    justify-content: center;
    margin-top:0.4%;
  }
  #main .footer_message>ul:nth-child(2)>li:nth-child(2){
    margin-left:0.6%;
    color:red;
  }
  #main .footer_message>ul:nth-child(1)>li:nth-child(2){
    color:red;
    margin-left:0.6%;
  }
  :focus{outline:0;}
  @media screen and (min-width:768px)and(max-width:991px){
    #main>.container>.header>h2{font-size: 18px;}
    #main>.container ul,#main .main>p{font-size: 14px;}
    #main .main>p{margin:2% 0;color:#666;}
    #main>.container ul>li{margin-bottom:2%;}
    #main>.container h4{font-size: 16px;}
    #main>.footer button{font-size: 14px !important;width:20%!important}
}
</style>
