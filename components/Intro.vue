<template>
  <section id="hero">
    <div id="particle" />

    <div class="container home">
      <div class="row">
        <section class="col-cs-12 col-md-12 col-sm-12">
          <h1>Hi, I'm Leon Kappes</h1>
          <hr />
        </section>

        <section class="col-xs-12 col-sm-12 col-md-12 projects">
          <h2>More of me</h2>

          <ul>
            <li class="col-xs-12 col-sm-12 col-md-4">
              <nuxt-link to="/">
                <div class="container-img">
                  <img
                    src="https://via.placeholder.com/1920x1080.png"
                    alt="Projects"
                  />
                </div>
                <h3>My Projects</h3>
              </nuxt-link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Intro'
}
</script>
<style lang="scss" scoped>
// Title
.home h1,
.home h2 {
  color: #fff;
  text-align: center;
}
.home h1 {
  font-size: 60px;
  margin: 200px 0 50px 0;
}
.home hr {
  width: 50px;
  margin-bottom: 200px;
}
// Projects
.projects h2 {
  font-size: 26px;
  margin: 0 0 30px 0;
  opacity: 1;
}
.projects li {
  margin-bottom: 50px;
  padding: 20px;
  background-color: #363636;
  border: 2px solid #444444;
  border-radius: 12px;
}
.projects img {
  width: 100%;
  border-radius: 3px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
}
.projects img:hover {
  transform: scale(1.07);
  opacity: 0.8;
}
.projects .container-img {
  overflow: hidden;
}

.projects h3 {
  color: #fff;
  font-size: 18px;
  text-align: center;
  padding-bottom: 15px;
  padding-top: 20px;
}
.projects h4 {
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 0.6;
}
.projects-btn {
  margin: 0;
  padding: 0 5%;
  margin-bottom: 180px;
}
.projects .btn {
  width: 100%;
  font-size: 16px;
  display: block;
  margin: 0 auto;
  outline: none;
}
.projects a {
  text-decoration: none;
}
</style>
