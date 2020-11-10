<template>
    <div class="payment-voucher">
        <div class="header-layout">
            <div class="header-left">
                <div class="icon icon-history"></div>
                <div class="title-layout">Phiếu chi PC00023</div>
                <div class="payment-type">
                   <MSSelect title="10. Chi khác"/>             
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
    export default {
        components:{
            ContentPaymentVoucher,
            MSSelect,
            MSButton
        },
        created(){
            
        },
        data(){
            return{
                showAddSupplire:false
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

</style>