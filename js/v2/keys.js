$(document).ready(function(){
  // Uncomment each feature to turn it off

  var header = $("header"),
  content = $(".content"),
  footer = $("footer")

// HEADER
  // Video Language Menu
  header.children(".videoLanguage").addClass("unimplemented")
  // Interface Language Menu
  header.children(".interfaceLanguage").addClass("unimplemented")

// FOOTER
  // Explore button
  // footer.children("ul").children("li").children(".explore").addClass("inactive")
  // Search button
  // footer.children("ul").children("li").children(".search").addClass("inactive")
  // About button
  // footer.children("ul").children("li").children(".about").addClass("inactive")

  // Related videos
  footer.children(".dArrow").addClass("unimplemented")

  // Caption button
  footer.children("ul").children("li").children(".caption").addClass("inactive")
  // Comments button
  footer.children("ul").children("li").children(".comments").addClass("unimplemented")
  // Volume button
  footer.children("ul").children("li").children(".volume").addClass("unimplemented")
  // Share button
  footer.children("ul").children("li").children(".share").addClass("unimplemented")
  // Expand button
  footer.children("ul").children("li").children(".expand").addClass("unimplemented")

// CONTENT
  // Listen button
  content.children(".metadata").addClass("unimplemented")
})
