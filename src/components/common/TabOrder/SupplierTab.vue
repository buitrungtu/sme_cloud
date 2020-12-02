<template>
    <div class="tab-order">
        <ul class="ul-header">
            <li class="li-header" v-bind:class="{active:thisTab==0}" @click="thisTab=0">Liên hệ</li>
            <li class="li-header" v-bind:class="{active:thisTab==1}" @click="thisTab=1">Điều khoản thanh toán</li>
            <li class="li-header" v-bind:class="{active:thisTab==2}" @click="tabBankAccountOnClick()">Tài khoản ngân hàng</li>
            <li class="li-header" v-bind:class="{active:thisTab==3}" @click="tabBankAddressOnClick()">Địa chỉ khác</li>
            <li class="li-header" v-bind:class="{active:thisTab==4}" @click="tabNoteOnClick()">Ghi chú</li>
        </ul>
        <div class="content-tab" >
            <div class="contact" v-show="thisTab == 0">
                <div class="organization" style="display:flex" v-show="isPer == false">
                    <div class="w-1-2" style="padding-right: 26px;" >
                        <label class="label-input">Người liên hệ</label>
                        <div class="row-input" style="padding-bottom: 4px;">
                        <MSSelect :disable="review" v-model="obj.VocativeContact" :data="options" placeholder="Xưng hô" style="width:100px; margin-right:12px;" />
                        <MSTextbox :disabled="review" v-model="obj.FullnameContact" style="width:calc(100% - 112px);padding-top:3px" placeholder="Họ và tên"/> 
                        </div>
                        <div class="row-input" style="padding-bottom: 4px;">
                            <MSTextbox :disabled="review" v-model="obj.EmailContact"  placeholder="Email"/> 
                        </div>
                        <div class="row-input" style="padding-bottom: 4px;">
                            <div class="w-1-2">
                                <MSTextbox :disabled="review"  v-model="obj.MobileContact"  placeholder="Số điện thoại"/>
                            </div>
                        </div>
                        <div class="row-input" style="padding-bottom: 4px;"  v-show="isCus">
                            <MSTextbox :disabled="review" v-model="obj.LegalRepresent"   label="Đại diện theo PL" placeholder="Đại diện theo PL"/> 
                        </div>
                    </div>
                    <div class="w-1-2" v-show="!isCus">
                        <div class="row-input" style="padding-bottom: 4px;">
                            <MSTextbox :disabled="review"  v-model="obj.LegalRepresent"  label="Đại diện theo PL" placeholder="Đại diện theo PL"/> 
                        </div>
                    </div>
                    <div class="w-1-2" v-show="isCus">
                        <label class="label-input">Người nhận hóa đơn điện tử</label>
                        <div class="row-input" style="padding-bottom: 4px;">
                            <MSTextbox :disabled="review"  v-model="obj.FullnameEInvoice"  placeholder="Họ và tên"/> 
                        </div>
                        <div class="row-input" style="padding-bottom: 4px;">
                            <MSTextbox :disabled="review" v-model="obj.EmailEInvoice"  placeholder="Email, ngăn cách nhiều email bởi dấu chấm phẩy"/> 
                        </div>
                        <div class="row-input" style="padding-bottom: 4px;">
                            <div class="w-1-2">
                                <MSTextbox :disabled="review" v-model="obj.MobileEInvoice" placeholder="Số điện thoại"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="personal" style="display:flex" v-show="isPer == true">
                    <div class="w-1-2" style="padding-right: 26px;" >
                        <label class="label-input">Thông tin liên hệ</label>
                        <div class="row-input" style="padding-bottom: 4px;">
                            <MSTextbox :disabled="review" v-model="obj.EmailContact"  style="padding-top:3px" placeholder="Email"/> 
                        </div>
                        <div class="row-input" style="padding-bottom: 4px;">
                            <div class="w-1-2">
                                <MSTextbox :disabled="review" v-model="obj.MobileContact"  style="padding-top:3px" placeholder="Điện thoại di động"/> 
                            </div> 
                        </div>
                        <div class="row-input" style="padding-bottom: 4px;">
                            <div class="w-1-2">
                                <MSTextbox :disabled="review" v-model="obj.FixMobileContact"  style="padding-top:3px" placeholder="Điện thoại cố định"/> 
                            </div>
                        </div>
                        <div class="row-input" style="padding-bottom: 4px;">
                            <MSTextbox :disabled="review" v-model="obj.LegalRepresent"  label="Đại diện theo PL" placeholder="Đại diện theo PL"/> 
                        </div>
                    </div>
                
                    <div class="w-1-2">
                        <label class="label-input">Thông tin CMND/Thẻ căn cước</label>
                        <div class="row-input" style="padding-bottom: 4px;">
                            <div class="w-1-2" >
                                <MSTextbox :disabled="review" v-model="obj.Identity" style="padding:3px 3px 0px 0px" placeholder="Số CMND/Thẻ căn cước"/> 
                            </div> 
                        </div>
                        <div class="row-input" style="padding-bottom: 4px;">
                            <div style="width:calc(50% + 2.5px)">
                                <MSDatetime v-model="obj.IdentityDate" :disabled="review"  placeholder="Ngày cấp"/> 
                            </div>
                        </div>
                        <div class="row-input" style="padding-bottom: 4px;">
                            <MSTextbox :disabled="review" v-model="obj.IdentityPlace"  placeholder="Nơi cấp"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="term-payment"  v-show="thisTab == 1">
                <div class="w-3-4" style="display:flex">
                    <div class="w-input">
                        <div class="row-input" >
                            <BaseCBB :disable="review" v-model="obj.TermsOfPayment" label="Điều khoản thanh toán" :header="header"  :data="data" :indexshow=1 />
                        </div>
                    </div>
                    <div class="w-input">
                        <div class="row-input" >
                            <MSTextbox :disabled="review" v-model="obj.DaysOfOwed" :number="true" textAlign='right' label="Số ngày được nợ"/>
                        </div>
                    </div>
                    <div class="w-input">
                        <div class="row-input" >
                            <MSTextbox :disabled="review" v-model="obj.MaxDebt" :number="true" type='money' textAlign='right' label="Số nợ tối đa"/>
                        </div>
                    </div>
                </div>
                <div class="row-input">
                    <div class="w-input">
                        <BaseCBB :disable="review" label="Tài khoản công nợ phải thu" v-model="obj.AccountCodeReceivable" :header="accountLabel" :data="dataAccountReceivable"/>
                    </div>
                    <div class="w-input" v-show="isCus">
                        <BaseCBB :disable="review" label="Tài khoản công nợ phải trả" v-model="obj.AccountCodePay" :header="accountLabel" :data="dataAccountPay"/>
                    </div>
                </div>
            </div>
            <div class="bank-account" v-show="thisTab == 2">
                <el-table :data="tableBankAccount" style="width: 100%" max-height="150px" ref="table">
                    <el-table-column prop="BankAccount"  label="SỐ TÀI KHOẢN" width="190">
                         <template slot-scope="scope">
                            <MSTextbox :disabled="review" :ref="scope.row.Name"  v-model="scope.row.BankAccount"/>
                        </template>
                    </el-table-column>
                    <el-table-column prop="BankName" label="TÊN NGÂN HÀNG" width="190">
                        <template slot-scope="scope">
                            <MSTextbox :disabled="review"  v-model="scope.row.BankName" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="BankBranch" label="CHI NHÁNH" width="190">
                        <template slot-scope="scope">
                            <MSTextbox :disabled="review"  v-model="scope.row.BankBranch" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="BankCity" label="TỈNH/TP CỦA NGÂN HÀNG" width="190">
                        <template slot-scope="scope">
                            <MSTextbox :disabled="review"  v-model="scope.row.BankCity" />
                        </template>
                    </el-table-column>

                    <el-table-column fixed="right" label="" width="50">
                        <template slot-scope="scope">
                            <el-button :disabled="review" @click.native.prevent="deleteRow(scope.$index)" type="text" size="small">
                                <div class="icon icon-delete"></div>
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="grid-footer">
                    <div class="btn-grid-act">
                        <button :disabled="review" @click="addRow()">Thêm dòng</button>
                        <button :disabled="review" @click="removeAllRow()">Xóa hết dòng</button>
                    </div>
                </div>
            </div>
            <div class="other-address" v-show="thisTab == 3">
                <div class="w-1-2" style="padding-right:26px">
                    <label class="label-input">Vị trí địa lý</label>
                    <div class="row-input">
                        <div class="w-1-2" style="padding-right:12px" >
                            <MSSelect ref="nation" :disable="review"  value="1" :data="nations" placeholder="Quốc Gia"/>
                        </div>
                        <div class="w-1-2">
                            <MSSelect :disable="review" v-model="obj.City" :data="cities" placeholder="Tỉnh/Thành phố"/>
                        </div>
                    </div>
                    <div class="row-input" >
                        <div class="w-1-2" style="padding-right:12px">
                            <MSSelect :disable="review" v-model="obj.District"  :data="districts" placeholder="Quận/Huyện"/>
                        </div>
                        <div class="w-1-2">
                            <MSSelect :disable="review" v-model="obj.Village" :data="villages" placeholder="Xã/Phường"/>
                        </div>
                    </div>
                </div>
                <div class="w-1-2" style="position: relative;">
                    <div class="title-right">
                        <el-checkbox v-model="obj.IsSameAddressSupplier">Giống địa chỉ nhà cung cấp</el-checkbox>
                    </div>

                    <el-table :data="tableDeliveryAddress" style="width: 100%;" max-height="140">
                       <el-table-column prop="Address" width="358" label="Địa chỉ giao hàng">
                            <template slot-scope="scope">
                                <MSTextbox :ref="scope.row.Name" :disabled="review" v-model="scope.row.Address" />
                            </template>
                        </el-table-column>
                        <el-table-column fixed="right" label="" width="50">
                            <template slot-scope="scope">
                                <el-button :disabled="review" @click.native.prevent="deleteRowAddress(scope.$index, scope.row)" type="text" size="small">
                                    <div class="icon icon-delete"></div>
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="grid-footer">
                    <div class="btn-grid-act">
                        <button :disabled="review" @click="addRowAddress()">Thêm dòng</button>
                        <button :disabled="review" @click="removeAllRowAddress()">Xóa hết dòng</button>
                    </div>
                </div>
                </div>
            </div>

            <div class="note" v-show="thisTab == 4">
                <textarea ref="note" :disabled="review" v-model="obj.Note" tabindex="1"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
import MSSelect from '@/components/common/MSSelect'
import MSTextbox from '@/components/common/MSTextbox'
import MSDatetime from '@/components/common/MSDatetime'
import BaseCBB from '@/components/common/BaseCBB'
import BaseAPI from '@/BaseAPI.js'

    export default {
        props:{
            isPer:Boolean,
            root:Object,
            isCus:Boolean,
            review:Boolean
        },
        components:{
            MSTextbox,
            MSSelect,
            MSDatetime,
            BaseCBB,
        },
        data(){
            return{
                thisTab:0,
                options:[{value:'1',label:'Anh'},
                        {value:'2',label:'Chị'},
                        {value:'3',label:'Bạn'},
                        {value:'4',label:'Bà'},
                        {value:'5',label:'Miss'},
                        {value:'6',label:'Mr'},
                        {value:'7',label:'Mrs'},
                        {value:'8',label:'Ông'},
                ],
                header:[{label:'Mã điều khoản',width:'100'},{label:'Tên điều khoản',width:'200'}],
                data:[{TermsOfPayment:'DK01',TermsOfPaymentName:'Điều khoản 1'},
                        {TermsOfPayment:'DK02',TermsOfPaymentName:'Điều khoản 2'},
                        {TermsOfPayment:'DK03',TermsOfPaymentName:'Điều khoản 3'}
                ],
                accountLabel:[{label:'Số tài khoản',width:'100'},{label:'Tên tài khoản',width:'200'}],

                dataAccountReceivable:[
                ],
                
                dataAccountPay:[
                ],

                tableBankAccount:[{
                    BankAccount:'',
                    BankName:'',
                    BankBranch:'',
                    BankCity:'',
                    Name:'BankAccount'
                }],
                tableDeliveryAddress:[
                    {Address:'',Name:'address'}
                ],
                obj:{
                    IsSameAddressSupplier:false
                },
                //Vị trí địa lý
                nations:[{value:'1',label:'Việt Nam'}], //Quốc gia
                cities:[{value:1,label:'Hà Nội'}, // Thành phố
                    {value:2,label:'Đà Nẵng'},
                    {value:3,label:'Hồ Chí Minh'},
                    {value:4,label:'Gia Lai'},
                    {value:5,label:'Cần Thơ'}
                ],
                districts:[ // Quận huyện
                    {value:1,label:'Hoàn Kiếm'},
                    {value:2,label:'Đống Đa'},
                    {value:3,label:'Bắc Từ Liêm'},
                    {value:4,label:'Nam Từ Liêm'},
                    {value:5,label:'Tây Hồ'},
                    {value:6,label:'Hoàng Mai'},
                    {value:7,label:'Ba Đình'},
                    {value:8,label:'Thanh Xuân'},
                    {value:9,label:'Hai Bà Trưng'},
                    {value:10,label:'Cầu Giấy'},
                ],
                villages:[ //Làng xã
                    {value:1,label:'Tây Tựu'},
                    {value:2,label:'Minh Khai'},
                    {value:3,label:'Cổ Nhuế'},
                    {value:4,label:'Thượng Cát'},
                    {value:5,label:'Giảng Võ'},
                    {value:6,label:'Liên Mạc'},
                    {value:7,label:'Xuân Đỉnh'},
                    {value:8,label:'Phúc Diễn'},
                    {value:9,label:'Đông Ngạc'},
                    {value:10,label:'Mễ Trì'},
                ],

                rowAddress:1
            }
        },
        created(){
            this.obj = this.root;  
            this.GetAccountReceivable();
            this.GetAccountPay();
        },
        beforeMount(){
            /**
             * Chuyển json -> đối tượng hiện lên grid tài khoản ngân hàng
             * Author: BTTu(25/11/2020)
             */
            if(this.obj.BankAccount){
                this.tableBankAccount = JSON.parse(this.obj.BankAccount);
            }

            /**
             * Chuyển mảng địa chỉ -> mảng đối tượng địa chỉ
             * Author: BTTu(25/11/2020)
             */
            if(this.obj.DeliveryAddress){
                this.tableDeliveryAddress = this.obj.DeliveryAddress.map((item)=>{
                    return{
                        'Address':item
                    }
                });
            }
        },
        updated(){
            
        },
        methods:{

             /**
             * Lấy danh sách tài khoản công nợ phải thu
             * Author: BTTu(25/11/2020)
             */
            async GetAccountReceivable(){
                let res = await BaseAPI.Get('https://localhost:44363/api/accounts/a/2'); 
                if(res && res.data){
                    this.dataAccountReceivable = res.data.map((item)=>{
                        return{
                            'AccountCode':item.AccountCode,
                            'AccountName':item.AccountName
                        }
                    })
                }
            },

              /**
             * Lấy danh sách tài khoản công nợ phải trả
             * Author: BTTu(25/11/2020)
             */
            async GetAccountPay(){
                let res = await BaseAPI.Get('https://localhost:44363/api/accounts/a/1'); 
                if(res && res.data){
                    this.dataAccountPay = res.data.map((item)=>{
                        return{
                            'AccountCode':item.AccountCode,
                            'AccountName':item.AccountName
                        }
                    })
                }
            },

            /**
             * Sự kiện click sang tab tài khoản ngân hàng
             * Author: BTTu(25/11/2020)
             */
            tabBankAccountOnClick(){
                this.thisTab = 2;
                setTimeout(()=>{
                    this.$refs.BankAccount.focusInput();
                },100)
            },
            
            /**
             * Focus vào vùng note khi sang tab ghi chú
             * Author: BTTu(25/11/2020)
             */
            tabNoteOnClick(){
                this.thisTab = 4;
                setTimeout(()=>{
                    this.$refs.note.focus();
                },100)
            },

            /**
             * Focus vào vùng note khi sang tab ghi chú
             * Author: BTTu(25/11/2020)
             */
            tabBankAddressOnClick(){
                this.thisTab = 3;
                setTimeout(()=>{
                    this.$refs.nation.focusInput();
                },100)
            },


            /**
             * Sự kiện với table tài khoản ngân hàng
             * Author: BTTu(25/11/2020)
             * @param {String,Number} index
             */
            deleteRow(index) {
                this.tableBankAccount.splice(index, 1);
            },
            addRow(){
                let newRow  = {
                    BankAccount:'',
                    BankName:'',
                    BankBranch:'',
                    BankCity:'',
                    Name:'BankAccount1'
                };
                this.tableBankAccount.push(newRow);
                setTimeout(()=>{
                    console.log(this.$refs.BankAccount1);
                    this.$refs.BankAccount1.focusInput();
                },1000)
            },
            removeAllRow(){
                this.tableBankAccount = [];
            },
            //------------------------------------------------

             /**
             * Sự kiện với table địa chỉ khác
             * Author: BTTu(25/11/2020)
             * @param {String,Number} index
             */
            deleteRowAddress(index) {
                this.tableDeliveryAddress.splice(index, 1);
                this.rowAddress--;
            },
            addRowAddress(){
                let newRow  = {
                    Address:'',
                    Name:'address'+this.rowAddress
                };
                this.tableDeliveryAddress.push(newRow);
                this.$nextTick(() =>{
                    console.log(this.$refs[newRow.Name]);
                    this.$refs[newRow.Name].focusInput();
                })
                this.rowAddress++;
            },
            removeAllRowAddress(){
                this.tableDeliveryAddress = [];
                this.rowAddress=0;
            },
        },
    }
</script>

<style scoped>
.tab-order{
    width: 100%;
    overflow: visible;
}
.ul-header{
    margin: 0;
    width: 100%;
    height: 100%;
    padding-left: 0;
    position: relative;
    display: flex;
    z-index: 2;
    align-items: flex-end;
}
.li-header{
    height: 26px;
    margin: 0 1px;
    border: 1px solid #c9ccd2;
    border-bottom: none;
    border-radius: 2px 2px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:0px 8px;
}
.li-header:hover{
    color: #2ca01c;
    cursor: pointer;
}
.li-header.active{
    background: #cce4f9;
    height: 32px;
}
.content-tab{
    border: 1px solid #c9ccd2;
    margin: 0 1px 1px;
    z-index: 1;
    margin-top: -1px;
    padding: 11px 8px;
    height: 195px;
}
.note{
    width: 100%;
    height: 100%;
}
.note textarea{
    border: 1px solid #ccc;
    height: calc(100% - 20px);
    width: calc(100% - 20px);
    outline: none;
    padding: 10px;
}
.note textarea:focus{
    border-color: #2ca01c;
}
.w-input{
    width: 192px;
    padding-right: 12px;
}
.bank-account{
    width: 100%;
}
.icon.icon-delete{
    background-position: -460px -312px;
}
.grid-footer{
    width: calc(100% - 60px);
    background-color: #fff;
}
.bank-account .btn-grid-act{
    padding-top: 10px;
    padding-bottom: 15px;
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
.other-address{
    display: flex;
    width: 100%;
}
.title-right{
    position: absolute;
    top: 2px;
    left: 35px;
    height: 32px;
    z-index: 4;
}
.title-right input{
    width: 18px;
    height: 18px;
    margin-right: 10px;
    border: 1px solid #afafaf;
}
.bank-account{
    width: 100%;
}

.grid-footer{
    width: calc(100% - 60px);
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
</style>