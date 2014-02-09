function progressBar () {
  var total = 7000,
  acquired = 56,
  progress = (acquired/total)*100

  $(".progress").css("width",progress+"%")

  $(".data").append('\
    <div class="progressBar"></div>\
    <div class="progress"></div>\
  ')
}

// BUG
// not working