<template>
    <div class="select">
        <div class="cb-label">{{this.label}} <span style="color:red" v-show="required">*</span> </div>
        <el-select v-model="content" size="small"  :placeholder="placeholder">
            <el-option
                v-for="item in arrs"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            >
            <span style="float: center">{{ item.label }}</span>
            </el-option>
        </el-select>
    </div>
</template>

<script>
    export default {
        props:{
            arrs:Array, // mỗi phần tử là 1 obj có 2 thuộc tính: value và label
            label:String,
            required:Boolean,
            placeholder:String,
            value:String
        },
        components:{
        },
        data(){
            return{
                isFocus:false,
                showOptionDetail:false,
                content:""
            }
        },
        created(){
            this.content= this.value;
        },
        methods:{

        }
    }
</script>

<style scoped>

.select{
    width: 100%;
    position: relative;
    height: 100%;
}
.cb-label{
    font-size: 12px;
    font-weight: 700;
    color: #212121;
    padding-bottom: 4px;
}
</style>