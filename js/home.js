var mobileMenu;
var mobileMask;
var docBody;

$(document).ready(function() {

  mobileMenu = document.getElementById("m-menu");
  mobileMask = document.getElementById("m-mask");
  docBody = document.getElementsByTagName("body");

  $('#mobile-wrap').click(function (event) {
    mobileMenu.classList.add('active');
    mobileMask.classList.add('active');
    docBody[0].classList.add('active');
  });
  $('#m-mask').click(function(){
    mobileMenu.classList.remove('active');
    mobileMask.classList.remove('active');
    docBody[0].classList.remove('active');
  });


  if( $(this).width() < 500 ) {
      document.getElementById("strong").innerHTML = "TerpLance";
      document.getElementById("icon-and-name").style.width="225px";
  }

  $(window).resize(function() {
      if( $(this).width() < 500 ) {
          document.getElementById("strong").innerHTML = "TerpLance";
          document.getElementById("icon-and-name").style.width="225px";
      }
      if( $(this).width() >= 500 ) {
          document.getElementById("strong").innerHTML = "Terrapin Freelancers";
          document.getElementById("icon-and-name").style.width="370px";
      }
      if( $(this).width() >= 775 ) {
        mobileMenu.classList.remove('active');
        mobileMask.classList.remove('active');
        docBody[0].classList.remove('active');
      }
  });
});

$(document).keyup(function(e) {
    if (e.keyCode == 27) {
       mobileMenu.classList.remove('active');
       mobileMask.classList.remove('active');
       docBody[0].classList.remove('active');
    }
});
