<template>
    <div>
        <div class="grid-filter">
            <div class="grid-filter-left">
                <div class="icon icon-checkall"></div>
                <div class="btn-filter action-all">
                    <button>Thực hiện hàng loạt <div class="icon icon-filtdown"></div> </button>
                </div>
                <div class="btn-filter">
                    <button>Lọc <div class="icon icon-filtdown"></div> </button>
                </div>
                <div class="filter-time">
                    Đầu năm tới hiện tại
                </div>
            </div>
            <div class="grid-filter-right">
                <div class="header-search">
                    <input type="text" class="txt-search" placeholder="Nhập từ khóa tìm kiếm">
                    <div class="icon icon-search"></div>
                </div>
                <div class="icon icon-excel"></div>
                <div class="icon icon-settinglist"></div>
                <div class="collap-over">
                    <div class="icon icon-collap"></div>
                </div>
            </div>
        </div>
        <!-- <div class="grid-content">
            <table>
                <thead>
                    <th><input type="checkbox"></th>
                     <th>Ngày thu tiền</th>
                     <th>Số chứng từ</th>
                     <th>Diễn giả</th>
                     <th>Số tiền</th>
                     <th>Đối tượng</th>
                     <th>Lý do thu/chi</th>
                     <th>Loại chứng từ</th>
                     <th>Chức năng</th>
                </thead>
            </table>
        </div> -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.grid-filter{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 16px 16px 10px 16px;
    margin-bottom: 10px;
}
.grid-filter-left{
    display: flex;
}
.icon.icon-checkall{
    cursor: pointer;
    display: inline-block;
    padding: 13px 12px 0 12px;
    background-position: -243px -130px;
}
.btn-filter{
    margin-right: 12px;
    display: inline-block;
    display: flex;
    border: 2px solid;
    padding: 0 16px!important;
    border-radius: 30px;
    color: #212121;
    height: 34px;
    position: relative;
} 
.btn-filter button{
    font-weight: 600;
    position: relative;
    color: inherit;
    transition: all .25s ease;
    white-space: nowrap;
    font-size: 13px;
    line-height: 13px;
    border: none;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    cursor: pointer;
}
.icon.icon-filtdown{
    background-position: -553px -355px;
}
.filter-time{
    line-height: 35px;
    margin-right: 10px;
    color: #212121;
    white-space: nowrap;
}
.grid-filter-right{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.icon.icon-excel{
    background-position: -704px -200px;
    margin-right:6px;
}
.icon.icon-settinglist{
    background-position: -88px -200px;
     margin: 0px 6px;
}
.collap-over{
    border: 2px solid #e2e9f2;
    background: #f2f5f8;
    position: absolute;
    width: 30px;
    height: 28px;
    top: -35px;
    right: -26px;
    cursor: pointer;
    z-index: 2;
}
.collap-over .icon.icon-collap{
    background-position: -120px -353px;
}
.grid-content{
    background: #fff;
}
</style>