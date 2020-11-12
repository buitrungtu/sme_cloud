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
                <span style="float: left; width:100px">Mã loại tiền</span>
                <span style="float: left; width:150px">Tên loại tiền</span>
            </el-option>
        <div class="cbb-content">
             <el-option
                v-for="item in currencys"
                :key="item.MoneyID"
                :value="item.MoneyID"
                >
                <span style="float: left; min-width:100px">{{ item.MoneyID }}</span>
                <span style="float: left; min-width:150px">{{ item.MoneyName }}</span>
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

        },
        data(){
            return{
                isHide:true,
                options: [],
                value: 'VND',
                list: [],
                loading: false,
                currencys: [
                    {
                    MoneyID:"VND",
                    MoneyName: 'Việt Nam đồng',
                    },  {
                     MoneyID:"USD",
                    MoneyName: 'Đô la Mỹ',
                    },
                    ],
            }
        },methods:{
            
        },
        watch:{
            value:function(){
                console.log(this.value);
            }
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