<template>
    <div class="contact">
        <div class="w-1-2" style="padding-right: 26px;" >
            <label class="label-input">Người liên hệ</label>
            <div class="row-input" style="padding-bottom: 4px;">
               <MSSelect v-bind:arrs="options" style="width:100px; margin-right:12px;"  placeholder="Xưng hô"/>
               <MSTextbox style="width:calc(100% - 112px);padding-top:3px" placeholder="Họ và tên"/> 
            </div>
            <div class="row-input" style="padding-bottom: 4px;">
                <MSTextbox placeholder="Email"/> 
            </div>
            <div class="row-input" style="padding-bottom: 4px;">
                 <div class="w-1-2">
                     <MSTextbox placeholder="Số điện thoại"/>
                 </div>
            </div>
            <div class="row-input" style="padding-bottom: 4px;"  v-show="isCus">
                <MSTextbox  label="Đại diện theo PL" placeholder="Đại diện theo PL"/> 
            </div>
        </div>
        <div class="w-1-2" v-show="!isCus">
            <div class="row-input" style="padding-bottom: 4px;">
                <MSTextbox  label="Đại diện theo PL" placeholder="Đại diện theo PL"/> 
            </div>
        </div>
        <div class="w-1-2" v-show="isCus">
            <label class="label-input">Người nhận hóa đơn điện tử</label>
            <div class="row-input" style="padding-bottom: 4px;">
                <MSTextbox placeholder="Họ và tên"/> 
            </div>
            <div class="row-input" style="padding-bottom: 4px;">
                <MSTextbox placeholder="Email, ngăn cách nhiều email bởi dấu chấm phẩy"/> 
            </div>
            <div class="row-input" style="padding-bottom: 4px;">
                 <div class="w-1-2">
                     <MSTextbox placeholder="Số điện thoại"/>
                 </div>
            </div>
        </div>
    </div>
</template>

<script>
import {busData} from '@/main.js'
import MSSelect from '@/components/common/MSSelect'
import MSTextbox from '@/components/common/MSTextbox'
    export default {
        components:{
            MSSelect,
            MSTextbox
        },
        data(){
            return{
                isCus:false,
                options:[{value:'1',label:'Anh'},
                        {value:'2',label:'Chị'},
                        {value:'3',label:'Bạn'},
                        {value:'4',label:'Bà'},
                        {value:'5',label:'Miss'},
                        {value:'6',label:'Mr'},
                        {value:'7',label:'Mrs'},
                        {value:'8',label:'Ông'},
                ]
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
.contact{
    display: flex;
}

</style>