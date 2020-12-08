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

            <div class="grid-Supp">
            <div class="grid-filter">
                <div class="grid-filter-left">
                    <div class="icon icon-checkall"></div>
                    <div class="btn-filter action-all">
                        <button>Thực hiện hàng loạt <div class="icon icon-filtdown"></div> </button>
                    </div>
                    <div class="btn-filter">
                        <button>Lọc <div class="icon icon-filtdown"></div> </button>
                    </div>
                </div>
                <div class="grid-filter-right">
                    <div class="header-search">
                        <input type="text" v-model="txtSearch" class="txt-search" placeholder="Nhập từ khóa tìm kiếm">
                        <div class="icon icon-search"></div>
                    </div>
                    <div class="icon icon-excel"></div>
                    <div class="icon icon-settinglist"></div>
                    <div class="collap-over">
                        <div class="icon icon-collap"></div>
                    </div>
                </div>
            </div>

            <div class="grid-content">
                <el-table
                        ref="multipleTable"
                        :data="listPaymentVoucher"
                        style="width: 100%"
                        height="100%"
                        @cell-dblclick="editRecordOnClick"	
                    >

                        <el-table-column
                        type="selection"
                        width="50">
                        </el-table-column>

                        <el-table-column
                        property="DateAccounting"
                        label="NGÀY THU TIỀN"
                        width="150">
                        </el-table-column>

                        <el-table-column
                        property="PaymentVoucherCode"
                        label="SỐ CHỨNG TỪ"
                        width="150">
                        </el-table-column>

                        <el-table-column
                        property="ReasonSpend"
                        label="DIỄN GIẢI"
                        width="300">
                        </el-table-column>

                        <el-table-column
                        property="TotalMoney"
                        label="SỐ TIỀN"
                        width="150">
                        </el-table-column>

                        <el-table-column
                        property="Receiver"
                        label="ĐỐI TƯỢNG"
                        width="218">
                        </el-table-column>

                        <el-table-column
                        property="Category"
                        label="LÝ DO THU/CHI"
                        width="250">
                        </el-table-column>

                        <el-table-column
                        property="Type"
                        label="LOẠI CHỨNG TỪ"
                        width="150">
                        </el-table-column>

                        <el-table-column
                            fixed="right"
                            label="CHỨC NĂNG"
                            width="125">
                            <template slot-scope="control">
                                    <div style="display:flex;align-items: center;justify-content: center;">
                                        <button @click="editRecordOnClick(control.row)" class="btn-pay">Xem</button>
                                        <el-dropdown trigger="click">
                                            <span class="el-dropdown-link">
                                                <i class="el-icon-caret-bottom"></i>
                                            </span>
                                            <el-dropdown-menu slot="dropdown">
                                                <el-dropdown-item @click.native.prevent="editRecordOnClick(control.row)" >Xem</el-dropdown-item>
                                                <el-dropdown-item @click.native.prevent="editRow(control.row.SupplierId)" >Nhân bản</el-dropdown-item>
                                                <el-dropdown-item @click.native.prevent="deleteRow(control.row)" >Xóa</el-dropdown-item>
                                            </el-dropdown-menu>
                                        </el-dropdown>
                                    </div>
                                </template>
                        </el-table-column>
                </el-table>

                <div class="footer-fixed">
                    <div class="total-footer">
                        <div class="total-label" style="width:150px; margin-left:45px">Tổng</div>
                        <div class="total-money">0</div>
                    </div>
                    <div class="grid-footer">
                        <div class="footer-left">Tổng số: <span style="font-weight:700">{{totalRecord}}</span> bản ghi</div>
                            <div class="footer-right">
                                <div class="recordOnPage"><MSSelect v-model="recordOnPage" :data="recordPages"/></div>
                                <div class="totalPage">
                                    <div class="pre" :class="{disable:pageNow == 1}" @click="prePage()">Trước</div>
                                    <div class="page-list">
                                        <div class="page" v-for="index in 3" :key="index" :class="{active: pageNow == index}" @click="gotoPage(index)">
                                            {{index}}
                                        </div>
                                    </div>
                                    <div class="next" :class="{disable:pageNow == totalPage}" @click="nextPage()">Sau</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {busData} from '@/main.js'
import MSSelect from '@/components/common/MSSelect'
import BaseAPI from '@/BaseAPI.js'

    export default {
        components:{
            MSSelect
        },
        data(){
            return{
                listPaymentVoucher: [
                    //Danh sách nhà cung cấp
                ],
                
                //Paging
                recordPages:[{value:'10',label:'10 bản ghi trên 1 trang'},
                    {value:'20',label:'20 bản ghi trên 1 trang'},
                    {value:'30',label:'50 bản ghi trên 1 trang'},
                    {value:'40',label:'100 bản ghi trên 1 trang'},
                ],
                totalRecord:0,
                totalPage:0,
                pageNow:1,
                recordOnPage:'20',
                txtSearch:'',
            }
        },
        created(){
            busData.$emit('changeTab',1);
        },
        mounted(){
            this.GetPaymentVouchers();
        },
        methods:{

            async GetPaymentVouchers(){
                let res = await BaseAPI.Get('https://localhost:44363/api/PaymentVouchers');
                if(res && res.data){
                    this.listPaymentVoucher = res.data;
                    this.listPaymentVoucher.forEach(item => {
                        item.DateAccounting = this.formatDate(item.DateAccounting);
                        item.Category = 'Chi khác';item.Type = 'Phiếu chi';
                        item.TotalMoney = this.formatMoney(item.TotalMoney) + ',00';
                    });
                }
                
            },
            
            formatMoney(number){
                if(number)
                    return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                else    return number;
            },

            formatDate(date){
                let temp = date.substring(0,10);
                temp = temp.split('-').reverse().join('/');
                return temp;
            },


            gotoPaymentVoucher(){
                this.$router.push('/paymentvoucher');
            },

            /**
             * Sự kiện double click vào 1 trường
             * Author: BTTu (25/11/2020)
             * @param {Object} row
             */
            editRecordOnClick(row){
                this.$router.push({name:"paymentvoucher",params:{PaymentVoucherId:row.PaymentVoucherId}});
                //Lấy thông tin phiếu chi rồi gửi sang form PaymentVoucher để sửa
                
            },

            /**
             * Xóa 1 bản ghi
             */
            async deleteRow(row){
                let res = await BaseAPI.Delete('https://localhost:44363/api/PaymentVouchers',row.PaymentVoucherId); 
                if(res.data.Success){
                    this.GetPaymentVouchers();
                }
            }
        },
        computed:{
             /**
             * Tìm kiếm all column
             * Author: BTTu (25/11/2020)
             */
            dataSearch(){
                return this.listPaymentVoucher.filter(
                    item => !this.txtSearch || this.supportSearch(item,this.txtSearch)
                )
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
    height: calc(100vh - 202px);
}
.body::-webkit-scrollbar{
    width: 10px;
    background: #f4f5f8;
}
.body::-webkit-scrollbar-thumb{
    background: #b8bcc3;
}
.overview{
    display: flex;
    margin-bottom: 15px;
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
    margin: 0px;
    padding: 0px;
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
.grid-Supp{
    height:calc(100% - 60px);
}
.grid-filter{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 16px 16px 20px 16px;
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
.over-line{
    padding-top: 6px;
    background: #707070;
    opacity: .5;
}
.grid-content{
    background: #fff;
    width: calc(100% - 30px);
    height:calc(100% - 70px);
    padding:0px 15px;
}
.table-scroll{
    overflow-y: auto;
    max-height: none;
    min-width: calc(100% + 30px);
}
.table-scroll table{
    border-spacing: 0;
    min-width: 100%;
}
.out-right-gray{
    min-width: 30px;
    position: sticky;
    border: none;
    width: 30px;
    max-width: 30px;
    z-index: 3;
    padding: 0;
    background: #f4f5f6;
    right: 0;
    z-index: 99;
}
.tbody-viewer{
    background-color: #fff;
    display: contents;
}
.show-detail{
    color: #0075c0;
    width: 100%;
    height: 100%;
    line-height: 13px;
    vertical-align: middle;
    display: flex;
    align-items: center;
}
.show-detail:hover{
    cursor: pointer;
    text-decoration: underline;
}
.btn-show{
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn-text{
    padding: 6px 0 6px 16px!important;
    color: #0075c0;
    border-radius: 3px 0 0 3px;
    height: 36px;
    transition: all .2s ease;
    border: 0;
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
    background: transparent;
    overflow: visible;
}
.icon.btn-icon-show{
    width: 46px;
    color: #0075c0;
    border-radius: 0 3px 3px 0;
    height: 36px;
    padding: 8px 10px 8px 10px;
    position: relative;
    background-position: -883px -350px;
    border: none;
}
tfoot{
    background-color: #f8f9fe !important;
}
.footer-fixed{
    bottom: 5px;
    left: 185px;
    width: 100%;
    z-index: 2;
    height: 44px;
}
.total-footer{
    height: 32px;
    border-top: 1px solid #e0e0e0;
    display: flex;
    background: transparent;
    position: fixed;
    bottom: 22px;
    width: calc(100% - 255px);
    background: #f8f9fe;
}

.grid-footer{
    width: calc(100% - 225px);
    height: 32px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 3px; 
    right: 41px;
}
.total-label{
    width: 150px;
    margin-left: 45px;
    font-weight: 700;
    text-align: center;
}
.total-money{
     width: 150px;
    margin-left: 450px;
    font-weight: 700;
    text-align: center;
}
.footer-left{
    margin-left: 30px;
}
.footer-right{
    display: flex;
    align-items: center;
    margin-right: 25px;
}
.recordOnPage{
    width: 200px;
}
.totalPage{
    display: flex;
    margin-left: 10px;
}
.page-list{
    display: flex;
    justify-content: center;
    align-items: center;
}
.page{
    padding:0px .5rem!important;
    cursor: pointer;
}
.page.active{
    border: 1px solid #e0e0e0;
    font-weight: 700;
    text-align: center;
}
.pre,.next{
    cursor: pointer;
    margin: 0px 20px;
}
.disable{
    cursor: default!important;
    color: #9e9e9e;
}
.btn-pay{
    padding: 6px 0 6px 16px!important;
    color: #0075c0;
    transition: all .2s ease;
    border: 0;
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
    background: transparent;
    overflow: visible;
    margin-right: 10px;
    font-weight: 600;
    font-size: 13px;
    line-height: 13px;
}
</style>