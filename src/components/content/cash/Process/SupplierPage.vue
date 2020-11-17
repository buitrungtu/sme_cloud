<template>
    <div class="receive-payment">
        <div class="top">
            <div class="title">
                Danh sách nhà cung cấp
                <div class="back">
                    <div class="icon icon-back"></div>
                    Tất cả danh mục
                </div>
            </div>
            <div class="top-btn">
                <div class="nav-tab-right">
                    <div class="icon icon-tour"></div>
                    <div class="tour-label">Hướng dẫn</div>
                </div>
                <div class="btn-filter">
                    <button>Tiện ích <div class="icon icon-filtdown"></div> </button>
                </div>
                <div class="button-add" @click="showDialogAddSupplier()">
                    <button>Thêm</button>
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
                    <div class="title-money">Nợ quá hạn</div>
                </div>
                <div class="view-item deposit">
                    <div class="toltal-money">
                        10.925.312.281,00
                    </div>
                    <div class="title-money">Tổng nợ phải trả</div>
                </div>
                <div class="view-item remain">
                    <div class="toltal-money">
                        26.760.000,00
                    </div>
                    <div class="title-money">Đã thanh toán (30 ngày gần đây)</div>
                </div>
            </div>
            <GridSuppliers /> 
        </div>
        <div class="black-model" v-show="isShow"></div>
        <AddSupplier v-if="isShow" :state="stateForm" :supplierID="suppID"/>
    </div>
</template>

<script>
import GridSuppliers from './GridSuppliers'
import {busData} from '@/main.js'
import AddSupplier from '../AddSupplier'
    export default {
        components:{
            GridSuppliers,
            AddSupplier,
        },
        data(){
            return{
                thisPage:'ReceivePayment',
                isShow:false,
                stateForm:'Add',
                suppID:''
            }
        },
        created(){
            busData.$emit('changeTab',1);
            busData.$on('closeDialogSupplier',()=>{
                this.isShow=false;
            })

            busData.$on('editSupplier',(suppID)=>{
                this.stateForm = 'Edit';
                this.suppID = suppID;
                this.isShow = true;
            })
        },
        methods:{
            gotoPaymentVoucher(){
                this.$router.push('/paymentvoucher');
            },
            showDialogAddSupplier(){
                this.isShow = true;
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
    border-radius: 30px 0 0 30px;
    padding: 8px 14px 8px 20px;
    height: 36px;
    background: #2ca01c;
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
.black-model{
   position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.4;
    background-color: #000;
    z-index: 4;
}
</style>