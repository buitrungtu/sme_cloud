<template>
    <div class="textbox">
        <div class="cb-label">{{this.label}}</div>
        <div class="cb-content">
            <input type="text" class="cb-input">
        </div>
    </div> 
</template>

<script>
    export default {
        props:{
            label:String
        }
    }
</script>

<style scoped>
.textbox{
    width: 100%;
    position: relative;
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