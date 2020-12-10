<template>
    <div class="process">
        <div class="process-tab">
            <div class="process-center">
                <div class="process-cash">
                    <div class="title">Nghiệp vụ tiền mặt</div>
                    <div class="cash-content">
                        <div class="process-board"></div>
                        <div class="btn-process receive">
                            <div class="title-button">Thu tiền</div>
                        </div>
                        <div class="btn-process payment" @click="gotoPaymentVoucher()">
                            <div class="title-button">Chi tiền</div>
                        </div>
                        <div class="btn-process fund">
                            <div class="title-button">Kiểm kê quỹ</div>
                        </div>
                    </div>
                </div>
                <div class="process-object">
                    <div class="object-item" @click="gotoSupplierPage()">
                        <div class="dummy">
                            <div class="icon icon-customer"></div>
                            <div class="obj-text">Đối tượng</div>
                        </div>
                    </div>
                     <div class="object-item" @click="gotoAccountPage()">
                        <div class="dummy">
                            <div class="icon icon-provider"></div>
                            <div class="obj-text">Tài khoản</div>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div class="process-report">
                <div class="title">Báo cáo</div>
                <div class="favorite-report">
                    <ul>
                        <li>Sổ kế toán chi tiết quỹ tiền mặt</li>
                    </ul>
                </div>
                <div class="footer-report">
                    Tất cả báo cáo
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {busData} from '@/main.js'
    export default {
        data(){
            return{
            }
        },
        created(){
            busData.$emit('changeTab',0);
        },
        methods:{
            gotoPaymentVoucher(){
                this.$router.push('/paymentvoucher');
            },
            gotoSupplierPage(){
                this.$router.push('/supplierpage');
            },
            gotoAccountPage(){
                this.$router.push('/accountpage');
            }
        }   

    }
</script>

<style scoped>
.process{
    display: flex;
    justify-content: center;
    height: calc(100vh - 135px);
    overflow: auto;
    align-items: center;
}
.process-tab{
    display: flex;
    justify-content: center;
    width: 100%;
}
.process-cash{
    background-color: #fff;
    border: 1px solid  #e5e5e5;
    border-radius: 3px;
    width: 690px;
    height: 380px;
}
.title{
    text-transform: uppercase;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    border-bottom: 1px solid #e5e5e5;
}
.cash-content{
    position: relative;
}

.btn-process{
    height: 90px;
    width: 90px;
    position: absolute;
    transition: all .2s ease;
    text-align: center;
}
.btn-process.receive{
    top:32px;left: 90px;
}
.btn-process.fund{
    top:125px;left: 335px;
    width: 125px!important;
}
.btn-process.payment{
    top:206px;left: 90px;
}
.title-button{
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: flex-end;
    padding-bottom: 10px;
}



.process-object{
    background-color: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    margin-top: 10px;
    height: 69px;
    display: flex;
}
.process-object .dummy{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.icon.icon-customer{
    background-position: -872px -200px;
}
.icon.icon-provider{
    background-position: -928px -200px;
}
.icon.icon-employee{
    background-position: -984px -200px;
}
.icon.icon-cal{
    background-position: -1376px -256px;
}

.object-item{
    border-right: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
    justify-content: center;
    width:50%;
    height: 100%;
}
.object-item:hover,.btn-process:hover{
    cursor: pointer;
    box-shadow:0 3px 6px rgba(0,0,0,.16);
}


.process-report{
    background-color: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    margin-left: 10px;
    width: 300px;
    height: 460px;
    display: flex;
    flex-direction: column;
    position: relative;
}
.favorite-report{
    flex: 1;
    overflow: auto;
    min-height: 0;
}
.favorite-report ul{
    margin: 0;
    padding: 0 16px;
}
.favorite-report ul li{
    align-items: center;
    padding: 16px 0px;
    margin-left: 25px;
    color: #646464;
}
.favorite-report ul li:hover{
    cursor: pointer;
    color: #0075c0;
}
.footer-report{
    border-top: 1px solid #e5e5e5;
    cursor: pointer;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    color: #0075c0;
}
</style>