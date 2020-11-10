<template>
    <div class="body-layout">
        <div class="info-top">
             <div class="payment-infomation">
                <div class="w-4-5 basic-info">
                    <div class="row-input">
                        <div class="w-3-7">
                            <MSCombobox label="Đối tượng" mission="AddSupplier"/>
                        </div>
                        <div class="w-4-7 input-2">
                            <MSTextbox label="Người nhận"/>
                        </div>
                    </div>
                    <div class="row-input input-1">
                        <MSTextbox label="Địa chỉ"/>
                    </div>
                    <div class="row-input input-1">
                        <MSTextbox label="Lý do chi" value="Chi tiền cho "/>
                    </div>
                    <div class="row-input">
                        <div class="w-3-7 input-1">
                            <MSCombobox label="Nhân viên" mission="AddEmployee" />
                        </div>
                        <div class="w-4-7 width-240">
                            <MSTextbox label="Kèm theo" textAlign = "right" placeholder="Số lượng"/>
                            <div class="root-invoice">Chứng từ gốc</div>
                        </div>
                    </div>
                    <div class="row-input">
                        <div class="reference-title">Tham chiếu</div>
                        <div class="reference-more">...</div>
                    </div>
                </div>
                <div class="w-1-5 time-info">
                    <div class="row-input-right">
                        <MSDatetime label="Ngày hạch toán" />
                    </div>
                    <div class="row-input-right">
                        <MSDatetime label="Ngày phiếu chi" />
                    </div>
                    <div class="row-input-right">
                        <MSTextbox label="Số phiếu chi" value="PC0023"/>
                    </div>
                </div>
            </div>
            <div class="total-cost">
                <div class="sum-title">Tổng tiền</div>
                <h1 class="sum-number">0,00</h1>
            </div>
        </div>
        <div class="grid-payment">
            <div class="grid-head">
                <div class="head-left">
                    Hạch toán
                </div>
                 <div class="head-right">
                    <div class="label">Loại tiền</div>
                    <div class="select">
                        <MSSelect title="VND"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MSCombobox from '@/components/common/MSCombobox'
import MSTextbox from '@/components/common/MSTextbox'
import MSDatetime from '@/components/common/MSDatetime'
import MSSelect from '@/components/common/MSSelect'
    export default {
        components:{
            MSCombobox,
            MSTextbox,
            MSDatetime,
            MSSelect,
        }
    }

</script>

<style scoped>
.body-layout{
    background-color: #f4f5f8;
    width: 100%;
    height: calc(100vh - 102px);
    overflow: auto;
    flex: 1;
    min-height: 0;
    min-width: 0;
    position: relative;
}
.info-top{
    display: flex;
    width: 100%;
}
.payment-infomation{
    width: 75%!important;
    padding: 16px 0px 24px 30px;
    display: flex;
}

.input-1{
    padding-right: 16px;
}
.input-2{
    padding: 0 0px 0 12px;
}
.width-240{
    width: 240px !important;
    display: flex;
}
.root-invoice{
    padding:28px 0.5rem 0px 0.5rem;
    white-space: nowrap;
}
.reference-title{
    margin-right: 16px;
    min-width: 75px;
}
.reference-more{
    cursor: pointer;
    color: #0075c0;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    font-size: 12px;
}
.row-input-right{
    width: 185px;
    padding-bottom: 12px;
    align-items: flex-end;
    padding-left: 16px;
    border-left: 1px solid #d4d7dc;
}
.basic-info{
    height: 100%;
    padding-right: 16px
}
.time-info{
    height: 100%;
    padding-top: 1px;
}

.total-cost{
    width: 25%!important;
    padding: 16px 30px 24px 0px;
    text-align: right;
}
.sum-title{
    font-size: 14px;
}
.sum-number{
    font-size: 36px;
    font-weight: 700;
}

.grid-payment{
    background: #fff;
    width: 100%;
    position: relative;
    display: inline-block;
    overflow: visible;
}
.grid-head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 0 18px 19px;
    position: sticky;
    left: 0;
}
.head-left{
    position: relative;
    height: 32px;
    margin: 0;
    padding: 0 16px;
    color: #212121!important;
    text-decoration: unset;
    font-size: 16px;
    font-weight: unset;
}
.head-right{
    display: flex;
    position: absolute;
    right: 30px;
    top: 12px;
    align-items: center;
    justify-content: flex-end;
}
.head-right .label{
    padding-right: 10px;
    white-space: nowrap;
    padding-left: 20px;
}
.head-right .select{
    width: 100px;
}
</style>