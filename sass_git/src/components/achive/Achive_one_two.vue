<template>
        <div id="#main">
            <div class="body">
                   <ul>
                       <li>
                          <h3>企业信息</h3>
                          <ul>
                            <li class="input_one">公司名称:<input type="name" v-model="company_name"></li>
                            <li>注册地区:
                              <el-select v-model="value5"  placeholder="请选择" @change='selectChange'>
                                  <el-option v-for="item in options" :key="item.area_id" :label="item.name" :value="item">
                                  </el-option>
                              </el-select>
                              省
                              <el-select v-model="value11" collapse-tags style="margin-left: 20px;" placeholder="请选择" @change='selectShi'>
                                  <el-option v-for="item in shi[city.area_id]" :key="item.area_id" :label="item.name" :value="item">
                                  </el-option>
                              </el-select>
                              市
                              <el-select v-model="value_xian" collapse-tags style="margin-left: 20px;" placeholder="请选择">
                                  <el-option v-for="item in xian[xian_id]" :key="item.area_id" :label="item.name" :value="item.name">
                                  </el-option>
                              </el-select>
                               县
                            </li>
                           </ul>
                           <ul>
                               <li class="hold">已安置轻度月数:<input type="text" v-model='date' @change="setPeople" @keyup="getmonth"></li>
                               <li class="disabled">已安置轻度人数:<input type="name" :value='isNaN((date/12).toFixed(2)) == true ? 0 : (date/12).toFixed(2)'></li>
                           </ul>
                           <ul>
                               <li>年均在职人数:<input type="name" v-model="emply_counts" @keyup="getmonth" @change="awitePeople"></li>
                               <li>月均薪资:<input type="name" v-model="salarys" onkeyup="value=value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')" ></li>
                          </ul>
                          <div class="chexbox">
                            <button @click="sureMessage">确 定</button>
                          </div>
                        </li>
                        <li> 
                            <div>
                              <h1>{{salary_two>9999?(salary_two/10000).toFixed(2):(salary_two/1000).toFixed(2)}}万</h1>
                           </div>
                            <h4>应缴金额</h4>
                        </li>
                   </ul>
                </div>
            </div>
        </template>
        <script>
        import qs from 'qs'
        import Bus from '../../assets/js/bus.js'
        // import Bus from './bus.js'
        export default {
          data() {
            return {
        list:{},
        list_two:[],
        province_id:'',
        city_id:'',
        /*县*/
        district_id:'',
        employee_counts:'',
        salary:'',
        company_name:'',
        handicapped_counts:'',
        salarys:'',
        date:'',
        salary_two:'0',
        emply_counts:'',
        city: {},
        shi: {},
        xian: {},
        xian_id: '',
        id: '',
        value5: [],
        value11: [],
        value6: '',
        value1: '',
        value2: '',
        index:2.1,
        value_xian:'',
        }
        },
        methods:{
            getmonth (event) {
                var dom = event.target
                var value = dom.value
                value = Number(value) + ''
                    dom.value = value.replace(/[^\d]/g,'') 
            },
            //年均在职人数影响后面是否可提交
            awitePeople(){
                if(this.emply_counts!=this.list.emply_counts){
                    //给一个参数判断
                    this.list.achive='1';
                    //叔侄之间传参
                    Bus.$emit("achive",this.list.achive)
                }
            },
            setPeople(){
                this.handicapped_counts=((this.date)/12).toFixed(2)
                // console.log(this.handicapped_counts)
                this.$http.post(this.host+"scheme/year_payment",qs.stringify({handicapped_counts:this.handicapped_counts})).then(result=>{
                //console.log(123,result)
                if(result.data.errorcode==0){
                    this.handicapped_counts=this.handicapped_counts
                }
                else if(result.data.errorcode==3000){
                    this.$router.push('/')
                }
                else{
                    Toast("信息有误")
                }
                })
    
            },
            /*父组件调用的子组件*/
            getChild(isChecked){
                /*传递生成方案的参数---子传父*/
                this.list_two=new Array(this.city.area_id,this.xian_id,this.emply_counts,this.salarys,this.handicapped_counts,this.company_name,isChecked)
                Bus.$emit("myFun",this.list_two)
            },
            selectChange (value) {
                this.value5 = value.name;
                this.city = value;
                this.value11 = '';
                this.value_xian = ''
            },
            selectShi (value) {
                this.xian_id = value.area_id
                this.value11 = value.name
                this.value_xian = '';
                //console.log(this.value11)
            },
            getAdd(){
                this.$http.post(this.host+"company/company_info").then(result=>{
                //console.log(233,result)
                this.list=result.data.data
                this.company_name=this.list.company_name;
                this.province_id=this.list.province_id;
                this.city_id=this.list.city_id;
                //console.log(this.list.province_id, this.city)
                this.city.area_id = this.list.province_id
                /*添加的县*/
                this.xian_id = this.list.city_id
                this.district_id=this.city.district_id;
                this.value5=this.list.province_name;
                this.value11=this.list.city_name;
                this.value_xian=this.list.district_name
                this.emply_counts=this.list.emply_counts;
                this.salarys=this.list.salarys;
            })
        },
            /*生成金额*/
            sureMessage(){
                var obj={employee_counts:this.emply_counts,city_id:this.xian_id,handicapped_counts:this.handicapped_counts,salary:this.salarys}
                this.$http.post(this.host+"scheme/year_payment",qs.stringify(obj)).then(result=>{
                    //console.log(111,result)
                    if(result.data.errorcode==0){
                        this.salary_two=result.data.data.result  
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
                this.options = province;
                this.shi = province_city; 
                this.xian = city_district // 县
                //console.log(this.xian, this.shi)
                this.getAdd()
    }
        }
        </script>
        
        <style scoped lang="less">
          #main{
            width:100%;
            overflow: scroll;
            margin-top:2%;
          }
          #main ul{
              list-style: none;
          }
          #main .body{
              width:90%;
              height:30%;
              margin-left:5%;
              margin-top:2%;
              position:relative;
          }
          #main .body>ul>li:nth-child(1){
              width:78%;
              border-right:1px dashed #ccc;
          }
          #main .body>ul>li>h3{
            border-left:4px solid #f09b22;
            padding-left:0.6%;
          }
          #main .body>ul>li:nth-child(1)>h3,#main .body>ul>li:nth-child(1)>ul{
              margin-bottom:3%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(3),#main .body>ul>li:nth-child(1)>ul:nth-child(4),#main .body>ul{
              display: flex;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(2){
              display: flex;
              flex-direction: column;
          }
          /*总宽度*/
          #main .body>ul>li:nth-child(1)>ul:nth-child(2)>li:nth-child(1){
              width:80%;
              margin-right:6%;
              margin-bottom:3%;
          }
          /*公司信息*/
          #main .body>ul>li:nth-child(1)>ul:nth-child(2)>li:nth-child(1)>input{
              width:74%;
              padding:1.2%;
              margin-left:2%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(3)>li:nth-child(1){
              width:46%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(3)>li:nth-child(1)>input,#main .body>ul>li:nth-child(1)>ul:nth-child(3)>li:nth-child(2)>input{
              width:50%;
              padding:2%;
              margin-left:2%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(3)>li:nth-child(2){
              width:50%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(3)>li:nth-child(2)>input{
              width:50%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(4)>li:nth-child(1){
              width:46%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(4)>li:nth-child(1)>input{
              width:54%;
              padding:2%;
              margin-left:2%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(4)>li:nth-child(2){
              width:46%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(4)>li:nth-child(2)>input{
              width:64%;
              padding:2%;
              margin-left:2%;
          }
          #main .body>ul>li:nth-child(1)>div{
              margin-top:8%;
          }
          #main .body>ul>li:nth-child(1)>div>span{
              margin-right:2%;
          }
          #main .body>ul>li:nth-child(1)>div>span>input{
              margin-right:1%;
          }
          #main .body>ul>li:nth-child(1)>div>span:nth-child(4){
              margin-left:2%;
          }
          #main .body>ul>li:nth-child(1)>div button{
              background: #f09b22;
              color:#fff;
              border:0;
              font-size: 18px;
              border-radius: 4px;
              margin-left:76%;
              padding:0.6% 2.4%;
              cursor: pointer;
          }
          #main .body>ul>li:nth-child(2){
              width:26%;
              text-align: center;  
          }
          #main .body>ul>li:nth-child(2)>div{
              border:14px solid #f09b22;
              border-radius: 50%;
              width:180px;
              height:180px;
              margin: 20% auto 5%; 
          }
          #main .body>ul>li:nth-child(2)>div>h1{
              margin-top:34%;
          }
          #main .body>ul>li:nth-child(2) h4{
              color:#333;
              font-size: 18px;
          }
          #main .body{
              padding-bottom:2%;
              border-bottom:1px dashed #ccc;
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
        #main input{
            border:1px solid #cecece;
            border-radius: 4px;
            font-size: 1rem;
            border:1px solid #ccc !important;
            outline:0 none !important;
        }
        #main .inputJin{
            margin-top:2%;
            margin-left:5%;
        }
        .el-select-dropdown__item.selected{
            color:#666;
            font-weight: normal;
            
        }
        
        .el-input--suffix .el-input__inner{
            margin-top:4%;
        }
        :focus{outline:0;}
        @media screen and (min-width:1339px) and(max-width:1600px){
           #main .body>ul>li ul:nth-child(2){
            display: flex;
            flex-direction: column;
          }
          .el-select{
            padding-bottom:20px;
        }
        .el-select:nth-child(3){
            padding-left:50px;
        }
          #main .body>ul>li:nth-child(1)>ul:nth-child(2)>li:nth-child(1){
              width:80%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(2)>li:nth-child(1)>input{
            width:60%;
            margin-top:2%;
            margin-bottom:2%;
          }
          
          #main .body>ul>li:nth-child(1)>ul:nth-child(2)>li:nth-child(2)>el-select{
              width:100%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(3){
              display: flex;
              flex-direction: column;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(3)>li:nth-child(1)>input{
              width:195%;
              margin-top:2%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(3)>li:nth-child(2){
              margin-top:3%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(3)>li:nth-child(2)>input{
              width:180%;
              margin-top:2%;
          }
           #main .body>ul>li:nth-child(1)>ul:nth-child(4){
             display: flex;
             flex-direction: column;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(4)>li:nth-child(1)>input{
              width:195%;
              margin-top:2%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(4)>li:nth-child(2)>input{
              width:100%;
              margin-top:2%;
        
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(4)>li:nth-child(2){
              margin-top:2%;
          }
          #main .body>ul>li:nth-child(1)>div button{
              margin-left:82%;
              float: left;
              margin-top:-12.7%;
          }
          #main .body>ul>li:nth-child(1){
              width:66%;
              
          }
           #main .body>ul>li:nth-child(2)>div{
              border:16px solid #f09b22;
              border-radius: 50%;
              width:200px;
              height:200px;
              margin: 40%  20% 4% 30%;; 
          }
          #main .body>ul>li:nth-child(2) h4{
              margin-left:36%;
          }
          .el-input_inner{
              padding:-1px 14px;
          }
        }
        @media screen and (min-width:1279px) and(max-width:1440px){
           #main .body>ul>li ul:nth-child(2){
            display: flex;
            flex-direction: column;
          }
          .el-select{
            padding-bottom:20px;
        }
        .el-select:nth-child(3){
            padding-left:50px;
        }
          #main .body>ul>li:nth-child(1)>ul:nth-child(2)>li:nth-child(1)>input{
            width:80%;
            margin-top:2%;
            margin-bottom:4%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(2)>li:nth-child(2){
              margin-top:2%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(2)>li:nth-child(2)>el-select{
              width:20%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(3){
              display: flex;
              flex-direction: column;
          }
          
          #main .body>ul>li:nth-child(1)>ul:nth-child(3)>li:nth-child(1)>input{
              width:160%;
              margin-top:2%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(3)>li:nth-child(2){
              margin-top:3%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(3)>li:nth-child(2)>input{
              width:146%;
              margin-top:2%;
          }
           #main .body>ul>li:nth-child(1)>ul:nth-child(4){
             display: flex;
             flex-direction: column;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(4)>li:nth-child(1)>input{
              width:158%;
              margin-top:2%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(4)>li:nth-child(2)>input{
              width:90%;
              margin-top:2%;
        
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(4)>li:nth-child(2){
              margin-top:2%;
          }
          #main .body>ul>li:nth-child(1)>div button{
              margin-left:66%;
              float: left;
              margin-top:-12.7%;
          }
          #main .body>ul>li:nth-child(1){
              width:66%;
              
          }
           #main .body>ul>li:nth-child(2)>div{
              border:14px solid #f09b22;
              border-radius: 50%;
              width:140px;
              height:140px;
              margin: 40%  20% 4% 30%;; 
          }
          #main .body>ul>li:nth-child(2) h4{
              margin-left:20%;
          }
          .el-input_inner{
              padding:-1px 14px;
          }
        }
        @media screen and (min-width:992px) and(max-width:1280px){
           #main .body>ul>li ul:nth-child(2){
            display: flex;
            flex-direction: column;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(2)>li:nth-child(1)>input{
            width:80%;
            margin-top:2%;
            margin-bottom:4%;
          }
          .el-select{
            padding-bottom:20px;
        }
        .el-select:nth-child(1){
            width:77%;
        }
        .el-select:nth-child(3),.el-select:nth-child(2){
            padding-left:50px;
            width:77%;
        }
          #main .body>ul>li:nth-child(1)>ul:nth-child(2)>li:nth-child(2){
              margin-top:2%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(2)>li:nth-child(2)>el-select{
              width:20%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(3){
              display: flex;
              flex-direction: column;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(3)>li:nth-child(1)>input{
              width:186%;
              margin-top:2%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(3)>li:nth-child(2){
              margin-top:3%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(3)>li:nth-child(2)>input{
              width:170%;
              margin-top:2%;
          }
           #main .body>ul>li:nth-child(1)>ul:nth-child(4){
             display: flex;
             flex-direction: column;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(4)>li:nth-child(1)>input{
              width:186%;
              margin-top:2%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(4)>li:nth-child(2)>input{
              width:90%;
              margin-top:2%;
        
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(4)>li:nth-child(2){
              margin-top:2%;
          }
          #main .body>ul>li:nth-child(1)>div button{
              margin-left:77%;
              float: left;
              margin-top:-12.7%;
          }
          #main .body>ul>li:nth-child(1){
              width:66%;
              
          }
           #main .body>ul>li:nth-child(2)>div{
              border:14px solid #f09b22;
              border-radius: 50%;
              width:140px;
              height:140px;
              margin: 40%  20% 4% 30%;; 
          }
          #main .body>ul>li:nth-child(2) h4{
              margin-left:32%;
          }
          .el-input_inner{
              padding:-1px 14px;
          }
        }
        @media screen and (min-width:768px) and(max-width:991px){
         #main .body>ul>li ul:nth-child(2){
            display: flex;
            flex-direction: column;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(2)>li:nth-child(1)>input{
            width:100%;
            margin-top:2%;
            margin-bottom:4%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(2)>li:nth-child(2){
              margin-top:2%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(2)>li:nth-child(2)>el-select{
              width:20%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(3){
              display: flex;
              flex-direction: column;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(3)>li:nth-child(1)>input{
              width:170%;
              margin-top:2%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(3)>li:nth-child(2){
              margin-top:3%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(3)>li:nth-child(2)>input{
              width:156%;
              margin-top:2%;
          }
           #main .body>ul>li:nth-child(1)>ul:nth-child(4){
             display: flex;
             flex-direction: column;
          }
          .el-select{
            padding-bottom:20px;
        }
        .el-select:nth-child(1){
            width:66%;
        }
        .el-select:nth-child(3),.el-select:nth-child(2){
            padding-left:50px;
            width:66%;
        }
          #main .body>ul>li:nth-child(1)>ul:nth-child(4)>li:nth-child(1)>input{
              width:170%;
              margin-top:2%;
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(4)>li:nth-child(2)>input{
              width:90%;
              margin-top:2%;
        
          }
          #main .body>ul>li:nth-child(1)>ul:nth-child(4)>li:nth-child(2){
              margin-top:2%;
          }
          #main .body>ul>li:nth-child(1)>div button{
              margin-left:64%;
              float: left;
              margin-top:-16%;
          }
          #main .body>ul>li:nth-child(1){
              width:56%;
              
          }
           #main .body>ul>li:nth-child(2)>div{
              border:14px solid #f09b22;
              border-radius: 50%;
              width:120px;
              height:120px;
              margin: 40%  20% 4% 30%;; 
          }
          #main .body>ul>li:nth-child(2) h4{
              margin-left:44%;
          }
          #main .body>ul>li:nth-child(2) h1{
              font-size: 24px;
          }
          .el-input_inner{
              padding:-1px 14px;
              margin-top:2%;
          }
        }
        </style>
        