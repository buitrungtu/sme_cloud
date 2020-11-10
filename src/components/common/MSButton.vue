<template>
    <div class="ms-button">
        <button class="btn-text"><slot></slot></button>
        <div class="split"></div>
        <button class="icon icon-down"></button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.ms-button{
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
}
.btn-text{
    height: 100%;
    padding: 6px 14px 6px 20px;
    border-radius: 3px 0 0 3px;
    border: 1px solid transparent;
    color: #fff;
    cursor: pointer;
    position: relative;
    transition: all .2s ease;
    box-sizing: border-box;
    background-color: #35bf22;
    font-weight: 600;
    white-space: nowrap;
    font-size: 13px;
    line-height: 13px;
}
.ms-button .icon.icon-down{
    background-color: #35bf22;
    border-radius: 0 3px 3px 0;
    height: 100%;
    padding: 6px 16px 6px 8px;
    position: relative;
    border: 1px solid transparent;
    color: #fff;
    transition: all .2s ease;
    cursor: pointer;
    box-sizing: border-box;
    background-position: -840px -351px;
    width: 42px;
}
.split{
    position: absolute;
    height: 20px;
    background: #fff;
    top: 7px;
    right: 41px;
    border-right: 2px solid #fff;
}
</style>