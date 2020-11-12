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
                <span style="float: left; width:150px" class="ellipsis">Số hợp đồng</span>
                <span style="float: left; width:250px" class="ellipsis">Ngày ký</span>
                <span style="float: left; width:100px" class="ellipsis">Khách hàng</span>
            </el-option>

            <div class="cbb-content">
                <el-option
                    v-for="item in listItems"
                    :key="item.ID"
                    :value="item.ID"
                    >
                    <span style="float: left; width:150px;" class="ellipsis">{{ item.ID }}</span>
                    <span style="float: left; width:250px" class="ellipsis">{{ item.Date }}</span>
                    <span style="float: left; width:100px" class="ellipsis">{{ item.Cus }}</span>
                </el-option>
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
                    ID:'LO_A1',
                    Date:'11/11/2020',
                    Cus:'Lê Thế Nam'
                    }, 
                     {
                    ID:'LO_A2',
                    Date:'2/9/2020',
                    Cus:'Vũ Đình Dũng'
                    }, 
                    {
                    ID:'LO_A3',
                    Date:'20/7/2020',
                    Cus:'Đàm Thế Phong'
                    }, 
                    {
                    ID:'LO_A4',
                    Date:'1/7/2020',
                    Cus:'Bùi Ngọc Toàn'
                    }, 
                    {
                    ID:'LO_A5',
                    Date:'30/6/2020',
                    Cus:'Bùi Trung Tú'
                    }, 
                    {
                    ID:'LO_A6',
                    Date:'10/5/2020',
                    Cus:'Chu Việt Dũng'
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


.ellipsis{
    margin: 0 10px;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>