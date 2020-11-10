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
                <MSTextbox label="Địa chỉ" style="height:60px" placeholder="VD:Số 82 Duy Tân, Dịch Vọng Hậu, Cầu Giấy, Hà Nội"/>
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
                <MSCombobox label="Nhóm nhà cung cấp" />
            </div>
            <div class="row-input">
                <MSCombobox label="Nhân viên mua hàng"/>
            </div>
        </div>
    </div>
</template>

<script>
import MSTextbox from '@/components/common/MSTextbox'
import MSCombobox from '@/components/common/MSCombobox'

    export default {
        components:{
            MSTextbox,
            MSCombobox
        }
        
    }
</script>

<style lang="scss" scoped>

</style>