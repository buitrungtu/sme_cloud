<template>
    <div class="dialog dialog-supplier">
       <header class="dialog-header">
           <div class="dialog-title">
               <div class="tilte-content" style="display:flex">
                   <div class="title">Thông tin nhà cung cấp</div>
                   <div class="gr-radio">
                       <div class="radio">
                           <input type="radio" name="abc" value="1" v-model="picked" checked>
                           <div class="radio-name">Tổ chức</div>
                       </div>
                       <div class="radio">
                           <input type="radio" value="2" v-model="picked" name="abc">
                           <div class="radio-name">Cá nhân</div>
                       </div>
                   </div>
                   <div class="title-right">
                       <input type="checkbox" v-model="isCus">
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
                <Organization v-if="picked == '1'"/>
                <Personal v-if="picked == '2'"/>
                <SupplierTab />  
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
import {busData} from '@/main.js'
import SupplierTab from '@/components/common/TabOrder/SupplierTab'
import Organization from './SupplierInfo/InfoOrganization'
import Personal from './SupplierInfo/InfoPersonal'
    export default {
        components:{
            SupplierTab,
            Organization,
            Personal
        },
        data(){
            return{
                picked:"1",
                isCus:false
            }
        },methods:{
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