<template>
    <div class="dialog dialog-supplier">
       <header class="dialog-header">
           <div class="dialog-title">
               <div class="tilte-content" style="display:flex;align-items: center;">
                   <div class="title">Thông tin nhà cung cấp</div>
                   <div class="gr-radio">
                       <el-radio v-model="picked" checked label="1">Tổ chức</el-radio>
                        <el-radio v-model="picked" label="2">Cá nhân</el-radio>
                   </div>
                   <div class="title-right">
                        <el-checkbox v-model="isCus">Là khách hàng</el-checkbox>
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

                <InfoOrganization v-if="picked == '1'"/>
                <InfoPersonal v-if="picked == '2'"/>
                <SupplierTab :isPer="picked"/> 
                 
               <div class="dialog-footer">
                   <div class="divide"></div>
                   <div class="btn-footer">
                       <div class="btn-left">
                           <button @click="btnCloseOnClick()">Hủy</button>
                       </div>
                       <div class="btn-right">
                           <button>Cất</button>
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
import InfoOrganization from './SupplierInfo/InfoOrganization'
import InfoPersonal from './SupplierInfo/InfoPersonal'
import AddGroupSupplier from './AddGroupSupplier'
import AddEmployee from './AddEmployee'
import axios from 'axios';

    export default {
        props:{
            state:String,
            supplierID:String
        },
        components:{
            SupplierTab,
            InfoOrganization,
            InfoPersonal,
            AddGroupSupplier,
            AddEmployee
        },
        data(){
            return{
                picked:'1',
                isCus:false,
                showFormAddGroupSupplier:false,
                showFormAddEmployee:false
            }
        },
        created(){
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
            btnCloseOnClick(){
               busData.$emit('closeDialogSupplier');
            }


        },watch:{
            isCus:function(){
                busData.$emit('changeForm',this.isCus);
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