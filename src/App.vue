<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data(){
    return{
     

    }
  },
  
}
</script>

<style>
.el-table__expand-icon .el-icon-arrow-right{
    background: url("./assets/Sprites.bc13c6df.svg") no-repeat  -608px -312px;
    width: 15px;
	height: 15px;
}
.el-table__expand-icon.el-table__expand-icon--expanded .el-icon-arrow-right{
    background: url("./assets/Sprites.bc13c6df.svg") no-repeat  -560px -312px;
    width: 15px;
	height: 15px;
}
.icon{
  width: 24px;
  height: 24px;
  background: url("./assets/Sprites.bc13c6df.svg") no-repeat;
  background-position: -424px -86px;
  cursor: pointer;
}
  .icon.icon-search{
      background-position: -988px -356px;
      position: absolute;
      top:12px;
      right: 4px;
  }
  .icon.icon-category{
    background-position: -568px -30px;
}
.icon.icon-setting{
    background-position: -675px -30px;
}
.icon.icon-chat{    
    background-position: -899px -30px;
}
.icon.icon-help{
    background-position: -731px -30px;
}
.icon.icon-notification{
    background-position: -788px -30px;
}
.icon.icon-tour{
    background-position: -984px -144px;
}
.icon.icon-close{
    background-position: -144px -144px;
}
.icon.icon-add{
    background-position: -28px -308px;
}
.icon.icon-down{
    background-position: -556px -355px;
}
.process-board{
    background-image:url('./assets/qt_TienMat.1f64b87b.svg');
    height: 340px;
}
</style>
