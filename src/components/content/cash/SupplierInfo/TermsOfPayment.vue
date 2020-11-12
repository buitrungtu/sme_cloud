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
                <DebtAccountCBB label="Tài khoản công nợ phải thu" currentValue="131" type='collect'/>
            </div>
            <div class="w-input" >
                <DebtAccountCBB label="Tài khoản công nợ phải trả" currentValue="331" type='pay'/>
            </div>
        </div>
        
       
    </div>
</template>

<script>
import MSTextbox from '@/components/common/MSTextbox'
import ObjCBB from '@/components/common/combobox/ObjCBB'
import {busData} from '@/main.js'
import DebtAccountCBB from '@/components/common/combobox/DebtAccountCBB'

    export default {
        components:{
            MSTextbox,
            ObjCBB,
            DebtAccountCBB
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