<template>
    <div class="select">
        <el-select v-model="value" size="small">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            >
            <span style="float: center">{{ item.label }}</span>
            </el-option>
        </el-select>
    </div>
</template>

<script>
    export default {
        props:{
            
        },
        components:{
        },
        data(){
            return{
                isFocus:false,
                showOptionDetail:false,
                options: [
                    {
                    value: '1',
                    label: '1. Trả tiền nhà cung cấp (Không theo hóa đơn)'
                    }, {
                    value: '2',
                    label: '2. Tạm ứng cho nhân viên',
                    
                    }, {
                    value: '3',
                    label: '3. Chi mua ngoài có hóa đơn'
                    }, {
                    value: '4',
                    label: '4. Gửi tiền vào ngân hàng'
                    }, {
                    value: '5',
                    label: '5. Chi tiếp khách'
                    },
                    {
                    value: '6',
                    label: '6. Chi tạm ứng'
                    },
                    {
                    value: '7',
                    label: '7. Trả lương NV xưởng'
                    },
                    {
                    value: '8',
                    label: '8. Chi tiền điện'
                    },
                    {
                    value: '9',
                    label: '9. Chi tiền tiếp khách'
                    },
                    {
                    value: '10',
                    label: '10. Chi khác',
                    },
                ],
                 value: '10'
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

.select{
    width: 100%;
    position: relative;
    height: 100%;
}

</style>