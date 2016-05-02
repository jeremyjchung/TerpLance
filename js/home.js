// var menu = document.getElementById("m-menu");
// var mask = document.getElementById("m-mask");
// var mobileButton = document.getElementById("mobile-wrap");
// var body = document.getElementsByTagName("body");
// function openMobileMenu(){
//   menu.classList.add('active');
//   mask.classList.add('active');
//   body.classList.add('active');
// }
// function closeMobileMenu(){
//   menu.classList.remove('active');
//   menu.classList.remove('active');
//   body.classList.remove('active');
// }

$(document).ready(function() {

  $('#mobile-wrap').click(function (event) {
    document.getElementById("m-menu").classList.add('active');
    document.getElementById("m-mask").classList.add('active');
    document.getElementsByTagName("body").classList.add('active');
  });
  $('#m-mask').click(function(){
    document.getElementById("m-menu").classList.remove('active');
    document.getElementById("m-mask").classList.remove('active');
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
          $('#hamburger_modal').modal("hide");
      }
  });

  var hashTagActive = "";
  $('#contact_link').click(function (event) {

    if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
        event.preventDefault();
        //calculate destination place
        var dest = 0;
        if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            dest = $(document).height() - $(window).height();
        } else {
            dest = $(this.hash).offset().top;
        }
        //go to destination
        $('html,body').animate({
            scrollTop: dest
        }, 500, 'swing');
        hashTagActive = this.hash;
    }

    $("#contact_link").removeAttr('href')
    setTimeout(function(){
       $("#contact_link").attr("href", '#footer');
    }, 1000);
    hashTagActive = "";

  });
});
