<template>
    <div class="textbox">
        <div class="cb-label">{{this.label}} <span style="color:red" v-show="required">*</span> </div>
        <div class="cb-content" v-bind:class="{focus:isFocus}">
            <input type="text" class="cb-input" @focus="isFocus=true" @blur="isFocus=false" v-bind:placeholder="placeholder">
        </div>
    </div> 
</template>

<script>
    export default {
        props:{
            label:String,
            required:Boolean,
            placeholder:String
        },
        data(){
            return{
                isFocus:false
            }
        },
       
    }
</script>

<style scoped>
.textbox{
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
.cb-content{
    width: 100%;
    display: flex;
    min-height: 32px;
    border: 1px solid #babec5;
    border-radius: 2px;
    background-color: #fff;
    overflow: hidden;
    height: 100%;
}
.cb-input{
    border: none;
    padding: 6px 10px;
    width: 100%;
}
.focus{
    border-color: #2ca01c;
}
</style>