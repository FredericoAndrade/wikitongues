function wikitonguesExploreGeographyContinent () {
  $("div.explore .index").hide()
  $("div.explore .subIndex").show()
  if($("div.explore .subIndex").children().hasClass("geography")){
    $("div.explore .subIndex").children(".geography").toggle().children(".continent").toggle()
  } else {
    $("div.explore .subIndex").append('\
      <div class="geography">\
        <div class="continent">\
          <h1>CONTINENT</h1>\
          <a href="#" class="icon lArrow left"></a>\
          <div class="filter"></div>\
          <ul class="names">\
            <li><a href="#" class="africa">Africa</a></li>\
            <li><a href="#" class="america-north">America, North</a></li>\
            <li><a href="#" class="america-south">America, South</a></li>\
            <li><a href="#" class="unavailable antarctica">Antarctica</a></li>\
            <li><a href="#" class="asia">Asia</a></li>\
            <li><a href="#" class="australia">Australia</a></li>\
            <li><a href="#" class="europe">Europe</a></li>\
          </ul>\
        </div>\
      </div>\
    ')
    filter()
    $(".explore .subIndex .geography a.lArrow").on("click",function(){
      $(this).parent().hide().parent().hide().parent().hide().siblings(".index").show()
    })
  }
}