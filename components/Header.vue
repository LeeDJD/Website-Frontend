<template>
  <nav class="navbar">
    <p class="brand">
      Lee
    </p>
    <div class="spacer" />
    <ul class="nav-wrapper">
      <li class="nav-item">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Projects</a>
      </li>
    </ul>
    <div type="button" @click="toggleHamburger()">
      <div id="mobile-hamburger" class="hamburger">
        <span />
        <span />
        <span />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    toggleHamburger() {
      document.getElementById('mobile-hamburger').classList.toggle('enabled')
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
  .spacer {
    flex-grow: 1;
  }
  .brand {
    color: #fff;
    text-transform: uppercase;
    font-size: 1.1rem;
  }
  .nav-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
    align-items: center;

    .nav-item {
      margin: 0.5rem 0;
      padding: 0.5rem 1rem;
      text-decoration: none;
      .nav-link {
        color: rgba(255, 255, 255, 0.7);
        transition-duration: 200ms;
        text-transform: uppercase;
        font-size: 0.9rem;
        &:hover {
          color: white;
          transition-duration: 200ms;
        }
      }
      .nav-link:last-child {
        transition-duration: 5s;
        //margin-right: 10rem;
      }
    }
  }
  .hamburger {
    color: transparent;
    width: 25px;
    height: 25px;
    top: 0;
    right: 1rem;
    cursor: pointer;
    vertical-align: baseline;
    background: none;
    span {
      background: rgba(255, 255, 255, 0.7);
      display: block;
      height: 3px;
      width: 100%;
      border-radius: 5px;
      margin-top: 4px;
      transition: background-color 0s 0.13s linear;
    }

    span:nth-child(1) {
      top: 0;
    }

    span:nth-child(2) {
      top: 7px;
    }

    span:nth-child(3) {
      top: 14px;
    }

    &.enabled {
      span:nth-child(1) {
        transform: translate3d(0, 10px, 0) rotate(45deg);
        transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
          transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
      }

      span:nth-child(2) {
        display: none;
        transform: rotate(5000deg);
        transition: 1s ease-in-out;
      }

      span:nth-child(3) {
        transform: translate3d(0, 10px, 0) rotate(-45deg);
        transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
          transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
    }

    &:hover {
      color: white;
      transition-delay: 200ms;
    }
  }
}

@media screen and (max-width: 500px) {
  .navbar {
    color: #fff;
  }
}
</style>
