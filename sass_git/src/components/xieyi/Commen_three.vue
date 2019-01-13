<template>
    <div id="main">
      <div class="container">
        <div class="header">
          <h2>服务合作协议之补充协议</h2>
        </div>
        <div class="header_one">
          <ul>
            <li>
              <ul>
                <li>甲    方：___________________(以下简称“甲方”）</li>
                <li>公司地址：___________________</li>
                <li>联 系 人：___________________</li>
                <li>联系电话：___________________</li>
              </ul>
            </li>
            <li> 
              <ul>
                  <li>乙      方 ： 如常（北京）科技有限公司 （以下简称“乙方”）</li>
                  <li>公司地址： 北京市海淀区上地三街9号金隅嘉华大厦D座802</li>
                  <li>联 系 人：_________________</li>
                  <li>联系电话：_________________</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="main">
          <h3>基于双方签订的《服务合作协议》，经过双方协商:</h3>
          <p>_____年_____月_____日至_____年_____月_____日，乙方向甲方推荐______名持有《中华人民共和国残疾人证》_______残疾人候选人，共计工作____ 个月。可满足甲方_______人按比例安置残疾人需求（北京市比例为1.7%）。</p>
        </div>
        <div class="main_two">
            <h3 class="title">一、 具体人员花名单见表1 </h3>
            <h5 class="title_two">表1  候选人花名单</h5>
            <table border="0" cellspacing="0" cellpadding="0">
              <tr>
                <th>姓名</th>
                <th>身份证号</th>
                <th>开始时间</th>
                <th>结束时间</th>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              
            </table>
            <h5 class="title_two">续表1：候选人花名单</h5>
            <p>备注：以上人员，乙方均附有中国残联官网验证信息，甲方可以自行到中国残联官网检查验证，网址：http://www.cdpf.org.cn/2dzcx/ 。</p>
        </div>
        <div class="main_three">
            <h3>二、管理服务费用及支付方式</h3>
            <ul>
              <li>1.甲方支付乙方管理服务费用共计人民币 ________元；大写：______________</li>
              <li>2.付款方式：甲方应在协议生效起5个工作日内支付乙方管理服务费,逾期需支付乙方服务费总金额千分之五的滞纳金；乙方应同期为甲方开具等额增值税发票；</li>
              <li>3.收款账户：甲方按照如下账户信息，在规定的时间内支付乙方管理服务费用。</li>
              <li><h4>户名：如常（北京）科技有限公司</h4></li>
              <li><h4>开户行：中国民生银行股份有限公司北京首体南路支行</h4></li>
              <li><h4>账号：699141716</h4></li>
              <li>【以下无正文，为签署页】</li>
             
            </ul>
        </div>
        <div class="header_one">
          <ul>
            <li>
              <ul>
                <li>甲方（盖章）</li>
                <li>法人或者授权代表签字：</li>
                <li>日 期：____年____月____日 </li>
              </ul>
            </li>
            <li> 
              <ul>
                  <li>乙方（盖章）</li>
                  <li>法人或者授权代表签字：</li>
                  <li>日 期：____年_____月____日</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer">
         <button @click="getDown" class="btn">下 载</button>
        <button @click="getIndex">返 回</button>
      </div>
  </div>  
</template>
<script>
  import qs from 'qs'
export default {
  data () {
    return {
      index:3.0,
      service_agreement:'',
      name:''
    }
},
methods:{
  getIndex(){
    this.index=3.0;
    this.$emit("click",this.index)
  },
  getDown(){
    var btn=document.querySelector("#main div.footer>.btn")
    //console.log(222,btn)
    let loadingInstance =this.Loading.service({spinnerType:'fading-circle',target:btn,});
    this.$nextTick(() => {
    var url=this.host+"agreement/download?name=supplement_agreement"
      this.$http.post(url).then(result=>{
      loadingInstance.close();
      let a = document.createElement('a');
      a.href = url;
      a.click()
    })
  })
  }
  }
}
</script>
<style scoped lang="less">
  #main{
    width:100%;
    height:100%;
    background:rgba(00, 00, 00, 0.3);
    padding-top:2%;
    margin-top:0.2%;
  }
  #main>.container{
    padding-top:0.5%;
    width:86%;
    height:76%;
    background:#fff;
    border-radius: 4px;
    margin:0 auto;
    text-align: start;
    overflow: scroll;
  }
  #main>.container .main_two{
    width:90%;
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
    font-size: 16px;
    color:#666;
  }
  :focus{outline:0;}
 table>tr>th{border:1px solid #ccc;padding:1%;}
 table>tr>td{border-bottom:1px solid #ccc;padding:2%;border-right:1px solid #ccc}
 table>tr>td:nth-child(1){border-left:1px solid #ccc}
 table{width:80%;margin-bottom: 1%;}
  #main>.container>h3{
    margin-left:9%;
    margin-top:4%;
  }
  #main>.container div{
    margin-top:1%;
    margin-left:10%;
  }
  #main>.container .header_one>ul{
    margin-top:1%;
    display: flex;
    justify-content: space-around;
    width:100%;
    height:30%;
  }
  #main>.container .header_one>ul>li{
    margin-right:10%;
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
  #main .footer{
    text-align: center;
    margin-top:2%;
  }
  #main .header_one li,#main .main p,#main .main_two,#main .main_three li{
    margin-top:1.5%;
    width:90%;
  }
  #main .main_two>.title{
    margin-bottom:2%;
  }
  #main .main_two>.title_two{
    margin-left:35%;
    font-size: 16px;
    margin-bottom:1%;
  }
  /*加载*/
  button.btn /deep/.el-loading-mask{
    background-color:rgba(255,255,255,0) !important;
  } 
  .el-loading-spinner .circular{
    width:18px;
    height:18px;
  }
  button.btn /deep/ .el-loading-spinner .circular{
    width:18px;
    height:18px;
    padding:14px;
    top:2%;
    margin-left:68px;
  }
  button.btn /deep/ .el-loading-spinner .path{
    stroke:#fff;
  }
  @media screen and (min-width:1201px)and(max-width:1440px){
    #main>.container>.header h2{font-size: 18px}
    #main li{font-size: 14px;}
    #main .main>h3{font-size: 16px;}
    #main .main>p{font-size: 14px;color:#666;}
    #main .main_two>.title{font-size: 16px;}
    #main .main_two>.title_two{font-size: 14px;}
    #main table>tr>th{font-size: 14px;}
    #main .main_two p{font-size: 14px;}
    #main .main_three>h3{font-size: 16px;margin-top:2%}
    }
  @media screen and (min-width:768px)and(max-width:1200px){
    #main>.container>.header h2{font-size: 18px}
    #main li{font-size: 14px;}
    #main .main>h3{font-size: 16px;}
    #main .main>p{font-size: 14px;color:#666;}
    #main .main_two>.title{font-size: 16px;}
    #main .main_two>.title_two{font-size: 14px;}
    #main table>tr>th{font-size: 14px;}
    #main .main_two p{font-size: 14px;}
    #main .main_three>h3{font-size: 16px;margin-top:2%}
    #main>.container{
    width:85%;
    height:72%;
    margin:0 1%;
  }
  #main .footer button:nth-child(1),#main .footer button:nth-child(2){width:10%;}
    }
</style>
