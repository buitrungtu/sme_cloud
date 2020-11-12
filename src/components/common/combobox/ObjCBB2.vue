<template>
    <div class="combobox">
        <el-select
            v-model="value"
            filterable
            reserve-keyword
            placeholder=""
            :loading="loading"
            
        >
            <el-option :value="1" class="cb-header">
                <span style="float: left; width:100px" class="ellipsis">Đối tượng</span>
                <span style="float: left; width:200px" class="ellipsis">Tên đối tượng</span>
                <span style="float: left; width:120px" class="ellipsis">Mã số thuế</span>
                <span style="float: left; width:200px" class="ellipsis">Địa chỉ</span>
                <span style="float: left; width:100px; margin-right:10px" class="ellipsis">Điện thoại</span>
            </el-option>

            <div class="cbb-content">
                <el-option
                    v-for="item in listObj"
                    :key="item.ID"
                    :value="item.Customer"
                >
                    <span style="float: left; width:100px;" class="ellipsis">{{ item.Customer }}</span>
                    <span style="float: left; width:200px" class="ellipsis">{{ item.Name }}</span>
                    <span style="float: left; width:120px" class="ellipsis">{{ item.TaxCode }}</span>
                    <span style="float: left; width:200px" class="ellipsis">{{ item.Address }}</span>
                    <span style="float: left; width:50px; margin-right:10px" class="ellipsis">{{ item.Mobile }}</span>
                </el-option>
            </div>
            <div class="add-new" @click="showAddSupplierDialog()">
                <div class="icon icon-add" ></div>
                <div class="text">Thêm mới (F9)</div>
            </div>
        </el-select>
    </div>
</template>

<script>
import {busData} from '@/main.js';

    export default {
        props:{
             mission:String,
        },
       
        data(){
            return{
                options: [],
                value: [],
                list: [],
                loading: false,
                listObj: [
                    {
                    ID:1,
                    Customer: 'Cửa Hàng Thạnh TY',
                    Name: 'Cửa Hàng Thạnh TY',
                    TaxCode: '',
                    Address: 'Phú Xuân - Krông Năng',
                    Mobile:""
                    },  {
                        ID:2,
                    Customer: 'DAIDUONG',
                    Name: 'Công ty Đại Dương',
                    TaxCode: '',
                    Address: '',
                    Mobile:""
                    },
                     {
                         ID:3,
                    Customer: 'DIENLUC',
                    Name: 'DIEN LUC MIEN TAY',
                    TaxCode: '',
                    Address: '',
                    Mobile:""
                    },
                     {
                         ID:4,
                    Customer: 'DVTUAN',
                    Name: 'ĐINH VĂN TUẤN',
                    TaxCode: '',
                    Address: '',
                    Mobile:""
                    },
                     {
                         ID:5,
                    Customer: 'KH00001',
                    Name: 'CÔNG TY TNHH THÀNH THẮNG 12',
                    TaxCode: '3700650305',
                    Address: 'Thửa đất 865, Tờ bản đồ 12, ấp Tân Hóa, Xã Tân Vĩnh Hiệp, Thị xã Tân Uyên, Bình Dương, Việt Nam 123',
                    Mobile:""
                    }, {
                         ID:6,
                    Customer: 'KH00009',
                    Name: 'CLASSIC STORE',
                    TaxCode: '',
                    Address: '71 Hoa Lan Phường 2 Quận Phú Nhuận',
                    Mobile:""
                    },{
                         ID:7,
                    Customer: 'KH013',
                    Name: 'Công ty cổ phần Đại Dương',
                    TaxCode: '',
                    Address: '68 Trần Bình Trọng, Hà Nội',
                    Mobile:""
                    },{
                         ID:8,
                    Customer: 'KH0111',
                    Name: 'Công ty TNHH Ngôi Sao',
                    TaxCode: '',
                    Address: '12 Bùi Thị Xuân',
                    Mobile:""
                    },{
                         ID:9,
                    Customer: 'NCC0001',
                    Name: 'Công ty CP Maxspeed',
                    TaxCode: '',
                    Address: '14 Hoàng Quốc Việt, Hà Nội',
                    Mobile:""
                    },{
                         ID:10,
                    Customer: 'NCC0026',
                    Name: 'Công ty TNHH Ngôi Sao',
                    TaxCode: '3702142147',
                    Address: '337 Cầu Giấy, Hà Nội',
                    Mobile:""
                    },
                    
                ],
            }
        },methods:{
           showAddSupplierDialog(){
               busData.$emit('showDialog',this.mission)
            },
        },
        watch:{
            value:function(){
                for(let i = 0;i<this.listObj.length;i++){
                    if(this.listObj[i].Customer == this.value){
                        busData.$emit('completeName',this.listObj[i].Name);
                        break;
                    }
                }
            }
        }
       
    }
    
</script>

<style scoped>
.cbb-content{
    overflow-y: scroll;
    overflow-x:hidden;
    width: 100%;
    max-height: 195px;
    box-sizing: border-box;
}
.cbb-content::-webkit-scrollbar{
    width: 7px;
    background: rgba(144,147,153,.3);
}

.add-new{
    width: calc(100% - 20px);
    height: 32px;
    background: #ebedf0;
    display: flex;
    align-items: center;
    padding-left: 20px;
}
.text{
    color:#35bf22;
    cursor: pointer;
}



.cbb-content::-webkit-scrollbar-thumb{
    background: #248b15;
}
.combobox{
    width: 100%;
    position: relative;
}
.cb-label{
    font-size: 12px;
    font-weight: 700;
    color: #212121;
    padding-bottom: 4px;
}
.cb-header{
    background: #f4f5f8;
    cursor: default;
    color: #212121;
    font-weight: 700;
    z-index: 5;
}
.el-select-dropdown.el-popper.is-multiple.hidden{
    background-color: red;
}

.ellipsis{
    margin: 0 10px;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>