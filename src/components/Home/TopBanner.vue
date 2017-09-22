<template>
  <div class="normal">
    <carousel arrow="always" :interval="5000" class="top-banner">
      <carousel-item v-for="item in 3" :key="item">
        <h3 class="test">{{ item }}</h3>
      </carousel-item>
    </carousel>
  </div>
</template>
<script>
  import { Carousel, CarouselItem } from 'element-ui'
  export default {
    components: {
      Carousel,
      CarouselItem
    }
  }
</script>
<style type="text/scss" lang="scss" scoped>
  .normal {
    background-color: #000;
  }
  .test {
    line-height: 300px;
    color: #ffffff;
  }
  @media screen and (max-width: 768px) {
    .test {
      line-height: 200px;
    }
  }
</style>
<style type="text/scss" lang="scss">
  @media screen and (max-width: 768px) {
    .normal {
      .el-carousel__item {
        height: 200px;
      }
      .top-banner {
        height: 200px;
      }
    }
  }
</style>

