<?php require_once "header.php"; ?>
  <title>
    UEAB Virtual Tour | Choose A Location
  </title>
</head>
<style>
::-moz-selection {
  background: #ffdf2b;
  color: #FFF;
}

::selection {
  background-color: #ffdf2b;
  color: #FFF;
}

#banner {
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
}

#videobcg {
    position: absolute;
    top: 0;
    left: 0;
    min-width:100%;
    min-height: 100%;
    height: auto;
    width: auto;
    z-index: -1;
}

@media (max-height: 568px) {
    #banner {
      position: relative;
      width: 100%;
      height: auto;
      overflow: hidden;
    }
  }
</style>
<body class="sections-page">
  <div class="wrapper">
    <section id="banner" class="blogs-1">
      <video id="videobcg" preload="auto" class="bg-white" autoplay="true" loop="loop" muted="muted" volume="0"><source  src="assets/img/vr.mp4" type="video/mp4">
      </video>
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-8">
              <h3 class="display-3">Dive In!</h3>
              <p class="lead mt-1" style="color: #6900ff;">To a one of a kind immersive UEAB Virtual 360 experience. Choose your preferred location.</p>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-6" data-aos="slide-up" data-aos-duration="700">
              <div class="card card-blog card-background" data-animation="zooming">
                <div class="full-background" style="background-image: url('./assets/img/theme/ueab-3.jpg')"></div>
                <a href="scenes/the-gate.php">
                  <div class="card-body">
                    <div class="content-bottom">
                      <h6 class="card-category text-white opacity-8">Welcome to UEAB</h6>
                      <h5 class="card-title">The Entrance (Outside)</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-lg-3" data-aos="slide-up" data-aos-duration="900">
              <div class="card card-blog card-background" data-animation="zooming">
                <div class="full-background" style="background-image: url('./assets/img/theme/ueab-1.jfif')"></div>
                <a href="scenes/church.php">
                  <div class="card-body">
                    <div class="content-bottom">
                      <h6 class="card-category text-white opacity-8">Spend time in</h6>
                      <h5 class="card-title">Church</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-lg-3" data-aos="slide-up" data-aos-duration="1100">
              <div class="card card-blog card-background" data-animation="zooming">
                <div class="full-background" style="background-image: url('./assets/img/theme/ueab-2.jfif')"></div>
                <a href="scenes/admin.php">
                  <div class="card-body">
                    <div class="content-bottom">
                      <h6 class="card-category text-white opacity-8">Visit us at the</h6>
                      <h5 class="card-title">Admin</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-3" data-aos="slide-up" data-aos-duration="700">
              <div class="card card-blog card-background" data-animation="zooming">
                <div class="full-background" style="background-image: url('./assets/img/theme/ueab-6.png'); background-position: center left;"></div>
                <a href="scenes/library.php">
                  <div class="card-body">
                    <div class="content-bottom">
                      <h6 class="card-category text-white opacity-8">Study at the</h6>
                      <h5 class="card-title">Libary</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-lg-3" data-aos="slide-up" data-aos-duration="900">
              <div class="card card-blog card-background" data-animation="zooming">
                <div class="full-background" style="background-image: url('./assets/img/theme/ueab-4.jfif'); background-position: center right;"></div>
                <a href="scenes/cafeteria.php">
                  <div class="card-body">
                    <div class="content-bottom">
                      <h6 class="card-category text-white opacity-8">Eat at the</h6>
                      <h5 class="card-title">Cafeteria</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-lg-6" data-aos="slide-up" data-aos-duration="1100">
              <div class="card card-blog card-background" data-animation="zooming">
                <div class="full-background" style="background-image: url('./assets/img/theme/ueab-5.jfif')"></div>
                <a href="scenes/community-centre.php">
                  <div class="card-body">
                    <div class="content-bottom">
                      <h6 class="card-category text-white opacity-8">Stay at the</h6>
                      <h5 class="card-title">Community Centre</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-6" data-aos="slide-up" data-aos-duration="700">
              <div class="card card-blog card-background" data-animation="zooming">
                <div class="full-background" style="background-image: url('./assets/img/theme/ueab-7.png')"></div>
                <a href="scenes/mens-dorm.php">
                  <div class="card-body">
                    <div class="content-bottom">
                      <h6 class="card-category text-white opacity-8">Spend time in</h6>
                      <h5 class="card-title">Men's Dorm</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-lg-6" data-aos="slide-up" data-aos-duration="900">
              <div class="card card-blog card-background" data-animation="zooming">
                <div class="full-background" style="background-image: url('./assets/img/theme/ueab-8.png')"></div>
                <a href="scenes/ladies-dorm.php">
                  <div class="card-body">
                    <div class="content-bottom">
                      <h6 class="card-category text-white opacity-8">Spend time in</h6>
                      <h5 class="card-title">Ladies Dorm</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <a href="scenes/the-gate.php">
            <button class="btn btn-icon btn-danger mt-4" type="button" >
              <span class="btn-inner--text">Take The Full Tour Instead</span>
              <span class="btn-inner--icon"><i class="ni ni-bold-right"></i></span>
            </button>
          </a>
        </div>
      </section>
    </div>
    <script>
  AOS.init({
        once: true
       })
</script>
</body>