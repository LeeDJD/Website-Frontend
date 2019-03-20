<template>
  <nav class="navbar">
    <h1 class="brand">
      Lee
    </h1>
    <div class="right">
      <nuxt-link class="link" to="/">
        Home
      </nuxt-link>
      <a class="link" href="/">Blog</a>
      <nuxt-link class="link" to="/">
        Projects
      </nuxt-link>
    </div>
    <div id="mobile-hamburger" class="hamburger" @click="toggleHamburger()">
      <span />
      <span />
      <span />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    toggleHamburger() {
      const burger = document.querySelector('#mobile-hamburger')

      burger.classList.toggle('active')
      burger.parentElement.classList.toggle('active')
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  background: hsl(0, 0, 21%);
}
.navbar div {
  display: none;
}

.navbar .hamburger,
.navbar .brand {
  display: inline-block;
}
.navbar .link {
  display: block;
  text-align: center;
  padding: 1em;
  text-decoration: none;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
}
.navbar .link:hover,
.navbar .link:active {
  transition-duration: 1s;
  color: white;
}
.navbar .brand {
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 900;
  width: 10em;
  padding: 1em;
}
.hamburger {
  color: transparent;
  width: 33px;
  cursor: pointer;
  background: none;

  span {
    background: white;
    display: block;
    height: 3px;
    width: 100%;
    border-radius: 5px;
    margin-top: 5px;
  }

  span:nth-child(1) {
    transition: 100ms ease-in-out;
  }

  span:nth-child(2) {
    transition: ease-in-out 200ms;
  }

  span:nth-child(3) {
    transition: 200ms ease-in-out;
  }

  &.active {
    span {
      background: white;
    }

    span:nth-child(1) {
      transform: translateY(8px) rotate(-45deg);
      transition: 100ms ease-in-out;
    }

    span:nth-child(2) {
      transform: translateY(-10px);
      opacity: 0;
      transition: ease-in-out 200ms;
    }

    span:nth-child(3) {
      transform: translateY(-9px) rotate(45deg);
      transition: 200ms ease-in-out;
    }
  }
}

@media (min-width: 49em) {
  .navbar {
    display: flex;
  }
  .navbar div {
    display: flex;
  }
  .navbar .right {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }
  .navbar .hamburger {
    display: none;
  }
}

@media (max-width: 48em) {
  .navbar .brand {
    text-align: left;
  }
  .navbar .hamburger {
    display: inline-block;
    position: absolute;
    right: 1em;
    top: 1em;
  }
  .navbar.active div {
    display: block;
  }
}
</style>
