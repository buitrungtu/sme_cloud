<template>
    <div class="add-unit">
        <el-drawer
            title="Thêm cơ cấu tổ chức"
            :visible.sync="drawer"
            direction="rtl"
            size="40%"
            >
            <div class="content">
                <div class="row-input">
                    <div class="w-1-3" style="padding-right: 12px;">
                        <MSTextbox label="Mã đơn vị" v-bind:required="true"/>
                    </div>
                    <div class="w-2-3">
                        <MSTextbox label="Tên đơn vị" v-bind:required="true"/>
                    </div>
                </div>
                <div class="row-input">
                    <div class="w-1-3" style="padding-right: 9px;">
                    </div>
                    <div class="w-2-3">
                    </div>
                </div>
               <div class="label-input">Tài khoản chi phí lương</div>
            </div>
        </el-drawer>
    </div>
</template>

<script>
import {busData} from '@/main.js';
import MSTextbox from '@/components/common/MSTextbox'
    export default {
        components:{
            MSTextbox,
        },
         data() {
             
            return {
                drawer: false,
            };
        },
        created(){
            busData.$on('showDialogAddUnit',()=>{
                this.drawer = true;
            })
        }
    }
</script>

<style scoped>
.content{
    width: 100%;
    height: 100%;
    padding: 10px 20px;
}
</style>