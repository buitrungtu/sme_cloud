<template>
    <div class="grid-table">
        <div class="grid-header">
            <table class="dropdown-tb">
                <thead class="dropdown-thead">
                    <tr>
                        <th class="dropdown-th">Đối tượng</th>
                        <th class="dropdown-th">Tên đối tượng</th>
                        <th class="dropdown-th">Mã số thuế</th>
                        <th class="dropdown-th">Địa chỉ</th>
                        <th class="dropdown-th">Điện thoại</th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="grid-body">
            
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.grid-table{
    width: 100%;
    height: 100%;
}
.grid-header{
    background: #f4f5f8;
    width: 100%;
}
.dropdown-tb{
    border-collapse: collapse;
    width: 100%;
}
.dropdown-thead{
    color: #212121;
    height: 32px;
}
.dropdown-th{
    padding: 0 10px;
    height: 32px;
}
</style>