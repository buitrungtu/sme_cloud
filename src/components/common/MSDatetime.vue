<template>
    <div class="form-date">
        <div class="dt-label">
            {{this.label}}
        </div>
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder=""
            format="dd-MM-yyyy"  
        >
        </el-date-picker>
    </div>
</template>

<script>
    export default {
        props:{
            label:String
        },
        data(){
            return{
                 value1: '',
            }
        },
        methods:{
            
        }
    }
</script>

<style scoped>
.form-date{
    width: 100%;
    position: relative;
}
.dt-label{
    font-size: 12px;
    font-weight: 700;
    padding-bottom: 2px;
    white-space: nowrap;
}

</style>