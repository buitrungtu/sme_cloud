<template>
    <div class="bank-account">
        <el-table :data="tableData" style="width: 100%" max-height="250">
            <el-table-column prop="address" label="SỐ TÀI KHOẢN" width="175">
                <MSTextBox value="" />
            </el-table-column>
             <el-table-column prop="address" label="TÊN NGÂN HÀNG" width="175">
                <MSTextBox value="" />
            </el-table-column>
             <el-table-column prop="address" label="CHI NHÁNH" width="172">
                <MSTextBox value="" />
            </el-table-column>
             <el-table-column prop="address" label="TỈNH/TP CỦA NGÂN HÀNG" width="250">
                <MSTextBox value="" />
            </el-table-column>

            <el-table-column fixed="right" label="" width="43">
                <template slot-scope="scope">
                    <el-button @click.native.prevent="deleteRow(scope.$index, scope.row)" type="text" size="small">
                        <div class="icon icon-delete"></div>
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="grid-footer">
            <div class="btn-grid-act">
                <button @click="addRow()">Thêm dòng</button>
                <button @click="removeAllRow()">Xóa hết dòng</button>
            </div>
        </div>
    </div>
</template>

<script>
import MSTextBox from '@/components/common/MSTextbox'

    export default {
        components:{
            MSTextBox
        },
        data() {
            return {
                tableData: [{
                    
                },],
                addCount:0
            }
        },
        methods: {
            deleteRow(index) {
                this.tableData.splice(index, 1);
                if(this.addCount > 0)
                -- this.addCount;
            },
            addRow(){
                let newRow  = {
                    
                };
                this.tableData = [newRow,...this.tableData];
                ++ this.addCount;
            },
            removeAllRow(){
                this.tableData = []
            },
           
        },
    }
</script>

<style scoped>
.bank-account{
    width: 100%;
}
.icon.icon-delete{
    background-position: -464px -312px;
}
.grid-footer{
    width: calc(100% - 60px);
    background-color: #fff;
}
.btn-grid-act{
    padding-top: 10px;
    padding-bottom: 32px;
}
.btn-grid-act button{
    padding: 2px 20px;
    margin-right: 10px;
    border-color: #8d9096;
    border-radius: 2.5px;
    height: 24px;
    border: 1px solid #8d9096;
    color: #212121;
    background-color: transparent;
    transition: all .2s ease;
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
    background: transparent;
    overflow: visible;
}
</style>