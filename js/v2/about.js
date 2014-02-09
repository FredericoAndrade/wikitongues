$(document).ready(function(){
  $("a.about").on("click",function(){
    wikitonguesAbout()
  })
})

function wikitonguesAbout () {
  $("div.search").hide()
  $("div.explore").hide()
  if($("body").children().hasClass("about")){
    $("div.about").toggle()
  } else {
    $("body").append('\
      <div class="about">\
        <div class="person">\
          <span class="daniel"></span>\
          <h3>Daniel Bogre Udell</h3>\
          <p>Founder</p>\
          <p>@dbudell</p>\
        </div>\
        <div class="person">\
          <span class="fred"></span>\
          <h3>Fred Andrade</h3>\
          <p>Co-Founder</p>\
          <p>@freddieandrade</p>\
        </div>\
        <div class="person">\
          <span class="lindie"></span>\
          <h3>Lindie Botes</h3>\
          <p>Ambassador</p>\
          <p>@lindiebotes</p>\
        </div>\
      </div>\
      ')
  }
}
