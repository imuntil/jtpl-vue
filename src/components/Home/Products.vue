<template>
  <div class="normal common-section">
    <div class="pro" v-for="item in 6">
      {{ item }}
    </div>
  </div>
</template>
<script>

</script>
<style type="text/scss" lang="scss" scoped>
  .normal {
    padding: 1rem 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #d8d8d8;
    margin-top: 2rem;
  }
  .pro {
    padding: 10%;
    margin: 1%;
    display: block;
    background-color: #b9fdff;
  }
</style>
