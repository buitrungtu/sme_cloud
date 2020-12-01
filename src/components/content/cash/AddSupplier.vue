<template>
    <div  v-shortkey="['esc']" @shortkey="btnCloseOnClick()">
        <div class="black-model" v-show="show"></div>
        <div class="dialog dialog-supplier" v-if="show">
        <header class="dialog-header">
            <div class="dialog-title">
                <div class="tilte-content" style="display:flex;align-items: center;">
                    <div class="title">Thông tin nhà cung cấp</div>
                    <div class="gr-radio">
                        <el-radio :disabled="review"  v-model="obj.IsPersonal" :label=false >Tổ chức</el-radio>
                        <el-radio :disabled="review" v-model="obj.IsPersonal" :label=true >Cá nhân</el-radio>
                    </div>
                    <div class="title-right">
                        <el-checkbox :disabled="review" v-model="obj.IsCustomer">Là khách hàng</el-checkbox>
                    </div>
                </div>
            </div>
            <div class="dialog-close">
                <div class="icon icon-help"></div>
                <el-tooltip class="item" effect="dark" :visible-arrow="false"	 content="Đóng (ESC)" placement="top-start">
                    <div @click="btnCloseOnClick()" class="icon icon-close"></div>
                </el-tooltip>
            </div>
        </header>
        <div class="dialog-content" v-if="!reset">
            <div class="dialog-body">
                <div class="body-info" v-show="obj.IsPersonal == false">
                    <div class="w-1-2 body-left">
                        <div class="row-input">
                            <div class="w-2-5" style="padding-right:12px;">
                                <MSTextbox :autofocus="true" v-model="obj.TaxCode"  :disabled="review" label="Mã số thuế"/>
                            </div>
                            <div class="w-3-5"> 
                                <MSTextbox ref="SupplierCode1" v-model="obj.SupplierCode" :disabled="review" label="Mã nhà cung cấp"  :required="true" />
                            </div>
                        </div>
                        <div class="row-input">
                            <MSTextbox ref="SupplierName1" v-model="obj.SupplierName" :disabled="review" label="Tên nhà cung cấp" :required="true" />
                        </div>
                        <div class="row-input" style="padding-bottom:0px">
                            <div class="cb-label">Địa chỉ </div>
                        </div>
                        <div class="row-input">
                            <textarea class="address" :disabled="review" v-model="obj.Address"></textarea>
                        </div>
                    </div> 
                    <div class="w-1-2" style="padding-right:2.3px">
                        <div class="row-input">
                            <div class="w-2-5" style="padding-right:12px;">
                                <MSTextbox  v-model="obj.Mobile" label="Điện thoại" :disabled="review"/>
                            </div>
                            <div class="w-3-5">
                                <MSTextbox  v-model="obj.Website" label="Website" :disabled="review"/>
                            </div>
                        </div>
                        <div class="row-input">
                            <BaseCBB :disable="review" v-model="obj.GroupSupplierCode" label="Nhóm nhà cung cấp" :header="headerGroupSupplies" :data="dataGroupSupplies" :indexshow=1 :multiple="true" mission="AddGropSupplier"/>
                        </div>
                        <div class="row-input">
                            <BaseCBB :disable="review" v-model="obj.EmployeeCode"  label="Nhân viên mua hàng" :header="headerEmployees" :data="dataEmployees" :indexshow=2 mission="AddEmployee"/>
                        </div>
                    </div>
                </div>

                <div class="body-info" v-show="obj.IsPersonal == true">
                    <div class="w-1-2 body-left">
                        <div class="row-input">
                            <div class="w-3-5" style="padding:2.5px 12px 0px 0px;">
                                <MSTextbox :disabled="review" ref="SupplierCode2" v-model="obj.SupplierCode" label="Mã nhà cung cấp"   v-bind:required="true" />
                            </div>
                            <div class="w-2-5" style="padding-top:2px">
                                <MSTextbox :disabled="review" v-model="obj.TaxCode" label="Mã số thuế"/>
                            </div>
                        </div>
                        <label class="label-input">Tên nhà cung cấp</label>
                        <div class="row-input" style="padding-bottom: 4px;">
                            <MSSelect :disable="review" v-model="obj.Vocative" :data="vocatives" style="width:200px; margin-right:12px;"  placeholder="Xưng hô"/>
                            <MSTextbox :disabled="review" ref="SupplierName2" v-model="obj.SupplierName"  placeholder="Họ và tên" style="padding-top:2.5px" />
                        </div>
                        <div class="row-input" style="padding-bottom:0px">
                            <div class="cb-label">Địa chỉ </div>
                        </div>
                        <div class="row-input">
                            <textarea class="address" :disabled="review" v-model="obj.Address"></textarea>
                        </div>
                    </div>
                    <div class="w-1-2" style="padding:2.3px 2.3px 0px 0px">
                        <div class="row-input">
                            <BaseCBB :disable="review" v-model="obj.GroupSupplierCode" :multiple="true" label="Nhóm nhà cung cấp" :header="headerGroupSupplies" :data="dataGroupSupplies" :indexshow=1  mission="AddGropSupplier"/>
                        </div>
                        <div class="row-input" style="padding-top:2.5px">
                            <BaseCBB :disable="review" v-model="obj.EmployeeCode"  label="Nhân viên mua hàng" :header="headerEmployees" :data="dataEmployees" :indexshow=2 mission="AddEmployee"/>
                        </div>
                    </div>
                </div>

                <SupplierTab :isPer="obj.IsPersonal" ref="SupplierTab" :root="obj" :isCus="obj.IsCustomer" :review="review"/> 
                
                <div class="dialog-footer" v-show="!review">
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
                 <div class="dialog-footer" v-show="review">
                    <div class="divide"></div>
                    <div class="btn-footer">
                        <div class="btn-right">
                            <el-tooltip class="item" effect="dark" content="Sửa (Ctrl + Shift + G)" placement="bottom">
                                <button v-shortkey="['ctrl','shift' ,'g']" @shortkey="review = false" class="save-and-add" @click="review = false">Sửa</button>
                            </el-tooltip>
                        </div>
                        <div class="btn-left">
                            <el-tooltip class="item" effect="dark" content="Tool tip nè" placement="top-start"/>
                            <button @click="btnCloseOnClick()">Hủy</button>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
            <AddGroupSupplier :visible="false"/>
            <div class="black-model-2" v-show="false"></div>
            <AddEmployee :visible="false"/>
        </div>
    </div>
</template>

<script>
import {busData} from '@/main.js'
import SupplierTab from '@/components/common/TabOrder/SupplierTab'
import AddGroupSupplier from './AddGroupSupplier'
import AddEmployee from './AddEmployee'
import MSTextbox from '@/components/common/MSTextbox'
import BaseCBB from '@/components/common/BaseCBB'
import MSSelect from '@/components/common/MSSelect'
import BaseAPI from '@/BaseAPI.js'
    export default {
        props:{
        },
        components:{
            SupplierTab,
            AddGroupSupplier,
            AddEmployee,
            MSTextbox,
            BaseCBB,
            MSSelect,
        },
        data(){
            return{
                
                show:false,// ẩn hiện form

                headerGroupSupplies:[{label:'Mã nhóm KH,NCC',width:'125'},{label:'Tên nhóm KH,NCC',width:'180'}],
                dataGroupSupplies:[],
                headerEmployees:[{label:'Mã nhân viên',width:'100'},{label:'Tên nhân viên',width:'200'}],
                dataEmployees:[],

                vocatives:[ //xưng hô
                    {value:'1',label:'Anh'},
                    {value:'2',label:'Chị'},
                    {value:'3',label:'Em'},
                    {value:'4',label:'Bạn'},
                    {value:'5',label:'Ông'},
                    {value:'6',label:'Bà'},
                    {value:'7',label:'Mr'},
                    {value:'8',label:'Mrs'},
                ],

                //dữ liệu gửi cho service
                obj:{
                    IsPersonal:false,
                    IsCustomer:false,
                },
                state:'Add', //Thêm hay sửa
                review:false, // chế độ xem không sửa
                reset:false // reset dữ liệu đã nhập trước đó
            }
        },
        created(){
            /**
             * Lắng nghe sự kiện show form
             * Author: BTTu(25/11/2020)
             */
            busData.$on('showFormAddSupplier',()=>{
                this.GetGroupSupplies();
                this.GetEmployees();
                this.show = true;
            }),

            /**
             * Lắng nghe sự kiện đóng form lỗi
             * Author: BTTu(25/11/2020)
             */
            busData.$on('dialogErrorClose',(errCode)=>{
                this.focusError(errCode);
            })
        },
      
        mounted(){
            /**
             * Nhận sự kiện edit supplier từ form SupplierPage
             */
            busData.$on('editSupplier',(supplier)=>{
                this.obj = supplier;
                this.state = 'Edit'
                this.show = true;
                this.review = true; //để chế độ xem không cho sửa
            })
        },
        methods:{

            /**
             * Lấy danh sách nhóm khách hàng
             * Author: BTTu(25/11/2020)
             */
            async GetGroupSupplies(){
                let res = await BaseAPI.Get('https://localhost:44363/api/GroupSuppliers'); 
                if(res && res.data){
                    this.dataGroupSupplies = res.data.map((item)=>{
                        return{
                            'GroupSupplierCode':item.GroupSupplierCode,
                            'GroupSupplierName':item.GroupSupplierName
                        }
                    })
                }
            },
            
            /**
             * Lấy danh sách nhân viên
             * Author: BTTu(25/11/2020)
             */
            async GetEmployees(){
                let res = await BaseAPI.Get('https://localhost:44363/api/employees'); 
                if(res && res.data){
                    this.dataEmployees = res.data.map((item)=>{
                        return{
                            'EmployeeCode':item.EmployeeCode,
                            'EmployeeName':item.EmployeeName
                        }
                    })
                }
            },
            
            /**
             * Focus vào những ô nhập liệu lỗi
             * Author: BTTu(25/11/2020)
             * @param {String,Number} errCode 
             */
            focusError(errCode){
                if(errCode == 1){
                    if(!this.obj.IsPersonal){
                        this.$refs.SupplierCode1.focusInput();
                    }else{
                        this.$refs.SupplierCode2.focusInput();
                    }
                } else if(errCode == 2){
                     if(!this.obj.IsPersonal){
                        console.log(this.$refs.SupplierName1)
                        this.$refs.SupplierName1.focusInput();
                    }else{
                        this.$refs.SupplierName2.focusInput();
                    }
                }    
            },
            /**
             * Validate dữ liệu trước khi gửi lên service 
             * Author: BTTu(25/11/2020)
             */
            validate(){
                let err = '';
                if(!this.obj.SupplierCode){
                    err = 'Mã nhà cung cấp không được bỏ trống';
                    busData.$emit('showDialogError',err,1);
                    return false;
                }else if(!this.obj.SupplierName){
                    err = 'Tên nhà cung cấp không được bỏ trống';
                    busData.$emit('showDialogError',err,2);
                    return false;
                }
                return true;
            },
            //Event 

            /**
             * Gọi API cất dữ liệu
             * Author: BTTu(25/11/2020)
             * @param {Boolean} isAdd
             */
            async callApiSaveData(isAdd){
                //Xử lý dữ liệu
                //Chuyển trường BankAccount về dạng json
                this.obj.BankAccount = JSON.stringify(this.$refs.SupplierTab.tableBankAccount);
                //Chuyển trường DeliveryAddress về dạng mảng
                this.obj.DeliveryAddress = this.$refs.SupplierTab.tableDeliveryAddress.map(item=>{
                    return item.Address;
                });
                 //Chuyển trường IdentityDate về dạng ngày tháng tiêu chuẩn (yyyy/mm/dd)
                if(this.obj.IdentityDate){  
                    this.obj.IdentityDate = this.obj.IdentityDate.split('/').reverse().join('/');
                }
                //Xóa hết dấu . (format money) đi
                if(this.obj.MaxDebt)
                    this.obj.MaxDebt = this.obj.MaxDebt.replace(/\./g,'');
                
                //Gọi API
                let res;
                if(this.state == 'Add'){
                    res = await BaseAPI.Post('https://localhost:44363/api/suppliers',this.obj); 
                }else{ // this.state == EDIT
                    res = await BaseAPI.Put('https://localhost:44363/api/suppliers',this.obj.SupplierId,this.obj); 
                }
                if(res){
                    if(res.data.Success == false){
                        //Lỗi gửi về từ server, truyền thông tin lỗi cho form DialogError
                        busData.$emit('showDialogError',res.data.Message,res.data.ErrorCode);
                    }else{
                        //Gửi tín hiệu load lại data sang form SupplierPage
                        busData.$emit('reloadData');
                        //Phân hành động cho 2 sự kiện cất, cất và thêm
                        if(isAdd)   this.btnCloseOnClick();
                        else{
                            this.resetForm();
                        }   
                    }
                }
            },

            /**
             * Sự kiện khi click nút cất
             * Author: BTTu(25/11/2020)
             */
            btnSaveOnClick(){
                //Check Require
                if(this.validate()){
                    this.callApiSaveData(true);
                }
            },

            /**
             * Sự kiện khi click nút cất và thêm
             * Author: BTTu(25/11/2020)
             */
            btnSaveAndAddOnClick(){
                if(this.validate()){
                    this.callApiSaveData(false);
                }
            },

            /**
             * Reset lại data của component
             * Author: BTTu(25/11/2020)
             */
            resetForm(){
                Object.assign(this.$data, this.$options.data());
                this.show = true;
                this.reset = true;
                setTimeout(()=>{
                    this.reset = false;
                },100)
                this.GetGroupSupplies();
                this.GetEmployees();
            },

            /**
             * Sự kiện thoát form
             */
            btnCloseOnClick(){
                // trước khi thoát thì reset hết thông tin trên form đó
                this.resetForm();
                this.show = false;
            },
        },
    }
</script>

<style scoped>
.dialog.dialog-supplier{
    min-width: 900px;
    transition: all .2s;
    z-index: 5;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    opacity: 1;
}
.gr-radio{
    display:flex;padding-left: 1rem!important;padding-right: 1rem!important;
    justify-content: center;
    align-items: center;
}
.radio{
    display:flex;
    margin-right: 20px;
}
.radio input{
    width: 18px;
    height: 18px;
    display: block;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid #afafaf;
    z-index: 1;
    justify-content: center;
    margin-right: 10px;
}
.radio input:checked{
    border: 1px solid #2ca01c;
    background: #2ca01c;
}
.title-right input{
    width: 18px;
    height: 18px;
    margin-right: 10px;
    border: 1px solid #afafaf;
}
.dialog-footer button:focus:not(.save-and-add){
    background: #d2d3d6;
}
  
.item {
    margin:0px 4px;
}
.bottom {
    clear: both;
    text-align: center;
}
.cb-label{
    font-size: 12px;
    font-weight: 700;
    color: #212121;
    padding-bottom: 4px;
}
textarea.address{
    width: 100%;
    height: 40px;
    padding:10px;
    border: 1px solid #babec5;
}
textarea.address:focus{
    border-color: #2ca01c;
}
</style>