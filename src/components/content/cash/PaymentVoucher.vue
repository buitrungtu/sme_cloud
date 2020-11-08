<template>
    <div class="payment-voucher">
        <div class="header-layout">
            <div class="header-left">
                <div class="icon icon-history"></div>
                <div class="title-layout">Phiếu chi PC00023</div>
                <div class="payment-type">
                    <div class="select-option">
                        <input type="text" value="10. Chi khác">
                    </div>
                    <div class="btn-showoption">
                        <div class="icon icon-down"></div>
                    </div>               
                 </div>
            </div>
            <div class="header-right">
                <div class="icon icon-tour"></div>
                <div class="tour-label">Hướng dẫn</div>
                <div class="toolkit">
                    <div class="icon icon-setting"></div>
                    <div class="icon icon-help"></div>
                    <div @click="gotoHome()" class="icon icon-close"></div>
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
                <div class="btn-save-print">
                    <button class="btn-text">Cất và In</button>
                    <div class="split"></div>
                    <button class="icon icon-down"></button>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import ContentPaymentVoucher from './ContentPaymentVoucher'
    export default {
        components:{
            ContentPaymentVoucher
        },
        methods:{
            gotoHome(){
                this.$router.push('/');
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
    display: flex;
    min-height: 32px;
    border: 1px solid #babec5;
    border-radius: 2px;
    background-color: #fff;
    overflow: hidden;
    width: 350px;
}
.select-option{
    display: flex;
    flex-basis: 100%;
    flex-grow: 1;
    flex-wrap: wrap;
}
.select-option input{
    border: none;
    font-size: 13px;
    padding: 5px 10px;
    padding-right: unset;
    text-overflow: ellipsis;
    background-color: transparent;
    display: flex;
    flex-grow: 1;
}
.btn-showoption{
    width: 32px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.icon.icon-down{
    background-position: -554px -352px;
    width: 100%;height: 100%;
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

.btn-save-print{
    display: flex;
    margin-left: 5px;
    position: relative;
}
.btn-save-print .btn-text{
    height: 34px;
    padding: 6px 14px 6px 20px;
    border-radius: 3px 0 0 3px;
    border: 1px solid transparent;
    color: #fff;
    cursor: pointer;
    position: relative;
    transition: all .2s ease;
    box-sizing: border-box;
    background-color: #35bf22;
    font-weight: 600;
    white-space: nowrap;
    font-size: 13px;
    line-height: 13px;
}
.btn-save-print .icon.icon-down{
    background-color: #35bf22;
    border-radius: 0 3px 3px 0;
    height: 34px;
    padding: 6px 16px 6px 8px;
    position: relative;
    border: 1px solid transparent;
    color: #fff;
    transition: all .2s ease;
    cursor: pointer;
    box-sizing: border-box;
    background-position: -840px -351px;
    width: 42px;
}
.split{
    position: absolute;
    height: 20px;
    background: #fff;
    top: 7px;
    right: 41px;
    border-right: 2px solid #fff;
}
</style>