<template>
    <div>
        <el-dropdown>
            <span class="el-dropdown-link">
               Trả tiền <i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Xem</el-dropdown-item>
                <el-dropdown-item>Sửa</el-dropdown-item>
                <el-dropdown-item>Xóa</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.icon.icon-down{
    background-position: -896px -359px;
}
.el-dropdown-link{
    color: #0075c0;
}
</style>