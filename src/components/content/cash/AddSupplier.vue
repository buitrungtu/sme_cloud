<template>
    <div class="dialog dialog-supplier">
       <header class="dialog-header">
           <div class="dialog-title">
               <div class="tilte-content" style="display:flex">
                   <div class="title">Thông tin nhà cung cấp</div>
                   <div class="gr-radio">
                       <div class="radio">
                           <input type="radio" v-model="check" v-bind:class="{checked:check}">
                           <div class="radio-name">Tổ chức</div>
                       </div>
                       <div class="radio">
                           <input type="radio" v-model="check" v-bind:class="{checked:check}">
                           <div class="radio-name">Cá nhân</div>
                       </div>
                   </div>
                   <div class="title-right">
                       <input type="checkbox" class="checkbox">
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
                       <div class="row-input">
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
               <div class="tab-info">
                   <ul class="ul-header">
                       <li class="li-header active">
                           Liên hệ</li>
                       <li class="li-header">Điều khoản thanh toán</li>
                       <li class="li-header">Tài khoản ngân hàng</li>
                       <li class="li-header">Địa chỉ khác</li>
                       <li class="li-header">Ghi chú</li>
                   </ul>
                   <div class="content-tab">
                       <Contact />
                   </div>
               </div>
               <div class="dialog-footer">
                   <div class="divide"></div>
                   <div class="btn-footer">
                       <div class="btn-left">
                           <button>Hủy</button>
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
import Contact from './SupplierInfo/contact'
    export default {
        components:{
            MSTextbox,
            MSCombobox,
            Contact
        },
        data(){
            return{
                check:false
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
    width: 900px;
    height: 650px;
    top: calc(50% - 325px);
    left: calc(50% - 450px);
    transition: all .2s;
    z-index: 100;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    opacity: 1;
}
.dialog-header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-radius: 5px 5px;
    position: relative;
}
.dialog-title{
    width: 100%;
    padding: 20px 32px 20px 32px;
    padding-right: 12px;
    position: relative;
    overflow: hidden;
    border-radius: 5px 5px 0 0;
}
.title{
    font-size: 24px;
    color: rgb(33, 33, 33);
    font-weight: 700;
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
.title-right{
    margin-left: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.checkbox{
    width: 18px;
    height: 18px;
    border-radius: 2px;
    border: 1px solid #afafaf;
    background: #fff;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin-right: 10px;
}
.dialog-close{
    display: flex;
    padding: 12px;
}
.dialog-close > *{
    margin-left: 8px;
}

.dialog-content{
    height: calc(100% - 73px);
    transition: all .23s ease .1s;
    flex-direction: column;
    display: flex;
    overflow: auto;
    overflow-y: visible;
    padding: 0 32px 20px 32px;
}
.dialog-body{
    overflow: auto;
}
.body-info{
    display: flex;
    height: 225px;
}
.body-left{
    padding-right: 26px;
}
.tab-info{
    width: 100%;
    overflow: visible;
}
.ul-header{
    margin: 0;
    width: 100%;
    height: 100%;
    padding-left: 0;
    position: relative;
    display: flex;
    z-index: 2;
    align-items: flex-end;
}
.li-header{
    height: 26px;
    margin: 0 1px;
    border: 1px solid #c9ccd2;
    border-bottom: none;
    border-radius: 2px 2px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:0px 8px;
}
.li-header:hover{
    color: #2ca01c;
    cursor: pointer;
}
.li-header.active{
    background: #cce4f9;
    height: 32px;
}
.content-tab{
    border: 1px solid #c9ccd2;
    margin: 0 1px 1px;
    z-index: 1;
    margin-top: -1px;
    padding: 11px 8px;
    height: 195px;
}
.divide{
    width: 100%;
    border-top: 1px solid #e0e0e0;
    margin: 25px 0 20px 0;
    position: relative;
}
.btn-footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.btn-footer button{
    height: 36px;
    padding: 8px 20px;
    border: 1px solid #8d9096;
    color: #212121;
    background-color: transparent;
    transition: all .25s ease;
    white-space: nowrap;
    font-size: 13px;
    line-height: 13px;
    cursor: pointer;
}
.btn-footer button:hover:not(.save-and-add){
    background-color: #d2d3d6;
}
.btn-right .save-and-add{
    background: #248b15;
    border: 1px solid transparent;
    color: #fff;
    margin-left: 5px;
    border-radius: 3px;
}
</style>