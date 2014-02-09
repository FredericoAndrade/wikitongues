$(document).ready(function(){
  var ui = $("header, footer, .next-prev"),
    metadata = $(".metadata")

//Mousemove functionality
//While the video plays, the ui remains hidden until mouse move.
  $(".listen").on("click", function(){
    console.log('hi')
    $(".speaker").hide()
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
            }, 1500)
        })
    })
})

//explore page toggle
  $("a.explore").on("click",function(){

    filter()

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
  //explore navigation
  ////back navigation
  $(".data .lArrow").on("click",function(){
    if($(this).parent().hasClass("sub-index-3")){
      $(this).parent().hide()
      $(this).parent().siblings(".sub-index-2").show()
    }
    if($(this).parent().hasClass("sub-index-2")){
      $(this).parent().hide()
      $(this).parent().siblings(".sub-index-1").show()
    }
    if($(this).parent().hasClass("sub-index-1")){
      $(this).parent().hide().parent().hide()
      $(this).parent().parent().siblings(".explore").show()
    }
    if($(this).parent().hasClass("index")){
      $(this).parent().hide()
      $(this).parent().siblings(".explore").show()
    }
  })
  ////explore language
  $(".data>.explore>ul> li>a.language").on("click",function(){
    $(".data .explore").hide()
    $(".data .language").show()
    alert("This is only to demonstrate how the language tab works. Clicking on an available language would take you to the video.")
  })
  ////////explore language click
  $(".data .language.index ul li a").not(".unavailable").on("click",function(){
    $(".data").fadeOut()
  })
  ////explore geography - continent
  $(".data>.explore>ul> li>a.geography").on("click",function(){
    $(".data .explore").hide()
    $(".data .geography").show()
    $(".data .geography .sub-index-1").show()
    alert("This is only to demonstrate how the geography tab navigation works. Click on Africa.")
  })
  //////explore geography - country
  $(".data>.geography>.sub-index-1>ul>li>a").on("click",function(){
    $(".data .geography .sub-index-1").hide()
    $(".data .geography .sub-index-2").show()
    alert("This is only to demonstrate how the geography tab navigation works. Click on Ghana.")
  })
  ////////explore geography - language
  $(".data>.geography>.sub-index-2>ul>li>a").on("click",function(){
    $(".data .geography .sub-index-2").hide()
    $(".data .geography .sub-index-3").show()
    alert("This is only to demonstrate how the geography tab navigation works. Clicking on an available language would take you to the video.")
  })
  ////////explore geography language click
  $(".data .geography.index .language ul li a").not(".unavailable").on("click",function(){
    $(".data").fadeOut()
  })


//about page toggle
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

//search page toggle
// $("a.search").on("click",function(){
//   $("div.search").toggle()
//   $("div.search input").focus()
//   $(".transcription").hide()
//   $(".translation").hide()
//   $(".translate").css("opacity",.5)
//   $(".data").hide()
//   $(".data").children().hide()
// })

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

  ////translation menu toggle
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

//////example translation
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

//////example translation reselection
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

  //////example translation close
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

//for development

})





