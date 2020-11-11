<template>
    <div class="term-payment">
        <div class="w-3-4" style="display:flex">
            <div class="w-input">
                <div class="row-input" >
                    <ObjCBB label="Điều khoản thanh toán"/>
                </div>
            </div>
             <div class="w-input">
                <div class="row-input" >
                    <MSTextbox label="Số ngày được nợ"/>
                </div>
            </div>
             <div class="w-input">
                <div class="row-input" >
                    <MSTextbox label="Số nợ tối đa"/>
                </div>
            </div>
        </div>
        <div class="row-input">
            <div class="w-input" v-show="isCus">
                <MSSelect label="Tài khoản công nợ phải thu" title="131"/>
            </div>
            <div class="w-input" >
                <MSSelect label="Tài khoản công nợ phải trả" title="331"/>
            </div>
        </div>
        
       
    </div>
</template>

<script>
import MSSelect from '@/components/common/MSSelect'
import MSTextbox from '@/components/common/MSTextbox'
import ObjCBB from '@/components/common/combobox/ObjCBB'
import {busData} from '@/main.js'

    export default {
        components:{
            MSSelect,
            MSTextbox,
            ObjCBB
        },
        data(){
            return{
                isCus:false
            }
        },
        created(){
            busData.$on('changeForm',(mode)=>{
                this.isCus = mode;
            })
        }
    }
</script>

<style scoped>

.w-input{
    width: 192px;
    padding-right: 12px;
}
</style>