<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }

</script>

<style>
  html,
  body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #212121;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: #212121;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #00E676;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
  }

  body {
    width: 100wh;
    color: #fff;
    background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
    background-size: 400% 400%;
    -webkit-animation: Gradient 15s ease infinite;
    -moz-animation: Gradient 15s ease infinite;
    animation: Gradient 15s ease infinite;
  }

</style>

<style scoped>


</style>
