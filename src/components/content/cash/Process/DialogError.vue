<template>
    <div>
        <div class="black-model-2" v-show="show"></div> 
        <div class="dialog dialog-error" v-if="show">
            <div class="content">
                <div class="icon icon-error"></div>
                <div class="text-error">{{errorMess}}</div>
            </div>
            <div class="error-line"></div>
            <div class="error-btn">
                <button @click="errorCloseOnClick()">Đóng</button>
            </div>
        </div>
    </div>
</template>

<script>
import {busData} from '@/main.js'
    export default {
        data(){
            return{
                show:false,
                errorMess:'',
                errCode:0
            }
        },
        created(){
            busData.$on('showDialogError',(err,errCode)=>{
                this.errorMess = err;
                this.errCode = errCode
                this.show = true;
                
            })
        },methods:{
            errorCloseOnClick(){
                this.show = false;
                this.$emit('dialogErrorClose',this.errCode);
            }
        }
    }
</script>

<style scoped>
.dialog.dialog-error{
    width: 444px;
    max-height: 150px;
    transition: all .2s;
    z-index: 7;
    background-color: #fff;
    position: fixed;
    top: calc(50% - 100px);
    left: calc(50% - 222px);
    padding: 32px;
    border-radius: 3px;
}
.content{
    display: flex;
    align-items: flex-start;
    padding: 0px 20px;
}
.icon.icon-error{
    background-position: -24px -954px;
    width: 48px;
    height: 48px;
}
.text-error{
    overflow: auto;
    max-height: 400px;
    padding-left: 16px;
    padding-top: 12px;
}
.error-line{
    height: 1px;
    background: #b8bcc3;
    margin-bottom: 20px;
    margin-top: 32px;
}
.error-btn{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    
}
.error-btn button{
    height: 36px;
    padding: 8px 20px;
    background: #248b15;
    border: 1px solid transparent;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
    position: relative;
    overflow: visible;
}
</style>