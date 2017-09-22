<template>
  <div class="normal j-header">
    <div class="nav-container common-section">
      <div class="nav-bar">
        <div class="logo-box">
          <router-link class="logo" :to="{name: 'home'}">
            Logo
          </router-link>
        </div>
        <ul>
          <li class="nav-item" v-for="(route, i) in routes" :key="i">
            <router-link :to="{name: route.name}">{{route.title}}</router-link>
          </li>
        </ul>
        <button class="nav-btn" @click="menuShow = !menuShow">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
    <transition name="menu-toggle">
      <m-header @hide="menuShow = false"
        class="m-nav" :routes="routes" v-show="menuShow"></m-header>
    </transition>
  </div>
</template>
<script>
  import MHeader from './MHeader.vue'
  export default {
    components: {
      MHeader
    },
    data () {
      return {
        routes: [
          { title: '首页', name: 'home' },
          { title: '关于我们', name: 'about' },
          { title: '产品', name: 'product' },
          { title: '新闻', name: 'news' },
          { title: '联系我们', name: 'contact' }
        ],
        menuShow: false
      }
    }
  }
</script>
<style type="text/scss" lang="scss" scoped>
  @import "../styles/declaration";
  $h: 80px;
  $mh: 60px;
  .j-header {
    width: 100%;
    height: $h;
    line-height: $h;
    background-color: #d8d8d8;
    position: fixed;
  }
  .nav-container, .nav-bar {
    height: inherit;
    line-height: inherit;
    background-color: #d2d2d2;
    @include box;
  }
  .logo-box {
    @extend .nav-bar;
    line-height: inherit;
    float: left;
    padding: 0 .5rem;
    box-sizing: border-box;
  }
  .logo {
    display: inline-block;
    padding: .2rem;
  }
  .nav-bar ul {
    width: 80%;
    height: 100%;
    float: right;
    @include box;
    li {
      float: left;
      width: 20%;
      text-align: center;
      height: inherit;
      line-height: $h;
    }
    a {
      padding: .2rem;
      display: inline-block;
    }
  }
  .m-nav, .nav-btn {
    display: none;
  }
  .nav-btn {
    background-color: transparent;
    border: 1px solid #999;
    border-radius: 4px;
    padding: 0 6px;
    outline: none;
    height: 35px;
    top: 0;
    bottom: 0;
    right: .5rem;
    margin: auto;
    position: absolute;
    span {
      width: 22px;
      height: 2px;
      display: block;
      margin: 4px 0;
      background-color: #999;
    }
    span:nth-child(2) {
      margin: 0;
    }
  }
  @media screen and (max-width: 768px) {
    .j-header {
      height: $mh;
      line-height: $mh;
    }
    .m-nav, .nav-btn {
      display: block;
    }
    .nav-container ul {
      display: none;
    }
  }
</style>
<style type="text/scss" lang="scss">
  .menu-toggle-enter, .menu-toggle-leave-to {
    transform: scale(0, 0);
  }
  .menu-toggle-enter-to, .menu-toggle-leave {
    transform: scale(1, 1)
  }
  .menu-toggle-enter-active {
    transform-origin: 100% 0;
    transition: all .3s ease;
  }
  .menu-toggle-leave-active {
    transform-origin: 100% 0;
    transition: all .2s ease;
  }
</style>
