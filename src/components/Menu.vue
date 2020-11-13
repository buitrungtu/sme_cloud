<template>
    <div class="menu">
        <div class="menu-head">
            <div class="icon btn-amis"></div>
            <div id="logo"></div>
        </div>
        <div class="menu-content">
            <div class="menu-item active" @click="gotoCash()">
                <div class="icon icon-cash"></div>
                <div class="content-text" title="Tiền mặt">
                    Tiền mặt
                </div>
            </div>
            
        </div>  
    </div>
</template>

<script>
    export default {
        methods:{
            gotoCash(){
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>
.menu{
    width: 165px;
    height: 100vh;
    background-color: #393a3d;
    float: left;
}

.menu-head{
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.menu-head .icon.btn-amis{
    width: 24px;
    height: 24px;
    margin-right: 10px;
    background-position: -424px -86px;
}
.menu-head #logo{
    width: 96px;
    height: 32px;
    background: url("../assets/Logo_Module.svg") no-repeat;
    background-size: cover;
}
.menu-content{
    width: 100%;
    height: calc(100vh - 62px);
    padding-top: 14px;
}
.menu-item{
    display: flex;
    height: 42px;
    width: 159px;
    align-items: center;
    cursor: pointer;
    border-left: 6px solid transparent;
}
.menu-item.active{
    border-left-color: #2ca01c;
    background-color: #ffffff30;
    font-weight: bold;
}
.menu-item .icon.icon-dashboard{
    background-position: -30px -1628px;
    margin:0px 8px;
}
.menu-item .content-text{
    color: #fff;
}
.menu-item .icon.icon-cash{
    background-position: -73px -1585px;
    margin:0px 8px;
}

</style>