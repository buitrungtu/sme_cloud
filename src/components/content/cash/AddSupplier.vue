<template>
    <div class="dialog dialog-supplier" v-if="show">
       <header class="dialog-header">
           <div class="dialog-title">
               <div class="tilte-content" style="display:flex;align-items: center;">
                   <div class="title">Thông tin nhà cung cấp</div>
                   <div class="gr-radio">
                       <el-radio v-model="obj.IsPersonal" :label=false >Tổ chức</el-radio>
                        <el-radio v-model="obj.IsPersonal" :label=true >Cá nhân</el-radio>
                   </div>
                   <div class="title-right">
                        <el-checkbox v-model="obj.IsCustomer" @change="cusChange()">Là khách hàng</el-checkbox>
                   </div>
               </div>
           </div>
           <div class="dialog-close">
               <div class="icon icon-help"></div>
               <div @click="btnCloseOnClick()" class="icon icon-close"></div>
           </div>
       </header>
       <div class="dialog-content">
           <div class="dialog-body">
            <div class="body-info" v-show="obj.IsPersonal == false">
                <div class="w-1-2 body-left">
                    <div class="row-input">
                        <div class="w-2-5" style="padding:2.5px 12px 0px 0px;">
                            <MSTextbox fildname :value="obj.TaxCode" @valueChanged="obj.TaxCode = $event" label="Mã số thuế"/>
                        </div>
                        <div class="w-3-5">
                            <MSTextbox :value="obj.SupplierCode" @valueChanged="obj.SupplierCode = $event" label="Mã nhà cung cấp"  v-bind:required="true"/>
                        </div>
                    </div>
                    <div class="row-input">
                        <MSTextbox :value="obj.SupplierName" @valueChanged="obj.SupplierName = $event" label="Tên nhà cung cấp" v-bind:required="true" />
                    </div>
                    <div class="row-input">
                        <MSTextbox :value="obj.Address" @valueChanged="obj.Address = $event" v-bind:textarea="true" label="Địa chỉ" style="height:60px" placeholder="VD:Số 82 Duy Tân, Dịch Vọng Hậu, Cầu Giấy, Hà Nội"/>
                    </div>
                </div> 
                <div class="w-1-2" style="padding:2.3px 2.3px 0px 0px">
                    <div class="row-input" style="margin-bottom:1.5px">
                        <div class="w-2-5" style="padding-right: 12px;">
                            <MSTextbox :value="obj.Mobile" @valueChanged="obj.Mobile = $event" label="Điện thoại"/>
                        </div>
                        <div class="w-3-5">
                            <MSTextbox :value="obj.Website" @valueChanged="obj.Website = $event" label="Website"/>
                        </div>
                    </div>
                    <div class="row-input">
                        <BaseCBB :value="obj.GroupSupplierCode" @valueCBBChanged="obj.GroupSupplierCode = $event" label="Nhóm nhà cung cấp" :header="headeGroupSupplies" :data="dataGroupSupplies" :indexshow=1 :multiple="true" mission="AddGropSupplier"/>
                    </div>
                    <div class="row-input">
                        <BaseCBB :value="obj.EmployeeCode" @valueCBBChanged="obj.EmployeeCode = $event" label="Nhân viên mua hàng" :header="headeEmployees" :data="dataEmployees" :indexshow=2 mission="AddEmployee"/>
                    </div>
                </div>
            </div>

            <div class="body-info" v-show="obj.IsPersonal == true">
                <div class="w-1-2 body-left">
                    <div class="row-input">
                        <div class="w-3-5" style="padding-right: 12px;">
                            <MSTextbox label="Mã nhà cung cấp" value="ĐIỆN LỰC ĐĂK LĂK1" v-bind:required="true"/>
                        </div>
                        <div class="w-2-5" style="padding-top:2px">
                            <MSTextbox label="Mã số thuế"/>
                        </div>
                    </div>
                    <label class="label-input">Tên nhà cung cấp</label>
                    <div class="row-input">
                    <div class="row-input" style="padding-bottom: 4px;">
                            <MSSelect :data="vocatives" style="width:116px; margin-right:12px;"  placeholder="Xưng hô"/>
                            <MSTextbox style="width:calc(100% - 116px);padding-top:3px" placeholder="Họ và tên"/> 
                        </div>
                    </div>
                    <div class="row-input">
                        <MSTextbox v-bind:textarea="true" label="Địa chỉ" style="height:60px" placeholder="VD: Số 82 Duy Tân, Dịch Vọng Hậu, Cầu giấy, Hà Nội"/>
                    </div>
                </div>
                <div class="w-1-2" style="padding:2.3px 2.3px 0px 0px">
                    <div class="row-input">
                        <BaseCBB label="Nhóm nhà cung cấp" :header="headeGroupSupplies" :data="dataGroupSupplies" :indexshow=1 mission="AddGropSupplier"/>
                    </div>
                    <div class="row-input" style="padding-top:2.5px">
                        <BaseCBB label="Nhân viên mua hàng" :header="headeEmployees" :data="dataEmployees" :indexshow=2 mission="AddEmployee"/>
                    </div>
                </div>
            </div>

            <SupplierTab :isPer="obj.IsPersonal" :get='save' :root="obj" @DataFromTabOrder="obj = $event"/> 
            
            <div class="dialog-footer">
                <div class="divide"></div>
                <div class="btn-footer">
                    <div class="btn-left">
                        <button @click="btnCloseOnClick()">Hủy</button>
                    </div>
                    <div class="btn-right">
                        <button @click="btnSaveOnClick()"> Cất</button>
                        <button class="save-and-add">Cất và thêm</button>
                    </div>
                </div>
            </div>
           </div>
       </div>
        <AddGroupSupplier :visible="showFormAddGroupSupplier"/>
        <div class="black-model-2" v-show="showFormAddGroupSupplier || showFormAddEmployee"></div>
        <AddEmployee :visible="showFormAddEmployee"/>
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
import axios from 'axios';
    export default {
        props:{
            state:String,
        },
        components:{
            SupplierTab,
            AddGroupSupplier,
            AddEmployee,
            MSTextbox,
            BaseCBB,
            MSSelect
        },
        data(){
            return{
                show:false,
                picked:'1',
                showFormAddGroupSupplier:false,
                showFormAddEmployee:false,
                headeGroupSupplies:[{label:'Mã nhóm KH,NCC',width:'150'},{label:'Tên nhóm KH,NCC',width:'200'}],
                dataGroupSupplies:[],
                headeEmployees:[{label:'Mã nhân viên',width:'100'},{label:'Tên nhân viên',width:'200'}],
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
                    IsCustomer:false,
                    SupplierCode:'NCC010'
                },
                
                save:false
            }
        },
        created(){

            busData.$on('showFormAddSupplier',()=>{
                this.show = true;
            })
            busData.$on('editSupplier',(SuppID)=>{
                axios({
                    methods:'GET',
                    url:'https://localhost:44363/api/suppliers/' + SuppID
                }).then(res => {
                    this.obj = res.data;
                    this.show = true;
                })
            })
            
            axios.get('https://localhost:44363/api/GroupSuppliers')
                .then(res =>{
                    this.dataGroupSupplies = res.data.map((item)=>{
                        return{
                            'GroupSupplierCode':item.groupSupplierCode,
                            'GroupSupplierName':item.groupSupplierName
                        }
                    })
                }).catch(err =>{
                    console.log(err);
                })

             axios.get('https://localhost:44363/api/employees')
                .then(res =>{
                    this.dataEmployees = res.data.map((item)=>{
                        return{
                            'EmployeeCode':item.employeeCode,
                            'EmployeeName':item.employeeName
                        }
                    })
                }).catch(err =>{
                    console.log(err);
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
            
            if(this.state == 'Edit'){ // form sửa
                // lấy dữ liệu từ serve
                axios({
                    methods:'GET',
                    url:'https://localhost:44346/api/Suppliers/' + this.supplierID,
                }).then(function(res){
                    console.log(res.data);
                }).catch(function(err){
                    console.log(err);
                })
            }
        }
        ,methods:{
            btnSaveOnClick(){
                this.save = true;
                console.log(this.obj);
                 for(var propName in this.obj){
                    if(this.obj[propName] === undefined){
                        delete this.obj[propName];
                    }
                }
                let self = this;
                //gọi api thêm
                // axios.post('https://localhost:44363/api/suppliers',{data:JSON.stringify(self.obj)})
                //     .then(res =>{
                //         console.log(res);
                //     }).catch(err=>{
                //         console.log(err);
                //     })
                
                axios({
                    method:'POST',
                    url:'https://localhost:44363/api/suppliers',
                    data:JSON.stringify(self.obj),
                    contentType: "application/json",
                    dataType: "json",
                }).then(res =>{
                    console.log(res)
                })
                this.btnCloseOnClick();
            },
            btnCloseOnClick(){
               busData.$emit('closeDialogSupplier');
               this.show = false;
            },
            cusChange(){
               busData.$emit('changeForm',this.obj.IsCustomer);
            }

        }
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

</style>