<template>
    <div class="combobox">
        <BaseCBB :mission="mission" :header="listTh" :data ="objTest" :label="label" :indexshow=1 />
    </div>
</template>

<script>
import {busData} from '@/main.js';
import BaseCBB from '../BaseCBB'
    export default {
        components:{
            BaseCBB
        },
        props:{
            label:String,
            mission:String,
            required:Boolean
        },
       
        data(){
            return{
                options: [],
                value: [],
                loading: false,
                listTh:[{label:'Đối tượng',width:100},
                        {label:'Tên đối tượng',width:200},
                        {label:'Mã số thuế',width:150},
                        {label:'Địa chỉ',width:250},
                        {label:'Điện thoại',width:100},],
                objTest: [
                    {
                        Customer: 'Cửa Hàng Thạnh TY',
                        Name: 'Cửa Hàng Thạnh TY',
                        TaxCode: '',
                        Address: 'Phú Xuân - Krông Năng',
                        Mobile:""
                    },  {
                        Customer: 'DAIDUONG',
                        Name: 'Công ty Đại Dương',
                        TaxCode: '',
                        Address: '',
                        Mobile:""
                    },
                     {
                        Customer: 'DIENLUC',
                        Name: 'DIEN LUC MIEN TAY',
                        TaxCode: '',
                        Address: '',
                        Mobile:""
                    },
                     {
                        Customer: 'DVTUAN',
                        Name: 'ĐINH VĂN TUẤN',
                        TaxCode: '',
                        Address: '',
                        Mobile:""
                    },
                     {
                        Customer: 'KH00001',
                        Name: 'CÔNG TY TNHH THÀNH THẮNG 12',
                        TaxCode: '3700650305',
                        Address: 'Thửa đất 865, Tờ bản đồ 12, ấp Tân Hóa, Xã Tân Vĩnh Hiệp, Thị xã Tân Uyên, Bình Dương, Việt Nam 123',
                        Mobile:""
                    }, {
                        Customer: 'KH00009',
                        Name: 'CLASSIC STORE',
                        TaxCode: '',
                        Address: '71 Hoa Lan Phường 2 Quận Phú Nhuận',
                        Mobile:""
                    },{
                        Customer: 'KH013',
                        Name: 'Công ty cổ phần Đại Dương',
                        TaxCode: '',
                        Address: '68 Trần Bình Trọng, Hà Nội',
                        Mobile:""
                    },{
                        Customer: 'KH0111',
                        Name: 'Công ty TNHH Ngôi Sao',
                        TaxCode: '',
                        Address: '12 Bùi Thị Xuân',
                        Mobile:"0986025125"
                    },{
                        Customer: 'NCC0001',
                        Name: 'Công ty CP Maxspeed',
                        TaxCode: '',
                        Address: '14 Hoàng Quốc Việt, Hà Nội',
                        Mobile:""
                    },{
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
           
        }
       

    }
    
</script>

<style scoped>

.combobox{
    width: 100%;
    position: relative;
}
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

.cb-action{
    display: flex;
    position: absolute;
    top:20px;
    right: 32px;
    height: 30px;
    border-right: 1px solid #ccc;
}
.btn-add,.btn-option{
    width: 32px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-color: #35bf22;
}

.btn-option{
    border-left: 1px solid #ccc;
}
.btn-option:hover,.btn-add:hover{
    background-color: #e0e0e0;
    border-color: #e0e0e0;
}

</style>