<template>
    <div class="content">
        <Header />
        <div class="router-content">
            <Cash />
        </div>
        
    </div>
</template>

<script>
import Header from './content/Header'
import Cash from './content/Cash'

    export default {
        components:{
            Header,
            Cash
        }
    }
</script>

<style scoped>
.content{
    width: calc(100% - 165px);
    height: 100vh;
    float: left;
    background-color: #ccc;
}
.router-content{
    padding-left: 20px;
    width: calc(100% - 20px);
    height: calc(100vh - 48px);
    background-color: #f4f5f8;
}

</style>