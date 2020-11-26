<template>
    <div class="tab-order">
        <ul class="ul-header">
            <li class="li-header" v-bind:class="{active:thisTab==0}" @click="thisTab=0">Liên hệ</li>
            <li class="li-header" v-bind:class="{active:thisTab==1}" @click="thisTab=1">Điều khoản thanh toán</li>
            <li class="li-header" v-bind:class="{active:thisTab==2}" @click="tabBankAccountOnClick()">Tài khoản ngân hàng</li>
            <li class="li-header" v-bind:class="{active:thisTab==3}" @click="thisTab=3">Địa chỉ khác</li>
            <li class="li-header" v-bind:class="{active:thisTab==4}" @click="thisTab=4">Ghi chú</li>
        </ul>
        <div class="content-tab" >
            <div class="contact" v-show="thisTab == 0">
                <div class="organization" style="display:flex" v-show="isPer == false">
                    <div class="w-1-2" style="padding-right: 26px;" >
                        <label class="label-input">Người liên hệ</label>
                        <div class="row-input" style="padding-bottom: 4px;">
                        <MSSelect :disable="isShow" :value="obj.VocativeContact"  @valueSLChanged="obj.VocativeContact = $event" :data="options" placeholder="Xưng hô" style="width:100px; margin-right:12px;" />
                        <MSTextbox :disable="isShow" :value="obj.FullnameContact" @valueChanged="obj.FullnameContact = $event" style="width:calc(100% - 112px);padding-top:3px" placeholder="Họ và tên"/> 
                        </div>
                        <div class="row-input" style="padding-bottom: 4px;">
                            <MSTextbox :disable="isShow" :value="obj.EmailContact" @valueChanged="obj.EmailContact = $event" placeholder="Email"/> 
                        </div>
                        <div class="row-input" style="padding-bottom: 4px;">
                            <div class="w-1-2">
                                <MSTextbox :disable="isShow"  :value="obj.MobileContact" @valueChanged="obj.MobileContact = $event" placeholder="Số điện thoại"/>
                            </div>
                        </div>
                        <div class="row-input" style="padding-bottom: 4px;"  v-show="isCus">
                            <MSTextbox :disable="isShow" :value="obj.LegalRepresent" @valueChanged="obj.LegalRepresent = $event"  label="Đại diện theo PL" placeholder="Đại diện theo PL"/> 
                        </div>
                    </div>
                    <div class="w-1-2" v-show="!isCus">
                        <div class="row-input" style="padding-bottom: 4px;">
                            <MSTextbox :disable="isShow"  :value="obj.LegalRepresent" @valueChanged="obj.LegalRepresent = $event" label="Đại diện theo PL" placeholder="Đại diện theo PL"/> 
                        </div>
                    </div>
                    <div class="w-1-2" v-show="isCus">
                        <label class="label-input">Người nhận hóa đơn điện tử</label>
                        <div class="row-input" style="padding-bottom: 4px;">
                            <MSTextbox :disable="isShow"  :value="obj.FullnameEInvoice" @valueChanged="obj.FullnameEInvoice = $event" placeholder="Họ và tên"/> 
                        </div>
                        <div class="row-input" style="padding-bottom: 4px;">
                            <MSTextbox :disable="isShow" :value="obj.EmailEInvoice" @valueChanged="obj.EmailEInvoice = $event"  placeholder="Email, ngăn cách nhiều email bởi dấu chấm phẩy"/> 
                        </div>
                        <div class="row-input" style="padding-bottom: 4px;">
                            <div class="w-1-2">
                                <MSTextbox :disable="isShow" :value="obj.MobileEInvoice" @valueChanged="obj.MobileEInvoice = $event" placeholder="Số điện thoại"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="personal" style="display:flex" v-show="isPer == true">
                    <div class="w-1-2" style="padding-right: 26px;" >
                        <label class="label-input">Thông tin liên hệ</label>
                        <div class="row-input" style="padding-bottom: 4px;">
                            <MSTextbox :disable="isShow" :value="obj.EmailContact" @valueChanged="obj.EmailContact = $event" style="padding-top:3px" placeholder="Email"/> 
                        </div>
                        <div class="row-input" style="padding-bottom: 4px;">
                            <div class="w-1-2">
                                <MSTextbox :disable="isShow" :value="obj.MobileContact" @valueChanged="obj.MobileContact = $event" style="padding-top:3px" placeholder="Điện thoại di động"/> 
                            </div> 
                        </div>
                        <div class="row-input" style="padding-bottom: 4px;">
                            <div class="w-1-2">
                                <MSTextbox :disable="isShow" :value="obj.FixMobileContact" @valueChanged="obj.FixMobileContact = $event" style="padding-top:3px" placeholder="Điện thoại cố định"/> 
                            </div>
                        </div>
                        <div class="row-input" style="padding-bottom: 4px;">
                            <MSTextbox :disable="isShow" :value="obj.LegalRepresent" @valueChanged="obj.LegalRepresent = $event" label="Đại diện theo PL" placeholder="Đại diện theo PL"/> 
                        </div>
                    </div>
                
                    <div class="w-1-2">
                        <label class="label-input">Thông tin CMND/Thẻ căn cước</label>
                        <div class="row-input" style="padding-bottom: 4px;">
                            <div class="w-1-2" >
                                <MSTextbox :disable="isShow" :value="obj.Identity" @valueChanged="obj.Identity = $event" style="padding:3px 3px 0px 0px" placeholder="Số CMND/Thẻ căn cước"/> 
                            </div> 
                        </div>
                        <div class="row-input" style="padding-bottom: 4px;">
                            <div style="width:calc(50% + 2.5px)">
                                <MSDatetime :value="obj.IdentityDate" @valueDTChanged="obj.IdentityDate = $event" placeholder="Ngày cấp"/> 
                            </div>
                        </div>
                        <div class="row-input" style="padding-bottom: 4px;">
                            <MSTextbox :disable="isShow" :value="obj.IdentityPlace" @valueChanged="obj.IdentityPlace = $event" placeholder="Nơi cấp"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="term-payment"  v-show="thisTab == 1">
                <div class="w-3-4" style="display:flex">
                    <div class="w-input">
                        <div class="row-input" >
                            <BaseCBB :disable="isShow" :value="obj.TermsOfPayment" @valueCBBChanged="obj.TermsOfPayment = $event" label="Điều khoản thanh toán" :header="header"  :data="data" :indexshow=1 />
                        </div>
                    </div>
                    <div class="w-input">
                        <div class="row-input" >
                            <MSTextbox :disable="isShow" :value="obj.DaysOfOwed" @valueChanged="obj.DaysOfOwed = $event" :number="true" label="Số ngày được nợ"/>
                        </div>
                    </div>
                    <div class="w-input">
                        <div class="row-input" >
                            <MSTextbox :disable="isShow" :value="obj.MaxDebt" @valueChanged="obj.MaxDebt = $event" :number="true" label="Số nợ tối đa"/>
                        </div>
                    </div>
                </div>
                <div class="row-input">
                    <div class="w-input" v-show="isCus">
                        <DebtAccountCBB  label="Tài khoản công nợ phải thu" currentValue="131" type='collect'/>
                    </div>
                    <div class="w-input" >
                        <DebtAccountCBB label="Tài khoản công nợ phải trả" currentValue="331" type='pay'/>
                    </div>
                </div>
            </div>
            <div class="bank-account" v-show="thisTab == 2">
                <el-table :data="tableBankAccount" style="width: 100%" max-height="150px" ref="test">
                   <el-table-column prop="BankAccount"  label="SỐ TÀI KHOẢN" width="190">
                         <template slot-scope="scope">
                             <MSTextbox :disable="isShow"    :value="scope.row.BankAccount" @valueChanged="scope.row.BankAccount = $event" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="BankName" label="TÊN NGÂN HÀNG" width="190">
                        <template slot-scope="scope">
                            <MSTextbox :disable="isShow"  :value="scope.row.BankName" @valueChanged="scope.row.BankName = $event" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="BankBranch" label="CHI NHÁNH" width="190">
                        <template slot-scope="scope">
                            <MSTextbox :disable="isShow"  :value="scope.row.BankBranch" @valueChanged="scope.row.BankBranch = $event" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="BankCity" label="TỈNH/TP CỦA NGÂN HÀNG" width="190">
                        <template slot-scope="scope">
                            <MSTextbox :disable="isShow"  :value="scope.row.BankCity" @valueChanged="scope.row.BankCity = $event" />
                        </template>
                    </el-table-column>

                    <el-table-column fixed="right" label="" width="50">
                        <template slot-scope="scope">
                            <el-button :disabled="isShow" @click.native.prevent="deleteRow(scope.$index)" type="text" size="small">
                                <div class="icon icon-delete"></div>
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="grid-footer">
                    <div class="btn-grid-act">
                        <button :disabled="isShow" @click="addRow()">Thêm dòng</button>
                        <button :disabled="isShow" @click="removeAllRow()">Xóa hết dòng</button>
                    </div>
                </div>
            </div>
            <div class="other-address" v-show="thisTab == 3">
                <div class="w-1-2" style="padding-right:26px">
                    <label class="label-input">Vị trí địa lý</label>
                    <div class="row-input">
                        <div class="w-1-2" style="padding-right:12px" >
                            <MSSelect :disable="isShow"  value="1"  @valueSLChanged="obj.Nation = $event" :data="nations" placeholder="Quốc Gia"/>
                        </div>
                        <div class="w-1-2">
                            <MSSelect :disable="isShow" :value="obj.City"  @valueSLChanged="obj.City = $event" :data="cities" placeholder="Tỉnh/Thành phố"/>
                        </div>
                    </div>
                    <div class="row-input" >
                        <div class="w-1-2" style="padding-right:12px">
                            <MSSelect :disable="isShow" :value="obj.District"  @valueSLChanged="obj.District = $event" :data="districts" placeholder="Quận/Huyện"/>
                        </div>
                        <div class="w-1-2">
                            <MSSelect :disable="isShow" :value="obj.Village"  @valueSLChanged="obj.Village = $event" :data="villages" placeholder="Xã/Phường"/>
                        </div>
                    </div>
                </div>
                <div class="w-1-2" style="position: relative;">
                    <div class="title-right">
                        <el-checkbox v-model="obj.IsSameAddressSupplier">Giống địa chỉ nhà cung cấp</el-checkbox>
                    </div>

                    <el-table :data="tableDeliveryAddress" style="width: 100%;" max-height="140">
                       <el-table-column prop="Address" width="300" label="Địa chỉ giao hàng">
                            <template slot-scope="scope">
                                <MSTextbox :disable="isShow" :value="scope.row.Address" @valueChanged="scope.row.Address = $event" />
                            </template>
                        </el-table-column>
                        <el-table-column fixed="right" label="" width="50">
                            <template slot-scope="scope">
                                <el-button :disabled="isShow" @click.native.prevent="deleteRowAddress(scope.$index, scope.row)" type="text" size="small">
                                    <div class="icon icon-delete"></div>
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="grid-footer">
                    <div class="btn-grid-act">
                        <button :disabled="isShow" @click="addRowAddress()">Thêm dòng</button>
                        <button :disabled="isShow" @click="removeAllRowAddress()">Xóa hết dòng</button>
                    </div>
                </div>
                </div>
            </div>

            <div class="note" v-show="thisTab == 4">
                <textarea :disabled="isShow" v-model="obj.Note" tabindex="1"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
import MSSelect from '@/components/common/MSSelect'
import MSTextbox from '@/components/common/MSTextbox'
import MSDatetime from '@/components/common/MSDatetime'
import DebtAccountCBB from '@/components/common/combobox/DebtAccountCBB'
import BaseCBB from '@/components/common/BaseCBB'
    export default {
        props:{
            isPer:Boolean,
            root:Object,
            isCus:Boolean,
            isShow:Boolean
        },
        components:{
            MSTextbox,
            MSSelect,
            MSDatetime,
            BaseCBB,
            DebtAccountCBB
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
                header:[{label:'Mã điều khoản',width:'100'},{label:'Tên điều khoản',width:'250'}],
                data:[{TermsOfPayment:'DK01',TermsOfPaymentName:'Tên gì đó 1'},
                        {TermsOfPayment:'DK02',TermsOfPaymentName:'Tên gì đó 2 '},
                        {TermsOfPayment:'DK03',TermsOfPaymentName:'Tên gì đó3 '}
                ],
                rowBankAccount:0,
                tableBankAccount:[{
                    BankAccount:'',
                    BankName:'',
                    BankBranch:'',
                    BankCity:''
                }],
                tableDeliveryAddress:[
                    {Address:''}
                ],
                obj:{
                    IsSameAddressSupplier:false
                },
                //Vị trí địa lý
                nations:[{value:'1',label:'Việt Nam'}],
                cities:[{value:'1',label:'Hà Nội'},
                    {value:'2',label:'Đà Nẵng'},
                    {value:'3',label:'Hồ Chí Minh'},
                    {value:'4',label:'Gia Lai'},
                    {value:'5',label:'Cần Thơ'}
                ],
                districts:[
                    {value:'1',label:'Hoàn Kiếm'},
                    {value:'2',label:'Đống Đa'},
                    {value:'3',label:'Bắc Từ Liêm'},
                    {value:'4',label:'Nam Từ Liêm'},
                    {value:'5',label:'Tây Hồ'},
                    {value:'6',label:'Hoàng Mai'},
                    {value:'7',label:'Ba Đình'},
                    {value:'8',label:'Thanh Xuân'},
                    {value:'9',label:'Hai Bà Trưng'},
                    {value:'10',label:'Cầu Giấy'},
                ],
                villages:[
                    {value:'1',label:'Tây Tựu'},
                    {value:'2',label:'Minh Khai'},
                    {value:'3',label:'Cổ Nhuế'},
                    {value:'4',label:'Thượng Cát'},
                    {value:'5',label:'Giảng Võ'},
                    {value:'6',label:'Liên Mạc'},
                    {value:'7',label:'Xuân Đỉnh'},
                    {value:'8',label:'Phúc Diễn'},
                    {value:'9',label:'Đông Ngạc'},
                    {value:'10',label:'Mễ Trì'},
                ],
            }
        },
        created(){
            this.obj = this.root;  
        },
        beforeMount(){
            if(this.obj.BankAccount){
                this.tableBankAccount = JSON.parse(this.obj.BankAccount);
            }
            this.obj.BankAccount = this.tableBankAccount;

            if(this.obj.DeliveryAddress){
                this.tableDeliveryAddress = this.obj.DeliveryAddress.map((item)=>{
                    return{
                        'Address':item
                    }
                });
            }
            this.obj.DeliveryAddress = this.tableDeliveryAddress;
        },
        methods:{
            tabBankAccountOnClick(){
                this.thisTab = 2;
                //this.$refs.BankAccount.focusInput();
                console.log(this.$refs.test)
            },
            
            deleteRow(index) {
                this.tableBankAccount.splice(index, 1);
            },
            addRow(){
                let newRow  = {
                    BankAccount:'',
                    BankName:'',
                    BankBranch:'',
                    BankCity:''
                };
                this.tableBankAccount.push(newRow);
            },
            removeAllRow(){
                this.tableBankAccount = [];
            },
            //------------------------------------------------
            deleteRowAddress(index) {
                this.tableDeliveryAddress.splice(index, 1);
            },
            addRowAddress(){
                let newRow  = {
                    Address:''
                };
                this.tableDeliveryAddress.push(newRow);
            },
            removeAllRowAddress(){
                this.tableDeliveryAddress = [];
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