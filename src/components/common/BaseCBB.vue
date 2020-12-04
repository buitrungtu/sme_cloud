<template>
    <div class="combobox" :class="{disabled:disable}">
        <div class="cb-label" v-show="label">{{this.label}} <span style="color:red" v-show="required">*</span> </div>
        <el-select
            v-model="content"
            v-on="EventListeners"
            filterable
            reserve-keyword
            placeholder=""
            :loading="loading"
            :multiple="multiple"
            :disabled="disable"
        >
            <el-option :value="1" class="cb-header">
                <span v-for="(thead,index) in header" :key="index" :style="{width:thead['width'] + 'px',float: 'left'}" class="ellipsis" >{{thead.label}}</span>
            </el-option>
            <div class="cbb-content">
                <el-option
                    v-for="(item,index) in data"
                    :key="index"
                    :value="Object.values(item)[0]"
                    :label="Object.values(item)[indexshow-1]"
                    >
                    <span :style="{width:Object.values(header[i])[1] + 'px',float: 'left'}" :title="propertyVal" class="ellipsis" 
                        v-for="(propertyVal,i) in Object.values(item)" :key="i">{{ propertyVal }}
                    </span>
                </el-option>
            </div>
        </el-select>
        <div class="cb-action" v-show="plus">
            <div class="btn-add" @click="showDialog()">
                <div class="icon icon-add"></div>
            </div>
        </div>
        <!-- <div class="add-new" v-show="addNewF9"> 
            <div class="icon icon-add" ></div>
            <div class="text">Thêm mới (F9)</div>
        </div> -->
    </div>
</template>

<script>
import {busData} from '@/main.js';
    export default {
        props:{
            mission:String,
            header:Array, //mảng các obj 2 thuộc tính label,width của từng cột
            data:Array, // mảng dữ liệu hiện lên
            label:String,
            required:Boolean,
            plus:{
                type:Boolean,   
                default:true
            },
            addNewF9:Boolean,
            indexshow:Number, //tính từ 1,
            multiple:Boolean,
            value:[String,Array],
            disable:Boolean
        },
        data(){
            return{
                content:this.value,
                loading: false,
            }
        },
        created(){
           
        },
        methods:{
            showDialog(){
               if(this.mission == 'AddSupplier'){
                    busData.$emit('showFormAddSupplier');
               }
            },
        },
        computed:{
            EventListeners(){
                let vm = this;
                return Object.assign({},this.$listeners,{
                    ElInput: function (event) {
                        vm.$emit('ElInput', event.target.value)
                    }
                })
            }
        },
        watch:{
            value:function(){
                this.content = this.value;
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

.cb-action{
    display: flex;
    position: absolute;
    top:23px;
    right: 32px;
    height: 30px;
    border-right: 1px solid #ccc;
    z-index: 1;
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

.add-new{
    width: calc(100% - 20px);
    height: 32px;
    background: #ebedf0;
    display: flex;
    align-items: center;
    padding-left: 20px;
}
.add-new .text{
    color:#35bf22;
    cursor: pointer;
}
.disabled{
    background-color: #F5F7FA;
    cursor: default;
    z-index: 3;
}
</style>