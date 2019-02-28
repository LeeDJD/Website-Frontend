<template>
  <div>
    <Header />
    <div class="container is-fluid has-text-white content">
      <h1 class="has-text-white is-large">
        About me
      </h1>
      <p>Hi there! My name's <strong class="has-text-white">Leon Kappes</strong>,</p><p>
        a self-taught "software developer" from western Germany!<br>
        I started teaching programming to myself when I was 12 and I am learning ever<br>
        What started with me trying to get basic minecraft plugins working developed into now writing bigger applications in teams.<br><br>
        By now I'm somewhat fluent with <strong class="has-text-white">Java, Javascript, Go</strong>, and a basic understanding of several other programming languages.<br>
        Currently I am just learning some new concepts of good programming, looking at different Libaries and Frameworks and building myself a portfolio.<br>
        Primarily I write server side code in <strong class="has-text-white">Go or Node.js</strong>, storing everything in a <strong class="has-text-white">Cassandra</strong> CQL Database and <strong class="has-text-white">Redis</strong> as a cache.
        My Website is build in <strong class="has-text-white">Vue</strong> with <strong class="has-text-white">Nuxt.js</strong>.<br>
        Everything is hosted on an <strong class="has-text-white">Home Server</strong> which is using a Tiny <strong class="has-text-white">VPS</strong> as a <strong class="has-text-white">VPN</strong> for public connections.
      </p>
    </div>
    <Footer />
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

<style scoped lang="scss">
.container {
  height: 90%;
  position: relative;
  padding-top: 1%;
  @media only screen and (max-width: 600px) {
    padding-left: 3%;
  }
}
</style>
