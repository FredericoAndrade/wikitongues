$(document).ready(function (){
  $("a.explore").on("click",function(){
    wikitonguesExplore()
    $("div.explore div.index ul li a.language").on("click",function(){
      wikitonguesExploreLanguage()
    })
    $("div.explore div.index ul li a.geography").on("click",function(){
      wikitonguesExploreGeographyContinent()
    })
  })
})

function wikitonguesExplore () {
  $("div.search").hide()
  $("div.about").hide()
  if($("body").children().hasClass("explore")){
    $("div.explore").toggle()
  } else {
    $("body").append('\
      <div class="explore">\
        <div class="index">\
          <h1>EXPLORE</h1>\
          <ul>\
            <li><a href="#" class="speakers left unimplemented">SPEAKERS</a></li>\
            <li><a href="#" class="geography right">GEOGRAPHY</a></li>\
            <li><a href="#" class="language left">LANGUAGE</a></li>\
            <li><a href="#" class="classification right unimplemented">CLASSIFICATION</a></li>\
          </ul>\
        </div>\
        <div class="subIndex"></div>\
      </div>\
    ')
  }
}

function wikitonguesExploreNavigation () {
  $(".explore .subIndex a.lArrow").on("click",function(){
    $(this).parent().hide().parent().hide().siblings(".index").show()
  })
}
