
          $(document).scroll(function () {
              //stick nav to top of page
              var y = $(this).scrollTop();

              if (y > 400) {
                  $('.scroll-top').fadeIn();
              } else {
                  $('.scroll-top').fadeOut();
              }
          });
          
          $(".scroll-top").click(function() {
              $("html, body").animate({ scrollTop: 0 }, "fast");
              return false;
          });