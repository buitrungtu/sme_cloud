<template>
    <div>
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
                    <input type="text" class="txt-search" placeholder="Nhập từ khóa tìm kiếm">
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
                :data="data"
                style="width: 100%"
                height="438"
                @selection-change="handleSelectionChange"
            >

                <el-table-column
                type="selection"
                width="50">
                </el-table-column>

                <el-table-column
                label="MÃ NHÀ CUNG CẤP"
                width="225">
                <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>

                <el-table-column
                property="name"
                label="TÊN NHÀ CUNG CẤP"
                width="225">
                </el-table-column>

                <el-table-column
                property="address"
                label="ĐỊA CHỈ"
                 width="275">
                </el-table-column>

                 <el-table-column
                property="address"
                label="CÔNG NỢ"
                 width="150">
                </el-table-column>

                 <el-table-column
                property="address"
                label="MÃ SỐ THUẾ"
                 width="150">
                </el-table-column>

                 <el-table-column
                property="address"
                label="ĐIỆN THOẠI"
                 width="150">
                </el-table-column>

                 <el-table-column
                    fixed="right"
                    label="Chức năng"
                    width="150">
                    <div style="display:flex;align-items: center;justify-content: center;">
                        <Dropdown />
                    </div>
                </el-table-column>

            </el-table>
           
        </div>
        <div class="grid-footer">
            <div class="footer-left">Tổng số: <span style="font-weight:700">77</span> bản ghi</div>
            <div class="footer-right">
                <div class="recordOnPage"><MSSelect title="20 bản ghi trên 1 trang"/></div>
                <div class="totalPage">
                    <div class="pre disable">Trước</div>
                    <div class="page-list">
                        <div class="page active">1</div>
                        <div class="page">2</div>
                        <div class="page">3</div>
                        <div class="page"></div>
                        <div class="page">4</div>
                    </div>
                    <div class="next">Sau</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MSSelect from '@/components/common/MSSelect'
import Dropdown from './Dropdown'
    export default {
        components:{
            MSSelect,
            Dropdown
        },
        data() {
            return {
                data: [{
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
                }, {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
                }, {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles '
                }, {
                date: '2016-05-01',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
                }, {
                date: '2016-05-08',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
                }, {
                date: '2016-05-06',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
                }, {
                date: '2016-05-07',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
                }],
                multipleSelection: []
            }
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
            }
        }
    }
</script>

<style scoped>
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
.grid-content{
    background: #fff;
    width: 100%;
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
.th-left-white{
    min-width: 16px;
    max-width: 16px;
    width: 16px;
    background: #fff;
    left: 0;
    border: 0;
    z-index: 3;
    padding: 0;
    position: sticky;
}
th,td{
    padding: 6px 10px;
    padding-top: 5px;
    padding-bottom: 3px;
    border: 0;
    text-align: left;
    font-size: .85rem;
}

.multi-checkall{
    z-index: 3;
    position: sticky;
    left: 16px;
    top: 0;
    background-color: #fff;
    min-width: 40px;
    width: 40px;
    max-width: 40px;
    border-bottom: 1px solid #e0e0e0;
    min-height: 34px;
    height: 34px;
    vertical-align: middle;
}
.checkbox{
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100%;
    height: 100%;
}
.checkbox-input{
    position: absolute;
    width: 50%;
    height: 100%;
    z-index: 200;
    cursor: pointer;
    left: 15px;
}
.th-content{
    background-color: #fff;
    display: contents;
}

.row-viewer{
    min-height: 34px;
    height: 34px;
    position: sticky;
    z-index: 2;
    top: 0;
    background-color: #fff;
    vertical-align: middle;
    left: unset!important;
}
.th-viewer{
    border-left: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    text-transform: uppercase;
}
.td-viewer{
    border-left: 1px dotted #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
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