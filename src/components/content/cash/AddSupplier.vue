<template>
    <div class="dialog dialog-supplier">
       <header class="dialog-header">
           <div class="dialog-title">
               <div class="tilte-content" style="display:flex">
                   <div class="title">Thông tin nhà cung cấp</div>
                   <div class="gr-radio">
                       <div class="radio">
                           <input type="radio" >
                           <div class="radio-name">Tổ chức</div>
                       </div>
                       <div class="radio">
                           <input type="radio">
                           <div class="radio-name">Cá nhân</div>
                       </div>
                   </div>
                   <div class="title-right">
                       <input type="checkbox" >
                        <div class="radio-name">Là khách hàng</div>
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
               <div class="body-info">
                   <div class="w-1-2 body-left">
                       <div class="row-input">
                           <div class="w-2-5" style="padding-right: 12px;">
                               <MSTextbox label="Mã số thuế"/>
                           </div>
                           <div class="w-3-5">
                               <MSTextbox label="Mã nhà cung cấp" v-bind:required="true"/>
                           </div>
                       </div>
                       <div class="row-input">
                          <MSTextbox label="Tên nhà cung cấp" v-bind:required="true" />
                       </div>
                       <div class="row-input">
                          <MSTextbox label="Địa chỉ" style="height:60px"/>
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
                <MSTabOrder />  
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
    </div>
</template>

<script>
import MSTextbox from '@/components/common/MSTextbox'
import MSCombobox from '@/components/common/MSCombobox'
import {busData} from '@/main.js'
import MSTabOrder from '@/components/common/MSTabOrder'
    export default {
        components:{
            MSTextbox,
            MSCombobox,
            MSTabOrder
        },
        data(){
            return{
            }
        },methods:{
            btnCloseOnClick(){
               busData.$emit('closeDialogSupplier');
            }
        }
    }
</script>

<style scoped>

.dialog.dialog-supplier{
    min-width: 900px;
    max-width: 900px;
    transition: all .2s;
    z-index: 100;
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
    background: #fff;
    z-index: 1;
    justify-content: center;
    margin-right: 10px;
}
.radio .checked{
    border: 1px solid #2ca01c;
}

.title-right input{
    width: 18px;
    height: 18px;
    margin-right: 10px;
    border: 1px solid #afafaf;
}

</style>