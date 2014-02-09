function wikitonguesExploreLanguage () {
  $("div.explore .index").hide()
  $("div.explore .subIndex").show()
  if($("div.explore .subIndex").children().hasClass("language")){
    $("div.explore .subIndex").children(".language").toggle()
  } else {
    $("div.explore .subIndex").append('\
      <div class="language">\
        <h1>LANGUAGE</h1>\
        <a href="#" class="icon lArrow left"></a>\
        <div class="filter"></div>\
        <ul class="names">\
          <li><a href="#" class="unavailable a-pucikwar">A-Pucikwar</a></li>\
          <li><a href="#" class=" aka-kora">Aka-Kora</a></li>\
          <li><a href="#" class="unavailable anfillo">Anfillo</a></li>\
          <li><a href="#" class="unavailable arop-sissano">Arop-Sissano</a></li>\
          <li><a href="#" class="unavailable aari">Aari</a></li>\
          <li><a href="#" class="unavailable akan">Akan</a></li>\
          <li><a href="#" class="unavailable angaataha">Angaataha</a></li>\
          <li><a href="#" class="unavailable arosi">Arosi</a></li>\
          <li><a href="#" class="unavailable aasáx">Aasáx</a></li>\
          <li><a href="#" class="unavailable akar-bale">Akar-Bale</a></li>\
          <li><a href="#" class="unavailable angal">Angal</a></li>\
          <li><a href="#" class="unavailable arpitan">Arpitan</a></li>\
          <li><a href="#" class="unavailable abadi">Abadi</a></li>\
          <li><a href="#" class="unavailable akaselem">Akaselem</a></li>\
          <li><a href="#" class="unavailable angal-enen">Angal Enen</a></li>\
          <li><a href="#" class="unavailable arrarnta-western">Arrarnta, Western</a></li>\
          <li><a href="#" class="unavailable abaga">Abaga</a></li>\
          <li><a href="#" class="unavailable akateko">Akateko</a></li>\
          <li><a href="#" class="unavailable angal-heneng">Angal Heneng</a></li>\
          <li><a href="#" class=" arrernte-eastern">Arrernte, Eastern</a></li>\
          <li><a href="#" class="unavailable abai-sungai">Abai Sungai</a></li>\
          <li><a href="#" class=" akawaio">Akawaio</a></li>\
          <li><a href="#" class="unavailable angika">Angika</a></li>\
          <li><a href="#" class="unavailable arta">Arta</a></li>\
          <li><a href="#" class="unavailable abanyom">Abanyom</a></li>\
          <li><a href="#" class="unavailable ake">Ake</a></li>\
          <li><a href="#" class="unavailable angkamuthi">Angkamuthi</a></li>\
          <li><a href="#" class="unavailable aruá">Aruá</a></li>\
          <li><a href="#" class="unavailable abau">Abau</a></li>\
          <li><a href="#" class="unavailable akebu">Akebu</a></li>\
          <li><a href="#" class="unavailable angloromani">Angloromani</a></li>\
          <li><a href="#" class="unavailable aruamu">Aruamu</a></li>\
          <li><a href="#" class="unavailable abaza">Abaza</a></li>\
          <li><a href="#" class="unavailable akei">Akei</a></li>\
          <li><a href="#" class="unavailable angolar">Angolar</a></li>\
          <li><a href="#" class="unavailable aruek">Aruek</a></li>\
          <li><a href="#" class="unavailable abé">Abé</a></li>\
          <li><a href="#" class="unavailable akeu">Akeu</a></li>\
          <li><a href="#" class="unavailable angor">Angor</a></li>\
          <li><a href="#" class="unavailable aruop">Aruop</a></li>\
        </ul>\
      </div>\
    ')
    filter()
    $(".explore .subIndex .language a.lArrow").on("click",function(){
      $(this).parent().hide().parent().hide().siblings(".index").show()
    })
  }
}