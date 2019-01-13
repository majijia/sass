<template>
    <div id="main">
      <div class="header">
          <ul>
              <li>
                  <ul>
                      <li>
                          <h3>打款说明</h3>
                      </li>
                      <li>
                          <span>{{money}}</span>元
                      </li>
                      <li>根据服务协议，请您确认服务金额后，完成打款</li>
                  </ul>
              </li>
              <li><button @click="sure_money" id="btn_p">{{p_onemessage}}</button></li>
          </ul>
      </div>
      <div class="body">
          <div class="box">
            <img :src="imgsrc"  id="img">填写开票信息
          </div>
          <ul v-show="isShow">
               <li><button @click="piao" :class="{btn_bacground:isActive}">专票</button></li>
               <li><button @click="free_piao" :class="[isActive?'':btn_bacground]" >普票</button></li> 
          </ul>
          <ul class="btn_message">
              <li v-show="isActive">
                  <ul>
                    <li>公司名称: <input type="name" v-model="company_name"></li>
                    <li>纳税识别号: <input type="number" v-model="tax_number"></li>
                    <li>地 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址: <input type="address" v-model="address"></li>
                    <li>开&nbsp;&nbsp;&nbsp;户&nbsp;&nbsp;&nbsp;行:&nbsp; <input type="bankcard_deposit" v-model="bankcard_deposit"></li>
                    <li>电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话:&nbsp;<input type="mobile" v-model="mobile"></li>
                    <li>账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号:&nbsp;<input type="account" v-model="account"></li>
                  </ul>
              </li>
              <li v-show="isActive==false">
                  <ul>
                    <li>公司名称: <input type="name" v-model="company_nameS"></li>
                    <li>纳税识别号: <input type="number" v-model="tax_numberS"></li>
                  </ul>
              </li>
          </ul>
          <div class="footer">
            <img :src="imgsrc_two">
            <p class="add_pmessage" @click="postMessage">{{pmessage}}</p>
          </div>
      </div>
      <div class="up" v-if="isShow_two">
        <div> 
          <h3>提示内容</h3>
          <p >请您确认财务已经按照合同金额打款,如已确认请点击确认将同时通知您的销售顾问及如常财务</p>
        </div>
        <div>
            <button @click="getSure">取 消</button>
            <button @click="outSure">确认</button>
        </div>
    </div>
  </div>  
</template>
<script>
import qs from 'qs'
import {Toast} from "mint-ui"
export default {
  data () {
    return {
      zhuanPiao:'',
      puPiao:'',
      type:1,
      index:1.4,
      isShow_two:false,
      isShow:true,   // 控制ul列表的显示和隐藏，只有值为true时才显示
      imgsrc:require('../../../static/img/radio.png'),    // 绑定图片的路径
      company_name:'',
      tax_number:'',
      company_nameS:'',
      tax_numberS:'',
      address:'',
      bankcard_deposit:'',
    //   bankcard_address:'',
    //   bankcard_code:'',
      account:'',
      mobile:'',
    //   business_licence_address:'',
    //   account_title:'',
      money:'',
      pmessage:"发送开票信息",
      p_onemessage:"确认打款",
      imgsrc_two:require("../../../static/img/button_03.png"),
      tabPosition: 'top',
      isActive:'true',
      btn_bacground:'btn_bacground',
    }
},
methods:{
    getUrl(){
        this.$http.post(this.host+"audit/saas_order_detail").then(result=>{
            //console.log(220,result)
            if(result.data.errorcode==0){
                this.money=result.data.data.order_detail.payment_money
            }
            else if(result.data.errorcode==3000){
                this.$router.push('/')  
            }
            else{
                Toast(result.data.msg)
            }
        })
    },
    piao(){
        this.isActive=true;
        this.type=1;
        if(this.zhuanPiao==1){
            this.pmessage="已发送开票信息";
            this.imgsrc_two=require("../../../static/img/p.png")
        }
        else{
            this.pmessage="发送开票信息"
            this.imgsrc_two=require("../../../static/img/button_03.png")
        }
    },
    free_piao(){
        this.isActive=false;
        this.type=2;
        if(this.puPiao==2){
            this.pmessage="已发送开票信息"
            this.imgsrc_two=require("../../../static/img/p.png")
        }
        else{
            this.pmessage="发送开票信息"
            this.imgsrc_two=require("../../../static/img/button_03.png") 
        }   
    },
    sure_money(){
        if(this.p_onemessage=="确认打款")
          this.isShow_two=true;
    },
    postMessage(){
       var self=this;
       var obj={
        company_name:self.company_name,tax_number:self.tax_number,address:self.address,bankcard_deposit:self.bankcard_deposit,
        account:self.account,mobile:self.mobile,type:self.type}
       var obj_two={company_name:self.company_nameS,tax_number:self.tax_numberS,type:self.type}
       if(self.isActive=='true'&&self.company_name.length>0&&self.pmessage=="发送开票信息"){
        this.$http.post(this.host+"invoice/add_invoice",qs.stringify(obj)).then(result=>{
            if(result.data.errorcode==0){
                this.zhuanPiao=1;
                this.pmessage="已发送开票信息";
            }
            else if(result.data.errorcode==3000){
                this.$router.push('/')
            }
            else{
                Toast("请填写完整的发票信息")
            }
       })
    }else if(self.company_nameS.length>0&&this.pmessage=="发送开票信息"){
        this.$http.post(this.host+"invoice/add_invoice",qs.stringify(obj_two)).then(result=>{
            if(result.data.errorcode==0&&self.company_name.length>0){
                this.puPiao=2;
                this.pmessage="已发送开票信息";
            }
            else if(result.data.errorcode==3000){
                this.$router.push('/')
             }
            else{
                Toast("请填写完整的发票信息")
            }
        })
    }
    else if(this.pmessage=="已发送开票信息"){
        Toast("发票信息已发送")
    }
    else{
           Toast("请填写完整的发票信息")
       }
    },
    getSure(){
        this.isShow_two=false;
    },
    outSure(){
        var url=this.host+"invoice/payment_money"
        this.$http.post(url,qs.stringify({payment_money:this.money})).then(result=>{
            if(result.data.errorcode==0){
                this.isShow_two=false;
               this.p_onemessage="已确认打款";
               $("#btn_p").addClass('btn_two')
            }
            else if(result.data.errorcode==3000){
              this.$router.push('/')
            }
            else{
                Toast("信息有误")
            }
        }) 
    }
  },
  created(){
      this.getUrl()
  }
}
</script>
<style scoped lang="less">
  #main{
    width:100%;
    height:100%;
    margin-top:0.15%;
    overflow: scroll;
  }
  #main>img:nth-child(1){
    width:100%;
    height:100%;
    position: relative;
  }
  #main .header{
      margin-top:5%;
      height:20%;
      width:76%;  
      border-bottom:1px dashed #e5e5e5 ;
      margin-left:10%;
  }
  #main ul{
      list-style: none;
  }
  #main .header>ul{
    display: flex;
    justify-content: space-between;
    list-style: none;
    
  }
  #main .header>ul>li:nth-child(2){
      width:20%;
      text-align: end;
      margin-top:2%;
  }
  #main .header>ul>li:nth-child(2) button{
      background: #f09b22;
      color:#fff;
      border-radius: 4px;
      font-size: 17px;
      border:0;
      width:144px;
      padding:14px;
      margin-right:40%;
      cursor: pointer;
  }
  #main .header>ul>li>ul>li:nth-child(1)>h3{
    border-left:4px solid #f09b22;
    padding-left:2.6%;
  }
  #main .header>ul>li>ul>li{
      margin-top:4%;
  }
  #main .header>ul>li>ul>li>span{
      color:#f09b22;
      font-size: 36px;
      font-weight: bold;
  }
  #main .header>ul>li>ul>li:nth-child(3){
      color:#666;
      font-size: 14px;
  }
  #main .body{
      margin-top:3%;
      margin-left:10%;
      width:80%;
  }
  #main .body ul:nth-child(2){
      margin-top:3%;
      display: flex;
  }
  /*弹出框*/
  #main .body ul>li>button{
      width:100px;
      border:1px solid #ddd;
      background: #fff;
      padding:8px 0;
      font-size: 15px;
      cursor: pointer;
      color:#666;
  }
  #main .body ul>li:nth-child(1)>button{
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border-right:0;
  }
  #main .body ul>li:nth-child(2)>button{
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
  }
  .btn_bacground{
      background: #f09b22 !important;
      color:#fff !important;
  }
  :focus{outline:0;}
  .btn_message{
      margin-top:5%;
  }
  /*弹出框对应的内容*/
  #main .body ul.btn_message>li>ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
  }
  #main .body ul.btn_message>li>ul>li{
      width:50%;
      margin-bottom:2%;
  }
  #main .body ul.btn_message>li>ul>li>input{
      width:60%;
      padding:1.2% 0;
      border-radius: 4px;
      border:1px solid #ccc;
      font-size: 16px;
      padding-left:1%;
      color:#333;
  }
  #main .body>.box{
      color:#333;
      font-weight: bold;
  }
  #main .body>.box img{
      margin-right:0.5%;
      cursor: pointer;
  }
  #main .footer{
      display: flex;
      justify-content: flex-start; 
      text-align: center;
      position: relative;
      margin-left:76%; 
      margin-top:2%;
      cursor: pointer;
  }
  #main .footer p{
      position: absolute;
      top:21%;
      left:9%;
      color:#fff;
  }
.btn_two{
      background: #f09b22 !important;
  }
/*弹出框*/
#main .up{
    width:100%;
    height:100%;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top:0%;
    left:0;
    margin-top:0.2%;
    text-align: center;
}
#main .up>div:nth-child(1){
 margin:0 auto;
 width:350px;
 border-radius: 4px;
 background: #fff;
 text-align: start;
 padding-top:1.6%;
 margin-top:260px;
 color:#666;
}
#main .up>div:nth-child(2){
    display: flex;
    text-align: center;
    justify-content: center;
}
#main .up>div:nth-child(2)>button:nth-child(1){
 font-size: 16px;
 color:#fff;
 background: #777;
 width:100px;
 padding:10px 18px 10px 18px;
 border:0;
 border-radius: 4px;
 cursor: pointer;
 margin-right:2.5%;
 margin-top:2%;
}
#main .up>div:nth-child(2)>button:nth-child(2){
font-size: 16px;
 color:#fff;
 background: #f09b22;
 padding:10px 18px 10px 18px;
 width:100px;
 border:0;
 border-radius: 4px;
 cursor: pointer;
 margin-top:2%;
}
#main .up>div>h3{
    margin-bottom:3%;
    margin-left:2%;
    color:#333;
}
#main .up>div>p{
    font-size: 16px;
    margin:2%;
    border-top:1px solid #eee;
    padding-top:4%;
    padding-bottom:10%;
}
@media screen and (min-width:1201px)and(max-width:1440px){
    #main .footer p{
        left:12%;
    }
}
  @media screen and (min-width:992px)and(max-width:1200px){
    #main .up>div>p{
    font-size: 14px; 
}
    #main .footer p{
        left:14%;
    }
  }
  @media screen and (min-width:768px)and(max-width:991px){
    #main .header ul>li:nth-child(2)>button{font-size: 14px;}
    #main .footer{
        margin-left:70%;
        width:20%;
    }
    #main .footer p{
        left:9%;
    }
    #main .up>div>p{
    font-size: 14px;
}
    #main .footer>img{width:88%}
    #main .footer>p{font-size: 14px;}

#main .header>ul>li:nth-child(2) button{
    width:110px;
    margin-left:-26%;
    margin-top:20px;
}
#main .body ul.btn_message>li>ul>li{
    width:84%;
}
#main .body ul.btn_message>li>ul>li>input{
    width:100%;
    margin-top:1%;
}
#main .header{
    height: 16%;
}
}
</style>
