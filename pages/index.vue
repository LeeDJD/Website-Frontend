<template>
  <div>
    <Navbar />
    <section class="hero is-white has-text-centered animate-fadeUp">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column">
              <h1 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
                Hobbyist Programmer
              </h1>
              <h2 class="subtitle is-size-4-desktop">
                LOREM IPSUM
              </h2><img class="avatar" src="img/mf-avatar.svg">
            </div>
          </div>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container">
          <img class="is-bottom" src="img/hero.svg">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style>

</style>
