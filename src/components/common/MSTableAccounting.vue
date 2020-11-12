<template>
    <div class="grid-accounting">
        <el-table :data="tableData" style="width: 100%" max-height="250">
            <el-table-column prop="date" label="#" width="50" type="index">
            </el-table-column>

            <el-table-column prop="name" label="Diễn giải" width="200">
                <template slot-scope="scope">
                    <el-input size="small"
                        style="text-align:center"
                        v-model="scope.row.name"></el-input>
                </template>
            </el-table-column>

            <el-table-column prop="state" label="TK Nợ" width="125">
                  <DebtAccountCBB currentValue="" mission=""/>
            </el-table-column>

            <el-table-column prop="state" label="TK Có" width="125">
                  <DebtAccountCBB currentValue="1111" mission=""/>
            </el-table-column>

            <el-table-column prop="address" label="Số tiền" width="150">
                <MSTextBox value="" v-bind:number="true"/>
            </el-table-column>

            <el-table-column prop="zip" label="Đối tượng" width="200">
                <ObjCBB2 mission="AddSupplier"/>
            </el-table-column>

            <el-table-column prop="zip" label="Tên đối tượng" width="250">
                <MSTextBox value="" v-bind:readonly="true" ID="ObjName"/>
            </el-table-column>

            <el-table-column prop="zip" label="Khoản mục CP" width="150">
               <ExpenseItem />
            </el-table-column>

            <el-table-column prop="zip" label="TK Ngân hàng" width="250">
                <BankAccount/>
            </el-table-column>

            <el-table-column prop="zip" label="Hợp đồng bán" width="300">
                <SaleContract/>
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
        <div class="upload-file">
            <div class="upload-title">
                <div class="icon icon-upload"></div>
                <div class="text">Đính kèm</div>
                <div class="max-size">Dung lượng tối đa 5MB</div>
            </div>
            <el-upload
                class="upload-demo"
                drag
                multiple
                action="#"
                >
                <div class="el-upload__text" style="font-style: italic;">Kéo thả tệp vào đây hoặc bấm vào đây</div>
            </el-upload>
        </div>
    </div>
</template>

<script>
import DebtAccountCBB from '@/components/common/combobox/DebtAccountCBB'
import ObjCBB2 from '@/components/common/combobox/ObjCBB2'
import ExpenseItem from '@/components/common/combobox/ExpenseItem'
import BankAccount from '@/components/common/combobox/BankAccount'
import SaleContract from '@/components/common/combobox/SaleContract'
import MSTextBox from '@/components/common/MSTextbox'

    export default {
        components:{    
            DebtAccountCBB,
            ObjCBB2,
            ExpenseItem,
            BankAccount,
            SaleContract,
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
.grid-accounting{
    position: relative;
    padding: 0px 30px;
}
.el-table__row .el-input .el-input__inner{
  border-style:none;
}
.hover-row .el-input .el-input__inner{
  border-style:solid;   
}
.icon.icon-delete{
    background-position: -464px -312px;
}
.grid-footer{
    width: calc(100% - 60px);
    padding: 0 30px;
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
.upload-title{
    margin-bottom: 6px;
    width: fit-content;
    color: #212121;
    display: flex;
}
.icon.icon-upload{
    background-position: -539px -203px;
    margin-right: 8px;
}
.upload-title .text{
    color: #212121;
    white-space: nowrap;
    font-weight: 700;
}
.max-size{
    margin-left: 15px;
    color: #757575;
    white-space: nowrap;
}
</style>