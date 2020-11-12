<template>
    <div class="tab-order">
        <el-tabs type="card">
            <el-tab-pane label="Liên hệ"><Contact/></el-tab-pane>
            <el-tab-pane label="Điều khoản thanh toán"><TermsOfPayment /></el-tab-pane>
            <el-tab-pane label="Tài khoản ngân hàng">Tài khoản ngân hàng</el-tab-pane>
            <el-tab-pane label="Địa chỉ khác">Địa chỉ khác</el-tab-pane>
            <el-tab-pane label="Ghi chú">Ghi chú</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import Contact from '@/components/content/cash/SupplierInfo/contact'
import TermsOfPayment from '@/components/content/cash/SupplierInfo/TermsOfPayment'
    export default {
        components:{
            Contact,
            TermsOfPayment
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

</style>