<template>
  <div id="app">
    <Menu />
    <Content/>
  </div>
</template>

<script>
import Menu from './components/Menu'
import Content from './components/Content'
export default {
  name: 'App',
  components: {
    Menu,
    Content
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
  font-size: 14.5px;
}
.icon{
  width: 24px;
  height: 24px;
  background: url("./assets/Sprites.bc13c6df.svg") no-repeat;
  background-position: -424px -86px;
}
</style>
