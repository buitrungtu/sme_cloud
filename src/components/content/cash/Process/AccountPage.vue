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
            <div class="grid-Supp">
                <div class="grid-filter">
                    <div class="grid-filter-left">
                        <div class="header-search">
                            <input type="text" class="txt-search" placeholder="Tìm theo số, tên tài khoản">
                            <div class="icon icon-search"></div>
                        </div>
                    </div>
                    <div class="grid-filter-right">
                        <div class="collap" @click="collapseAll()">Thu gọn</div>
                        <div class="icon icon-excel"></div>
                        
                    </div>
                </div>

                <div class="grid-content">
                <el-table
                        ref="multipleTable"
                        :data="data"
                        style="width: 100%"
                        height="100%"
                        row-key="AccountId"
                        v-bind:default-expand-all="collapse"

                        @selection-change="handleSelectionChange"
                    >

                        <el-table-column
                            prop="AccountCode"
                            label="SỐ TÀI KHOẢN"
                            width="150"
                            ref="test"
                            >
                        </el-table-column>

                        <el-table-column
                            prop="AccountName"
                            label="TÊN TÀI KHOẢN"
                            width="300">
                        </el-table-column>

                        <el-table-column
                            prop="Propertie"
                            label="TÍNH CHẤT"
                            width="150">
                        </el-table-column>

                        <el-table-column
                            prop="AccountNameEnglish"
                            label="TÊN TIẾNG ANH"
                            width="300">
                        </el-table-column>

                        <el-table-column
                            prop="Explain"
                            label="DIỄN GIẢI"
                            width="300">
                        </el-table-column>

                        <el-table-column
                            prop="Status"
                            label="TRẠNG THÁI"
                            width="150">
                        </el-table-column>


                        <el-table-column
                            fixed="right"
                            label="Chức năng"
                            width="150">
                            <template slot-scope="control">
                                <div style="display:flex;align-items: center;justify-content: center;">
                                    <el-dropdown>
                                        <span class="el-dropdown-link">
                                        Sửa <i class="el-icon-caret-bottom"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item @click.native.prevent="selectdRow(control.row.supplierId)" >Nhân bản</el-dropdown-item>
                                            <el-dropdown-item @click.native.prevent="selectdRow(control.row.supplierId)" >Xóa</el-dropdown-item>
                                            <el-dropdown-item @click.native.prevent="selectdRow(control.row.supplierId)" >Ngưng sử dụng</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                </div>
                            </template>
                        </el-table-column>

                    </el-table>
                    <div class="footer-fixed">
                        <div class="grid-footer">
                            <div class="footer-left">Tổng số: <span style="font-weight:700">77</span> bản ghi</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AddAccount />
    </div>
</template>

<script>
import {busData} from '@/main.js'
import AddAccount from './AddAccount'
import axios from 'axios';

    export default {
        components:{
            AddAccount
        },
        data(){
            return{
                thisPage:'ReceivePayment',
                collapse:false,
                data:[],
                multipleSelection: []
            }
        },
        created(){
            console.log(this.$refs.test);
            busData.$emit('changeTab',1);
            let tempdata = [];
            let seft = this;
            axios({
                methods:'GET',
                url:'https://localhost:44363/api/accounts'
            }).then(function(res){
                tempdata = res.data;
                for(let i =0 ;i<tempdata.length;i++){
                    tempdata[i].children = [];
                    tempdata[i].Status == "true"?tempdata[i].Status = 'Đang sử dụng':'Ngưng sử dụng';

                    if(!tempdata[i].parent){
                        tempdata[i].parent = 0;
                    }
                    let sureNot = false;
                    for(let j=i+1;j<tempdata.length;j++){
                        if(tempdata[i].AccountCode == tempdata[j].AccountCodeRoot){
                            tempdata[i].children.push(tempdata[j]);
                            tempdata[j].parent = 1;
                        }else{
                            sureNot == true;
                        }
                    }
                    if(sureNot == true) continue;
                }
                let result =  tempdata.filter(function(item){
                    return item.children.length >= 1 && item.parent == 0;
                })
                seft.data = result;
            }).catch(function(err){
                console.log(err);
            })
        },
        methods:{
            gotoPaymentVoucher(){
                this.$router.push('/paymentvoucher');
            },
            showDialogAddAccount(){
                busData.$emit('showDialogAddAccount');
            },
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            collapseAll(){
                this.collapse = !this.collapse;
                console.log( this.collapse);
            },
            selectdRow(accountID){
                console.log(accountID);
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
    padding-top: 10px;
    margin-bottom: 16px;
}
.top .title{
    padding-top: 22px;
    font-size: 24px;
    font-weight: 700;
    color: #212121;
    flex: 1;
}
.back{
    display: flex;
    align-items: center;
    color: #0075c0;
    cursor: pointer;
    font-weight: 400;
    font-size: 13px;
}
.icon.icon-back{
    background-position: -224px -356px;
}
.top-btn{
    display: flex;
    margin-right: 30px;
}
.button-add{
    display: flex;
    align-items: center;
}
.button-add button{
    border-radius: 30px;
    padding: 8px 22px;
    height: 36px;
    background: #2ca01c;
    border: 1px solid transparent;
    color: #fff;
    cursor: pointer;
    box-sizing: border-box;
    outline: none;
    position: relative;
}
.button-add button:hover{
    background: #35bf22;
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
.collap{
    font-size: 13px;
    color: #0075c0;
    margin-top: 3px;
    margin-right: 12px;
    cursor: pointer;
}
.grid-Supp{
    height:calc(100% - 131px);
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
.grid-filter-left .header-search{
    width: 300px;
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
.grid-content{
    background: #fff;
    width: 100%;
    height:100%;
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
    position: fixed;
    bottom: 5px;
    left: 185px;
    width: calc(100% - 215px);
    z-index: 3;
}
.grid-footer{
    width: 100%;
    height: 40px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    margin: 0px 20px;
}
.disable{
    cursor: default!important;
    color: #9e9e9e;
}
</style>