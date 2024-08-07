<template>
  <div id="app">
   <router-view></router-view>
   <myFootComponent></myFootComponent>
  </div>
</template>

<script>
import myFootComponent from "./components/myFootComponent.vue";
export default {
  name: 'app',
  components: {
    myFootComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
