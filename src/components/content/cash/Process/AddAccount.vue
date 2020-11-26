<template>
    <div class="add-unit">
        <el-drawer
            title="Thêm tài khoản"
            :visible.sync="drawer"
            direction="rtl"
            :wrapperClosable="false"
            :show-close="false"
            size="800px"
            >
            <div class="dialog-close">
                <div class="icon icon-help"></div>
                <el-tooltip class="item" effect="dark" :visible-arrow="false"	 content="Đóng (ESC)" placement="top-start">
                    <div @click="drawer = false" class="icon icon-close"></div>
                </el-tooltip>
            </div>
            <div class="content">
                <div class="row-input">
                    <div class="w-1-4">
                        <MSTextbox ref="AccountCode" :value="obj.AccountCode" @valueChanged="obj.AccountCode = $event" :disable="isShow" label="Số tài khoản"  :required="true" />
                    </div>
                </div>
                <div class="row-input">
                    <div class="w-1-2" style="padding-right: 12px;">
                        <MSTextbox label="Tên tài khoản" :value="obj.AccountName" @valueChanged="obj.AccountName = $event" :disable="isShow" v-bind:required="true"/>
                    </div>
                    <div class="w-1-2" >
                        <MSTextbox label="Tên tiếng anh" :value="obj.AccountNameEnglish" @valueChanged="obj.AccountNameEnglish = $event" :disable="isShow"/>
                    </div>
                </div>
                <div class="row-input">
                    <div class="w-1-2" style="display:flex;align-items:center">
                        <div class="w-1-2" style="padding:1.5px 12px 0px 0px;">
                            <BaseCBB label="Tài khoản tổng hợp" :value="obj.AccountCodeRoot" @valueCBBChanged="obj.AccountCodeRoot = $event" :disable="isShow" :header="accountHead" :data="ListAccounts" :plus="false" :indexshow="1"/>
                        </div>
                        <div class="w-1-2" style="padding-top:4px">
                            <MSSelect :disable="isShow" :value="obj.Propertie"  @valueSLChanged="obj.Propertie = $event" label="Tính chất" :data="ListType" />
                        </div>
                    </div>
                </div>
                 <div class="row-input">
                    <MSTextbox label="Diễn giải" :textarea="true"  :value="obj.Explain" @valueChanged="obj.Explain = $event" :disable="isShow"/>
                 </div>
                 <div class="row-input">
                    <el-checkbox v-model="obj.IsForeignCurrencyAccounting">Có hạch toán ngoại tệ</el-checkbox>
                 </div>
                 <el-collapse>
                    <el-collapse-item title="Theo dõi chi tiết theo">
                         <div class="row-input">
                             <div class="w-1-2 flex">
                                 <div class="w-5-6 flex">
                                     <div class="w-1-2 flex">
                                         <el-checkbox v-model="trackingDetails[0].check" >Đối tượng</el-checkbox>
                                     </div>
                                     <div class="w-1-2">
                                         <MSSelect :value="trackingDetails[0].detail"  @valueSLChanged="trackingDetails[0].detail = $event" :data="ListSupp" :disable="!trackingDetails[0].check"/>
                                     </div>
                                 </div>
                             </div>
                            <div class="w-1-2 flex">
                                <div class="w-5-6 flex">
                                    <el-checkbox v-model="trackingDetails[1].check">Tài khoản ngân hàng</el-checkbox>
                                </div>     
                             </div>
                         </div>

                        <div class="row-input" v-for="(n,i) in rangeFor" :key="i">
                             <div class="w-1-2 flex">
                                 <div class="w-5-6 flex">
                                     <div class="w-1-2 flex">
                                         <el-checkbox v-model="trackingDetails[n].check">{{trackingDetails[n].show}}</el-checkbox>
                                     </div>
                                     <div class="w-1-2">
                                         <MSSelect :value="trackingDetails[n].detail"  @valueSLChanged="trackingDetails[n].detail = $event" :data="rules" :disable="!trackingDetails[n].check"/>
                                     </div>
                                 </div>
                             </div>
                            <div class="w-1-2 flex">
                                <div class="w-5-6 flex">
                                   <div class="w-5-6 flex">
                                     <div class="w-1-2 flex">
                                         <el-checkbox v-model="trackingDetails[n+1].check">{{trackingDetails[n+1].show}}</el-checkbox>
                                     </div>
                                     <div class="w-1-2">
                                         <MSSelect :value="trackingDetails[n+1].detail"  @valueSLChanged="trackingDetails[n+1].detail = $event" :data="rules" :disable="!trackingDetails[n+1].check"/>
                                     </div>
                                 </div>
                                </div>     
                             </div>
                         </div>
                    </el-collapse-item>
                 </el-collapse>
                 
            </div>
           
            <div class="dialog-footer">
                   <div class="divide"></div>
                   <div class="btn-footer">
                       <div class="btn-left">
                           <button @click="btnCloseOnClick()">Hủy</button>
                       </div>
                       <div class="btn-right">
                           <button @click="btnSaveOnClick()">Cất</button>
                           <button class="save-and-add">Cất và thêm</button>
                       </div>
                   </div>
               </div>
        </el-drawer>
        
    </div>
</template>

<script>
import {busData} from '@/main.js';
import MSTextbox from '@/components/common/MSTextbox'
import BaseCBB from '@/components/common/BaseCBB'
import MSSelect from '@/components/common/MSSelect'
import BaseAPI from '@/BaseAPI.js'
    export default {
        components:{
            MSTextbox,
            BaseCBB,
            MSSelect,
        },
         data() {
            return {
                AccountID:"",
                drawer: false,
                accountHead:[{label:'Số tài khoản',width:'100'},{label:'Tên tài khoản',width:'200'}],
                ListAccounts:[
                ],
                ListType:[
                    {value:'1',label:'Dư Nợ'},
                    {value:'2',label:'Dư Có'},
                    {value:'3',label:'Lưỡng tính'},
                    {value:'4',label:'Không có số dư'},
                ],
                ListSupp:[
                    {value:'1',label:'Nhà cung cấp'},
                    {value:'2',label:'Khách hàng'},
                    {value:'3',label:'Nhân viên'}
                ],
                rules:[
                    {value:'1',label:'Chỉ cảnh báo'},
                    {value:'2',label:'Bắt buộc nhập'},
                ],
                rangeFor:[2,4,6,8],
                isShow:false,
                trackingDetails:[ // để đúng thứ tự trái -> phải
                    {check:false,detail:1,name:'Object',show:'Đối tượng'},
                    {check:false,detail:true,name:'BankAccount',show:'Tài khoản ngân hàng'},

                    {check:false,detail:1,name:'ObjectGatherCost',show:'Đối tượng THCP'},
                    {check:false,detail:1,name:'Construct',show:'Công trình'},

                    {check:false,detail:1,name:'Order',show:'Đơn đặt hàng'},
                    {check:false,detail:1,name:'PurchaseSell',show:'Hợp đồng bán'},

                    {check:false,detail:1,name:'PurchaseBuy',show:'Hợp đồng mua'},
                    {check:false,detail:1,name:'ExpenseItem',show:'Khoản mục CP'},

                    {check:false,detail:1,name:'Unit',show:'Đơn vị'},
                    {check:false,detail:1,name:'StatisticalCode',show:'Mã thống kê'},
                ],
                obj:{

                },
            };
        },
        created(){
            busData.$on('showDialogAddAccount',()=>{
                this.drawer = true;
            })
        },
        mounted(){
            this.getAccounts();
        },
        methods:{
            async getAccounts(){
                let res = await BaseAPI.Get('https://localhost:44363/api/accounts'); 
                if(res && res.data){
                    this.ListAccounts = res.data.map((item)=>{
                        return{
                            'AccountCode':item.AccountCode,
                            'AccountName':item.AccountName,
                        }
                    })
                }
            },
            btnCloseOnClick(){
                this.drawer=false
            },
            async btnSaveOnClick(){
                for(let i=0;i<this.trackingDetails.length;i++){
                    if(this.trackingDetails[i].check){
                        this.obj[this.trackingDetails[i].name] = this.trackingDetails[i].detail;
                    }
                }
                console.log(this.obj)
                let res = await BaseAPI.Post('https://localhost:44363/api/accounts',this.obj);
                if(res){
                    console.log(res);
                }
            }
        },
        watch:{
            AccountID:function(){
                console.log(this.AccountID);
            }
        }
    }
</script>

<style scoped>

.content{
    width: 100%;
    height: calc(100% - 100px);
    padding: 10px 20px;
    position: relative;
}

.dialog-footer{
    width: 100%;
    padding: 0px 15px;
}
.flex{
    display: flex;
    align-items: center;
}
.add-unit .dialog-close{
    position: absolute;
    top: 0;
    right: 0;
}
.row-input{
    padding-bottom:8px;
}
</style>