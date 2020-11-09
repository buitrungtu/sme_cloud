<template>
  <div id="app">
    <router-view/>

    <div class="black-model" v-show="showBlackModel"></div>
    <AddSupplier v-if="showAddSupplire"/>
    <AddEmployee v-if="showAddEmployee"/>
  </div>
</template>

<script>
import {busData} from '@/main.js'
import AddSupplier from './components/content/cash/AddSupplier'
import AddEmployee from './components/content/cash/AddEmployee'
export default {
  name: 'App',
  components: {
    AddSupplier,
    AddEmployee
  },
  data(){
    return{
      showBlackModel:false,
      showAddSupplire:false,
      showAddEmployee:false,

    }
  },
  created(){
    busData.$on('showDialog',(mission)=>{
      if(mission == 'AddSupplier'){
        this.showAddSupplire=true;
        this.showBlackModel = true;
      }else if(mission == 'AddEmployee'){
        this.showAddEmployee=true;
        this.showBlackModel = true;
      }
    })
    busData.$on('closeDialogSupplier',()=>{
      this.showAddSupplire=false;
      this.showBlackModel = false;
    })
    busData.$on('closeDialogEmployee',()=>{
      this.showAddEmployee=false;
      this.showBlackModel = false;
    })
  }
}
</script>

<style>
.black-model{
   position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.4;
    background-color: #000;
    z-index: 2;
}
</style>
