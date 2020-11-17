<template>
    <div class="body-info">
         <div class="w-1-2 body-left">
            <div class="row-input">
                <div class="w-2-5" style="padding:2.5px 12px 0px 0px;">
                    <MSTextbox :value="AccountID" @valueChanged="AccountID = $event" label="Mã số thuế"/>
                </div>
                <div class="w-3-5">
                    <MSTextbox  label="Mã nhà cung cấp" value="ĐIỆN LỰC ĐĂK LĂK1" v-bind:required="true"/>
                </div>
            </div>
            <div class="row-input">
                <MSTextbox label="Tên nhà cung cấp" v-bind:required="true" />
            </div>
            <div class="row-input">
                <MSTextbox v-bind:textarea="true" label="Địa chỉ" style="height:60px" placeholder="VD:Số 82 Duy Tân, Dịch Vọng Hậu, Cầu Giấy, Hà Nội"/>
            </div>
        </div> 
        <div class="w-1-2" style="padding:2.3px 2.3px 0px 0px">
            <div class="row-input" style="margin-bottom:1.5px">
                <div class="w-2-5" style="padding-right: 12px;">
                    <MSTextbox label="Điện thoại"/>
                </div>
                <div class="w-3-5">
                    <MSTextbox label="Website"/>
                </div>
            </div>
            <div class="row-input">
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
import BaseCBB from '@/components/common/BaseCBB'
    export default {
        components:{
            MSTextbox,
            BaseCBB,
        },
        data(){
            return{
                headeGroupSupplies:[{label:'Mã nhóm KH,NCC',width:'150'},{label:'Tên nhóm KH,NCC',width:'200'}],
                dataGroupSupplies:[],
                headeEmployees:[{label:'Mã nhân viên',width:'100'},{label:'Tên nhân viên',width:'200'}],
                dataEmployees:[],
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

<style lang="scss" scoped>

</style>