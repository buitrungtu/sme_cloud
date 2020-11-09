<template>
    <div class="ms-select" v-bind:class="{focus:isFocus}">
        <div class="select-option">
            <input type="text" v-bind:value="title" @focus="isFocus=true" @blur="isFocus=false" readonly v-bind:placeholder="placeholder">
        </div>
        <div class="btn-showoption" @click="showOptionDetail=true">
            <div class="icon icon-down"></div>
        </div>
        <div class="show-option-detail">
            <MSGridtable v-show="false"/>
        </div>
    </div>
</template>

<script>
import MSGridtable from './MSGridtable'
    export default {
        props:{
            title:String,
            placeholder:String
        },
        components:{
            MSGridtable
        },
        data(){
            return{
                isFocus:false,
                showOptionDetail:false
            }
        },
        methods:{

        }
    }
</script>

<style scoped>
.show-option-detail{
    position: absolute;
    top: 0;
    left: 0;
}
.ms-select{
    display: flex;
    min-height: 32px;
    border: 1px solid #babec5;
    border-radius: 2px;
    background-color: #fff;
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
}
.select-option{
    display: flex;
    flex-basis: 100%;
    flex-grow: 1;
    flex-wrap: wrap;
}
.select-option input{
    border: none;
    font-size: 13px;
    padding: 5px 10px;
    padding-right: unset;
    text-overflow: ellipsis;
    background-color: transparent;
    display: flex;
    flex-grow: 1;
    width: calc(100% - 32px);
}
.btn-showoption{
    width: 32px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.btn-showoption:hover{
    background-color: #e0e0e0;
    border-color: #e0e0e0;
}

.icon.icon-down{
    background-position: -554px -352px;
    width: 100%;height: 100%;
}
.focus{
    border-color: #2ca01c;
}
</style>