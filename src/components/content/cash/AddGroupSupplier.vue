<template>
    <div class="dialog dialog-group-supplier" v-show="visible">
        <header class="dialog-header">
           <div class="dialog-title">
               <div class="tilte-content" style="display:flex">
                   <div class="title">Thêm nhóm khách hàng, nhà cung cấp</div>
               </div>
           </div>
           <div class="dialog-close">
               <div class="icon icon-help"></div>
               <div @click="btnCloseOnClick()" class="icon icon-close"></div>
           </div>
       </header>
       <div class="dialog-content">
           <div class="dialog-body" style="padding-right: 2px;">
               <div class="row-input">
                    <div class="w-1-3" style="padding-right: 12px;">
                        <MSTextbox label="Mã" v-bind:required="true"/>
                    </div>
                    <div class="w-2-3">
                        <MSTextbox label="Tên" v-bind:required="true"/>
                    </div>
                </div>
                <div class="label-input">Thuộc</div>
                <div class="row-input">
                    <BaseCBB :header="headeGroupSupplies" :data="data" :indexshow=2 :plus="false" />
                </div>
                <div class="row-input" style="padding-bottom:40px">
                    <MSTextbox v-bind:textarea="true" label="Địa chỉ" style="height:60px" placeholder="VD:Số 82 Duy Tân, Dịch Vọng Hậu, Cầu Giấy, Hà Nội"/>
                </div>
               <div class="dialog-footer">
                   <div class="divide"></div>
                   <div class="btn-footer">
                       <div class="btn-left">
                           <button @click="btnCloseOnClick()">Hủy</button>
                       </div>
                       <div class="btn-right">
                           <button>Cất</button>
                           <button class="save-and-add">Cất và thêm</button>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    </div>
</template>

<script>
import {busData} from '@/main.js';
import MSTextbox from '@/components/common/MSTextbox'
import BaseCBB from '@/components/common/BaseCBB'
    export default {
        props:{
            visible:Boolean
        },
        components:{
            MSTextbox,
            BaseCBB
        },
        data(){
            return{
                headeGroupSupplies:[{label:'Mã nhóm',width:'100'},{label:'Tên nhóm',width:'200'}],
                data:[
                    {id:'01',name:'Tạm'},
                    {id:'02',name:'Lâu dài'},
                ]
            }
        },
        methods:{
            btnCloseOnClick(){
                busData.$emit('closeDialogGroupSupplier');
            }
        }
    }
</script>

<style  scoped>
.dialog-group-supplier{
    width: 600px;
    height: 430px;
    top: calc(50% - 215px);
    left: calc(50% - 300px);
    z-index: 9;
}

</style>