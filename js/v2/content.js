// 3 mandarin
// 3 louisiana french
// 2 finnish
// 1 afrikaans

$(document).ready(function(){
  content()
})

function content () {
  $(".content").append('\
    <div class="contentNavigation">\
      <a href="#" class="icon lArrow left"></a>\
      <a href="#" class="icon rArrow right"></a>\
    </div>\
    <div class="metadata">\
      <h1 class="title">EVA SPEAKING DUTCH</h1>\
      <a class="listen" href="#">LISTEN</a>\
    </div>\
    <div class="speaker"></div>\
    <div id="player"></div>\
  ')
}



