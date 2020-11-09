<template>
    <div class="form-date">
        <div class="dt-label">
            {{this.label}}
        </div>
        <div class="dt-content" v-bind:class="{focus:isFocus}">
             <input type="datetime" v-bind:placeholder="dateNow" class="input-date" @focus="isFocus=true" @blur="isFocus=false">
            <div class="icon icon-datepicker"></div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            label:String
        },
        data(){
            return{
                dateNow:"07/11/2020",
                isFocus:false
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
    padding-bottom: 4px;
    white-space: nowrap;
}
.dt-content{
    border: 1px solid #babec5;
    width: 100%;
    height: 32px;
    border-radius: 2px;
    box-sizing: border-box;
    display: flex;
    place-items: center;
}
.input-date{
    border-radius: 2px;
    flex: 1;
    height: 20px;
    border: none;
    padding: 5px 10px;
    width: 100%;
    font-size: 13px;
    padding-right: 0;
}
.icon.icon-datepicker{
    background-color: #fff;
    cursor: pointer;
    display: block;
    width: 32px;
    font-size: 16px;
    color: #757575;
    background-position-x: -120px;
    height: 100%;
    background-position: -128px -306px;
}
.focus{
    border-color: #2ca01c;
}
</style>