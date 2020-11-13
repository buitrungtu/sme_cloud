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
                <span style="float: left; width:200px">Mã đơn vị</span>
                <span style="float: left; width:250px">Tên đơn vị</span>
            </el-option>

            <div class="cbb-content">
                <el-option
                    v-for="item in units"
                    :key="item.UnitID"
                    :value="item.UnitName"
                    >
                    <span style="float: left; min-width:200px">{{ item.UnitID }}</span>
                    <span style="float: left; min-width:250px">{{ item.UnitName }}</span>
                </el-option>
            </div>
            
        </el-select>
       <div class="cb-action" v-show="plus">
            <div class="btn-add" @click="showDialogAddUnit()">
                <div class="icon icon-add"></div>
            </div>
        </div>
    </div>
</template>

<script>
import {busData} from '@/main.js';
    export default {
        props:{
            label:String,
            mission:String,
            required:Boolean,
            plus:{
                type:Boolean,
                default:true
            }
        },
        data(){
            return{
                isHide:true,
                options: [],
                value: [],
                list: [],
                loading: false,
                units: [
                    {
                    UnitID:"HIK",
                    UnitName: 'Công ty TNHH HIK',
                    },  {
                    UnitID:"03156312",
                    UnitName: 'Công ty TNHH Thép KIM YEN',
                    },
                     {
                     UnitID:"PĐTXD",
                    UnitName: 'Phòng đầu tư xây dựng',
                    },
                    {
                     UnitID:"PHC",
                    UnitName: 'Phòng Hành Chính',
                    },
                    {
                    UnitID:"PKT",
                    UnitName: 'Phòng Kế Toán',
                    }
                    ],
            }
        },methods:{
            showDialogAddUnit(){
               busData.$emit('showDialogAddUnit');
            },
            
        },
        watch:{
            value:function(){
                if(this.value){
                    this.isHide = false;
                }
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
    top:22px;
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