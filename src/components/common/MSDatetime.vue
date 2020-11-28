<template>
    <div class="form-date">
        <div class="dt-label">
            {{this.label}}
        </div>
        <el-date-picker
            v-model="content"
            v-on="inputListeners"
            type="date"
            :placeholder="valplace"
            format="dd/MM/yyyy"
            value-format="dd/MM/yyyy"
            clear-icon=""
            :disabled="disabled"
        >
        </el-date-picker> 
    </div>
</template>

<script>
    export default {
        props:{
            label:String,
            placeholder:String,
            value:String,
            disabled:Boolean
        },
        data(){
            return{
                content:'',
                valplace: '',
            }
        },
        created(){
            if(this.value){
                let temp = this.value.substring(0,10);
                temp = temp.split('-').reverse().join('/');
                this.content = temp;
            }
            if(!this.placeholder){
                var today =  new Date();
                var dd = String(today. getDate()).padStart(2, '0');
                var mm = String(today. getMonth() + 1).padStart(2, '0');
                var yyyy = today.getFullYear();
                today = mm + '/' + dd + '/' + yyyy;
                this.valplace = today
            }else{
                this.valplace = this.placeholder
            }
        },
        computed:{
            inputListeners(){
                let vm = this;
                return Object.assign({},this.$listeners,{
                    ElInput: function (event) {
                        vm.$emit('ElInput', event.target.value)
                    }
                })
            }
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