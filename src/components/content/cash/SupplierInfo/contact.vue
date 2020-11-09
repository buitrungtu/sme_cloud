<template>
    <div class="contact">
        <div class="w-1-2" style="padding-right: 26px;" >
            <label class="label-input">Người liên hệ</label>
            <div class="row-input" style="padding-bottom: 4px;">
                <MSSelect style="width:100px; margin-right:12px;"  placeholder="Xưng hô"/>
               <MSTextbox style="width:calc(100% - 114px)" placeholder="Họ và tên"/> 
            </div>
            <div class="row-input" style="padding-bottom: 4px;">
                <MSTextbox placeholder="Email"/> 
            </div>
            <div class="row-input" style="padding-bottom: 4px;">
                 <div class="w-1-2">
                     <MSTextbox placeholder="Số điện thoại"/>
                 </div>
            </div>
            <label class="label-input">Đại diện theo PL</label>
            <div class="row-input" style="padding-bottom: 4px;">
                <MSTextbox  placeholder="Đại diện theo PL"/> 
            </div>
        </div>
        <div class="w-1-2">
            <label class="label-input">Người nhận hóa đơn điện tử</label>
            <div class="row-input" style="padding-bottom: 4px;">
                <MSTextbox placeholder="Họ và tên"/> 
            </div>
            <div class="row-input" style="padding-bottom: 4px;">
                <MSTextbox placeholder="Email, ngăn cách nhiều email bởi dấu chấm phẩy"/> 
            </div>
            <div class="row-input" style="padding-bottom: 4px;">
                 <div class="w-1-2">
                     <MSTextbox placeholder="Số điện thoại"/>
                 </div>
            </div>
        </div>
    </div>
</template>

<script>
import MSSelect from '@/components/common/MSSelect'
import MSTextbox from '@/components/common/MSTextbox'
    export default {
        components:{
            MSSelect,
            MSTextbox
        }
        
    }
</script>

<style scoped>
.contact{
    display: flex;
}
.label-input{
    font-size: 12px;
    font-weight: 700;
    padding-bottom: 4px;
    color: rgb(33, 33, 33);
}
</style>