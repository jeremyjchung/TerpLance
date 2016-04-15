$(document).ready(function() {

  $(window).resize(function() {
      if( $(this).width() < 500 ) {
          document.getElementById("strong").innerHTML = "TerpLance";
          document.getElementById("icon-and-name").style.width="300px";
      }
  });
  $(window).resize(function() {
      if( $(this).width() >= 500 ) {
          document.getElementById("strong").innerHTML = "Terrapin Freelancers";
          document.getElementById("icon-and-name").style.width="370px";
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
        }, 1000, 'swing');
        hashTagActive = this.hash;
    }

    $("#contact_link").removeAttr('href')
    setTimeout(function(){
       $("#contact_link").attr("href", '#footer');
    }, 1000);
    hashTagActive = "";

  });
});
