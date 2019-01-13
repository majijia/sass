<template>
    <div id="main">
      <div class="container">
        <div class="header">
          <h2>残疾人就业扶持担保协议</h2>
        </div>
        <div class="header_one">
          <ul>
            <li>
              <ul>
                <li>甲方：如常（北京）科技有限公司</li>
              </ul>
            </li>
            <li> 
              <ul>
                  <li>乙方（残疾人本人及其监护人）：___________</li>
              </ul>
            </li>
          </ul>
        </div>
        <p class="p">为保障残疾人顺利实现就业，维护残疾人合法权益，经甲乙双方协商一致，拟定如下协议，以资双方共同遵守：</p>
        <div class="main">
          <h3>一、合作内容</h3>
          <p>甲方联合第三方用人单位为乙方监护范围内的残疾人提供工作岗位，乙方负责确保被监护人的人生安全，并确保能够承担其他需要确认的法律责任。</p>
        </div>
       
        <div class="main_three">
            <h3>二、甲方权利与义务</h3>
            <ul>
              <li>1、甲方联合第三方用人单位为乙方监护的残疾人提供就业岗位；</li>
              <li>2、甲方负责监督用人单位与残疾人签订符合相关法律的劳动合同；</li>
              <li>3、甲方负责监督用人单位按时为残疾人发放薪资（不得低于北京市最低薪资标准）；</li>
              <li>4、甲方负责监督用人单位为残疾人缴纳社会保险（医疗保险、养老保险、失业保险、工伤保险、生育保险）；</li>
              <li>5、甲方为乙方监护的残疾人提供职业培训及其他活动。</li>
            </ul>
        </div>
        <div class="main_three">
            <h3>三、乙方权利与义务：</h3>
            <ul>
              <li>1、乙方应向甲方提供与被监护人关系的相关证明；</li>
              <li>2、乙方应向甲方提供真实的被监护人个人信息，信息内容包括但不限于姓名、性别、年龄、残疾证、残疾类别、级别、身体健康状况及有效身份证件；</li>
              <li>3、乙方同意甲方为其所监护的残疾人提供就业扶持帮助；</li>
              <li>4、乙方确保被监护人无其他隐瞒病情；</li>
              <li>6、乙方需积极配合甲方进行残疾人就业安排管理及其他事宜。</li>
            </ul>
        </div>
        <div class="main_three">
            <h3>四、保密义务：</h3>
            <ul>
              <li>本协议为保密协议，甲乙双方对本协议的内容均负有保密的义务。</li> 
            </ul>
        </div>
        <div class="main_three">
            <h3>五、不可抗力：</h3>
            <ul>
              <li>由于地震、台风、洪水、火灾、战争、罢工、政府禁令以及其他不能预见并且对其发生和后果不能防止或避免的不可抗力，致使影响协议有关条款的履行，双方应按照本协议的部分义务履行，或者延期履行本协议。</li>
            </ul>
        </div>
        <div class="main_three">
            <h3>六、违约责任：</h3>
            <ul>
              <li>任何一方未履行本协议义务或者履行本协议义务不符合约定的，应立即继续履行其义务，在双方协定周期内必须完成该项义务，否则，守约方有权解除本协议，违约方应承担相应的违约责任。</li>
            </ul>
        </div>
        <div class="main_three">
            <h3>七、协议生效及其他：</h3>
            <ul>
              <li>1、本协议一式贰份，贰份文本具有同等效力，甲、乙双方各持壹份。</li>
              <li>2、本协议执行过程中，所有附件和补充协议等一经甲、乙双方签字并加盖骑缝章即成为协议的有效组成部分，与本协议具有同等法律效力。</li>
              <li>3、本协议有效期自甲乙双方签字盖章之日起，经双方书面同意，本协议可以延长至双方商定的其他任何期限。</li>
              <li>4、甲乙双方在合作中出现问题或者纠纷后，双方协商解决，若不能协商一致，均可向甲方住所地有管辖权的法院起诉。</li>
            </ul>
        </div>
        <div class="main_three">
            <h3>八、协议期限</h3>
            <ul>
              <li>自________年______月_______日 始 至 ________年_______月______日止， 共______年。</li>
              <li>（以下无正文）</li>
            </ul>
        </div>
        <table>
            <tr>
              <td>甲方:</td>
              <td></td>
              <td>乙方:</td>
              <td></td>
            </tr>
            <tr>
              <td>（签章）</td>
              <td></td>
              <td>（签章）</td>
              <td></td>
            </tr>
            <tr>
              <td>日期：</td>
              <td></td>
              <td>日期：</td>
              <td></td>
            </tr>
          </table>
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
    }
},
methods:{
  getIndex(){
    this.index=3.0;
    this.$emit("click",this.index)
  },
  getDown(){
    var btn=document.querySelector("#main div.footer>.btn")
    // console.log(222,btn)
    let loadingInstance =this.Loading.service({spinnerType:'fading-circle',target:btn,});
    this.$nextTick(() => {
    var url=this.host+"agreement/download?name=job_agreement"
      this.$http.post(url).then(result=>{
        loadingInstance.close();  
      //console.log(101,result)
      if(result.data.errorcode==3000){
          this.$router.push('/')
        }
      else{
      let a = document.createElement('a');
      a.href = url;
      a.click()
    }
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
    font-size: 14px;
    color:#666;
    
  }
  table>tr>td{width:31.4%;}
  table>tr:not(:nth-child(1)){
    height:60px;
    border-bottom:1px solid #999;
  }
  table td{
   border-left:1px solid #ccc;
   border-bottom:1px solid #ccc;
 }
 table tr th{border:1px solid #ccc;padding:2% 0;}
 table tr td:last-child{border-right:1px solid #ccc;}
 table tr:nth-child(1)>th,table tr:nth-child(2)>td,table tr:nth-child(3)>td,table tr:nth-child(4)>td{width:30%;}
  #main>.container>h3{
    margin-left:9%;
    margin-top:2%;
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
  #main .p{
    margin-left:10%;
    margin-top:2%;
  }
  table{
    margin-left:10%;
    width:50%;
    margin-top:2%;
    border: 1px dashed #ccc;
    color:#666;
    margin-bottom:2%;
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
  :focus{outline:0;}
  table>tr:nth-child(1){border-top:1px solid #ccc}
  table>tr>td{width:8%;}
  table tr>td:last-child{width:40%;}
  @media screen and (min-width:1201px)and(max-width:1440px){
    #main>.container>.header>h2{font-size: 18px;}
    #main>.container .header_one>ul>li{width:80%;margin-right:0%}
    #main>.container>p,#main .main>p{font-size: 14px}
    #main .main>h3,#main .main_three>h3{font-size: 16px}
    }
  @media screen and (min-width:768px)and(max-width:1200px){
    #main>.container>.header>h2{font-size: 18px;}
    #main>.container .header_one>ul>li{width:80%;margin-right:0%}
    #main>.container>p,#main .main>p{font-size: 14px}
    #main .main>h3,#main .main_three>h3{font-size: 16px}
    #main>.container{
    width:85%;
    height:72%;
    margin:0 1%;
  }
  #main .footer button:nth-child(1),#main .footer button:nth-child(2){width:10%;}
    }
</style>
