<template>
    <div id="main">
      <div class="container">
         <table>
           <tr>
             <td colspan="6"><h3>代理商情况登记表</h3></td>
           </tr>
           <tr>
             <td>代理项目</td>
             <td>如常 - 残保金</td>
             <td>承接周期</td>
             <td>2017-2020</td>
             <td>续约周期</td>
             <td></td>
           </tr>
           <tr>
             <td>代理单位</td>
             <td></td>
             <td>在职人数</td>
             <td></td>
             <td>参项人数</td>
             <td></td>
           </tr>
           <tr>
             <td>合作模式</td>
             <td>代理、残保金已合作</td>
             <td>对接人员</td>
             <td></td>
             <td>联系方式</td>
             <td></td>
           </tr>
           <tr>
             <td>项目单位</td>
             <td>如常（北京）科技有限公司</td>
             <td>对接人员</td>
             <td></td>
             <td>联系方式</td>
             <td></td>
           </tr>
           <tr>
             <td>培训师</td>
             <td></td>
             <td>培训内容</td>
             <td colspan="3">关于公司：
                品牌由来、分公司分布、基地分布、政府关系等
                公司业务：
                相关政策、服务流程、服务优势等</td>
           </tr>
           <tr>
             <td>物料支持</td>
             <td colspan="5">包括不限于项目授权书、项目宣传资料、项目H5资料、政策工具包、个性支持（投标所需资料）等</td>
           </tr>
           <tr>
             <td colspan="6"><h3>代理商资质证明单</h3></td>
            
           </tr>
           <tr>
             <td colspan="4">代理资质证明</td>
             <td colspan="2">留存状态（复印件）</td>
           </tr>
           <tr>
              <td colspan="4">企业营业执照</td>
             <td colspan="2">已留存</td>
           </tr>
           <tr>
              <td colspan="4">人力资源服务许可证</td>
              <td colspan="2"></td>
           </tr>
           <tr>
              <td colspan="4">劳务派遣服务许可证</td>
              <td colspan="2"></td>
           </tr>
           <tr>
              <td colspan="4"></td>
              <td colspan="2"></td>
           </tr>
           <tr>
              <td colspan="4"></td>
              <td colspan="2"></td>
           </tr>
           <tr>
             <td colspan="5">
               <p>备注</p>
               <p>1.代理合作周期单位：自然年；</p>
               <p>2.双方不可出现隐瞒、欺骗等手段。</p>
             </td>
             
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
    // console.log(222,btn)
    let loadingInstance =this.Loading.service({spinnerType:'fading-circle',target:btn,});
    this.$nextTick(() => {
    var url=this.host+"agreement/download?name=proxy_agreement"
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
    text-align: center;
    overflow: scroll;
  }
  #main>.container>table{
    width:90%;
    text-align: center;
    align-items: center;
    border:1px solid #ccc;
    margin-left:5%;
    margin-top:2%;
  }
  #main>.container>table>tr{
    border-top:1px solid #ccc;
    
  }
  #main>.container>table>tr:last-child{
    text-align: start;
  }
  #main>.container>table>tr:last-child>td>p{
    margin-top:1%;
  }
  #main>.container>table>tr:nth-child(10), #main>.container>table>tr:nth-child(11), #main>.container>table>tr:nth-child(12){
    text-align: start;
  }
  #main>.container>table>tr>td{
    border-bottom:1px solid #ccc;
    border-right:1px solid #ccc;
    padding:1%;
    font-size: 16px;
  }
  #main>.container>table>tr>td:nth-child(2n){
    width:15%;
  }
 :focus{outline:0;}
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
    #main>.container>table>tr:nth-child(1) h3,#main>.container>table>tr:nth-child(8) h3{font-size: 18px;}
    #main>.container>table>tr>td{font-size: 14px}
    }
  @media screen and (min-width:768px)and(max-width:1200px){
    #main>.container>table>tr:nth-child(1) h3,#main>.container>table>tr:nth-child(8) h3{font-size: 18px;}
    #main>.container>table>tr>td{font-size: 14px}
    #main>.container{
    width:85%;
    height:72%;
    margin:0 1%;
  }
  #main .footer button:nth-child(1),#main .footer button:nth-child(2){width:10%;}
    }
</style>
