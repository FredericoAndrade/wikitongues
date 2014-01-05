$(document).ready(function(){
  var ui = $("header, footer, .next-prev"),
    metadata = $(".metadata")

//Mousemove functionality
//While the video plays, the ui remains hidden until mouse move.
  $(".listen").on("click", function(){
    ui.addClass("playing")
    metadata.addClass("playing")
    $("a").removeClass("inactive")

    //shows ui on mousemove
      $(function () {
        var timer;
        var fadeInBuffer = false
        $(document).mousemove(function () {
            if (!fadeInBuffer) {
                if (timer) {
                    clearTimeout(timer);
                    timer = 0
                }
                ui.css({
                    display: 'block'
                })
                $(".transcription").removeClass("transcriptionAlt")
                $("p.english").removeClass("englishAlt")
                $("p.hebrew").removeClass("hebrewAlt")
                $(".progress").removeClass("progressBarAlt")
                $(".progressBar").removeClass("progressBarAlt")
            } else {
                fadeInBuffer = false
            }
            timer = setTimeout(function () {
                ui.css({
                    display: 'none'
                })
                $(".transcription").addClass("transcriptionAlt")
                $("p.english").addClass("englishAlt")
                $("p.hebrew").addClass("hebrewAlt")
                $(".progress").addClass("progressBarAlt")
                $(".progressBar").addClass("progressBarAlt")
                fadeInBuffer = true
            }, 1000)
        })
    })
})

//language acquisition progress bar
var total = 7000,
acquired = 56,
progress = (acquired/total)*100
$(".progress").css("width",progress+"%")

//explore toggle
  $("a.explore").on("click",function(){
    $("div.search").hide()
    $(".transcription").hide()
    $(".translation").hide()
    $(".translate").css("opacity",.5)
    if ($(".data .explore").is(":visible")) {
      $(".data").hide()
      $(".data .explore").hide()
    } else {
      $(".data").show()
      $(".data").children().hide()
      $(".data .explore").show()
    }
    $(".progressBar").show()
    $(".progress").show()
  })

//about toggle
  $("a.about").on("click",function(){
    $("div.search").hide()
    $(".transcription").hide()
    $(".translation").hide()
    $(".translate").css("opacity",.5)
    if ($(".data .about").is(":visible")) {
      $(".data").hide()
      $(".data .about").hide()
    } else {
      $(".data").show()
      $(".data").children().hide()
      $(".data .about").show()
    }
    $(".progressBar").show()
    $(".progress").show()
  })

//search toggle
$("a.search").on("click",function(){
  $("div.search").toggle()
  $("div.search input").focus()
  $(".transcription").hide()
  $(".translation").hide()
  $(".translate").css("opacity",.5)
  $(".data").hide()
  $(".data").children().hide()
})

//caption toggle
  $(".caption").on("click",function(){
    $("div.search").hide()
    $(".data").hide()
    $(".data").children().hide()
    if($(this).hasClass("inactive")){
    }else{
      $(".transcription").toggle()
    }
  })

  //translation menu toggle
  $(".translate").on("click",function(){
    $(this).css("opacity",0)
    $(".translation").show()
    $(".translationScout").show()
    $(".translation input").focus()
  })
  $(".translationScout").on("click",function(){
    $(this).hide()
    $(".translate").css("opacity",.5)
    $(".translation").hide()
  })

//example translation
  $(".translation ul li a .english").on("click",function(){
    $(".translationScout").hide()
    $(".targetLang").show()
    $(".targetLang .english").show()
    $(".targetLang .hebrew").hide()
    $(".translate").hide()
    $(".translation").hide()
    $(".transcription p.english").show()
    $(".transcription p.native").addClass("translated")
  })

  $(".translation ul li a .hebrew").on("click",function(){
    $(".translationScout").hide()
    $(".targetLang").show()
    $(".targetLang .hebrew").show()
    $(".targetLang .english").hide()
    $(".translate").hide()
    $(".translation").hide()
    $(".transcription p.hebrew").show()
    $(".transcription p.native").addClass("translated")
  })

//example translation reselection
  $(".targetLang div").on("click",function(){
    $(".targetLang").hide()
    $(".translate").show()
    $(".translation").show()
    $(".transcription p.english").hide()
    $(".transcription p.hebrew").hide()
    $(".transcription p.native").removeClass("translated")
    $(".translationScout").show()
    $(".translation input").focus()
  })

  //example translation close
  $(".targetLang .close").on("click",function(){
    $(".targetLang").hide()
    $(".translate").show().css("opacity",.5)
    $(".transcription p.english").hide()
    $(".transcription p.hebrew").hide()
    $(".transcription p.native").removeClass("translated")
  })

//star icon fill toggle
    $(".star").on("click",function(){
      $(this).toggleClass("starFull").toggleClass("star")
    })

    $(".starFull").on("click",function(){
      $(this).toggleClass("star").toggleClass("starFull")
    })



})





