<template>
    <div class="tab-order">
        <el-tabs type="card">
            <el-tab-pane label="Liên hệ"><Contact/></el-tab-pane>
            <el-tab-pane label="Tài khoản ngân hàng">Tài khoản ngân hàng</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import Contact from '@/components/content/cash/SupplierInfo/contact'
    export default {
        components:{
            Contact,
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