<template>
    <div class="grid-accounting">
        <table>
            <thead>
                <tr class="out-left"></tr>
                <tr class="count">#</tr>
                <tr class="count">Diễn giải</tr>
                <tr class="count">TK nợ</tr>
                <tr class="count">TK có</tr>
                <tr class="count">Số tiền</tr>
                <tr class="count">Đối tượng</tr>
                <tr class="count">Tên đối tượng</tr>
                <tr class="count">Khoản mục CP</tr>
                <tr class="count">TK ngân hàng</tr>
                <tr class="count">Hợp đồng bán</tr>
            </thead>
        </table>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.grid-accounting{
    position: relative;
    width: 100%;
    display: block;
    padding:0;
    min-width: 100%;
    border: 0 solid #e0e0e0!important;
}
.out-left{
    min-width: 30px;
    max-width: 30px;
    width: 30px;
    background: rgb(255, 255, 255);
    position: sticky;
    left: 0px;
    border: 0px;
    z-index: 5;
    top: 0px;
    padding: 4px;
}
.count{
    max-width: 40px;
    width: 40px;
    min-width: 40px;
    z-index: 5!important;
}
.grid-accounting th,tr{
    border-left: 1px solid #e0e0e0;
    border-bottom: 2px solid #e0e0e0;
    font-size: 12px;
}
</style>