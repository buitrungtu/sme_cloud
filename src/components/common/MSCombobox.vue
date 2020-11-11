<template>
    <div class="combobox">
        <div class="cb-label">{{this.label}} <span style="color:red" v-show="required">*</span> </div>
        <el-select
            v-model="value"
            filterable
            remote
            reserve-keyword
            placeholder=""
            :loading="loading"
            popper-class="hiden"
            size="small"
        >
            <el-option :value="1" class="cb-header">
                <span style="float: left; width:100px">Đối tượng</span>
                <span style="float: left; width:200px">Tên đối tượng</span>
                <span style="float: left; width:120px">Mã số thuế</span>
                <span style="float: left; width:200px">Địa chỉ</span>
                <span style="float: left; width:50px; margin-right:10px">Điện thoại</span>
            </el-option>

            <div style="margin-top:40px"></div>
            <el-option
                v-for="item in objTest"
                :key="item.ID"
                :value="item.ID"
                >
                <span style="float: left; width:100px">{{ item.Customer }}</span>
                <span style="float: left; width:200px">{{ item.Name }}</span>
                <span style="float: left; width:120px">{{ item.TaxCode }}</span>
                <span style="float: left; width:200px">{{ item.Address }}</span>
                <span style="float: left; width:50px; margin-right:10px">{{ item.Mobile }}</span>

            </el-option>
        </el-select>
       <div class="cb-action">
            <div class="btn-add" @click="showAddSupplierDialog()">
                <div class="icon icon-add"></div>
            </div>
            <div class="btn-option">
                <div class="icon icon-down"></div>
            </div>
        </div>
    </div>
</template>

<script>
import {busData} from '@/main.js';
    export default {
        props:{
            label:String,
            mission:String,
            required:Boolean
        },
        data(){
            return{
                isHide:true,
                options: [],
                value: [],
                list: [],
                loading: false,
                objTest: [
                    {
                    ID:1,
                    Customer: 'DVTUAN',
                    Name: 'ĐINH VĂN TUẤN',
                    TaxCode: '',
                    Address: 'Tây Tựu',
                    Mobile:""
                    },  {
                        ID:2,
                    Customer: 'BTTu',
                    Name: 'ĐINH VĂN TUẤN',
                    TaxCode: '132135645',
                    Address: 'Tây Tựu',
                    Mobile:""
                    },
                     {
                         ID:3,
                    Customer: 'NBLuong',
                    Name: 'ĐINH VĂN TUẤN',
                    TaxCode: '',
                    Address: 'Tây Tựu',
                    Mobile:""
                    },
                     {
                         ID:4,
                    Customer: 'NBHoang',
                    Name: 'ĐINH VĂN TUẤN',
                    TaxCode: '',
                    Address: 'Tây Tựu',
                    Mobile:""
                    },
                     {
                         ID:5,
                    Customer: 'NVManh',
                    Name: 'ĐINH VĂN TUẤN',
                    TaxCode: '',
                    Address: 'Tây Tựu',
                    Mobile:""
                    },
                     {
                         ID:6,
                    Customer: 'NPTuan',
                    Name: 'ĐINH VĂN TUẤN',
                    TaxCode: '',
                    Address: 'Tây Tựu',
                    Mobile:""
                    },
                    {
                         ID:7,
                    Customer: 'NPTuan',
                    Name: 'ĐINH VĂN TUẤN',
                    TaxCode: '',
                    Address: 'Tây Tựu',
                    Mobile:""
                    },
                    {
                         ID:8,
                    Customer: 'NPTuan',
                    Name: 'ĐINH VĂN TUẤN',
                    TaxCode: '',
                    Address: 'Tây Tựu',
                    Mobile:""
                    },
                    {
                         ID:9,
                    Customer: 'NPTuan',
                    Name: 'ĐINH VĂN TUẤN',
                    TaxCode: '',
                    Address: 'Tây Tựu',
                    Mobile:""
                    },
                    {
                         ID:10,
                    Customer: 'NPTuan',
                    Name: 'ĐINH VĂN TUẤN',
                    TaxCode: '',
                    Address: 'Tây Tựu',
                    Mobile:""
                    },
                    ],
            }
        },methods:{
            showAddSupplierDialog(){
               busData.$emit('showDialog',this.mission)
            },
            
        },
        watch:{
            value:function(){
                if(this.value){
                    this.isHide = false;
                }
            }
        }
       

    }
    
</script>

<style scoped>

.combobox{
    width: 100%;
    position: relative;
}
.cb-label{
    font-size: 12px;
    font-weight: 700;
    color: #212121;
    padding-bottom: 4px;
}
.cb-header{
    background: #f4f5f8;
    cursor: default;
    color: #212121;
    font-weight: 700;
    position: fixed;
    z-index: 5;
}
.hiden{
    display: none !important;
}
.cb-action{
    display: flex;
    position: absolute;
    top:20px;
    right: 1px;
    height: 30px;
}
.btn-add,.btn-option{
    width: 32px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-color: #35bf22;
}

.btn-option{
    border-left: 1px solid #ccc;
}
.btn-option:hover,.btn-add:hover{
    background-color: #e0e0e0;
    border-color: #e0e0e0;
}
</style>