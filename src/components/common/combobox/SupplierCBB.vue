    <template>
    <div class="combobox">
        <div class="cb-label">{{this.label}} <span style="color:red" v-show="required">*</span> </div>
        <el-select
            v-model="value"
            filterable
            remote
            reserve-keyword
            placeholder=""
            :loading="loading"
            popper-class="hiden"
            size="small"
        >
            <el-option :value="1" class="cb-header">
                <span style="float: left; width:200px">Mã nhóm KH, NCC</span>
                <span style="float: left; width:250px">Tên nhóm KH, NCC</span>
            </el-option>

            <el-option
                v-for="item in suppliers"
                :key="item.supplierID"
                :value="item.supplierName"
                >
                <span style="float: left; min-width:200px">{{ item.supplierID }}</span>
                <span style="float: left; min-width:250px">{{ item.supplierName }}</span>

            </el-option>
        </el-select>
       <div class="cb-action">
            <div class="btn-add" @click="showAddSupplierDialog()">
                <div class="icon icon-add"></div>
            </div>
            <div class="btn-option">
                <div class="icon icon-down"></div>
            </div>
        </div>
    </div>
</template>

<script>
import {busData} from '@/main.js';
    export default {
        props:{
            label:String,
            mission:String,
            required:Boolean
        },
        data(){
            return{
                isHide:true,
                options: [],
                value: [],
                list: [],
                loading: false,
                suppliers: [
                    {
                    supplierID:"MDOC",
                    supplierName: 'MDOC',
                
                    },  {
                     supplierID:"1",
                    supplierName: 'Vật tư củ',
                    },
                     {
                     supplierID:"0310996077",
                    supplierName: 'Cty TNHH MTV TBCN T&T',
                    }
                    ],
            }
        },methods:{
            showAddSupplierDialog(){
               busData.$emit('showDialog',this.mission)
            },
            
        },
        watch:{
            value:function(){
                if(this.value){
                    this.isHide = false;
                }
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
.cb-header{
    background: #f4f5f8;
    cursor: default;
    color: #212121;
    font-weight: 700;
    z-index: 5;
}
.hiden{
    display: none !important;
}
.cb-action{
    display: flex;
    position: absolute;
    top:20px;
    right: 1px;
    height: 30px;
}
.btn-add,.btn-option{
    width: 32px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-color: #35bf22;
}

.btn-option{
    border-left: 1px solid #ccc;
}
.btn-option:hover,.btn-add:hover{
    background-color: #e0e0e0;
    border-color: #e0e0e0;
}
</style>