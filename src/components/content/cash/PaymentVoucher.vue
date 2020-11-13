<template>
    <div class="payment-voucher">
        <div class="header-layout">
            <div class="header-left">
                <div class="icon icon-history"></div>
                <div class="title-layout">Phiếu chi PC00023</div>
                <div class="payment-type">
                   <MSSelect v-bind:arrs="options" value="10"/>             
                 </div>
            </div>
            <div class="header-right">
                <div class="icon icon-tour"></div>
                <div class="tour-label">Hướng dẫn</div>
                <div class="toolkit">
                    <div class="icon icon-setting"></div>
                    <div class="icon icon-help"></div>
                    <div @click="goBack()" class="icon icon-close"></div>
                </div>
            </div>
        </div>

        <ContentPaymentVoucher />
        
        <div class="black-model" v-show="showBlackModel1"></div>
        <div class="black-model-2" v-show="showBlackModel2"></div>
        <div class="black-model-3" v-show="showBlackModel3"></div>

        <AddSupplier v-if="showAddSupplire"/>
        <AddEmployee v-if="showAddEmployee"/>
        <AddGroupSupplier v-if="showAddGroupSupplier"/>
        
        <div class="footer-layout">
            <div class="footer-left">
                <button class="btn-cancel">Hủy</button>
            </div>
            <div class="footer-right">
                <button class="btn-cancel">Cất</button>
                <div class="btn-save-printf" style="margin-left: 5px;">
                    <MSButton>Cất và In</MSButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ContentPaymentVoucher from './ContentPaymentVoucher'
import MSSelect from '@/components/common/MSSelect'
import MSButton from '@/components/common/MSButton'
import {busData} from '@/main.js'
import AddSupplier from '@/components/content/cash/AddSupplier'
import AddEmployee from '@/components/content/cash/AddEmployee'
import AddGroupSupplier from '@/components/content/cash/AddGroupSupplier'
    export default {
        components:{
            ContentPaymentVoucher,
            MSSelect,
            MSButton,
            AddSupplier,
            AddEmployee,
            AddGroupSupplier
        },
        created(){
            busData.$on('showDialog',(mission)=>{
            if(mission == 'AddSupplier'){
                this.showAddSupplire=true;
                this.showBlackModel1 = true;
            }else if(mission == 'AddEmployee'){
                this.showAddEmployee=true;
                this.showBlackModel2 = true;
            }else if(mission == 'AddGroupSupplier'){
                this.showAddGroupSupplier=true;
                this.showBlackModel3 = true;
            }
            })
            busData.$on('closeDialogSupplier',()=>{
                this.showAddSupplire=false;
                this.showBlackModel1 = false;    
            })
            busData.$on('closeDialogEmployee',()=>{
                this.showAddEmployee=false;
                this.showBlackModel2 = false;
            })
            busData.$on('closeDialogGroupSupplier',()=>{
                this.showAddGroupSupplier=false;
                this.showBlackModel3 = false;
            })
        },
        data(){
            return{
                showBlackModel1:false,
                showBlackModel2:false,
                showBlackModel3:false,
                showAddSupplire:false,
                showAddEmployee:false,
                showAddGroupSupplier:false,
                options: [
                    {
                    value: '1',
                    label: '1. Trả tiền nhà cung cấp (Không theo hóa đơn)'
                    }, {
                    value: '2',
                    label: '2. Tạm ứng cho nhân viên',
                    
                    }, {
                    value: '3',
                    label: '3. Chi mua ngoài có hóa đơn'
                    }, {
                    value: '4',
                    label: '4. Gửi tiền vào ngân hàng'
                    }, {
                    value: '5',
                    label: '5. Chi tiếp khách'
                    },
                    {
                    value: '6',
                    label: '6. Chi tạm ứng'
                    },
                    {
                    value: '7',
                    label: '7. Trả lương NV xưởng'
                    },
                    {
                    value: '8',
                    label: '8. Chi tiền điện'
                    },
                    {
                    value: '9',
                    label: '9. Chi tiền tiếp khách'
                    },
                    {
                    value: '10',
                    label: '10. Chi khác',
                    },
                ],
                
            }
        },
        methods:{
            goBack(){
                this.$router.back();
            }
        }
    }
</script>

<style scoped>
.payment-voucher{
    display: flex;
    flex-direction: column;
    background: #fff;
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.header-layout{
    top: 0;
    background-color: #f4f5f8;
    padding: 9px 16px 9px 16px;
    display: flex;
    justify-content: space-between;
}
.header-left{
    display: flex;
    align-items: center;
}
.icon.icon-history{
    background-position: -648px -144px;
}
.title-layout{
    font-weight: 700;
    font-size: 24px;
    top: -7px;
    left: 20px;
    padding: 0 0 0 16px;
    color: #000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.payment-type{
    margin-left: 50px;
    min-height: 32px;
    width: 350px;
}

.header-right{
    display: flex;
    align-items: center;
}
.toolkit{
    display: flex;
    margin-left: 20px;
}
.toolkit > *{
    margin:0px 8px;
}

.footer-layout{
    z-index: 9;
    width: 100%;
    display: flex;
    background-color: #38393d;
    height: 50px;
    justify-content: space-between;
    align-items: center;
}
.footer-left,.footer-right{
    padding: 8px 16px;
    display: flex;
}
.btn-cancel{
    height: 34px;
    padding: 6px 20px;
    border: 1px solid #6b6c72;
    color: #fff;
    background-color: transparent;
    position: relative;
    border-radius: 3px;
    box-sizing: border-box;
    background: transparent;
    overflow: visible;
    transition: all .2s ease;
    cursor: pointer;
}
.black-model,.black-model-2,.black-model-3{
   position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.4;
    background-color: #000;
    z-index: 4;
}
.black-model-2{
    z-index: 6;
}
.black-model-3{
    z-index: 8;
}
</style>