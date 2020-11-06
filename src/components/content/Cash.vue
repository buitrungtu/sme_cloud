<template>
    <div class="cash">
       <ul class="nav-tabs">
                <li class="active">Quy trình</li>
                <li>Thu, chi tiền</li>
                <li>Kiểm kê</li>
                <li>Báo cáo</li>
        </ul>
        <Process />
    </div>
    
</template>

<script>
import Process from './cash/Process'
    export default {
        components:{
            Process
        }
        
    }
</script>

<style scoped>
.cash{
    width: 100%;
    height: 100%;
}
.nav-tabs{
    width: 100%;
    height: 64px;
    display: flex;
    padding-left: 0;
    position: relative;
    border-bottom: 2px solid #d4d7dc;
}
.nav-tabs li{
    list-style: none;
    height: 23px;
    padding: 32px 20px 8px 20px;
    border-bottom: 4px solid transparent;
    cursor: pointer;
}
.nav-tabs li.active{
    font-weight: bold;
    border-bottom-color: #2ca01c;
}
</style>