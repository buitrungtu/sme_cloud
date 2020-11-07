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
        <div class="body-layout">

        </div>
    </div>
</template>

<script>
    export default {
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
    margin-bottom: 7px;
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
.body-layout{
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    position: relative;
}
</style>