<template>
    <div id="main">
       <div class="header">
           <h3>{{bac_show}}计算公式:保障今年缴纳额=(上年用人单位在职职工人数*1.7%-上年用人实际安排残疾人就业人数)*上年用人单位在职职工年平均工资</h3>
           <div>
               <ul class="header_one">
                   <li><img src="../../assets/images/anli_03.png" alt=""></li>
                   <li>
                       <p>Eg.假定贵公司上年度职工年平均工资为100.000元，单位上年度在职职工总数为200人，无残疾人</p>
                       <p>Cal.应缴纳的保障金=(200人*1.7%-0人)*100.000元=340.000元</p>
                   </li>
               </ul>
           </div>
       </div>
       <div class="body">
           <achive_one_two ref="mychild"></achive_one_two>
           <!--v-on:click="getClick_three"-->
           <achive_one_two v-for="(item,index) of items" :key=item.id></achive_one_two>
       </div>
       <div class="footer">
           <!-- <div  @click="addPromany">+ 添加企业</div> -->
           <span><input type="checkbox" class="inputJin" v-model="checked">是否含京籍</span>
           <button @click="getClick_two" class="btn_add">一键生成定制方案</button>
       </div> 
  </div> 
  
</template>
<script>
import  achive_one_two from './Achive_one_two.vue'
import Bus from '../../assets/js/bus.js'
export default {
    data() {
      return {
        list: {
            name: '',
            date:'',  
        },
        checked:false,
        list_two:[],
        items:[],
        city: '',
        shi: {},
        id: '',
        isChecked:'',
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        index:2.1,
        list_twos:[],
      }
    },
    methods:{
        selectChange (value) {
            this.value5 = value.name
            this.city = value
            this.value11 = ''
        },
        getClick_two(){
            //传参数给父组件
            this.$emit('name', this.list.name);
            this.index=2.2;
            //console.log(2.222,this.index)
            this.$emit("click",this.index)
            //兄弟间传参
            if(this.checked==false){
                this.isChecked=0
            }else{
                this.isChecked=1
            }
            /*触发子组件*/
            this.$refs.mychild.getChild(this.isChecked);
     }
    },
    created(){
        this.options = province;
        this.shi = province_city;
        //console.log(this.checked)
        //console.log(this.checked)
    },
    components:{achive_one_two : achive_one_two  },
    props:['bac_show']
}
</script>

<style scoped lang="less">
  #main{
    width:100%;
    height:94%;
    overflow: scroll;
  }
  #main ul{
      list-style: none;
  }
  #main .header{
      text-align: center;
      width:100%;
      height:110px;
      background:#ffab35;
      color:#fff;
      padding-top:1%;
      margin-top:0.2%;
  }
  #main .header h3{
      font-size: 19px;
      text-align: center;
  }
  #main .header>div{
      border:1px dashed #fff;
      width:83%;
      margin: 0 auto;
      margin-top:0.8%;
    
  }

  #main .header .header_one{
      display: flex;
      /* margin-left:23%; */
      padding:0.4% 0.2%;
      justify-content: center;
  }
  #main .header .header_one>li:nth-child(1)>img{
      margin-top:8%;
      width:38px;
  }
  #main .header .header_one>li{
      padding-right:1.4%;
      font-size: 0.95rem;
  }
  #main .header .header_one>li p:nth-child(1){
      padding-bottom:0.8%;
  }
   #main .header .header_one>li:nth-child(2){
      text-align: start;
  }
  #main .footer{
      text-align: start;
      margin-top:4%;
      margin-left:5%;
  }
  #main .footer span{
      margin-top:-1%;
      color:#999;
      font-size: 1rem;
  }
  #main .footer span>input{
      margin-right:0.4%;
  }
  #main .footer div{
      color:#666;
      cursor: pointer;
  }
  #main .footer button{
      background: #f09b22;
      color:#fff;
      border:0;
      font-size:18px;
      padding:0.6% 1.4%;
      border-radius: 4px;
      margin-top:-1%;
      margin-left:30%;
      margin-bottom:2%;
      cursor: pointer;
  }
  #main .img_right{
      position: absolute;
      top:50%;
      left:94%;
  }
  #main .disabled {
    pointer-events: none;
    cursor: default;
    opacity: 0.8;
}
:focus{outline:0;}

@media screen and (min-width:992px) and(max-width:1300px){
   #main .header h3{
      font-size: 13.5px;
      text-align: center;
  }
    #main .header>div{
      border:1px dashed #fff;
      width:790px;
      margin: 0 auto;
      margin-top:1%;
    
  }
  #main .header .header_one>li:nth-child(1)>img{
      margin-top:7%;
      width:60%;;
  }
   #main .header .header_one>li:nth-child(2) p{
      font-size: 13px;
  }
  #main .header{
      height:90px;
  }
}
@media screen and (min-width:766px) and(max-width:991px){
   #main .header h3{
      font-size: 10px;
      text-align: center;
      width:80%;
      margin-left:5%;
  }
    #main .header>div{
      border:1px dashed #fff;
      width:80%;
      margin-top:1%;
    
  }
  #main .header .header_one>li:nth-child(1)>img{
      margin-top:12%;
      width:60%;;
  }
   #main .header .header_one>li:nth-child(2) p{
      font-size: 8px;
  }
  #main .header{
      height:100px;
      margin-bottom:5%;
  }
}
</style>
