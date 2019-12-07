<template>
  <div class="container-fluid footer">
    <div class="row">
      <div class="container">
        <footer>
          <section class="col-xs-12 col-sm-12 col-md-8">
            <h4>Who am I?</h4>
            <p>
              I'm a Developer from Germany. In my freetime I develop mostly
              public API examples and wrappers for API's! I also like to educate
              in Informatics.
            </p>
            <p id="copyright">
              &copy; 2019 - Leon Kappes | Made with
              <i class="fa fa-heart"></i> by Lee available on
              <i class="fab fa-github"></i>
            </p>
          </section>

          <section class="col-xs-12 col-sm-12 col-md-4 links-footer">
            <ul class="">
              <li>
                <a href="https://github.com/LeeDJD" target="_blank"
                  ><i class="fab fa-github fa-2x"></i
                ></a>
              </li>
              <li>
                <a href="https://discord.gg/FXMvCh" target="_blank"
                  ><i class="fab fa-discord fa-2x"></i
                ></a>
              </li>
            </ul>
          </section>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
.footer {
  padding: 15px 0 15px 0;
  background-color: #363636;
  color: #fff;
  overflow: hidden;
}
#copyright {
  font-size: 12px;
}

.links-footer ul li a {
  font-size: 12px;
}
.links-footer ul li a:hover {
  color: #fff;
  text-decoration: none;
}
.links-footer ul li a:active,
.links-footer ul li a:focus {
  text-decoration: none;
}

.fa-2x,
.links-footer ul li a {
  color: #fff;
}

.links-footer ul li {
  clear: right;
  float: left;
}
.links-footer ul li {
  padding-left: 0;
  padding-right: 25px;
}
</style>
