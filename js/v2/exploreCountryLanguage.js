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

<div class="language ghana sub-index sub-index-3">
            <h1>GHANA</h1>
            <a href="#" class="icon lArrow left"></a>
            <div class="filter">
            </div>
            <ul class="names">
              <li  class="col1"><a href="#" class="unavailable abron">Abron</a></li>
              <li  class="col2"><a href="#" class="unavailable adamorobe-sign-language">Adamorobe Sign Language</a></li>
              <li  class="col3"><a href="#" class="unavailable adangbe">Adangbe</a></li>
              <li  class="col4"><a href="#" class="unavailable adele">Adele</a></li>
              <li  class="col1"><a href="#" class="unavailable ahanta">Ahanta</a></li>
              <li  class="col2"><a href="#" class=" akan">Akan</a></li>
              <li  class="col3"><a href="#" class=" akposo">Akposo</a></li>
              <li  class="col4"><a href="#" class="unavailable animere">Animere</a></li>
              <li  class="col1"><a href="#" class="unavailable anufo">Anufo</a></li>
              <li  class="col2"><a href="#" class="unavailable anyin">Anyin</a></li>
              <li  class="col3"><a href="#" class="unavailable avatime">Avatime</a></li>
              <li  class="col4"><a href="#" class="unavailable awutu">Awutu</a></li>
              <li  class="col1"><a href="#" class="unavailable bimoba">Bimoba</a></li>
              <li  class="col2"><a href="#" class="unavailable birifor-southern">Birifor, Southern</a></li>
              <li  class="col3"><a href="#" class="unavailable bisa">Bisa</a></li>
              <li  class="col4"><a href="#" class="unavailable buli">Buli</a></li>
              <li  class="col1"><a href="#" class="unavailable chakali">Chakali</a></li>
              <li  class="col2"><a href="#" class="unavailable chala">Chala</a></li>
              <li  class="col3"><a href="#" class="unavailable cherepon">Cherepon</a></li>
              <li  class="col4"><a href="#" class="unavailable chumburung">Chumburung</a></li>
              <li  class="col1"><a href="#" class="unavailable dagaare-southern">Dagaare, Southern</a></li>
              <li  class="col2"><a href="#" class="unavailable dagbani">Dagbani</a></li>
              <li  class="col3"><a href="#" class="unavailable dangme">Dangme</a></li>
              <li  class="col4"><a href="#" class="unavailable deg">Deg</a></li>
              <li  class="col1"><a href="#" class="unavailable delo">Delo</a></li>
              <li  class="col2"><a href="#" class="unavailable dompo">Dompo</a></li>
              <li  class="col3"><a href="#" class="unavailable dwang">Dwang</a></li>
              <li  class="col4"><a href="#" class="unavailable english">English</a></li>
              <li  class="col1"><a href="#" class="unavailable éwé">Éwé</a></li>
              <li  class="col2"><a href="#" class="unavailable farefare">Farefare</a></li>
              <li  class="col3"><a href="#" class="unavailable fulfulde-maasina">Fulfulde, Maasina</a></li>
              <li  class="col4"><a href="#" class="unavailable ga">Ga</a></li>
              <li  class="col1"><a href="#" class="unavailable ghanaian-pidgin-english">Ghanaian Pidgin English</a></li>
              <li  class="col2"><a href="#" class="unavailable ghanaian-sign-language">Ghanaian Sign Language</a></li>
              <li  class="col3"><a href="#" class="unavailable gikyode">Gikyode</a></li>
              <li  class="col4"><a href="#" class=" gonja">Gonja</a></li>
              <li  class="col1"><a href="#" class="unavailable gua">Gua</a></li>
              <li  class="col2"><a href="#" class="unavailable hanga">Hanga</a></li>
              <li  class="col3"><a href="#" class="unavailable hausa">Hausa</a></li>
              <li  class="col4"><a href="#" class="unavailable jwira-pepesa">Jwira-Pepesa</a></li>
              <li  class="col1"><a href="#" class="unavailable kabiyè">Kabiyè</a></li>
              <li  class="col2"><a href="#" class="unavailable kamara">Kamara</a></li>
              <li  class="col3"><a href="#" class="unavailable kantosi">Kantosi</a></li>
              <li  class="col4"><a href="#" class="unavailable kasem">Kasem</a></li>
              <li  class="col1"><a href="#" class="unavailable konkomba">Konkomba</a></li>
              <li  class="col2"><a href="#" class="unavailable konni">Konni</a></li>
              <li  class="col3"><a href="#" class="unavailable kplang">Kplang</a></li>
              <li  class="col4"><a href="#" class=" krache">Krache</a></li>
              <li  class="col1"><a href="#" class=" kulango, Bondoukou">Kulango, Bondoukou</a></li>
              <li  class="col2"><a href="#" class="unavailable kulango, Bouna">Kulango, Bouna</a></li>
              <li  class="col3"><a href="#" class="unavailable kusaal">Kusaal</a></li>
              <li  class="col4"><a href="#" class="unavailable lama">Lama</a></li>
              <li  class="col1"><a href="#" class="unavailable larteh">Larteh</a></li>
              <li  class="col2"><a href="#" class=" lelemi">Lelemi</a></li>
              <li  class="col3"><a href="#" class="unavailable ligbi">Ligbi</a></li>
              <li  class="col4"><a href="#" class="unavailable logba">Logba</a></li>
              <li  class="col1"><a href="#" class="unavailable mampruli">Mampruli</a></li>
              <li  class="col2"><a href="#" class="unavailable nafaanra">Nafaanra</a></li>
              <li  class="col3"><a href="#" class="unavailable nawdm">Nawdm</a></li>
              <li  class="col4"><a href="#" class="unavailable nawuri">Nawuri</a></li>
              <li  class="col1"><a href="#" class="unavailable nchumbulu">Nchumbulu</a></li>
              <li  class="col2"><a href="#" class="unavailable nkami">Nkami</a></li>
              <li  class="col3"><a href="#" class="unavailable nkonya">Nkonya</a></li>
              <li  class="col4"><a href="#" class="unavailable ntcham">Ntcham</a></li>
              <li  class="col1"><a href="#" class="unavailable nyangbo">Nyangbo</a></li>
              <li  class="col2"><a href="#" class="unavailable nzema">Nzema</a></li>
              <li  class="col3"><a href="#" class="unavailable paasaal">Paasaal</a></li>
              <li  class="col4"><a href="#" class=" safaliba">Safaliba</a></li>
              <li  class="col1"><a href="#" class="unavailable sehwi">Sehwi</a></li>
              <li  class="col2"><a href="#" class="unavailable sekpele">Sekpele</a></li>
              <li  class="col3"><a href="#" class="unavailable selee">Selee</a></li>
              <li  class="col4"><a href="#" class="unavailable sisaala-tumulung">Sisaala, Tumulung</a></li>
              <li  class="col1"><a href="#" class=" sisaala-western">Sisaala, Western</a></li>
              <li  class="col2"><a href="#" class="unavailable siwu">Siwu</a></li>
              <li  class="col3"><a href="#" class="unavailable tafi">Tafi</a></li>
              <li  class="col4"><a href="#" class="unavailable tampulma">Tampulma</a></li>
              <li  class="col1"><a href="#" class="unavailable tem">Tem</a></li>
              <li  class="col2"><a href="#" class=" tuwuli">Tuwuli</a></li>
              <li  class="col3"><a href="#" class="unavailable vagla">Vagla</a></li>
              <li  class="col4"><a href="#" class="unavailable wali">Wali</a></li>
              <li  class="col1"><a href="#" class="unavailable wasa">Wasa</a></li>
            </ul>
            <a href="#" class="more">...</a>
          </div>