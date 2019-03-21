<template>
  <footer class="custom-footer">
    <p class="mainline">
      <strong class="has-text-white">© Copyright(2019)</strong>
      <a href="/">Leon Kappes</a> available on
      <a href="https://github.com/LeeDJD/Website-Frontend" target="_blank">Github</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.custom-footer {
  background: hsl(0, 0%, 21%);
  padding: 1rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  bottom: 0;
  position: absolute;
  width: 100%;

  @media screen and (max-height: 700px) {
    bottom: auto !important;
  }

  .mainline {
    text-align: center;
    color: rgba(255, 255, 255, 0.9);

    a {
      color: rgba(255, 255, 255, 0.8);
      transition-duration: 300ms;
      &:hover {
        color: white;
        transition-duration: 300ms;
      }
    }
  }
}
</style>
