<template>
    <div class="select">
        <div class="cb-label">{{this.label}} <span style="color:red" v-show="required">*</span> </div>
        <el-select ref="select"
            v-model="content" 
            v-on="EventListeners"
            size="small"
            :disabled="disabled"
            :placeholder="placeholder"
            :automatic-dropdown="autodrop"	
        >
            <el-option
                v-for="item in data"
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
            data:Array, // mỗi phần tử là 1 obj có 2 thuộc tính: value và label
            label:String,
            required:Boolean,
            placeholder:String,
            value:[String,Number],
            disabled:Boolean,
            autodrop:{
                type:Boolean,
                default:true
            }
        },
        components:{
        },
        data(){
            return{
                isFocus:false,
                showOptionDetail:false,
                content:this.value
            }
        },
        created(){
            
        },
        methods:{
            focusInput(){
                this.$refs.select.focus();
            }
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