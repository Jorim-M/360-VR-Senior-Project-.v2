<?php require_once "header.php"; ?>
  <title>
    The Cafeteria | UEAB Virtual Tour
  </title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css"/>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"></script>
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

.card-background.card-grande:after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  z-index: -1000;
  width: 100%;
  display: block;
  content: "";
  background: rgba(0, 0, 0, .6)
}

.info {
  size: 21px;
}


  </style>
<body class="sections-page">
  <div class="wrapper">
    <section class="blogs-6">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 mx-auto">
              <h3 class="display-3 text-center mb-5">UEAB Virtual Tour</h3>
              <div id="panorama" class="card card-background card-grande">
              </div>
              <a href="../locations.php">
                <button class="btn btn-icon btn-primary mt-4" type="button" >
                  <span class="btn-inner--icon"><i class="ni ni-bold-left"></i></span>
                  <span class="btn-inner--text">Go Back</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  <script>
pannellum.viewer('panorama', {   
    "default": {
        "firstScene": "cafeteria",
        //"author": "Daudi & Jorim",
        "sceneFadeDuration": 1000,
        "autoRotate": -5,
        "autoLoad": true,
    },

    <?php include 'scenes.js';?>
});
</script>
</body>