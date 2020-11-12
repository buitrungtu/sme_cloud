<template>
    <div class="body-info">
         <div class="w-1-2 body-left">
            <div class="row-input">
                <div class="w-2-5" style="padding-right: 12px;">
                    <MSTextbox label="Mã số thuế"/>
                </div>
                <div class="w-3-5">
                    <MSTextbox label="Mã nhà cung cấp" value="ĐIỆN LỰC ĐĂK LĂK1" v-bind:required="true"/>
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
                <SupplierCBB label="Nhóm nhà cung cấp" />
            </div>
            <div class="row-input">
                <Buyer label="Nhân viên mua hàng"/>
            </div>
        </div>
    </div>
</template>

<script>
import MSTextbox from '@/components/common/MSTextbox'
import SupplierCBB from '@/components/common/combobox/SupplierCBB'
import Buyer from '@/components/common/combobox/EmployeeBuyer'
    export default {
        components:{
            MSTextbox,
            SupplierCBB,
            Buyer
        }
        
    }
</script>

<style lang="scss" scoped>

</style>