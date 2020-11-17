<template>
    <div class="body-info">
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
                    <MSSelect v-bind:data="options" style="width:116px; margin-right:12px;"  placeholder="Xưng hô"/>
                    <MSTextbox style="width:calc(100% - 116px);padding-top:3px" placeholder="Họ và tên"/> 
                </div>
            </div>
            <div class="row-input">
                <MSTextbox v-bind:textarea="true" label="Địa chỉ" style="height:60px" placeholder="VD: Số 82 Duy Tân, Dịch Vọng Hậu, Cầu giấy, Hà Nội"/>
            </div>
        </div>
        <div class="w-1-2" style="padding:2.3px 2.3px 0px 0px">
            <div class="row-input" style="margin-bottom: 1.5px">
                <BaseCBB label="Nhóm nhà cung cấp" :header="headeGroupSupplies" :data="dataGroupSupplies" :indexshow=1 :multiple="true" mission="AddGropSupplier"/>
            </div>
            <div class="row-input">
                <BaseCBB label="Nhân viên mua hàng" :header="headeEmployees" :data="dataEmployees" :indexshow=2 mission="AddEmployee"/>
            </div>
        </div>
    </div>
</template>

<script>
import MSTextbox from '@/components/common/MSTextbox'
import MSSelect from '@/components/common/MSSelect'
import BaseCBB from '@/components/common/BaseCBB'
import axios from 'axios'

    export default {
        components:{
            MSTextbox,
            BaseCBB,
            MSSelect
        },
        data(){
            return{
                headeGroupSupplies:[{label:'Mã nhóm KH,NCC',width:'150'},{label:'Tên nhóm KH,NCC',width:'200'}],
                dataGroupSupplies:[],
                headeEmployees:[{label:'Mã nhân viên',width:'100'},{label:'Tên nhân viên',width:'200'}],
                dataEmployees:[],
                options:[]
            }
        },
        created(){
            axios.get('https://localhost:44346/api/GroupSuppliers')
                .then(response => (this.dataGroupSupplies = response.data))
                .catch(error => (console.log("Lỗi: "+error)))

            axios.get('https://localhost:44346/api/Employees')
                .then(response => (this.dataEmployees = response.data))
                .catch(error => (console.log("Lỗi: "+error)))
        }
        
    }
</script>

<style scoped>

</style>