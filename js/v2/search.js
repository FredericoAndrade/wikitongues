$(document).ready(function(){
  $("a.search").on("click",function(){
    wikitonguesSearch()
  })
})

function wikitonguesSearch () {
  $("div.about").hide()
  $("div.explore").hide()
  if($("body").children().hasClass("search")){
    $("div.search").toggle()
  } else {
    $("body").append('\
      <div class="search">\
        <input type="text" placeholder="SEARCH" autofocus autocomplete/>\
        <div class="results">\
          <ul>\
            <li><a href="#"><h1>SWAZI</h1></a></li>\
            <li><a href="#"><h1>SWEDISH</h1></a></li>\
            <li><a href="#"><h1>SWEDO-NORWEGIAN</h1></a></li>\
            <li><a href="#"><h1>SWISS</h1></a></li>\
            <li><a href="#"><h1>SWISS FRENCH</h1></a></li>\
            <li><a href="#"><h1>SWISS GERMAN</h1></a></li>\
          </ul>\
        </div>\
      </div>\
      ')
  }
}
