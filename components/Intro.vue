<template>
  <section class="intro">
    <div class="intro-image" />
    <div class="intro-content">
      <h3 class="intro-top">
        Hello World
      </h3>
      <h1 class="intro-title title">
        Hi! I'm Leon Kappes
      </h1>
      <p class="intro-middle">
        <span>Backend Developer</span>
      </p>
      <button id="more" role="button">
        Learn more
        <i class="fas fa-angle-down" />
      </button>
      <div class="is-flex social">
        <a
          href="https://github.com/LeeDJD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github" />
        </a>
        <a
          href="https://twitter.com/theLeeDE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-twitter" />
        </a>
        <a
          href="mailto:leon@kappes.space"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="far fa-envelope" />
        </a>
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
$color1: rgba(208, 0, 0, 1);
$color2: rgba(255, 186, 8, 1);
$color3: rgba(63, 136, 197, 1);
$color4: rgba(3, 43, 67, 1);
$color5: rgba(255, 166, 48, 1);

.intro {
  background-size: cover;
  background: #151515 url(~assets/images/intro.jpg);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.intro .intro-image {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #111111;
  opacity: 0.85;
}
.intro .intro-middle {
  font-family: 'Lato';
  font-size: 1.3rem;
  line-height: 2.4rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: #fff;
  text-shadow: 0 0 6px rgba($color: #000000, $alpha: 0.2);
  margin-bottom: 2rem;
}
@media only screen and (max-width: 1024px) {
  .intro .intro-middle {
    font-size: 1.3rem;
  }
}

@media only screen and (max-width: 600px) {
  .intro .intro-middle {
    font-size: 1.2rem;
  }
}

@media only screen and (max-width: 600px) {
  .intro .intro-middle span {
    padding: 0 0.6rem;
  }
}

@media only screen and (min-width: 321px) and (max-width: 363px) {
  .intro .intro-middle span {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
  }
}

@media only screen and (max-width: 320px) {
  .intro .intro-middle span {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    padding: 0 0.3rem;
  }
}

.intro .intro-middle span::before {
  content: '|';
  text-align: center;
  display: inline-block;
  padding: 0 14px 0 8px;
  color: rgba(255, 255, 255, 0.3);
}

@media only screen and (max-width: 600px) {
  .intro .intro-middle span::before {
    display: none !important;
  }
}
.intro .intro-middle span::after {
  content: '|';
  text-align: center;
  display: inline-block;
  padding: 0 8px 0 14px;
  color: rgba($color: #ffffff, $alpha: 0.3);
}
@media only screen and (max-width: 600px) {
  .intro .intro-position span::after {
    display: none !important;
  }
}
.intro button {
  cursor: pointer;
  color: #fff !important;
  border-color: rgba(255, 255, 255, 0.3);
  line-height: 3.4rem !important;
  padding: 0 2.5rem 0 3rem !important;
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  background: transparent !important;
}
@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
  .intro button {
    color: #ffffff !important;
    border-color: rgba(255, 255, 255, 0.3);
    line-height: 2.4rem !important;
    padding: 0 2.5rem 0 3rem !important;
    text-transform: uppercase;
    background: transparent !important;
  }
}

@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
  .intro button {
    color: #ffffff !important;
    border-color: rgba(255, 255, 255, 0.3);
    line-height: 2.4rem !important;
    padding: 0 2.5rem 0 3rem !important;
    text-transform: uppercase;
    background: transparent !important;
  }
}
.intro button:focus {
  border-color: $color3;
  outline: 0;
}

.intro button:active {
  border-color: $color3;
}

.intro button:hover {
  border-color: $color3;
}

.intro button svg {
  display: inline-block;
  font-size: 1.6rem;
  line-height: inherit;
  text-align: center;
  position: relative;
  left: 1.2rem;
  padding-top: 5px;
}

button {
  color: #ffffff !important;
  border-color: $color3 !important;
  padding: 0 2.5rem 0 3rem;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  background: transparent !important;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

button:hover {
  background-color: $color3 !important;
  border-color: $color3;
  color: #ffffff;
}

.intro .intro-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: absolute;
}

@media only screen and (max-width: 1024px) {
  .intro .intro-content {
    font-size: 7.6rem;
  }
}

.intro .intro-content h1 {
  font-size: 84px !important;
  color: #ffffff;
  font-family: 'Raleway', sans-serif;
  line-height: 1.071;
  max-width: 900px;
  margin-top: 0;
  margin-bottom: 0.6rem;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  /* Landscape */
  /* Landscape */
}

@media only screen and (max-width: 768px) {
  .intro .intro-content h1 {
    font-size: 5.2rem;
  }
}

@media only screen and (max-width: 600px) {
  .intro .intro-content h1 {
    font-size: 4.6rem;
    margin-bottom: 0.6rem;
    text-align: center;
  }
}

@media only screen and (min-width: 320px) and (max-width: 425px) {
  .intro .intro-content h1 {
    font-size: 46px !important;
  }
}

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
  .intro .intro-content h1 {
    font-size: 46px !important;
  }
}

@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
  .intro .intro-content h1 {
    font-size: 46px !important;
  }
}

.intro .intro-content h3 {
  color: $color3;
  font-size: 1.3rem;
  line-height: 1.565;
  margin-bottom: 0;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  font-weight: 900;
  font-family: 'Lato';
  /* Landscape */
  /* Landscape */
}

@media only screen and (max-width: 768px) {
  .intro .intro-content h3 {
    font-size: 1.8rem;
  }
}

@media only screen and (max-width: 600px) {
  .intro .intro-content h3 {
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
    letter-spacing: 0.2rem;
  }
}

@media only screen and (min-width: 320px) and (max-width: 425px) {
  .intro .intro-content h3 {
    font-size: 1rem !important;
    margin-bottom: 0.3rem;
    letter-spacing: 0.2rem;
  }
}

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
  .intro .intro-content h3 {
    font-size: 1rem !important;
  }
}

@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
  .intro .intro-content h3 {
    font-size: 1rem !important;
  }
}

.intro .intro-content .social {
  font-size: 3rem;
  margin-top: 3rem;
}

.intro .intro-content .social svg {
  color: #ffffff;
  margin-left: 1rem;
  margin-right: 1rem;
}

.intro .intro-content .social svg:hover {
  background: transparent;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
</style>
