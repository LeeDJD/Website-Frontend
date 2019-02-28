<template>
  <nav class="navbar">
    <h1 class="brand">
      Lee
    </h1>
    <div class="spacer" />
    <ul id="wrapper" class="nav-wrapper">
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/">
          Home
        </nuxt-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Blog</a>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/">
          Projects
        </nuxt-link>
      </li>
    </ul>
    <div class="spacer2"></div>
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
      document.getElementById('mobile-hamburger').classList.toggle('enabled')
      document.getElementById('wrapper').classList.toggle('mobile')
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-direction: row;
  background: hsl(0, 0, 21%);
  align-items: center;
  padding: 0 1.5rem;
  @media screen and (max-width: 500px) {
    padding-left: 1rem;
  }
  .spacer {
    flex-grow: 1;
    @media screen and (max-width: 500px) {
      flex-grow: 0.5;
    }
  }
  .spacer2 {
    @media screen and (max-width: 500px) {
      flex-grow: 1;
    }
  }
  .brand {
    color: #fff;
    text-transform: uppercase;
    font-size: 1.1rem;
    font-weight: 900;
    padding-left: 2.7rem;
    @media screen and (max-width: 500px) {
      padding-left: 0;
    }
  }
  .nav-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
    align-items: center;

    @media screen and (max-width: 500px) {
      display: none;
      &.mobile {
        display: flex;
        flex-direction: column;
        top: 1rem;
        .nav-item {
          border-bottom: 2px solid #272725;
        }
      }
    }

    .nav-item {
      margin: 0.5rem 0;
      padding: 0.5rem 1rem;
      text-decoration: none;
      .nav-link {
        color: rgba(255, 255, 255, 0.7);
        text-transform: uppercase;
        font-size: 0.9rem;
        &:hover {
          color: white;
          transition-duration: 1s;
        }
      }
    }
  }
  .hamburger {
    position: flex;
    display: none;
    color: transparent;
    width: 33px;
    height: 30px;
    top: 0.7rem;
    right: 1rem;
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

    &.enabled {
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

    @media screen and (max-width: 500px) {
      display: block;
    }
  }
}
</style>
