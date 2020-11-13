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
                <div class="filter-time">
                    Đầu năm tới hiện tại
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
            <div class="table-scroll">
                 <table>
                    <thead>
                        <tr>
                            <th class="th-left-white"></th>
                            <th class="multi-checkall">
                                <label class="checkbox">
                                    <input type="checkbox" class="checkbox-input">
                                </label>
                            </th>
                            <div class="th-content">
                                <th class="row-viewer th-viewer" style="min-width: 147px; width: 147px;">Ngày thu tiền</th>
                                <th class="row-viewer th-viewer" style="min-width: 125px; width: 125px;">Số chứng từ</th>
                                <th class="row-viewer th-viewer" style="min-width: 320px;">Diễn giải</th>
                                <th class="row-viewer th-viewer" style="min-width: 150px; width: 150px;text-align: right;">Số tiền</th>
                                <th class="row-viewer th-viewer" style="min-width: 228px; width: 228px;">Đối tượng</th>
                                <th class="row-viewer th-viewer" style="min-width: 250px; width: 250px;">Lý do thu/chi</th>
                                <th class="row-viewer th-viewer" style="min-width: 150px; width: 150px;">Loại chứng từ</th>
                                <th class="row-viewer th-viewer" style="right: 30px; width: 110px; min-width: 110px;">Chức năng</th>
                                <th class="out-right-gray"></th>
                            </div>
                        </tr>
                    </thead>
                    <tbody class="tbody-viewer">
                        <tr>
                            <td class="th-left-white"></td>
                            <td class="multi-checkall">
                                <label class="checkbox">
                                    <input type="checkbox" class="checkbox-input">
                                </label>
                            </td>
                            <div class="th-content">
                                <td class="row-viewer td-viewer" style="text-align: center!important;">08/11/2020</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">
                                    <div class="show-detail">PC00026</div>
                                </td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">Chi tiền cho chi phí chành xe</td>
                                <td class="row-viewer td-viewer" style="text-align: right!important;padding-right:10px;">140.000,00</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">chi phí chành xe</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">Chi khác</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">Phiếu chi</td>
                                <td class="row-viewer td-viewer" style="right: 30px; width: 110px; min-width: 110px;">
                                    <div class="btn-show">
                                       <button class="btn-text">Xem</button>
                                       <button class="icon btn-icon-show">
                                           
                                       </button>
                                    </div>
                                </td>
                                <td class="out-right-gray"></td>
                            </div>
                        </tr>
                        
                       
                        
                        
                         <tr>
                            <td class="th-left-white"></td>
                            <td class="multi-checkall">
                                <label class="checkbox">
                                    <input type="checkbox" class="checkbox-input">
                                </label>
                            </td>
                            <div class="th-content">
                                <td class="row-viewer td-viewer" style="text-align: center!important;">08/11/2020</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">
                                    <div class="show-detail">PC00026</div>
                                </td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">Chi tiền cho chi phí chành xe</td>
                                <td class="row-viewer td-viewer" style="text-align: right!important;padding-right:10px;">140.000,00</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">chi phí chành xe</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">Chi khác</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">Phiếu chi</td>
                                <td class="row-viewer td-viewer" style="right: 30px; width: 110px; min-width: 110px;">
                                    <div class="btn-show">
                                       <button class="btn-text">Xem</button>
                                       <button class="icon btn-icon-show">
                                           
                                       </button>
                                    </div>
                                </td>
                                <td class="out-right-gray"></td>
                            </div>
                        </tr>
                         
                         <tr>
                            <td class="th-left-white"></td>
                            <td class="multi-checkall">
                                <label class="checkbox">
                                    <input type="checkbox" class="checkbox-input">
                                </label>
                            </td>
                            <div class="th-content">
                                <td class="row-viewer td-viewer" style="text-align: center!important;">08/11/2020</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">
                                    <div class="show-detail">PC00026</div>
                                </td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">Chi tiền cho chi phí chành xe</td>
                                <td class="row-viewer td-viewer" style="text-align: right!important;padding-right:10px;">140.000,00</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">chi phí chành xe</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">Chi khác</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">Phiếu chi</td>
                                <td class="row-viewer td-viewer" style="right: 30px; width: 110px; min-width: 110px;">
                                    <div class="btn-show">
                                       <button class="btn-text">Xem</button>
                                       <button class="icon btn-icon-show">
                                           
                                       </button>
                                    </div>
                                </td>
                                <td class="out-right-gray"></td>
                            </div>
                        </tr>
                         <tr>
                            <td class="th-left-white"></td>
                            <td class="multi-checkall">
                                <label class="checkbox">
                                    <input type="checkbox" class="checkbox-input">
                                </label>
                            </td>
                            <div class="th-content">
                                <td class="row-viewer td-viewer" style="text-align: center!important;">08/11/2020</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">
                                    <div class="show-detail">PC00026</div>
                                </td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">Chi tiền cho chi phí chành xe</td>
                                <td class="row-viewer td-viewer" style="text-align: right!important;padding-right:10px;">140.000,00</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">chi phí chành xe</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">Chi khác</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">Phiếu chi</td>
                                <td class="row-viewer td-viewer" style="right: 30px; width: 110px; min-width: 110px;">
                                    <div class="btn-show">
                                       <button class="btn-text">Xem</button>
                                       <button class="icon btn-icon-show">
                                           
                                       </button>
                                    </div>
                                </td>
                                <td class="out-right-gray"></td>
                            </div>
                        </tr>
                         <tr>
                            <td class="th-left-white"></td>
                            <td class="multi-checkall">
                                <label class="checkbox">
                                    <input type="checkbox" class="checkbox-input">
                                </label>
                            </td>
                            <div class="th-content">
                                <td class="row-viewer td-viewer" style="text-align: center!important;">08/11/2020</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">
                                    <div class="show-detail">PC00026</div>
                                </td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">Chi tiền cho chi phí chành xe</td>
                                <td class="row-viewer td-viewer" style="text-align: right!important;padding-right:10px;">140.000,00</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">chi phí chành xe</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">Chi khác</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">Phiếu chi</td>
                                <td class="row-viewer td-viewer" style="right: 30px; width: 110px; min-width: 110px;">
                                    <div class="btn-show">
                                       <button class="btn-text">Xem</button>
                                       <button class="icon btn-icon-show">
                                           
                                       </button>
                                    </div>
                                </td>
                                <td class="out-right-gray"></td>
                            </div>
                        </tr>
                         <tr>
                            <td class="th-left-white"></td>
                            <td class="multi-checkall">
                                <label class="checkbox">
                                    <input type="checkbox" class="checkbox-input">
                                </label>
                            </td>
                            <div class="th-content">
                                <td class="row-viewer td-viewer" style="text-align: center!important;">08/11/2020</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">
                                    <div class="show-detail">PC00026</div>
                                </td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">Chi tiền cho chi phí chành xe</td>
                                <td class="row-viewer td-viewer" style="text-align: right!important;padding-right:10px;">140.000,00</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">chi phí chành xe</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">Chi khác</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">Phiếu chi</td>
                                <td class="row-viewer td-viewer" style="right: 30px; width: 110px; min-width: 110px;">
                                    <div class="btn-show">
                                       <button class="btn-text">Xem</button>
                                       <button class="icon btn-icon-show">
                                           
                                       </button>
                                    </div>
                                </td>
                                <td class="out-right-gray"></td>
                            </div>
                        </tr>
                         <tr>
                            <td class="th-left-white"></td>
                            <td class="multi-checkall">
                                <label class="checkbox">
                                    <input type="checkbox" class="checkbox-input">
                                </label>
                            </td>
                            <div class="th-content">
                                <td class="row-viewer td-viewer" style="text-align: center!important;">08/11/2020</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">
                                    <div class="show-detail">PC00026</div>
                                </td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">Chi tiền cho chi phí chành xe</td>
                                <td class="row-viewer td-viewer" style="text-align: right!important;padding-right:10px;">140.000,00</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">chi phí chành xe</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">Chi khác</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">Phiếu chi</td>
                                <td class="row-viewer td-viewer" style="right: 30px; width: 110px; min-width: 110px;">
                                    <div class="btn-show">
                                       <button class="btn-text">Xem</button>
                                       <button class="icon btn-icon-show">
                                           
                                       </button>
                                    </div>
                                </td>
                                <td class="out-right-gray"></td>
                            </div>
                        </tr>
                         <tr>
                            <td class="th-left-white"></td>
                            <td class="multi-checkall">
                                <label class="checkbox">
                                    <input type="checkbox" class="checkbox-input">
                                </label>
                            </td>
                            <div class="th-content">
                                <td class="row-viewer td-viewer" style="text-align: center!important;">08/11/2020</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">
                                    <div class="show-detail">PC00026</div>
                                </td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">Chi tiền cho chi phí chành xe</td>
                                <td class="row-viewer td-viewer" style="text-align: right!important;padding-right:10px;">140.000,00</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">chi phí chành xe</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">Chi khác</td>
                                <td class="row-viewer td-viewer" style="text-align: left!important;padding-left:10px;">Phiếu chi</td>
                                <td class="row-viewer td-viewer" style="right: 30px; width: 110px; min-width: 110px;">
                                    <div class="btn-show">
                                       <button class="btn-text">Xem</button>
                                       <button class="icon btn-icon-show">
                                           
                                       </button>
                                    </div>
                                </td>
                                <td class="out-right-gray"></td>
                            </div>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th class="td-left-white"></th>
                            <th class="multi-checkall" style="opacity:0!important;">
                                <label class="checkbox">
                                    <input type="checkbox" class="checkbox-input">
                                </label>
                            </th>
                            <div class="th-content">
                                <th class="row-viewer td-viewer" style="border:none;text-align: center!important;">Tổng</th>
                                <th class="row-viewer td-viewer" style="min-width: 125px; width: 125px;opacity:0!important;">Số chứng từ</th>
                                <th class="row-viewer td-viewer" style="min-width: 320px;opacity:0!important;">Diễn giải</th>
                                <th class="row-viewer td-viewer" style="border:none;text-align: center!important;">31.949.951.758,00</th>
                                <th class="row-viewer td-viewer" style="min-width: 228px; width: 228px;opacity:0!important;">Đối tượng</th>
                                <th class="row-viewer td-viewer" style="min-width: 323px; width: 323px;opacity:0!important;">Lý do thu/chi</th>
                                <th class="row-viewer td-viewer" style="min-width: 150px; width: 150px;opacity:0!important;">Loại chứng từ</th>
                                <th class="row-viewer td-viewer" style="right: 30px; width: 110px; min-width: 110px;opacity:0!important;">Chức năng</th>
                                <th class="out-right-gray"></th>
                            </div>
                        </tr>
                    </tfoot>
                 </table>
            </div>
           
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
    export default {
        components:{
            MSSelect
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
    min-width: 100%;
    position: relative;
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