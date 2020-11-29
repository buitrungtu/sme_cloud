<template>
    <div class="add-unit" v-shortkey="['esc']" @shortkey="btnCloseOnClick()">
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
                <el-tooltip class="item" effect="dark" :visible-arrow="false" content="Đóng (ESC)" placement="top-start">
                    <div @click="btnCloseOnClick()" v-shortkey="['esc']" @shortkey="btnCloseOnClick()" class="icon icon-close"></div>
                </el-tooltip>
            </div>
            <div class="btn-fullsreen" :class="{true:formSize != '800px'}" @click="resizeForm()">
                <div class="icon icon-fullsreen"></div>
            </div>
            <div class="content" v-if="!reset">
                <div class="row-input">
                    <div class="w-1-4">
                        <MSTextbox ref="AccountCode" v-model="obj.AccountCode" :disable="isShow" label="Số tài khoản"  :required="true" />
                    </div>
                </div>
                <div class="row-input">
                    <div class="w-1-2" style="padding-right: 12px;">
                        <MSTextbox  ref="AccountName" label="Tên tài khoản" v-model="obj.AccountName" :disable="isShow" :required="true"/>
                    </div>
                    <div class="w-1-2" >
                        <MSTextbox label="Tên tiếng anh" v-model="obj.AccountNameEnglish" :disable="isShow"/>
                    </div>
                </div>
                <div class="row-input">
                    <div class="w-1-2" style="display:flex;align-items:center">
                        <div class="w-1-2" style="padding:1.5px 12px 0px 0px;">
                            <BaseCBB label="Tài khoản tổng hợp" v-model="obj.AccountCodeRoot" :disable="isShow" :header="accountHead" :data="ListAccounts" :plus="false" :indexshow="1"/>
                        </div>
                        <div class="w-1-2" style="padding-top:4px">
                            <MSSelect :disable="isShow" v-model="obj.Propertie" label="Tính chất" :data="ListType" :required="true"/>
                        </div>
                    </div>
                </div>
                <div class="row-input">
                    <div class="cb-label">Diễn giải</div>
                </div>
                <div class="row-input">
                    <textarea class="explain" v-model="obj.Explain"></textarea>
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
                                         <MSSelect v-model="trackingDetails[0].value" :data="ListSupp" :disable="!trackingDetails[0].check"/>
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
                                         <MSSelect v-model="trackingDetails[n].value" :data="rules" :disable="!trackingDetails[n].check"/>
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
                                         <MSSelect v-model="trackingDetails[n+1].value" :data="rules" :disable="!trackingDetails[n+1].check"/>
                                     </div>
                                 </div>
                                </div>     
                             </div>
                         </div>
                    </el-collapse-item>
                 </el-collapse>
            </div>
            <div class="dialog-footer" v-show="!reset" :style="{width:formSize}" >
                <div class="divide"></div>
                <div class="btn-footer">
                    <div class="btn-right">
                        <el-tooltip class="item" effect="dark" :visible-arrow="false" content="Cất (Ctrl + S)" placement="top-start">
                            <button v-shortkey="['ctrl', 's']" @shortkey="btnSaveOnClick()" @click="btnSaveOnClick()"> Cất</button> 
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" :visible-arrow="false" content="Cất và thêm (Ctrl + Shift + S)" placement="top-start">
                            <button v-shortkey="['ctrl','shift' ,'s']" @shortkey="btnSaveAndAddOnClick()" class="save-and-add" @click="btnSaveAndAddOnClick()">Cất và thêm</button>
                            </el-tooltip>
                    </div>
                    <div class="btn-left">
                        <button @click="btnCloseOnClick()">Hủy</button>
                    </div>
                </div>
            </div>
        </el-drawer>
        <DialogNotification />
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

                //Theo dõi chi tiết
                trackingDetails:[ 
                    {check:false,value:"1",name:'Object',show:'Đối tượng'},
                    {check:false,value:true,name:'BankAccount',show:'Tài khoản ngân hàng'},

                    {check:false,value:"1",name:'ObjectGatherCost',show:'Đối tượng THCP'},
                    {check:false,value:"1",name:'Construct',show:'Công trình'},

                    {check:false,value:"1",name:'Order',show:'Đơn đặt hàng'},
                    {check:false,value:"1",name:'PurchaseSell',show:'Hợp đồng bán'},

                    {check:false,value:"1",name:'PurchaseBuy',show:'Hợp đồng mua'},
                    {check:false,value:"1",name:'ExpenseItem',show:'Khoản mục CP'},

                    {check:false,value:"1",name:'Unit',show:'Đơn vị'},
                    {check:false,value:"1",name:'StatisticalCode',show:'Mã thống kê'},
                ],

                drawer: false, // Form show hoặc ẩn
                reset:false, // reset nội dung form
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
                this.getAccounts();
                this.drawer = true;
                this.reset = false;
                setTimeout(()=>{
                    this.$refs.AccountCode.focusInput();
                },200)
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
                this.formMode = 'Edit';
                this.reset = false;
                setTimeout(()=>{
                    this.$refs.AccountCode.focusInput();
                },200)
            })

            busData.$on('duplicateAccount',(data)=>{
                this.obj = data;
                console.log(this.obj);
                for(let i=0;i<this.trackingDetails.length;i++){
                    if(this.obj[this.trackingDetails[i].name]){
                        this.trackingDetails[i].check = true;
                        this.trackingDetails[i].value = this.obj[this.trackingDetails[i].name];
                    }
                }
                this.drawer = true;
                this.obj.AccountId = null;
                this.obj.AccountCode = '';
            })

            busData.$on('dialogErrorClose',(errCode)=>{
                this.focusError(errCode);
            })

        },
        mounted(){
           
        },
        methods:{
           
            /**
             * Lấy danh sách tài khoản tổng hợp
             */
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

            

            /**
             * Validate dữ liệu trước khi đem cất
             */
            validate(){
                let err;
                if(!this.obj.AccountCode){
                    err = 'Số tài khoản không được bỏ trống';
                    busData.$emit('showDialogError',err,1);
                    return false
                }else if(!this.obj.AccountName){
                    err = 'Tên tài khoản không được bỏ trống';
                    busData.$emit('showDialogError',err,2);
                    return false
                }
                return true
            },
            /**
             * Focus vào ô nhập liệu bị lỗi cho người dùng
             */
            focusError(errCode){
                if(errCode == 1){
                    this.$refs.AccountCode.focusInput();
                } else if(errCode == 2){
                    this.$refs.AccountName.focusInput();
                }    
            },

            /**
             * Gọi API để cất dữ liệu
             */
            async callApiSaveData(isAdd){
                //gom dữ liệu - chi tiết theo dõi
                for(let i=0;i<this.trackingDetails.length;i++){
                    if(this.trackingDetails[i].check){
                        this.obj[this.trackingDetails[i].name] = this.trackingDetails[i].value;
                    }
                }
                //Call API
                let res;
                if(this.formMode == 'Add'){
                    res = await BaseAPI.Post('https://localhost:44363/api/accounts',this.obj);
                }else{
                    res = await BaseAPI.Put('https://localhost:44363/api/accounts',this.obj.AccountId,this.obj);
                }
                if(res){
                    if(res.data.Success == false){
                        //Lỗi gửi về từ server
                        busData.$emit('showDialogError',res.data.Message,res.data.ErrorCode);
                    }else{
                        //Gửi tín hiệu load lại data sang form AccountPage
                        this.$emit('reloadDataAccount');
                        //Phân hành động cho 2 sự kiện cất, cất và thêm
                        if(isAdd)   this.btnCloseOnClick();
                        else{ //Save and add
                            this.resetForm();
                            this.getAccounts();
                            
                            setTimeout(()=>{
                                this.reset = false;
                            },100)
                            setTimeout(()=>{
                                this.$refs.AccountCode.focusInput();
                            },200)
                        }   
                    }
                }
            },
            /**
             * Đưa form về trạng thái ban đầu
             */
            resetForm(){
                Object.assign(this.$data, this.$options.data());
                this.drawer = true;
                this.reset = true;
            },
            /**
             * Sự kiện thoát form
             */
            btnCloseOnClick(){
                this.resetForm();
                this.drawer=false;
            },
            /**
             * Sự kiện cho nút cất
             */
            btnSaveOnClick(){
                if(this.validate()){
                    this.callApiSaveData(true);
                }
            },
            /**
             * Sự kiện cho nút cất và thêm
             */
            btnSaveAndAddOnClick(){
                if(this.validate()){
                    this.callApiSaveData(false);
                }
            },
            /**
             * Thay đổi kích thước form 
             */
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
    height: calc(100% - 95px);
    padding: 10px 20px;
    position: relative;
    overflow-y: auto;
}
.content::-webkit-scrollbar{
    width: 2.5px;
    background: #fff;
}
.content::-webkit-scrollbar-thumb{
    background: #e0e0e0;
}

.dialog-footer{
    padding: 0px 15px;
    position: fixed;
    right: 0;
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
.cb-label{
    font-size: 12px;
    font-weight: 700;
    color: #212121;
    padding-bottom: 4px;
}
.item {
    margin:0px 4px;
}
.bottom {
    clear: both;
    text-align: center;
}
textarea.explain{
    width: 100%;
    height: 40px;
    padding:10px;
    border: 1px solid #babec5;
}
textarea.explain:focus{
    border-color: #2ca01c;
}
</style>