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
                <span style="float: left; width:100px" class="ellipsis">Mã khoản mục</span>
                <span style="float: left; width:200px" class="ellipsis">Tên khoản mục</span>
            </el-option>

            <div class="cbb-content">
                <el-option
                    v-for="item in listItems"
                    :key="item.ID"
                    :value="item.ID"
                    >
                    <span style="float: left; width:100px;" class="ellipsis">{{ item.ID }}</span>
                    <span style="float: left; width:200px" class="ellipsis">{{ item.Name }}</span>
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
                listItems: [
                    {
                    ID:'CPBH',
                    Name:'Chi phí bán hàng'
                    }, 
                    {
                    ID:'CPQL',
                    Name:'Chi phí quản lý'
                    },
                    {
                    ID:'CPSX',
                    Name:'Chi phí sản xuất'
                    },
                    {
                    ID:'MTC',
                    Name:'Chi phí sử dụng máy thi công'
                    },
                    {
                    ID:'NCTT',
                    Name:'Chi phí nhân công trực tiếp'
                    },
                    {
                    ID:'SXC',
                    Name:'Chi phí sản xuất chung'
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