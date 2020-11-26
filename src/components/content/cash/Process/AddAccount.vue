<template>
    <div class="add-unit">
        <el-drawer
             title="Thêm tài khoản"
            :visible="drawer"
             direction="rtl"
            :wrapperClosable="false"
            :show-close="false"
            :size="formSize"
            >
            <div class="dialog-close">
                <div class="icon icon-help"></div>
                <el-tooltip class="item" effect="dark" :visible-arrow="false"	 content="Đóng (ESC)" placement="top-start">
                    <div @click="btnCloseOnClick()" class="icon icon-close"></div>
                </el-tooltip>
            </div>
            <div class="btn-fullsreen" :class="{true:formSize != '800px'}" @click="resizeForm()">
                <div class="icon icon-fullsreen"></div>
            </div>
            <div class="content" v-if="drawer">
                <div class="row-input">
                    <div class="w-1-4">
                        <MSTextbox ref="AccountCode" :autofocus="true" :value="obj.AccountCode" @valueChanged="obj.AccountCode = $event" :disable="isShow" label="Số tài khoản"  :required="true" />
                    </div>
                </div>
                <div class="row-input">
                    <div class="w-1-2" style="padding-right: 12px;">
                        <MSTextbox  ref="AccountName" label="Tên tài khoản" :value="obj.AccountName" @valueChanged="obj.AccountName = $event" :disable="isShow" :required="true"/>
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
                            <MSSelect :disable="isShow" :value="obj.Propertie"  @valueSLChanged="obj.Propertie = $event" label="Tính chất" :data="ListType" :required="true"/>
                        </div>
                    </div>
                </div>
                 <div class="row-input">
                    <MSTextbox label="Diễn giải" :textarea="true"  :value="obj.Explain" @valueChanged="obj.Explain = $event" :disable="isShow"/>
                 </div>
                 <div class="row-input">
                    <el-checkbox v-model="obj.IsForeignCurrencyAccounting">Có hạch toán ngoại tệ</el-checkbox>
                 </div>
                 <el-collapse @change="followClick = !followClick" v-model="dummy">
                    <el-collapse-item name="1">
                        <template  slot="title">
                            <i class="icon icon-arrow-down-black" v-show="!followClick"></i>
                            <i class="icon icon-arrow-right-black" v-show="followClick"></i>
                            <div class="title-collapse">Theo dõi chi tiết theo</div>
                        </template>
                         <div class="row-input">
                             <div class="w-1-2 flex">
                                 <div class="w-5-6 flex">
                                     <div class="w-1-2 flex">
                                         <el-checkbox v-model="trackingDetails[0].check" >Đối tượng</el-checkbox>
                                     </div>
                                     <div class="w-1-2">
                                         <MSSelect :value="trackingDetails[0].value"  @valueSLChanged="trackingDetails[0].value = $event" :data="ListSupp" :disable="!trackingDetails[0].check"/>
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
                                         <MSSelect :value="trackingDetails[n].value"  @valueSLChanged="trackingDetails[n].value = $event" :data="rules" :disable="!trackingDetails[n].check"/>
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
                                         <MSSelect :value="trackingDetails[n+1].value"  @valueSLChanged="trackingDetails[n+1].value = $event" :data="rules" :disable="!trackingDetails[n+1].check"/>
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
                       <div class="btn-right">
                           <button @click="btnSaveOnClick(false)" >Cất</button>
                           <button @click="btnSaveOnClick(true)" class="save-and-add">Cất và thêm</button>
                       </div>
                       <div class="btn-left">
                           <button @click="btnCloseOnClick()">Hủy</button>
                       </div>
                   </div>
               </div>
        </el-drawer>
        <DialogError @dialogErrorClose="focusError($event)"/>
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
                formSize:'800px',
                followClick:false,
                AccountID:"",
                drawer: false,
                dummy:['1'],
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
                    {check:false,value:1,name:'Object',show:'Đối tượng'},
                    {check:false,value:true,name:'BankAccount',show:'Tài khoản ngân hàng'},

                    {check:false,value:1,name:'ObjectGatherCost',show:'Đối tượng THCP'},
                    {check:false,value:1,name:'Construct',show:'Công trình'},

                    {check:false,value:1,name:'Order',show:'Đơn đặt hàng'},
                    {check:false,value:1,name:'PurchaseSell',show:'Hợp đồng bán'},

                    {check:false,value:1,name:'PurchaseBuy',show:'Hợp đồng mua'},
                    {check:false,value:1,name:'ExpenseItem',show:'Khoản mục CP'},

                    {check:false,value:1,name:'Unit',show:'Đơn vị'},
                    {check:false,value:1,name:'StatisticalCode',show:'Mã thống kê'},
                ],

                formMode:'Add',
                obj:{
                    BankAccount:false, 
                    IsForeignCurrencyAccounting:false,
                    Status:true
                },
                initialData:{
                    BankAccount:false, 
                    IsForeignCurrencyAccounting:false,
                    Status:true
                }
            };
        },
        created(){
            busData.$on('showDialogAddAccount',()=>{
                this.drawer = true;
            })

            busData.$on('editAccount',(data)=>{
                this.obj = data;
                console.log(this.obj);
                for(let i=0;i<this.trackingDetails.length;i++){
                    if(this.obj[this.trackingDetails[i].name]){
                        this.trackingDetails[i].check = true;
                        this.trackingDetails[i].value = this.obj[this.trackingDetails[i].name];
                    }
                }
                this.drawer = true;
                this.formMode = 'Edit'
            })
        },
        mounted(){
            this.getAccounts();
        },
        methods:{
            resetForm(){
                Object.assign(this.$data, this.$options.data())
            },
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
                this.drawer=false;
                this.resetForm();
            },
            async btnSaveOnClick(isSaveAndAdd){
                let err;
                if(!this.obj.AccountCode){
                    err = 'Số tài khoản không được bỏ trống';
                    busData.$emit('showDialogError',err,1);
                }else if(!this.obj.AccountName){
                    err = 'Tên tài khoản không được bỏ trống';
                    busData.$emit('showDialogError',err,2);
                }else{
                    //gom dữ liệu phần chi tiết theo dõi
                    for(let i=0;i<this.trackingDetails.length;i++){
                        if(this.trackingDetails[i].check){
                            this.obj[this.trackingDetails[i].name] = this.trackingDetails[i].value;
                        }
                    }
                    //gọi api
                    if(this.formMode == 'Add'){
                        let res = await BaseAPI.Post('https://localhost:44363/api/accounts',this.obj);
                        if(res){
                            this.resetForm();
                            this.$emit('reloadData');
                        }
                    }else{
                        let res = await BaseAPI.Put('https://localhost:44363/api/accounts',this.obj.AccountId,this.obj);
                        if(res){
                            this.resetForm();
                            this.$emit('reloadData');
                        }
                    }
                    this.drawer=false;
                    this.getAccounts();
                    if(isSaveAndAdd){
                        this.$parent.showDialogAddAccount();
                    }
                }   
            },
           
            focusError(errCode){
                if(errCode == 1){
                    this.$refs.AccountCode.focusInput();
                } else if(errCode == 2){
                    this.$refs.AccountName.focusInput();
                }    
            },
            resizeForm(){
                if(this.formSize == '800px'){
                    this.formSize = 'calc(100% - 6px)';
                }else{
                    this.formSize = '800px';
                }
            },
        },
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
.btn-fullsreen{
    width: 12px;
    height: 50px;
    background: #fff;
    border: 1px solid #d4d7dc;
    border-radius: 8px;
    position: absolute;
    align-items: center;
    left: -6px;
    top: 43%;
    z-index: 2015;
    display: flex;
    cursor: pointer;
}
.btn-fullsreen.true{
    transform: rotateY(180deg);
}
.icon.icon-fullsreen{
    background-position: -35px -360px;
    width: 9px;
    height: 14px;
}
.icon.icon-arrow-down-black{
    background-position: -320px -355px;
    
}
.icon.icon-arrow-right-black{
    background-position: -316px -355px;
    transform:rotate(90deg);
}
.title-collapse{
    font-size: 16px;
    font-weight: 400;
    color: #212121;
}
</style>