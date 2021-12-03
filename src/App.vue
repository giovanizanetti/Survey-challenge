<template>
  <div id="app">
    <Survey />
  </div>
</template>

<script>
import Survey from './views/Survey.vue'
export default {
  name: 'app',
  components: {
    Survey,
  },
}
</script>

<style lang="scss">
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
}
</style>
