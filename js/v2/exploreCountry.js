function wikitonguesExploreGeographyCountry () {
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

<div class="country africa sub-index sub-index-2">
            <h1>AFRICA</h1>
            <a href="#" class="icon lArrow left"></a>
            <div class="filter">
            </div>
            <ul class="names">
              <li  class="col1"><a href="#" class="unavailable algeria">Algeria</a></li>
              <li  class="col2"><a href="#" class="unavailable angola">Angola</a></li>
              <li  class="col3"><a href="#" class="unavailable benin">Benin</a></li>
              <li  class="col4"><a href="#" class="unavailable botswana">Botswana</a></li>
              <li  class="col1"><a href="#" class="unavailable burkina-faso">Burkina Faso</a></li>
              <li  class="col2"><a href="#" class=" burundi">Burundi</a></li>
              <li  class="col3"><a href="#" class=" cameroon">Cameroon</a></li>
              <li  class="col4"><a href="#" class="unavailable canary-islands">Canary Islands</a></li>
              <li  class="col1"><a href="#" class="unavailable cape-verde">Cape Verde</a></li>
              <li  class="col2"><a href="#" class="unavailable central-african-republic">Central African Republic</a></li>
              <li  class="col3"><a href="#" class="unavailable ceuta">Ceuta</a></li>
              <li  class="col4"><a href="#" class="unavailable chad">Chad</a></li>
              <li  class="col1"><a href="#" class="unavailable comoros">Comoros</a></li>
              <li  class="col2"><a href="#" class="unavailable côte-d'ivoire">Côte d'Ivoire</a></li>
              <li  class="col3"><a href="#" class=" democratic-republic-of-the-congo">Democratic Republic of the Congo</a></li>
              <li  class="col4"><a href="#" class="unavailable djibouti">Djibouti</a></li>
              <li  class="col1"><a href="#" class="unavailable egypt">Egypt</a></li>
              <li  class="col2"><a href="#" class="unavailable equatorial-guinea">Equatorial Guinea</a></li>
              <li  class="col3"><a href="#" class="unavailable eritrea">Eritrea</a></li>
              <li  class="col4"><a href="#" class=" ethiopia">Ethiopia</a></li>
              <li  class="col1"><a href="#" class=" gabon">Gabon</a></li>
              <li  class="col2"><a href="#" class="unavailable gambia">Gambia</a></li>
              <li  class="col3"><a href="#" class=" ghana">Ghana</a></li>
              <li  class="col4"><a href="#" class="unavailable guinea">Guinea</a></li>
              <li  class="col1"><a href="#" class="unavailable guinea-bissau">Guinea-Bissau</a></li>
              <li  class="col2"><a href="#" class="unavailable kenya">Kenya</a></li>
              <li  class="col3"><a href="#" class="unavailable lesotho">Lesotho</a></li>
              <li  class="col4"><a href="#" class="unavailable liberia">Liberia</a></li>
              <li  class="col1"><a href="#" class="unavailable libya">Libya</a></li>
              <li  class="col2"><a href="#" class="unavailable madagascar">Madagascar</a></li>
              <li  class="col3"><a href="#" class=" madeira">Madeira</a></li>
              <li  class="col4"><a href="#" class="unavailable malawi">Malawi</a></li>
              <li  class="col1"><a href="#" class="unavailable mali">Mali</a></li>
              <li  class="col2"><a href="#" class="unavailable mauritania">Mauritania</a></li>
              <li  class="col3"><a href="#" class="unavailable mauritius">Mauritius</a></li>
              <li  class="col4"><a href="#" class="unavailable mayotte">Mayotte</a></li>
              <li  class="col1"><a href="#" class="unavailable melilla">Melilla</a></li>
              <li  class="col2"><a href="#" class="unavailable morocco">Morocco</a></li>
              <li  class="col3"><a href="#" class="unavailable mozambique">Mozambique</a></li>
              <li  class="col4"><a href="#" class="unavailable namibia">Namibia</a></li>
              <li  class="col1"><a href="#" class=" niger">Niger</a></li>
              <li  class="col2"><a href="#" class="unavailable nigeria">Nigeria</a></li>
              <li  class="col3"><a href="#" class=" republic-of-the-congo">Republic of the Congo</a></li>
              <li  class="col4"><a href="#" class="unavailable réunion">Réunion</a></li>
              <li  class="col1"><a href="#" class="unavailable rwanda">Rwanda</a></li>
              <li  class="col2"><a href="#" class="unavailable saint-helena">Saint Helena</a></li>
              <li  class="col3"><a href="#" class="unavailable são-tomé-and-príncipe">São Tomé and Príncipe</a></li>
              <li  class="col4"><a href="#" class="unavailable senegal">Senegal</a></li>
              <li  class="col1"><a href="#" class="unavailable seychelles">Seychelles</a></li>
              <li  class="col2"><a href="#" class="unavailable sierra-leone">Sierra Leone</a></li>
              <li  class="col3"><a href="#" class="unavailable somalia">Somalia</a></li>
              <li  class="col4"><a href="#" class="unavailable south-africa">South Africa</a></li>
              <li  class="col1"><a href="#" class="unavailable sudan">Sudan</a></li>
              <li  class="col2"><a href="#" class="unavailable swaziland">Swaziland</a></li>
              <li  class="col3"><a href="#" class="unavailable tanzania">Tanzania</a></li>
              <li  class="col4"><a href="#" class=" togo">Togo</a></li>
              <li  class="col1"><a href="#" class="unavailable tunisia">Tunisia</a></li>
              <li  class="col2"><a href="#" class=" uganda">Uganda</a></li>
              <li  class="col3"><a href="#" class="unavailable western-sahara">Western Sahara</a></li>
              <li  class="col4"><a href="#" class="unavailable zambia">Zambia</a></li>
              <li  class="col1"><a href="#" class="unavailable zimbabwe">Zimbabwe</a></li>
            </ul>
            <a href="#" class="more">...</a>
          </div>