$(document).ready(function() {
  $("a.profile").hover(function(){
    $(this).children("div.name").css({"opacity": "1"});
  }, function(){
    $(this).children("div.name").css({"opacity": "0"});
    $(this).children("div.name").children("div.name-content").css({"top": "50%"});
    $(this).children("div.name").children("div.name-content").children("div.skills").css({"opacity": "0"});
  });
  $("a.profile").click(function(event){
    event.preventDefault();
    $(this).children("div.name").children("div.name-content").css({"top": "10%"});
    $(this).children("div.name").children("div.name-content").children("div.skills").css({"opacity": "1"});
  });
});
