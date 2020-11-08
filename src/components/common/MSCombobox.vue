<template>
    <div class="combobox">
        <div class="cb-label">{{this.label}}</div>
        <div @click="hasClick()" class="cb-content" v-bind:class="{focus:isFocus}">
            <input type="text" class="cb-input">
            <div class="cb-action">
                <div class="btn-add">
                    <div class="icon icon-add"></div>
                </div>
                <div class="btn-option">
                    <div class="icon icon-down"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            label:String,
        },
        data(){
            return{
                isFocus:false
            }
        },methods:{
            hasClick(){
                this.isFocus = true;
            },
            dontClick(){
                this.isFocus = false;
            }
        }
    }
</script>

<style scoped>
.combobox{
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
.focus{
    border-color: #2ca01c;
}
.cb-input{
    border: none;
    font-size: 13px;
    padding: 5px 10px;
    padding-right: unset;
    text-overflow: ellipsis;
    background-color: transparent;
    display: flex;
    flex-grow: 1;
}
.cb-action{
    display: flex;
}
.btn-add,.btn-option{
    width: 32px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.btn-option{
    border-left: 1px solid #ccc;
}
</style>