<template>
    <div>
        <div class="black-model" v-show="show"></div>
        <div class="dialog dialog-supplier" v-if="show">
        <header class="dialog-header">
            <div class="dialog-title">
                <div class="tilte-content" style="display:flex;align-items: center;">
                    <div class="title">Thông tin nhà cung cấp</div>
                    <div class="gr-radio">
                        <el-radio :disabled="isShow"  v-model="obj.IsPersonal" :label=false >Tổ chức</el-radio>
                        <el-radio :disabled="isShow" v-model="obj.IsPersonal" :label=true >Cá nhân</el-radio>
                    </div>
                    <div class="title-right">
                        <el-checkbox :disabled="isShow" v-model="obj.IsCustomer">Là khách hàng</el-checkbox>
                    </div>
                </div>
            </div>
            <div class="dialog-close">
                <div class="icon icon-help"></div>
                <el-tooltip class="item" effect="dark" :visible-arrow="false"	 content="Đóng (ESC)" placement="top-start">
                    <div @click="show = false" class="icon icon-close"></div>
                </el-tooltip>
            </div>
        </header>
        <div class="dialog-content">
            <div class="dialog-body">
                <div class="body-info" v-show="obj.IsPersonal == false">
                    <div class="w-1-2 body-left">
                        <div class="row-input">
                            <div class="w-2-5" style="padding-right:12px;">
                                <MSTextbox :autofocus="true" :value="obj.TaxCode" @valueChanged="obj.TaxCode = $event" :disable="isShow" label="Mã số thuế"/>
                            </div>
                            <div class="w-3-5"> 
                                <MSTextbox ref="SupplierCode1" :value="obj.SupplierCode" @valueChanged="obj.SupplierCode = $event" :disable="isShow" label="Mã nhà cung cấp"  :required="true" />
                            </div>
                        </div>
                        <div class="row-input">
                            <MSTextbox ref="SupplierName1" :value="obj.SupplierName" @valueChanged="obj.SupplierName = $event" :disable="isShow" label="Tên nhà cung cấp" :required="true" />
                        </div>
                        <div class="row-input">
                            <MSTextbox :value="obj.Address" @valueChanged="obj.Address = $event" v-bind:textarea="true" label="Địa chỉ" :disable="isShow" style="height:60px" placeholder="VD:Số 82 Duy Tân, Dịch Vọng Hậu, Cầu Giấy, Hà Nội"/>
                        </div>
                    </div> 
                    <div class="w-1-2" style="padding-right:2.3px">
                        <div class="row-input">
                            <div class="w-2-5" style="padding-right:12px;">
                                <MSTextbox  :value="obj.Mobile" @valueChanged="obj.Mobile = $event" label="Điện thoại" :disable="isShow"/>
                            </div>
                            <div class="w-3-5">
                                <MSTextbox  :value="obj.Website" @valueChanged="obj.Website = $event" label="Website" :disable="isShow"/>
                            </div>
                        </div>
                        <div class="row-input">
                            <BaseCBB :disable="isShow" :valueArr="obj.GroupSupplierCode" @valueCBBChanged="obj.GroupSupplierCode = $event" label="Nhóm nhà cung cấp" :header="headerGroupSupplies" :data="dataGroupSupplies" :indexshow=1 :multiple="true" mission="AddGropSupplier"/>
                        </div>
                        <div class="row-input">
                            <BaseCBB :disable="isShow" :value="obj.EmployeeCode" @valueCBBChanged="obj.EmployeeCode = $event" label="Nhân viên mua hàng" :header="headerEmployees" :data="dataEmployees" :indexshow=2 mission="AddEmployee"/>
                        </div>
                    </div>
                </div>

                <div class="body-info" v-show="obj.IsPersonal == true">
                    <div class="w-1-2 body-left">
                        <div class="row-input">
                            <div class="w-3-5" style="padding:2.5px 12px 0px 0px;">
                                <MSTextbox :disable="isShow" ref="SupplierCode2" :value="obj.SupplierCode" @valueChanged="obj.SupplierCode = $event" label="Mã nhà cung cấp"   v-bind:required="true" />
                            </div>
                            <div class="w-2-5" style="padding-top:2px">
                                <MSTextbox :disable="isShow" :value="obj.TaxCode" @valueChanged="obj.TaxCode = $event" label="Mã số thuế"/>
                            </div>
                        </div>
                        <label class="label-input">Tên nhà cung cấp</label>
                        <div class="row-input" style="padding-bottom: 4px;">
                            <MSSelect :disable="isShow" :value="obj.Vocative"  @valueSLChanged="obj.Vocative = $event" :data="vocatives" style="width:200px; margin-right:12px;"  placeholder="Xưng hô"/>
                            <MSTextbox :disable="isShow" ref="SupplierName2" :value="obj.SupplierName" @valueChanged="obj.SupplierName = $event" placeholder="Họ và tên" style="padding-top:2.5px" />
                        </div>
                        <div class="row-input">
                            <MSTextbox :disable="isShow" :value="obj.Address" @valueChanged="obj.Address = $event" v-bind:textarea="true" label="Địa chỉ" style="height:60px" placeholder="VD:Số 82 Duy Tân, Dịch Vọng Hậu, Cầu Giấy, Hà Nội"/>
                        </div>
                    </div>
                    <div class="w-1-2" style="padding:2.3px 2.3px 0px 0px">
                        <div class="row-input">
                            <BaseCBB :disable="isShow" :valueArr="obj.GroupSupplierCode" @valueCBBChanged="obj.GroupSupplierCode = $event" :multiple="true" label="Nhóm nhà cung cấp" :header="headerGroupSupplies" :data="dataGroupSupplies" :indexshow=1  mission="AddGropSupplier"/>
                        </div>
                        <div class="row-input" style="padding-top:2.5px">
                            <BaseCBB :disable="isShow" :value="obj.EmployeeCode" @valueCBBChanged="obj.EmployeeCode = $event" label="Nhân viên mua hàng" :header="headerEmployees" :data="dataEmployees" :indexshow=2 mission="AddEmployee"/>
                        </div>
                    </div>
                </div>

                <SupplierTab :isPer="obj.IsPersonal" :root="obj" :isCus="obj.IsCustomer" :isShow="isShow"/> 
                
                <div class="dialog-footer" v-show="!isShow">
                    <div class="divide"></div>
                    <div class="btn-footer">
                        <div class="btn-right">
                            <el-tooltip class="item" effect="dark" :visible-arrow="false" content="Cất (Ctrl + S)" placement="top-start">
                                <button @click="btnSaveOnClick()" > Cất</button>
                            </el-tooltip>
                            <el-tooltip class="item" effect="dark" :visible-arrow="false" content="Cất và thêm (Ctrl + Shift + S)" placement="top-start">
                                <button class="save-and-add" @click="btnAddAndSaveOnClick()">Cất và thêm</button>
                             </el-tooltip>
                        </div>
                        <div class="btn-left">
                            <button @click="show = false">Hủy</button>
                        </div>  
                    </div>
                </div>
                 <div class="dialog-footer" v-show="isShow">
                    <div class="divide"></div>
                    <div class="btn-footer">
                        <div class="btn-right">
                            <el-tooltip class="item" effect="dark" content="Bottom Center prompts info" placement="bottom">
                                <button class="save-and-add" @click="isShow = false">Sửa</button>
                            </el-tooltip>
                        </div>
                        <div class="btn-left">
                            <el-tooltip class="item" effect="dark" content="Tool tip nè" placement="top-start"/>
                            <button @click="show = false">Hủy</button>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
            <AddGroupSupplier :visible="showFormAddGroupSupplier"/>
            <div class="black-model-2" v-show="showFormAddGroupSupplier || showFormAddEmployee"></div>
            <AddEmployee :visible="showFormAddEmployee"/>
        </div>
        <DialogError @dialogErrorClose="focusError($event)"/>
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
                show:false,
                showDialogError:false,
                checkRequire:false,
                showFormAddGroupSupplier:false,
                showFormAddEmployee:false,
                headerGroupSupplies:[{label:'Mã nhóm KH,NCC',width:'150'},{label:'Tên nhóm KH,NCC',width:'200'}],
                dataGroupSupplies:[],
                headerEmployees:[{label:'Mã nhân viên',width:'100'},{label:'Tên nhân viên',width:'200'}],
                dataEmployees:[],
                vocatives:[
                    {value:'1',label:'Anh'},
                    {value:'2',label:'Chị'},
                    {value:'3',label:'Em'},
                    {value:'4',label:'Bạn'},
                    {value:'5',label:'Ông'},
                    {value:'6',label:'Bà'},
                    {value:'7',label:'Mr'},
                    {value:'8',label:'Mrs'},
                ],
                //data của đối tượng
                obj:{
                    IsPersonal:false,
                    IsCustomer:false
                },
                state:'Add',
                supplierID:'',
                triggerErr:[false,false],
                isShow:false     
            }
        },
        created(){
            busData.$on('showFormAddSupplier',()=>{
                this.show = true;
                this.resetForm();
            })
            
            busData.$on('showDialog',(mission)=>{
                if(mission == 'AddGropSupplier'){
                    this.showFormAddGroupSupplier = true;
                }else if(mission == 'AddEmployee'){
                    this.showFormAddEmployee = true;
                }
            })
            busData.$on('closeDialogGroupSupplier',()=>{
                this.showFormAddGroupSupplier = false;
            })
            busData.$on('closeDialogEmployee',()=>{
                this.showFormAddEmployee = false;
            })
        },
      
        mounted(){
            busData.$on('editSupplier',(SuppID)=>{
                this.supplierID = SuppID;
                this.GetSupplier(this.supplierID);
            })
            this.GetGroupSupplies();
            this.GetEmployees();
            document.addEventListener('keyup', this.keyupHandler)
        },
        methods:{
            //API
            async GetGroupSupplies(){
                let res = await BaseAPI.Get('https://localhost:44363/api/GroupSuppliers'); 
                if(res && res.data){
                    this.dataGroupSupplies =res.data.map((item)=>{
                        return{
                            'GroupSupplierCode':item.GroupSupplierCode,
                            'GroupSupplierName':item.GroupSupplierName
                        }
                    })
                }
            },
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
           
            async GetSupplier(id){
                let res = await BaseAPI.GetObj('https://localhost:44363/api/suppliers',id); 
                if(res && res.data){
                    this.obj = res.data;
                    this.state = 'Edit'
                    this.show = true;
                    this.isShow = true;
                }
            },

            //Xử lý sự kiện focus vào các ô nhập liệu lỗi
            focusError(errCode){
                if(errCode == 1){
                    if(!this.obj.IsPersonal){
                        this.$refs.SupplierCode1.focusInput();
                    }else{
                        this.$refs.SupplierCode2.focusInput();
                    }
                } else if(errCode == 2){
                     if(!this.obj.IsPersonal){
                        this.$refs.SupplierName1.focusInput();
                    }else{
                        this.$refs.SupplierName2.focusInput();
                    }
                }    
            },
            //Event 
            async btnSaveOnClick(){
                var err = ''
                //Check Require
                if(!this.obj.SupplierCode){
                    err = 'Mã nhà cung cấp không được bỏ trống';
                    busData.$emit('showDialogError',err,1);
                }else if(!this.obj.SupplierName){
                    err = 'Tên nhà cung cấp không được bỏ trống';
                    busData.$emit('showDialogError',err,2);
                    
                }else{
                    for(var propName in this.obj){
                        if(this.obj[propName] === undefined){
                            delete this.obj[propName];
                        }
                    }
                    //Xử lý dữ liệu
                    this.obj.BankAccount = JSON.stringify(this.obj.BankAccount);
                    this.obj.DeliveryAddress = this.obj.DeliveryAddress.map(item=>{
                        return item.Address;
                    });
                    var res;
                    if(this.state == 'Add'){
                        res = await BaseAPI.Post('https://localhost:44363/api/suppliers',this.obj); 
                    }else{ //EDIT
                        res = await BaseAPI.Put('https://localhost:44363/api/suppliers',this.supplierID,this.obj); 
                    }
                    if(res){
                        debugger;
                        if(res.data.Success == false){
                            busData.$emit('showDialogError',res.data.Message,res.data.ErrorCode);
                        }else{
                            busData.$emit('reloadData');
                            this.show = false;
                            this.resetForm();
                        }
                    }
                }
            },
            async btnAddAndSaveOnClick(){
                var err = ''
                //Check Require
                if(!this.obj.SupplierCode){
                    err = 'Mã nhà cung cấp không được bỏ trống';
                    busData.$emit('showDialogError',err);
                    this.errCode=true;

                }else if(!this.obj.SupplierName){
                    err = 'Tên nhà cung cấp không được bỏ trống';
                    busData.$emit('showDialogError',err);
                    this.errName=true;
                }else{
                    for(var propName in this.obj){
                        if(this.obj[propName] === undefined){
                            delete this.obj[propName];
                        }
                    }
                    //Xử lý dữ liệu
                    this.obj.BankAccount = JSON.stringify(this.obj.BankAccount);
                    this.obj.DeliveryAddress = this.obj.DeliveryAddress.map(item=>{
                        return item.Address;
                    });
                    var res;
                    if(this.state == 'Add'){
                        res = await BaseAPI.Post('https://localhost:44363/api/suppliers',this.obj); 
                    }else{ //EDIT
                        res = await BaseAPI.Put('https://localhost:44363/api/suppliers',this.supplierID,this.obj); 
                    }
                    if(res && res.status){
                        if(typeof(res.data) === "string" && res.data != ""){
                            busData.$emit('showDialogError',res.data);
                        }else{
                            this.show = false;
                            this.resetForm();
                            busData.$emit('reloadData');
                            this.show = true;
                        }
                    }
                }
            },
            resetForm(){
                Object.assign(this.$data, this.$options.data())
            },
           
             //Xử lý phím tắt
            keyupHandler(event){
                if (event.ctrlKey || event.metaKey) {
                    var c = event.which || event.keyCode; // get key code
                    switch(c){
                        case 83: //block Ctrl+S
                            event.preventDefault();    
                            break; 
                        case 82: //block Ctrl+R
                            event.preventDefault();   
                            break;   
                    }
                }
                if(event.code === 'Escape') {
                    this.show = false;
                }
                else if(event.ctrlKey && event.key==='s'){
                    event.preventDefault();
                    event.stopPropagation();
                    this.btnSaveOnClick();
                }else if(event.ctrlKey && event.key === 'Shift' && event.key==='s'){
                    console.log('dsadsadsa');
                    //this.btnAddAndSaveOnClick();
                }
            },
          
        },
      
    }
</script>

<style scoped>
.dialog.dialog-supplier{
    min-width: 900px;
    max-width: 900px;
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
</style>