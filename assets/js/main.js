var loadinAnimation = gsap.timeline();
$(document).ready(function () {
  var currentDir = $("a").css("direction");
  console.log(currentDir);

  if ($(".parterns_slider").length) {
    $(".parterns_slider").slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      speed: 1000,
      infinite: true,
      css: "linear",
      loop: true,
      autoplaySpeed: 1000,
      centerMode: false,
      autoplay: true,
      rtl: currentDir == "rtl" ? true : false,
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 4,
            // centerMode: false,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 4,
            // centerMode: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            // centerMode: false,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            // centerMode: false,
          },
        },
      ],
    });
  }

  if ($(".screens_mobile_slider").length) {
    $(".screens_mobile_slider").slick({
      slidesToShow: 5,
      slidesToScroll: 5,
      arrows: false,
      dots: true,
      speed: 3000,
      infinite: true,
      css: "linear",
      loop: true,
      autoplaySpeed: 2000,
      centerMode: false,
      autoplay: true,
      rtl: currentDir == "rtl" ? true : false,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            // centerMode: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            // centerMode: false,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            // centerMode: false,
          },
        },
      ],
    });
  }


  // works_done_slider
   if ($(".works_done_slider").length) {
    $(".works_done_slider").slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      dots: true,
      infinite: true,
      loop: true,
      autoplaySpeed: 3000,
      centerMode: false,
      autoplay: true,
      rtl: currentDir == "rtl" ? true : false,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            // centerMode: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            // centerMode: false,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            // centerMode: false,
          },
        },
      ],
    });
  }

  // if ($(".custom_select").length) {
  //   $(".custom_select").niceSelect();
  // }

  // $(window).on("scroll", function () {
  //   if ($(this).scrollTop() > 20) {
  //     $(".custom_navbar").addClass("customScrollTop");
  //   } else {
  //     $(".custom_navbar").removeClass("customScrollTop");
  //   }
  // });

  // // services_cards_slider

  // if ($(".personal-img").length) {
  //   $(document).on("change", ".personal-img-file", function () {
  //     var uploadFile = $(this);
  //     var files = !!this.files ? this.files : [];
  //     if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

  //     if (/^image/.test(files[0].type)) {
  //       // only image file
  //       var reader = new FileReader(); // instance of the FileReader
  //       reader.readAsDataURL(files[0]); // read the local file

  //       reader.onloadend = function () {
  //         // set image data as background of div
  //         //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
  //         uploadFile
  //           .closest(".personal-img")
  //           .find(".per")
  //           .css("background-image", "url(" + this.result + ")");
  //         $(".personal-img-validation-delete").css("display", "block");
  //       };
  //     }
  //   });
  // }

  // if($(".about_wasmi_pargraph").length){
  //   $(".about_wasmi_pargraph a.read_more").on('click', function(){
  //     $(this).closest('.about_wasmi_pargraph').addClass("increaselies")
  //   })
  //    $(".about_wasmi_pargraph a.read_less").on('click', function(){
  //     $(this).closest('.about_wasmi_pargraph').removeClass("increaselies")
  //   })
  // }

  // AOS.init();
});

$(window).on("load", function () {
  $("html").removeClass("splash-active");
  var currentDir = $("a").css("direction");
  $(".splashscreen").addClass("splashscreen_none");
  new Mmenu("#menu", {
    offCanvas: {
      slidingSubmenus: false,
      position: currentDir == "rtl" ? "right-front" : "left-front",
    },
    theme: "light",
  });
  $(".mm-navbar__title").text("القائمة");
});

$(window).on("load", function () {
  // $("html").removeClass("splash-active");
  // $(".splach").addClass("splashscreen-none");
});
