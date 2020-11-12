<template>
    <div class="dialog" v-bind:class="{dialogEmployee:isCus||isSupplier}">
        <header class="dialog-header">
           <div class="dialog-title">
               <div class="tilte-content" style="display:flex">
                   <div class="title">Thông tin nhân viên</div>
                   <div class="gr-checkbox">
                       <div class="checkbox">
                           <input type="checkbox" v-model="isCus">
                           <div class="checkbox-name"> Là khách hàng </div>
                       </div>
                       <div class="checkbox">
                           <input type="checkbox"  v-model="isSupplier">
                           <div class="checkbox-name"> Là nhà cung cấp </div>
                       </div>
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
                               <MSTextbox label="Mã" v-bind:required="true"/>
                           </div>
                           <div class="w-3-5">
                               <MSTextbox label="Tên" v-bind:required="true"/>
                           </div>
                       </div>
                       <div class="row-input">
                           <UnitCBB label="Đơn vị" v-bind:required="true"/>
                       </div>
                       <div class="row-input">
                           <MSTextbox label="Chức danh"/>
                       </div>
                        <div class="row-input" v-show="isCus || isSupplier">
                           <SupplierCBB label="Nhóm khách hàng, nhà cung cấp" v-bind:required="true"/>
                       </div>
                    </div>
                     <div class="w-1-2" style="padding:2.5px 2.3px 0px 0px">
                        <div class="row-input" style="padding-bottom:12.5px">
                           <div class="w-2-5">
                               <MSDatetime label="Ngày sinh"/>
                           </div>
                           <div class="w-3-5" style="padding-left:15px">
                               <label class="label-input">Giới tính</label>
                               <div class="gr-radio">
                                    <input type="radio" name="gender">
                                    <label for="Nam"  class="radio-label">Nam</label><br>
                                    <input type="radio" name="gender">
                                     <label for="Nữ"  class="radio-label" >Nữ</label><br>
                               </div>
                           </div>
                       </div>
                       <div class="row-input">
                           <div class="w-3-5" style="padding-right:6px">
                                <MSTextbox label="Số CMND"/>
                           </div>
                           <div class="w-2-5">
                                <MSDatetime label="Ngày cấp "/>
                           </div>
                       </div>
                        <div class="row-input" style="margin-bottom:3px">
                           <MSTextbox label="Nơi cấp"/>
                       </div>
                       <div class="row-input">
                           <div class="w-2-5" style="padding-right:10px" v-show="isCus">
                                <MSSelect label="TK công nợ phải thu"/>
                           </div>
                           <div class="w-2-5" v-show="isSupplier">
                                <MSSelect label="TK công nợ phải trả"/>
                           </div>
                       </div>
                    </div>
                </div>
                <EmployeeTab v-bind:class="{top40:isCus||isSupplier}" style="height:250px"/> 
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
import MSDatetime from '@/components/common/MSDatetime'
import EmployeeTab from '@/components/common/TabOrder/EmployeeTab'
import MSSelect from '@/components/common/MSSelect'
import {busData} from '@/main.js'

import UnitCBB from '@/components/common/combobox/UnitCBB'
import SupplierCBB from '@/components/common/combobox/SupplierCBB'

    export default {
        components:{
            MSTextbox,
            MSDatetime,
            EmployeeTab,
            MSSelect,
            SupplierCBB,
            UnitCBB,
        },
        data(){
            return{
                isCus:false,
                isSupplier:false
            }
        },
        methods:{
            btnCloseOnClick(){
                busData.$emit('closeDialogEmployee');
            }
        }
    }
</script>

<style scoped>
.dialogEmployee{
    width: 900px;
    height: 700px;
    top: calc(50% - 350px);
    left: calc(50% - 450px);
}
.gr-checkbox{
    display:flex;padding-left: 1rem!important;padding-right: 1rem!important;
    justify-content: center;
    align-items: center;
}
.checkbox{
    display:flex;
    margin-right: 20px;
}
.checkbox input{
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
.gr-radio{
    display: flex;
    height: 32px;
    align-items: center;
}
.gr-radio input{
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px solid #afafaf;
    z-index: 1;
    justify-content: center;
    display: block;
}
.radio-label{
    margin:0px 15px;
    cursor: pointer;
    font-size: 13px;
}
.top40{
    margin-top: 40px;
}
</style>