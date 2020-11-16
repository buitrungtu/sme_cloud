<template>
    <div class="add-unit">
        <el-drawer
            title="Thêm tài khoản"
            :visible.sync="drawer"
            direction="rtl"
            size="50%"
            >
            <div class="content">
                <div class="row-input">
                    <div class="w-1-4">
                        <MSTextbox label="Số tài khoản" :value="AccountID" @valueChanged="AccountID = $event" v-bind:required="true"/>
                    </div>
                </div>
                <div class="row-input">
                    <div class="w-1-2" style="padding-right: 12px;">
                        <MSTextbox label="Tên tài khoản" v-bind:required="true"/>
                    </div>
                    <div class="w-1-2" style="padding-top: 2px;">
                        <MSTextbox label="Tên tiếng anh"/>
                    </div>
                </div>
                <div class="row-input">
                    <div class="w-1-2" style="display:flex;align-items:center">
                        <div class="w-1-2" style="padding:1.5px 12px 0px 0px;">
                            <BaseCBB label="Tài khoản tổng hợp" :header="thead" :data="ListAccount" :plus="false" :indexshow="1"/>
                        </div>
                        <div class="w-1-2">
                            <MSSelect label="Tính chất" :required="true" :data="ListType" />
                        </div>
                    </div>
                </div>
                 <div class="row-input">
                    <MSTextbox label="Diễn giải" :textarea="true"/>
                 </div>
                 <div class="row-input">
                    <el-checkbox >Có hạch toán ngoại tệ</el-checkbox>
                 </div>
                 <el-collapse @change="handleChange">
                    <el-collapse-item title="Theo dõi chi tiết theo">
                         <div class="row-input">
                             <div class="w-1-2 flex">
                                 <div class="w-5-6 flex">
                                     <div class="w-1-2 flex">
                                         <el-checkbox v-model="disables[0]" >Đối tượng</el-checkbox>
                                     </div>
                                     <div class="w-1-2">
                                         <MSSelect :data="ListSupp" :disable="!disables[0]"/>
                                     </div>
                                 </div>
                             </div>
                            <div class="w-1-2 flex">
                                <div class="w-5-6 flex">
                                    <el-checkbox>Tài khoản ngân hàng</el-checkbox>
                                </div>     
                             </div>
                         </div>
                         <div class="row-input">
                             <div class="w-1-2 flex">
                                 <div class="w-5-6 flex">
                                     <div class="w-1-2 flex">
                                         <el-checkbox v-model="disables[1]">Đối tượng THCP</el-checkbox>
                                     </div>
                                     <div class="w-1-2">
                                         <MSSelect :data="rules" :disable="!disables[1]"/>
                                     </div>
                                 </div>
                             </div>
                            <div class="w-1-2 flex">
                                <div class="w-5-6 flex">
                                   <div class="w-5-6 flex">
                                     <div class="w-1-2 flex">
                                         <el-checkbox v-model="disables[2]">Công trình</el-checkbox>
                                     </div>
                                     <div class="w-1-2">
                                         <MSSelect :data="rules" :disable="!disables[2]"/>
                                     </div>
                                 </div>
                                </div>     
                             </div>
                         </div>
                         <div class="row-input">
                             <div class="w-1-2 flex">
                                 <div class="w-5-6 flex">
                                     <div class="w-1-2 flex">
                                         <el-checkbox v-model="disables[3]">Đơn đặt hàng</el-checkbox>
                                     </div>
                                     <div class="w-1-2">
                                         <MSSelect :data="rules" :disable="!disables[3]"/>
                                     </div>
                                 </div>
                             </div>
                            <div class="w-1-2 flex">
                                <div class="w-5-6 flex">
                                   <div class="w-5-6 flex">
                                     <div class="w-1-2 flex">
                                         <el-checkbox v-model="disables[4]">Hợp đồng bán</el-checkbox>
                                     </div>
                                     <div class="w-1-2">
                                         <MSSelect :data="rules" :disable="!disables[4]"/>
                                     </div>
                                 </div>
                                </div>     
                             </div>
                         </div>
                         <div class="row-input">
                             <div class="w-1-2 flex">
                                 <div class="w-5-6 flex">
                                     <div class="w-1-2 flex">
                                         <el-checkbox v-model="disables[5]">Hợp đồng mua</el-checkbox>
                                     </div>
                                     <div class="w-1-2">
                                         <MSSelect :data="rules" :disable="!disables[5]"/>
                                     </div>
                                 </div>
                             </div>
                            <div class="w-1-2 flex">
                                <div class="w-5-6 flex">
                                   <div class="w-5-6 flex">
                                     <div class="w-1-2 flex">
                                         <el-checkbox v-model="disables[6]">Khoản mục CP</el-checkbox>
                                     </div>
                                     <div class="w-1-2">
                                         <MSSelect :data="rules" :disable="!disables[6]"/>
                                     </div>
                                 </div>
                                </div>     
                             </div>
                         </div>
                         <div class="row-input">
                             <div class="w-1-2 flex">
                                 <div class="w-5-6 flex">
                                     <div class="w-1-2 flex">
                                         <el-checkbox v-model="disables[7]">Đơn vị</el-checkbox>
                                     </div>
                                     <div class="w-1-2">
                                         <MSSelect :data="rules" :disable="!disables[7]"/>
                                     </div>
                                 </div>
                             </div>
                            <div class="w-1-2 flex">
                                <div class="w-5-6 flex">
                                   <div class="w-5-6 flex">
                                     <div class="w-1-2 flex">
                                         <el-checkbox v-model="disables[8]">Mã thống kê</el-checkbox>
                                     </div>
                                     <div class="w-1-2">
                                         <MSSelect :data="rules" :disable="!disables[8]"/>
                                     </div>
                                 </div>
                                </div>     
                             </div>
                         </div>
                    </el-collapse-item>
                 </el-collapse>
                 
            </div>
           
            <div class="dialog-footer">
                   <div class="divide"></div>
                   <div class="btn-footer">
                       <div class="btn-left">
                           <button @click="btnCloseOnClick()">Hủy</button>
                       </div>
                       <div class="btn-right">
                           <button>Cất</button>
                           <button class="save-and-add">Cất và thêm</button>
                       </div>
                   </div>
               </div>
        </el-drawer>
        
    </div>
</template>

<script>
import {busData} from '@/main.js';
import MSTextbox from '@/components/common/MSTextbox'
import BaseCBB from '@/components/common/BaseCBB'
import MSSelect from '@/components/common/MSSelect'

    export default {
        components:{
            MSTextbox,
            BaseCBB,
            MSSelect,
        },
         data() {
            return {
                AccountID:"",
                drawer: false,
                thead:[{width:'100',label:'Số tài khoản'},{width:'200',label:'Tên tài khoản'}],
                ListAccount:[
                    {AccountID:'111',AccountName:'Tiền mặt'},
                    {AccountID:'1111',AccountName:'Tiền Việt Nam'},
                    {AccountID:'1112',AccountName:'Ngoại tệ'},
                    {AccountID:'1113',AccountName:'Vàng tiền tệ'},
                    {AccountID:'112',AccountName:'Tiền gửi ngân hàng'},
                    {AccountID:'1121',AccountName:'Tiền Việt Nam'},
                    {AccountID:'1122',AccountName:'Ngoại tệ'},
                    {AccountID:'1123',AccountName:'Vàng tiền tệ'},
                ],
                ListType:[
                    {value:'1',label:'Dư Nợ'},
                    {value:'2',label:'Dư Có'},
                    {value:'3',label:'Lưỡng tính'},
                    {value:'4',label:'Không có số dư'},
                ],
                ListSupp:[
                    {value:'1',label:'Nhà cung cấp'},
                    {value:'2',label:'Khách hàng'},
                    {value:'3',label:'Nhân viên'}
                ],
                rules:[
                    {value:'1',label:'Chỉ cảnh báo'},
                    {value:'2',label:'Bắt buộc nhập'},
                ],
                disables:[false,false,false,false,false,false,false,false,false],
            };
        },
        created(){
            busData.$on('showDialogAddAccount',()=>{
                this.drawer = true;
            })
        },
        methods:{
            handleChange(val) {
                console.log(val);
             },
            btnCloseOnClick(){
                this.drawer=false
            }
        },
        watch:{
            AccountID:function(){
                console.log(this.AccountID);
            }
        }
    }
</script>

<style scoped>
.content{
    width: 100%;
    height: calc(100% - 100px);
    padding: 10px 20px;
    position: relative;
}

.dialog-footer{
    width: 100%;
    padding: 0px 15px;
}
.flex{
    display: flex;
    align-items: center;
}
</style>