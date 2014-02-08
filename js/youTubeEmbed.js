(function($){

    $.fn.youTubeEmbed = function(settings){

        // Settings can be either a URL string,
        // or an object

        if(typeof settings == 'string'){
            settings = {'video' : settings}
        }

        // Default values

        var def = {
            width   : $(document).innerWidth(),
            height  : $(document).innerHeight(),
            progressBar : true
        };

        settings = $.extend(def,settings);

        var elements = {
            originalDIV : this, // The "this" of the plugin
            container : null, // A container div, inserted by the plugin
            control   : null, // The control play/pause button
            player    : null, // The flash player
            progress  : null, // Progress bar
            elapsed   : null  // The light blue elapsed bar
        };

        try{

            settings.videoID = settings.video.match(/v=(\w+)/)[1];

            // safeID is a stripped version of videoID,
            // ready for use as a JavaScript function name

            settings.safeID = settings.videoID.replace(/[^a-z0-9]/ig,'');

        } catch (e){
            // If the url was invalid, just return the "this"
            return elements.originalDIV;
        }

        // Fetch data about the video from YouTube's API

        var youtubeAPI = 'http://gdata.youtube.com/feeds/api/videos?v=2&alt=jsonc';

        $.get(youtubeAPI,{'q':settings.videoID},function(response){

            var data = response.data;

            if(!data.totalItems || data.items[0].accessControl.embed!="allowed"){

                // If the video was not found, or embedding is not allowed;

                return elements.originalDIV;
            }

            // data holds API info about the video:

            data = data.items[0];

            settings.ratio = 4/3;
            if(data.aspectRatio == "widescreen"){
                settings.ratio = 16/9;
            }

            settings.width = Math.round(settings.height*settings.ratio);

             // Creating a container inside the original div, which will
            // hold the object/embed code of the video

            elements.container = $('<div>',{class:'flashContainer',css:{
                width   : settings.width,
                height  : settings.height
            }}).appendTo(elements.originalDIV);

            // Embedding the YouTube chromeless player
            // and loading the video inside it:

            elements.container.flash({
                swf         : 'http://www.youtube.com/apiplayer?enablejsapi=1&version=3',
                id          : 'video_'+settings.safeID,
                height      : settings.height,
                width       : settings.width,
                allowScriptAccess:'always',
                wmode       : 'transparent',
                flashvars   : {
                    "video_id"      : settings.videoID,
                    "playerapiid"   : settings.safeID
                }
            });

            // We use get, because we need the DOM element
            // itself, and not a jquery object:

            elements.player = elements.container.flash().get(0);

            // Creating the control Div. It will act as a play/pause button

            elements.control = $('<a>',{class:'listen controlDiv play', text:'LISTEN', href:'#'})
                               .appendTo($(".content .metadata"));

            // If the user wants to show the progress bar:

            if(settings.progressBar){
                elements.progress = $('<div>',{class:'videoProgressBar'})
                                    .appendTo(elements.container);

                elements.elapsed =  $('<div>',{class:'elapsed'})
                                    .appendTo(elements.progress);

                elements.progress.click(function(e){

                    // When a click occurs on the progress bar, seek to the
                    // appropriate moment of the video.

                    var ratio = (e.pageX-elements.progress.offset().left)/elements.progress.outerWidth();

                    elements.elapsed.width(ratio*100+'%');
                    elements.player.seekTo(Math.round(data.duration*ratio), true);
                    return false;
                });

            }

var initialized = false;


// INTERACTIONS
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

//language acquisition progress bar
var total = 7000,
acquired = 56,
progress = (acquired/total)*100

$(".progress").css("width",progress+"%")

//explore page toggle
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







// Creating a global event listening function for the video
// (required by YouTube's player API):

window['eventListener_'+settings.safeID] = function(status){

    var interval;

    if(status==-1)  // video is loaded
    {
        if(!initialized)
        {
            // Listen for a click on the control button:

            elements.control.click(function(){
                console.log("test")
                if(!elements.container.hasClass('playing')){

                    // If the video is not currently playing, start it:

                    elements.control.removeClass('play replay').addClass('pause');
                    elements.container.addClass('playing');
                    elements.player.playVideo();

                    if(settings.progressBar){
                        interval = window.setInterval(function(){
                            elements.elapsed.width(
                    ((elements.player.getCurrentTime()/data.duration)*100)+'%'
                            );
                        },1000);
                    }

                } else {

                    // If the video is currently playing, pause it:

                    elements.control.removeClass('pause').addClass('play');
                    elements.container.removeClass('playing');
                    elements.player.pauseVideo();

                    if(settings.progressBar){
                        window.clearInterval(interval);
                    }
                }
            });

            initialized = true;
        }
        else{
            // This will happen if the user has clicked on the
            // YouTube logo and has been redirected to youtube.com

            if(elements.container.hasClass('playing'))
            {
                elements.control.click();
            }
        }
    }

                    if(status==0){ // video has ended
                    elements.control.removeClass('pause').addClass('replay');
                    elements.container.removeClass('playing');
                }
            }

            // This global function is called when the player is loaded.
            // It is shared by all the videos on the page:

            if(!window.onYouTubePlayerReady)
            {
                window.onYouTubePlayerReady = function(playerID){
                    document.getElementById('video_'+playerID).addEventListener('onStateChange','eventListener_'+playerID);
                }
            }
        },'jsonp');

        return elements.originalDIV;
    }


})(jQuery);