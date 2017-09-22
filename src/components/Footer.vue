<template>
  <div class="normal j-footer">
    <div class="upper-section">
      footer
    </div>
    <p class="copyright">
      <span>xxxxxx有限公司</span>
      <span>沪ICP备：00000000号</span>
    </p>
  </div>
</template>
<script>

</script>
<style type="text/scss" lang="scss" scoped>
  $total: 200px;
  $up: 160px;
  $bottom: $total - $up;
  .j-footer {
    width: 100%;
    height: $total;
  }
  .upper-section {
    height: $up;
    line-height: $up;
    background-color: #d8d8d8;
  }
  .copyright {
    font-size: .875rem;
    width: inherit;
    height: $bottom;
    line-height: $bottom;
    background-color: #444;
    span {
      display: inline-block;
      color: #fff;
    }
  }
  @media screen and (max-width: 768px) {
    .j-footer {
      height: auto;
      .upper-section {
        height: 100px;
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>
