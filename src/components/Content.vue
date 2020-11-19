<template>
    <div class="content">
        <Header />
        <div class="router-content">
            <router-view />
        </div>
        
    </div>
</template>

<script>
import Header from './content/Header'

    export default {
        components:{
            Header,
        }
    }
</script>

<style scoped>
.content{
    width: calc(100% - 165px);
    height: 100vh;
    float: left;
}
.router-content{
    padding-left: 20px;
    width: calc(100% - 20px);
    height: calc(100vh - 48px);
    background-color: #f4f5f8;
}

</style>