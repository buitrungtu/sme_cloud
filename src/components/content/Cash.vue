<template>
    <div class="cash">
       <ul class="nav-tabs">
                <li v-bind:class="{active:currentTab == 0}" @click="changeTab(0)">Quy trình</li>
                <li v-bind:class="{active:currentTab == 1}" @click="changeTab(1)">Thu, chi tiền</li>
                <li>Kiểm kê</li>
                <li>Báo cáo</li>
        </ul>
        <router-view />
    </div>
    
</template>

<script>
import {busData} from '@/main.js'
    export default {
        components:{
        },
       
        data(){
            return{
                currentTab:0
            }
        },
        created(){
            busData.$on('changeTab',(tab)=>{
                this.currentTab = tab;
            })
        },
        methods:{
            changeTab(tab){
                if(tab == 0){
                    this.$router.push('/');
                }else{
                    this.$router.push('/receiveandpayment');
                }
            }
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
    height: 60px;
    display: flex;
    padding-left: 0;
    position: relative;
    border-bottom: 2px solid #d4d7dc;
}
.nav-tabs li{
    list-style: none;
    height: 23px;
    padding: 32px 20px 4px 20px;
    border-bottom: 4px solid transparent;
    cursor: pointer;
}
.nav-tabs li:hover{
    color: #2ca01c;
}
.nav-tabs li.active{
    font-weight: bold;
    border-bottom-color: #2ca01c;
}
</style>