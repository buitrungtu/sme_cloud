<template>
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
                row-key="accountId"
                v-bind:default-expand-all="collapse"

                @selection-change="handleSelectionChange"
            >

                <el-table-column
                    prop="accountId"
                    label="SỐ TÀI KHOẢN"
                    width="150"
                    >
                </el-table-column>

                 <el-table-column
                    prop="accountName"
                    label="TÊN TÀI KHOẢN"
                    width="300">
                </el-table-column>

                <el-table-column
                    prop="natureName"
                    label="TÍNH CHẤT"
                    width="150">
                </el-table-column>

                <el-table-column
                    prop="accountNameEn"
                    label="TÊN TIẾNG ANH"
                    width="300">
                </el-table-column>

                 <el-table-column
                    prop="explain"
                    label="DIỄN GIẢI"
                    width="300">
                </el-table-column>

                <el-table-column
                    prop="status"
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
</template>

<script>
import axios from 'axios';

    export default {
        components:{
        },
        data() {
            return {
                collapse:false,
                data:[],
                multipleSelection: []
            }
        },
        created(){
            let tempdata = [];
            let seft = this;
            axios({
                methods:'GET',
                url:'https://localhost:44346/api/accounts'
            }).then(function(res){
                tempdata = res.data;
                for(let i =0 ;i<tempdata.length;i++){
                    tempdata[i].children = [];
                    tempdata[i].status == "true"?tempdata[i].status = 'Đang sử dụng':'Ngưng sử dụng';

                    if(!tempdata[i].parent){
                        tempdata[i].parent = 0;
                    }
                    let sureNot = false;
                    for(let j=i+1;j<tempdata.length;j++){
                        if(tempdata[i].accountId == tempdata[j].root){
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
        methods: {
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