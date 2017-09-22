<template>
  <div class="normal">
    <ul>
      <li class="m-nav-item"
          v-for="(route, i) in routes"
          @click="go(route)"
          :key="i"
      >
        {{route.title}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      routes: {
        type: Array,
        isRequired: true
      }
    },
    methods: {
      go ({ name, params }) {
        this.$router.push({ name, params })
        this.$emit('hide')
      }
    }
  }
</script>
<style type="text/scss" lang="scss" scoped>
  .normal {
    position: absolute;
    width: 100%;
    background-color: #f2f2f2;
    z-index: 99;
  }
  .normal li {
    padding: .7rem 0;
    border-bottom: 1px solid #e8e8e8;
  }
</style>

