<template>
    <div class="receive-payment">
        <div class="top">
            <div class="title">
                Hệ thống tài khoản
                <div class="back">
                    <div class="icon icon-back"></div>
                    Tất cả danh mục
                </div>
            </div>
            <div class="top-btn">
                 <div class="button-add" @click="gotoPaymentVoucher()">
                    <button class="change-acc">Chuyển tài khoản hạch toán</button>
                </div>
                <div class="button-add" @click="showDialogAddAccount()">
                    <button>Thêm</button>
                </div> 
            </div>
        </div>
        <div class="body">
            <GridAccount /> 
        </div>
        <AddAccount />
    </div>
</template>

<script>
import GridAccount from './GridAccount'
import {busData} from '@/main.js'
import AddAccount from './AddAccount'
    export default {
        components:{
            GridAccount,
            AddAccount
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
            },
            showDialogAddAccount(){
                busData.$emit('showDialogAddAccount');
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
.back{
    display: flex;
    margin-top: 5px;
    align-items: center;
    color: #0075c0;
    cursor: pointer;
    font-weight: 400;
}
.icon.icon-back{
    background-position: -224px -356px;
}
.top-btn{
    display: flex;
    margin-right: 40px;
}

.button-add{
    display: flex;
    align-items: center;
}
.button-add button{
    border-radius: 30px;
    padding: 8px 20px 8px 20px;
    height: 36px;
    background: #2ca01c;
    border: 1px solid transparent;
    color: #fff;
    cursor: pointer;
    box-sizing: border-box;
    outline: none;
    position: relative;
}
.button-add button.change-acc{
    background: transparent;
    border-color: #8d9096;
    color:  #212121;
    margin-right: 10px;
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
    height: calc(100vh - 138px);
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
    background: rgb(184, 188, 195);
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

.nav-tab-right{
    display: flex;
    align-items: center;
    margin-right: 8px;
}

</style>