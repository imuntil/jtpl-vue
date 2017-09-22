<template>
  <div id="app">
    <j-header></j-header>
    <transition enterActiveClass="animated fadeIn" leaveActiveClass="animated fadeOut" mode="out-in">
      <router-view></router-view>
    </transition>
    <vue-progress-bar></vue-progress-bar>
    <j-footer></j-footer>
  </div>
</template>

<script>
  import JHeader from './components/Header.vue'
  import JFooter from './components/Footer.vue'
  export default {
    name: 'app',
    components: {
      JHeader,
      JFooter
    }
  }
</script>

<style>
  #app {
    font-family:'Microsoft YaHei UI', 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: inherit;
  }
  #app>div.animated {
    animation-duration: .5s;
  }
</style>
