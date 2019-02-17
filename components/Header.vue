<template>
  <nav class="navbar is-dark">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="#" style="font-weight: bold;">Leon Kappes</a>
        <span class="navbar-burger burger" data-target="navMenu">
          <span />
          <span />
          <span />
        </span>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-end">
          <nuxt-link to="/" class="navbar-item is-active">
            Home
          </nuxt-link>
          <a href="#" class="navbar-item">Blog</a>
          <nuxt-link to="/snippets" class="navbar-item">
            Snippets
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>
<style scoped>
</style>
