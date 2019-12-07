<!--
Leon Kappes Homepage
Copyright (C) 2019  Leon Kappes

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
-->

<template>
  <div>
    <Header is-active="home" />
    <div class="container is-fluid has-text-white content">
      <h1 class="has-text-white is-large">
        About me
      </h1>
      <p>
        Hi there! My name's
        <strong class="has-text-white">Leon Kappes</strong>,
      </p>
      <p>
        a self-taught "software developer" from western Germany!
        <br>I started teaching programming to myself when I was 12 and I am
        learning ever since. <br>What started with me trying to get basic
        minecraft plugins working developed into now writing bigger applications
        in teams.
        <br>
        <br>By now I'm somewhat fluent with
        <strong class="has-text-white">Java, Javascript, Go</strong>, and a
        basic understanding of several other programming languages.
        <br>Currently I am just learning some new concepts of good
        programming, looking at different Libaries and Frameworks and building
        myself a portfolio. <br>Primarily I write server side code in
        <strong class="has-text-white">Go or Node.js</strong>, storing
        everything in a <strong class="has-text-white">Cassandra</strong> CQL
        Database and <strong class="has-text-white">Redis</strong> as a cache.
        My Website is build in <strong class="has-text-white">Vue</strong> with
        <strong class="has-text-white">Nuxt.js</strong>. <br>Everything is
        hosted on an <strong class="has-text-white">VPS</strong> which is
        located at
        <a
          href="contabo.com"
          target="_blank"
          rel="noopener noreferrer"
        ><strong class="has-text-white">Contabo</strong></a>.
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
  position: relative;
  padding-top: 1rem;
  @media (max-width: 48em) {
    padding-left: 1rem;
  }
}
</style>
