<template>
  <div id="app">
    <menu-list></menu-list>
  </div>
</template>

<script>
  import menu from './components/menu/MenuComponent'

  export default {
    name: 'App',
    components: {
      "menu-list":menu,
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
