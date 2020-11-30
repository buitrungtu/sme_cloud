<template>
    <div>
        <div class="black-model-error" v-show="show"></div> 
        <div class="dialog dialog-error" v-if="show">
            <div class="content">
                <div class="icon icon-error" v-show="isError"></div>
                <div class="icon icon-warning" v-show="!isError"></div>
                <div class="text-error">{{errorMess}}</div>
            </div>
            <div class="error-line"></div>
            <div class="error-btn" v-show="isError">
                <button @click="errorCloseOnClick()" >Đóng</button>
            </div>
            <div class="confirm-btn"  v-show="!isError">
                 <button class="btn-cancel" @click="btnCancelOnClick()">Không</button>
                <button @click="btnConfirmOnClick()">Có</button>
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
                errCode:0,
                isError:true,
            }
        },
        created(){
            busData.$on('showDialogError',(err,errCode)=>{
                this.errorMess = err;
                this.errCode = errCode
                this.isError = true;
                this.show = true;
            })

            busData.$on('showDialogConfirm',(mes)=>{
                this.errorMess = mes;
                this.isError = false;
                this.show = true;
            })

        },methods:{
            errorCloseOnClick(){
                this.show = false;
                busData.$emit('dialogErrorClose',this.errCode);
            },
            
            btnConfirmOnClick(){
                this.show = false;
                busData.$emit('deleteAccept');
            },

            btnCancelOnClick(){
                this.show = false;
                busData.$emit('cancelDelete');
            }
        }
    }
</script>

<style scoped>
.dialog.dialog-error{
    width: 444px;
    max-height: 150px;
    transition: all .2s;
    z-index: 3000;
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
.icon.icon-warning{
    background-position: -592px -456px;
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
.error-btn,.confirm-btn{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
.error-btn button,.confirm-btn button{
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
.confirm-btn button.btn-cancel{
    border: 1px solid #8d9096;
    color: #212121;
    background-color: transparent;
}
.confirm-btn{
    width: 88%;
    display: flex;
    justify-content: space-between;
}
</style>