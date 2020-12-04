<template>
    <div class="payment-voucher">
        <div class="header-layout">
            <div class="header-left">
                <div class="icon icon-history"></div>
                <div class="title-layout">Phiếu chi PC00023</div>
                <div class="payment-type">
                   <MSSelect v-bind:data="options" value="10"/>             
                 </div>
            </div>
            <div class="header-right">
                <div class="icon icon-tour"></div>
                <div class="tour-label">Hướng dẫn</div>
                <div class="toolkit">
                    <div class="icon icon-setting"></div>
                    <div class="icon icon-help"></div>
                    <div @click="goBack()" class="icon icon-close"></div>
                </div>
            </div>
        </div>

        <div class="body-layout">
            <div class="info-top">
                <div class="payment-infomation">
                    <div class="w-4-5 basic-info">
                        <div class="row-input">
                            <div class="w-3-7">
                                <BaseCBB label="Đối tượng" v-model="SupplierCode" :disable="showState" :header="suppHead" :data="suppliers" mission="AddSupplier"/>
                            </div>
                            <div class="w-4-7 input-2">
                                <MSTextbox  v-model="obj.Receiver" :disable="showState" label="Người nhận"/>
                            </div>
                        </div>
                        <div class="row-input input-1">
                            <MSTextbox v-model="obj.Address" :disable="showState" label="Địa chỉ"/>
                        </div>
                        <div class="row-input input-1">
                            <MSTextbox v-model="obj.ReasonSpend" label="Lý do chi" :disable="showState"/>
                        </div>
                        <div class="row-input">
                            <div class="w-3-7 input-1">
                                <BaseCBB label="Nhân viên" v-model="obj.EmployeeCode" :disable="showState" :header="employHead" :data="employees" :indexshow=2 />
                            </div>
                            <div class="w-4-7 width-240">
                                <MSTextbox label="Kèm theo"  v-model="obj.LicenseAmount" :disable="showState" :number="true" textAlign = "right" placeholder="Số lượng"/>
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
                            <MSDatetime v-model="obj.DateAccounting " :disable="showState" label="Ngày hạch toán" />
                        </div>
                        <div class="row-input-right">
                            <MSDatetime v-model="obj.DatePayment" :disable="showState" label="Ngày phiếu chi" />
                        </div>
                        <div class="row-input-right">
                            <MSTextbox v-model="obj.PaymentVoucherCode" :disable="showState" label="Số phiếu chi" value="PC0023"/>
                        </div>
                    </div>
                </div>
                <div class="total-cost">
                    <div class="sum-title">Tổng tiền</div>
                    <h1 class="sum-number">{{totalMoney}}</h1>
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
                            <BaseCBB v-model="currMoney" :disable="showState" :header="moneyHead" :data="monies" :plus="false"/>
                        </div>
                        <div class="label" v-show="currMoney == 'USD'">Tỷ giá</div>
                        <div class="select" v-show="currMoney == 'USD'">
                            <MSTextbox value="23.150,00" :disabled="true" />
                        </div>
                    </div>
                </div>
                <div class="grid-accounting">
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column label="#" width="50" type="index">
                        </el-table-column>

                        <el-table-column prop="Explain"  label="DIỄN GIẢI" width="350">
                            <template slot-scope="scope">
                                <MSTextbox :disabled="showState"  v-model="scope.row.Explain"/>
                            </template>
                        </el-table-column>

                        <el-table-column prop="DebtAccountCode" label="TK NỢ" width="200">
                            <template slot-scope="scope">
                                <BaseCBB v-model="scope.row.DebtAccountCode" :disable="showState" :header="accHead" :data="accounts" :plus="false"/>
                            </template>
                        </el-table-column>

                        <el-table-column prop="CreditorAccountCode" label="TK CÓ" width="200">
                            <template slot-scope="scope">
                                <BaseCBB v-model="scope.row.CreditorAccountCode" :disable="showState" :header="accHead" :data="accounts" :plus="false"/>
                            </template>
                        </el-table-column>
                        

                        <el-table-column prop="Money"  label="SỐ TIỀN" width="200" >
                            <template slot-scope="scope">
                                <MSTextbox v-model="scope.row.Money" @change="moneyChage(scope.row.Money,scope.$index)" :number="true" type="money" textAlign="right" :disabled="showState" :ref="scope.row.Name"  />
                            </template>
                        </el-table-column>

                        <el-table-column prop="Exchange"  label="Quy đổi" width="210" v-if="currMoney == 'USD'">
                            <template slot-scope="scope">
                                <MSTextbox v-model="scope.row.Exchange" :number="true" type="money" textAlign="right" :disabled="showState" :ref="scope.row.Name"  />
                            </template>
                        </el-table-column>
 
                        <el-table-column prop="SupplierCode" label="Đối tượng" width="250">
                            <template slot-scope="scope" >
                                <BaseCBB v-model="scope.row.SupplierCode" @change="supplierChage(scope.row.SupplierCode,scope.$index)" :ref="scope.row.SupplierCode" :disable="showState" :header="suppHead" :data="suppliers" :addNewF9="true" :plus="false"/>
                            </template>
                        </el-table-column>
                        
                        <el-table-column prop="SupplierName"  label="TÊN ĐỐI TƯỢNG" width="350">
                            <template slot-scope="scope">
                                <MSTextbox v-model="scope.row.SupplierName" :disabled="true" :ref="scope.row.Name"  />
                            </template>
                        </el-table-column>

                        <el-table-column fixed="right" label="" width="50">
                            <template slot-scope="scope">
                                <el-button @click.native.prevent="deleteRow(scope.$index, scope.row)" type="text" size="small">
                                    <div class="icon icon-delete"></div>
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                  
                    <div class="grid-footer">
                        <div class="btn-grid-act">
                            <button @click="addRow()">Thêm dòng</button>
                            <button @click="removeAllRow()">Xóa hết dòng</button>
                        </div>
                    </div>

                    <div class="upload-file">
                        <div class="upload-title">
                            <div class="icon icon-upload"></div>
                            <div class="text">Đính kèm</div>
                            <div class="max-size">Dung lượng tối đa 5MB</div>
                        </div>
                        <el-upload
                            class="upload-demo"
                            drag
                            multiple
                            action="#"
                            >
                            <div class="el-upload__text" style="font-style: italic;">Kéo thả tệp vào đây hoặc bấm vào đây</div>
                        </el-upload>
                    </div>
                </div>
            </div>
        </div>
        
        <AddSupplier />

        <div class="footer-layout">
            <div class="footer-left">
                <button class="btn-cancel" @click="goBack()">Hủy</button>
            </div>
            <div class="footer-right">
                <button class="btn-cancel" @click="btnSaveOnClick()">Cất</button>
                <div class="btn-save-printf" @click="btnSaveOnClick()" style="margin-left: 5px;">
                    <div class="ms-button">
                        <button class="btn-text" >Cất và In</button>
                        <div class="split"></div>
                        <button class="icon icon-down"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import MSSelect from '@/components/common/MSSelect'
import MSDatetime from '@/components/common/MSDatetime'
import AddSupplier from '@/components/content/cash/AddSupplier'
import BaseCBB from '@/components/common/BaseCBB'
import BaseAPI from '@/BaseAPI.js'

    export default {
        components:{
            MSSelect,
            AddSupplier,
            MSDatetime,
            BaseCBB
        },
        
        data(){
            return{
                showState:false,
                objName:'',
                options: [
                    {value: '1',label: '1. Trả tiền nhà cung cấp (Không theo hóa đơn)'},
                    {value: '2',label: '2. Tạm ứng cho nhân viên'}, {value: '3',label: '3. Chi mua ngoài có hóa đơn'}, {value: '4',label: '4. Gửi tiền vào ngân hàng'}, 
                    {value: '5',label: '5. Chi tiếp khách'},
                    {value: '6',label: '6. Chi tạm ứng'},
                    {value: '7',label: '7. Trả lương NV xưởng'},
                    {value: '8',label: '8. Chi tiền điện'},
                    {value: '9',label: '9. Chi tiền tiếp khách'},
                    {value: '10',label: '10. Chi khác'},
                ],

                //data cho combobox đối tượng
                suppHead:[{label:'Đối tượng',width:'100'},{label:'Tên đối tượng',width:'250'},{label:'Mã số thuế',width:'120'},
                    {label:'Địa chỉ',width:'200'},{label:'Điện thoại',width:'100'}
                ],
                suppliers:[],
                suppliersDB:[],
                //data cho combobox nhân viên
                employHead:[{label:'Mã nhân viên',width:'100'},{label:'Tên nhân viên',width:'200'},{label:'Đơn vị',width:'100'},
                    {label:'ĐT di động',width:'100'}
                ],
                employees:[],
                employeesDB:[],

                //data loại tiền
                currMoney:'VND',
                moneyHead:[{label:'Mã loại tiền',width:'100'},{label:'Tên loại tiền',width:'150'}],
                monies:[{MoneyCode:'VND',MoneyName:'Việt Nam Đồng'},{MoneyCode:'USD',MoneyName:'Đô La Mỹ'}],

                //data account
                accHead:[{label:'Số tài khoản',width:'100'},{label:'Tên tài khoản',width:'150'}],
                accounts:[],
                
                addCount:0,

                obj:{
                    ReasonSpend:'Chi tiền cho ',
                    DateAccounting:this.dateNow(),
                    DatePayment:this.dateNow(),
                    
                },
                tableData: [ //data payment detail
                    {Explain:'Chi tiền cho',CreditorAccountId:'1111'},
                ],
                SupplierCode:'',
                Receiver:'',

                totalMoney:'0,00'
            }
        },
        created(){
            this.getSuppliers();
            this.getEmployees();
            this.getAccounts();
        },
        methods:{
            /**
             * Lấy danh sách đối tượng (nhà cung cấp)
             */
            async getSuppliers(){
                let res = await BaseAPI.Get('https://localhost:44363/api/suppliers/GetAll');
                if(res && res.data){
                    this.suppliersDB = res.data;
                    this.suppliers = res.data.map((item)=>{
                        return{
                            "SupplierCode":item.SupplierCode,
                            "SupplierName": item.SupplierName,
                            "TaxCode": item.TaxCode,
                            "Address": item.Address,
                            "Mobile": item.Mobile
                        }
                    })
                }
            },
            /**
             * Lấy danh sách nhân viên
             */
            async getEmployees(){
                let res = await BaseAPI.Get('https://localhost:44363/api/Employees');
                if(res && res.data){
                    this.employeesDB = res.data;
                    this.employees = res.data.map((item)=>{
                        return{
                            "EmployeeCode":item.EmployeeCode,
                            "EmployeeName": item.EmployeeName,
                            "Đơn vị": item.Unit,
                            "Mobile": item.Mobile
                        }
                    })
                }
            },
            /**
             * Lấy danh sách đối tượng (tài khoản)
             */
            async getAccounts(){
                let res = await BaseAPI.Get('https://localhost:44363/api/Accounts');
                if(res && res.data){
                    this.accounts = res.data.map((item)=>{
                        return{
                            "AccountCode":item.AccountCode,
                            "AccountName": item.AccountName,
                        }
                    })
                }
            },


            /**
             * Cất dữ liệu
             */
            async btnSaveOnClick(){
                this.tableData.map((item)=>{
                    item.Money = this.moneyToNumber(item.Money);
                })
                this.obj.PaymentVoucherDetail = this.tableData;
                let res = await BaseAPI.Post('https://localhost:44363/api/PaymentVouchers',this.obj); 
                if(res){
                    console.log(res);
                }   
            },



            //thoát dialog
            goBack(){
                this.$router.back();
            },

            //Xử lý với Grid
            deleteRow(index) {
                this.tableData.splice(index, 1);
                if(this.addCount > 0)
                -- this.addCount;
            },
            addRow(){
                let newRow = Object.assign({}, this.tableData[this.addCount]);
                this.tableData.push(newRow);
                ++this.addCount;
            },
            removeAllRow(){
                this.tableData = [];
                this.addCount = 0;
            },

             /**
             * Sự kiện kích hoạt khi người dùng thay đổi giá trị tại ô Số tiền trên Grid
             */
            moneyChage(money,row){
                money = this.moneyToNumber(money)
                this.tableData[row].Exchange = this.numberToMoney(money * 23150);

                this.$nextTick(() =>{ // tính lại tổng tiền
                    this.recalTotalMoney();
                })
                
            },
            /**
             * Sự kiện kích hoạt khi người dùng chọn đối tượng nhà cung cấp trên grid
             */
            supplierChage(supplierCode,row){
                this.tableData[row].SupplierName = this.suppliersDB.find(item => item.SupplierCode == supplierCode).SupplierName;
            },

            //------------------------
            /**
             * Lấy thời gian hiện tại
             */
            dateNow(){
                var today =  new Date();
                var dd = String(today. getDate()).padStart(2, '0');
                var mm = String(today. getMonth() + 1).padStart(2, '0');
                var yyyy = today.getFullYear();
                today = mm + '/' + dd + '/' + yyyy;
                return today
            },
            /**
             * Chuyển số sang dạng tiền tệ
             */
            numberToMoney(number){
                return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            },
            /**
             * Chuyển tiền tệ về dạng số để tính toán
             */
            moneyToNumber(money){
                return Number(money.toString().replace(/\./g,''));
            },
           

            /**
             * Tính toán tổng tiền
             */
            recalTotalMoney(){
                let sum = 0;
                for(let i=0;i<this.tableData.length;i++){
                    if(this.tableData[i].Money && this.currMoney == 'VND')
                        sum += this.moneyToNumber(this.tableData[i].Money);
                    else if(this.tableData[i].Exchange && this.currMoney == 'USD')
                        sum += this.moneyToNumber(this.tableData[i].Exchange);
                }
                this.totalMoney = this.numberToMoney(sum) +',00';
            }
        },
      
        watch:{
            /**
             * Binding dữ liệu theo 
             */
            SupplierCode:function(){
                let currSupplier = this.suppliersDB.find(item => item.SupplierCode == this.SupplierCode);
                //Master
                this.obj.SupplierCode = this.SupplierCode;
                if(currSupplier.IsPersonal){
                   this.obj.Receiver = currSupplier.SupplierName;
                }else{
                    this.obj.Receiver = currSupplier.LegalRepresent;
                }
                this.obj.Address = currSupplier.Address;
                this.obj.ReasonSpend ='Chi tiền cho ' + currSupplier.SupplierName;
                this.obj.EmployeeCode = currSupplier.EmployeeCode;
                //Detail
                
                this.tableData.map((item)=>{
                    item.Explain = this.obj.ReasonSpend;
                    item.SupplierCode = this.obj.SupplierCode;
                    item.SupplierName = this.obj.Receiver;
                })

            },
            /**
             * Tính lại tổng tiền theo dạng tiền tệ hiện tại
             */
            currMoney:function(){
                this.recalTotalMoney();
            }
        }
    }
</script>

<style scoped>
.payment-voucher{
    display: flex;
    flex-direction: column;
    background: #fff;
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.header-layout{
    top: 0;
    background-color: #f4f5f8;
    padding: 9px 16px 9px 16px;
    display: flex;
    justify-content: space-between;
}
.header-left{
    display: flex;
    align-items: center;
}
.icon.icon-history{
    background-position: -648px -144px;
}
.ms-button{
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
}
.btn-text{
    height: 100%;
    padding: 6px 14px 6px 20px;
    border-radius: 3px 0 0 3px;
    border: 1px solid transparent;
    color: #fff;
    cursor: pointer;
    position: relative;
    transition: all .2s ease;
    box-sizing: border-box;
    background-color: #35bf22;
    font-weight: 600;
    white-space: nowrap;
    font-size: 13px;
    line-height: 13px;
}
.ms-button .icon.icon-down{
    background-color: #35bf22;
    border-radius: 0 3px 3px 0;
    height: 100%;
    padding: 6px 16px 6px 8px;
    position: relative;
    border: 1px solid transparent;
    color: #fff;
    transition: all .2s ease;
    cursor: pointer;
    box-sizing: border-box;
    background-position: -840px -351px;
    width: 42px;
}
.split{
    position: absolute;
    height: 20px;
    background: #fff;
    top: 7px;
    right: 41px;
    border-right: 2px solid #fff;
}
.title-layout{
    font-weight: 700;
    font-size: 24px;
    top: -7px;
    left: 20px;
    padding: 0 0 0 16px;
    color: #000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.payment-type{
    margin-left: 50px;
    min-height: 32px;
    width: 350px;
}

.header-right{
    display: flex;
    align-items: center;
}
.toolkit{
    display: flex;
    margin-left: 20px;
}
.toolkit > *{
    margin:0px 8px;
}

.footer-layout{
    z-index: 9;
    width: 100%;
    display: flex;
    background-color: #38393d;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
}
.footer-left,.footer-right{
    padding: 8px 16px;
    display: flex;
}
.btn-cancel{
    height: 34px;
    padding: 6px 20px;
    border: 1px solid #6b6c72;
    color: #fff;
    background-color: transparent;
    position: relative;
    border-radius: 3px;
    box-sizing: border-box;
    background: transparent;
    overflow: visible;
    transition: all .2s ease;
    cursor: pointer;
}
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
.body-layout::-webkit-scrollbar{
    width: 10px;
    background: #fff;
}
.body-layout::-webkit-scrollbar-thumb{
     background: #888888;
}
.info-top{
    display: flex;
    width: 100%;
}
.payment-infomation{
    width: 75%!important;
    padding: 16px 0px 15px 30px;
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
    padding: 16px 30px 15px 0px;
    text-align: right;
}
.sum-title{
    font-size: 14px;
}
.sum-number{
    font-size: 36px;
    font-weight: 700;
    margin: 0;
}

.grid-payment{
    background: #fff;
    width: 100%;
    position: relative;
    display: inline-block;
    overflow: visible;
    height: calc(100vh - 454px);
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
    white-space: nowrap;
    padding:0px 10px 0px 20px;
}
.head-right .select{
    width: 100px;
}
.grid-accounting{
    position: relative;
    padding: 0px 30px;
    background: #fff;
}
.el-table__row .el-input .el-input__inner{
  border-style:none;
}
.hover-row .el-input .el-input__inner{
  border-style:solid;   
}
.icon.icon-delete{
    background-position: -460px -312px;
}
.grid-footer{
    width: calc(100% - 60px);
    padding: 0 30px;
    background-color: #fff;
}
.btn-grid-act{
    padding-top: 10px;
    padding-bottom: 32px;
}
.btn-grid-act button{
    padding: 2px 20px;
    margin-right: 10px;
    border-color: #8d9096;
    border-radius: 2.5px;
    height: 24px;
    border: 1px solid #8d9096;
    color: #212121;
    background-color: transparent;
    transition: all .2s ease;
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
    background: transparent;
    overflow: visible;
}


.upload-title{
    margin-bottom: 6px;
    width: fit-content;
    color: #212121;
    display: flex;
}
.icon.icon-upload{
    background-position: -539px -203px;
    margin-right: 8px;
}
.upload-title .text{
    color: #212121;
    white-space: nowrap;
    font-weight: 700;
}
.max-size{
    margin-left: 15px;
    color: #757575;
    white-space: nowrap;
}
</style>