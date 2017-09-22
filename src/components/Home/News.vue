<template>
  <div class="normal common-section">
    <ul>
      <li v-for="item in 6">
        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx{{ item }} <span>——— 2017.9.22</span>
      </li>
    </ul>
  </div>
</template>
<script>

</script>
<style type="text/scss" lang="scss" scoped>
  .normal {
    background-color: #fff;
    padding: 1rem;
    margin-top: 2rem;
    li {
      padding: 1rem;
      text-align: left;
      display: flex;
      justify-content: space-between;
    }
  }
  @media screen and (max-width: 768px){
    .normal {
      padding: .4rem;
      li {
        padding: .4rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: inline-block;
        width: 100%;
      }
    }
  }
</style>
