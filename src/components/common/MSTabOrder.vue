<template>
    <div class="tab-order">
        <el-tabs type="card">
            <el-tab-pane label="Liên hệ"><Contact/></el-tab-pane>
            <el-tab-pane label="Điều khoản thanh toán">Điều khoản thanh toán</el-tab-pane>
            <el-tab-pane label="Tài khoản ngân hàng">tài khoản ngân hàng</el-tab-pane>
            <el-tab-pane label="Địa chỉ khác">Địa chỉ khác</el-tab-pane>
            <el-tab-pane label="Ghi chú">Ghi chú</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import Contact from '@/components/content/cash/SupplierInfo/contact'
// import TermsOfPayment from '@/components/content/cash/SupplierInfo/TermsOfPayment'
    export default {
        components:{
            Contact,
            // TermsOfPayment
        },
        data(){
            return{
                thisTab:0
            }
        }
    }
</script>

<style scoped>
.tab-order{
    width: 100%;
    overflow: visible;
    height: 100%;
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
</style>