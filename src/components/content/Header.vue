<template>
    <div class="header">
        <div class="header-left">
            <div class="icon icon-header"></div>
            <div class="branch-name">
                <div class="company-name">
                    Công ty TNHH HIK
                </div>
                <div class="icon icon-down"></div>
            </div>
            <div class="header-current">
                <div class="icon-current"></div>
                <div class="current-text">Demo Thông tư 200</div>
            </div>
        </div>
        <div class="header-right">
            <div class="header-search">
                <input type="text" class="txt-search" placeholder="Nhập từ khóa tìm kiếm">
                <div class="icon icon-search"></div>
            </div>
            <div class="tooltip">
                <div class="icon icon-category"></div>
                <div class="icon icon-setting"></div>
                <div class="icon icon-chat"></div>
                <div class="icon icon-help"></div>
                <div class="icon icon-notification"></div>
            </div>
            <div class="account-info">
                <div class="icon icon-avatar"></div>
                <div class="user-name">Nguyễn Quang Minh</div>
                <div class="icon icon-down"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.header{
    width: 100%;
    height: 48px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
}
.header-left{
    display: flex;
    align-items: center;
    padding-left: 10px;
}
.icon.icon-header{
    background-position: -843px -30px;
    margin-right: 10px;
}
.branch-name{
    display: flex;
    padding:0px 10px;
}
.company-name{
    font-weight: 600;
    line-height: 25px;
    font-size: 14px;
    color: #212121;
}
.icon.icon-down{
    background-position: -75px -360px;
    transform: rotate(90deg);
}
.header-current{
    display: flex;
    border: 1px solid #ebedf0;
    border-radius: 40px;
    padding: 0 12px;
    cursor: pointer;
    align-items: center;
    height: 28px;
    margin-left: 15px;
}
.icon-current{
    width: 6px;
    height: 6px;
    background-color: #4ea344;
    border-radius: 50%;
    border: 1px solid #fff;
}
.current-text{
    padding-left: 7px;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: all 0.2s ease;
    color: #212121;
}

.header-right{
    display: flex;
    padding-right: 20px;
}

.tooltip{
    display: flex;
    align-items: center;

}
.tooltip > *{
    margin: 0px 10px;
    cursor: pointer;
}


.account-info{
    display: flex;
    margin-left: 20px;
    align-items: center;
}
.icon.icon-avatar{
    background-position: -352px -894px;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    cursor: pointer;
    margin-right: 6px;
}
.account-info .user-name{
    text-align: center;
    color: #212121;
    font-size: 14px;
    margin-right: 8px;
    font-weight: 600;
}
.account-info .icon.icon-down{
    background-position: -1073px -27px;
    transform: rotate(1deg);
    padding-right: 10px;
}

</style>