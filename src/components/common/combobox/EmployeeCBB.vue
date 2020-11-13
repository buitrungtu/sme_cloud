    <template>
    <div class="combobox">
        <div class="cb-label">{{this.label}} <span style="color:red" v-show="required">*</span> </div>
        <el-select
            v-model="value"
            filterable
            reserve-keyword
            placeholder=""
            :loading="loading"
            popper-class="hiden"
            size="small"
        >
            <el-option :value="1" class="cb-header">
                <span style="float: left; width:100px">Mã nhân viên</span>
                <span style="float: left; width:200px">Tên nhân viên</span>
                <span style="float: left; width:200px">Đơn vị</span>
                <span style="float: left; width:100px;margin-right:10px">ĐT di động</span>
            </el-option>
            <div class="cbb-content">
                <el-option
                    v-for="item in employees"
                    :key="item.EmployeeID"
                    :value="item.EmployeeName"
                    >
                    <span style="float: left; min-width:100px">{{ item.EmployeeID }}</span>
                    <span style="float: left; min-width:200px">{{ item.EmployeeName }}</span>
                    <span style="float: left; min-width:120px">{{ item.Department }}</span>
                    <span style="float: left; min-width:200px;;margin-right:10px">{{ item.Mobile }}</span>
                </el-option>
            </div>
           
        </el-select>
       <div class="cb-action">
            <div class="btn-add" @click="showAddSupplierDialog()">
                <div class="icon icon-add"></div>
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
                employees: [
                    {
                    ID:1,
                    EmployeeID: 'DVTUAN',
                    EmployeeName: 'ĐINH VĂN TUẤN',
                    Department: 'Phòng kinh doanh',
                    Mobile:""
                    },  {
                        ID:2,
                    EmployeeID: 'KIMYEN',
                    EmployeeName: 'Nguyễn Thị Kim Yến',
                    Department: 'Công ty TNHH Aquaman',
                    Mobile:""
                    },
                     {
                         ID:3,
                    EmployeeID: 'NV037',
                    EmployeeName: 'Lê Hà Minh',
                    Department: 'Phân xưởng 2',
                    Mobile:""
                    },
                     {
                         ID:4,
                     EmployeeID: 'NV038',
                    EmployeeName: 'Trần Đức Trọng',
                    Department: 'Phân xưởng 2',
                    Mobile:""
                    },
                     {
                         ID:5,
                    EmployeeID: 'NV041',
                    EmployeeName: 'Lê Phương Hoa',
                    Department: 'Phân xưởng 2',
                    Mobile:""
                    },
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
.cbb-content{
    overflow-y: scroll;
    overflow-x:hidden;
    width: 100%;
    max-height: 195px;
    box-sizing: border-box;
}
.cbb-content::-webkit-scrollbar{
    width: 7px;
    background: rgba(144,147,153,.3);
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
    right: 32px;
    height: 30px;
    border-right: 1px solid #ccc;
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