<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/"><img src="" alt="Leon Kappes | Hobbyist programmer" height="48"></a><a class="navbar-burger" role="button" aria-label="menu" aria-expanded="false" data-target="#navMenu"><span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" /></a>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-start" />
        <div class="navbar-end">
          <a class="navbar-item" href="">Example</a>
          <div class="navbar-item">
            <nuxt-link class="button is-primary is-outlined is-rounded" to="/contact">
              Say Hello
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>

</style>
