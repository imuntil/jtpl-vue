<template>
  <div class="normal main-body">
    <top-banner></top-banner>
    <j-product></j-product>
    <j-news></j-news>
    <j-about></j-about>
    <j-contact></j-contact>
  </div>
</template>
<script>
  import TopBanner from '../components/Home/TopBanner.vue'
  import JProduct from '../components/Home/Products.vue'
  import JNews from '../components/Home/News.vue'
  import JAbout from '../components/Home/About.vue'
  import JContact from '../components/Home/Contact.vue'
  export default {
    components: {
      TopBanner, JProduct, JNews, JAbout, JContact
    }
  }
</script>
<style type="text/scss" lang="scss" scoped>
  .normal {
    padding-bottom: 2rem;
  }
</style>
