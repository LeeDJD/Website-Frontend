<template>
  <div>
    <Header />
    <div class="container is-fluid has-text-white content">
      <h1 class="has-text-white">
        Important Notice
      </h1>
      <p>This wall of text is required because i live in the dumbster of Germany so feel free to ignore it.(It is in german, too!)</p>
    </div>
    <img src="images/legals.jpeg" alt="Legal notice">
    <img src="images/dsgvo.jpg" alt="Legal notice">
    <Footer bottom="auto !important" />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 1rem;
}
</style>
