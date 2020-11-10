<template>
    <div class="receive-payment">
        <div class="top">
            <div class="title">Thu chi tiền mặt</div>
            <div class="top-btn">
                <div class="button-add">
                    <button>
                        Thêm thu tiền
                    </button>
                    <button class="icon down-list">
                        <div class="split"></div>
                        <div class="icon icon-downlist"></div>
                    </button>
                </div> 
                <div class="button-add" @click="gotoPaymentVoucher()">
                    <button>Thêm chi tiền</button>
                    <button class="down-list">
                        <div class="split"></div>
                        <div class="icon icon-downlist"></div>
                    </button>
                </div> 
            </div>
        </div>
        <div class="body">
            <div class="overview">
                <div class="view-item revenue">
                    <div class="toltal-money">
                        31.053.767.635,00
                    </div>
                    <div class="title-money">Tổng thu đầu năm đến nay</div>
                </div>
                <div class="view-item deposit">
                    <div class="toltal-money">
                        10.925.312.281,00
                    </div>
                    <div class="title-money">Tổng chi đầu năm đến nay</div>
                </div>
                <div class="view-item remain">
                    <div class="toltal-money">
                        20.138.455.354,00
                    </div>
                    <div class="title-money">Tồn quỹ hiện tại</div>
                </div>
            </div>
            <div class="nav-tab">
                <div class="nav-tab-left">
                    <ul>
                        <li class="active">Tất cả</li>
                        <li>Thu tiền</li>
                        <li>Chi tiền</li>
                    </ul>
                </div>
                <div class="nav-tab-right">
                    <div class="icon icon-tour"></div>
                    <div class="tour-label">Hướng dẫn</div>
                </div>
            </div>
            <Grid /> 
        </div>
    </div>
</template>

<script>
import Grid from './Grid'
import {busData} from '@/main.js'
    export default {
        components:{
            Grid
        },
        data(){
            return{
                thisPage:'ReceivePayment'
            }
        },
        created(){
            busData.$emit('changeTab',1);
        },
        methods:{
            gotoPaymentVoucher(){
                this.$router.push('/paymentvoucher');
            }
        }
    }
</script>

<style scoped>
.receive-payment{
    height: calc(100vh - 114px);
}
.top{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding-top: 15px;
    margin-bottom: 15px;
}
.top .title{
    padding-left: 10px;
    font-size: 24px;
    font-weight: 700;
    color: #212121;
    flex: 1;
}
.top-btn{
    display: flex;
    margin-right: 40px;
}

.button-add{
    display: flex;
    margin-left: 10px;
    align-items: center;
}
.button-add button{
    border-radius: 30px 0 0 30px;
    padding: 8px 14px 8px 20px;
    height: 36px;
    background: #248b15;
    border: 1px solid transparent;
    color: #fff;
    cursor: pointer;
    box-sizing: border-box;
    outline: none;
    position: relative;
}
.button-add .split{
    left: 0px;
    height: 20px;
    top: 8px;
    position: absolute;
    border-left: 1px solid #fff;
    width: 5px;
}
.button-add button.down-list{
    width: 46px;
    border-radius: 0 30px 30px 0;
    height: 36px;
    padding: 8px 10px 8px 10px;
    border: 1px solid transparent;
    color: #fff;
    transition: all .2s ease;
    cursor: pointer;
    box-sizing: border-box;
}
.icon.icon-downlist{
    background-position: -845px -358px;
}

.receive-payment .body{
    padding: 0 30px 0 0;
    overflow: auto;
    height: calc(100vh - 209px);
}
.overview{
    display: flex;
    margin-bottom: 24px;
    height: 67px;
    color: #fff;
}
.view-item{
    width: 33%!important;
}

.view-item.revenue{
    background: #ff7f2c;
    padding: 6px 10px;
    overflow: hidden;
}
.view-item.deposit{
    background: #00a9f2;
    margin-left: 0.5%;
    margin-right: 0.5%;
    padding: 6px 10px;
    overflow: hidden;
}
.view-item.remain{
    background: #74cb2f;
    padding: 6px 10px;
    overflow: hidden;
}
.toltal-money{
    font-size: 25px;
    margin-bottom: 4px;
}
.title-money{
    font-size: 14px;
}
.nav-tab{
    padding-left: 10px;
    display: flex;
    justify-content: space-between;
    height: 56px;
    margin: 0;
}
.nav-tab-left ul{
    display: flex;
}
.nav-tab-left ul li{
    list-style: none;
    border-radius: 30px;
    height: 32px;
    width: 72px;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
}
.nav-tab-left ul li.active{
    background: #ebedf0;
    font-weight: 700;
    color: #2ca01c;
}
.nav-tab-right{
    display: flex;
}

</style>