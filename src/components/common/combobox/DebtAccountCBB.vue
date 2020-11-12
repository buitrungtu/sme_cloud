<template>
    <div class="combobox">
        <div class="cb-label">{{this.label}} <span style="color:red" v-show="required">*</span> </div>
        <el-select
            v-model="value"
            filterable
            reserve-keyword
            placeholder=""
            :loading="loading"
            popper-class="hiden"
            size="small"
        >
            <el-option :value="1" class="cb-header">
                <span style="float: left; width:100px">Số tài khoản</span>
                <span style="float: left; width:150px">Tên tài khoản</span>
            </el-option>
         <div class="cbb-content">
            <el-option
                v-for="item in accounts"
                :key="item.AccountID"
                :value="item.AccountID"
                >
                <span style="float: left; min-width:100px">{{ item.AccountID }}</span>
                <span style="float: left; min-width:150px">{{ item.AccountName }}</span>
            </el-option>
         </div>
            
        </el-select>
    </div>
</template>

<script>
    export default {
        props:{
           required:Boolean,
           label:String,
           currentValue:String,
           type:String
        },
        created(){
            this.value = this.currentValue;
            if(this.type == 'pay'){
                this.accounts= [
                    {
                    AccountID:"331",
                    AccountName: 'Phải trả cho người bán',
                    },  {
                     AccountID:"3411",
                    AccountName: 'Các khoản đi vay',
                    },
                ];
            }else if(this.type == 'collect'){
                this.accounts=[
                    {
                        AccountID : '131',
                         AccountName: 'Phải thu của khách hàng',
                    }
                ]
            }else{
                this.accounts=[
                    {AccountID : '1111',AccountName: 'Tiền Việt Nam',},
                    {AccountID : '1112',AccountName: 'Ngoại tệ',},
                    {AccountID : '1113',AccountName: 'Vàng tiền tệ',},
                    {AccountID : '1121',AccountName: 'Vàng tiền tệ',},
                    {AccountID : '1122',AccountName: 'Cổ phiếu',},
                    {AccountID : '1123',AccountName: 'Trái phiếu',},
                    {AccountID : '1131',AccountName: 'Cho vay',},
                    {AccountID : '1132',AccountName: 'Phải thu của khách hàng',},
                    {AccountID : '1211',AccountName: 'Tài sản thế chấp',},
                ]
            }
        },
        data(){
            return{
                isHide:true,
                options: [],
                value: '',
                list: [],
                loading: false,
                accounts: [],
            }
        },methods:{
            
        },
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
}
.cb-header{
    background: #f4f5f8;
    cursor: default;
    color: #212121;
    font-weight: 700;
    z-index: 5;
}
.hiden{
    display: none !important;
}
.cb-action{
    display: flex;
    position: absolute;
    top:20px;
    right: 1px;
    height: 30px;
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