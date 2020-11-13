<template>
    <div class="combobox">
        <div class="cb-label">{{this.label}} <span style="color:red" v-show="required">*</span> </div>
        <el-select
            v-model="value"
            filterable
            reserve-keyword
            placeholder=""
            :loading="loading"
        >
            <el-option :value="1" class="cb-header">
                <span style="float: left; width:200px" class="ellipsis" v-for="(thead,index) in listHeader" :key="index">{{thead}}</span>
            </el-option>
            <div class="cbb-content">
                <el-option
                    v-for="(item,index) in listItems"
                    :key="index"
                    :value="item.Customer"
                    >
                    <span style="float: left; width:200px;" class="ellipsis" v-for="(propertyVal,i) in Object.values(item)" :key="i">{{ propertyVal }}</span>
                </el-option>
            </div>
            
        </el-select>
       <div class="cb-action">
            <div class="btn-add" @click="showDialog()">
                <div class="icon icon-add"></div>
            </div>
        </div>
    </div>
</template>

<script>
import {busData} from '@/main.js';

    export default {
        props:{
            mission:String,
            listHeader:Array,
            listItems:Array,
            label:String,
            required:Boolean
        },
        data(){
            return{
                options: [],
                value: [],
                loading: false,
            }
        },
        methods:{
            showDialog(){
               busData.$emit('showDialog',this.mission)
            },
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
.btn-add{
    width: 32px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-color: #35bf22;
}

.btn-option:hover,.btn-add:hover{
    background-color: #e0e0e0;
    border-color: #e0e0e0;
}
</style>