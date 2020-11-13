<template>
    <div class="form-date">
        <div class="dt-label">
            {{this.label}}
        </div>
        <el-date-picker
            v-model="value"
            type="date"
            placeholder=""
            format="dd/MM/yyyy"
            clear-icon="" 
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
                 value: '',
            }
        },
        created(){
            var today =  new Date();
            var dd = String(today. getDate()).padStart(2, '0');
            var mm = String(today. getMonth() + 1).padStart(2, '0');
            var yyyy = today. getFullYear();
            today = mm + '/' + dd + '/' + yyyy;
            this.value = today
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