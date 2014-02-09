function filter () {
  $(".filter").append('\
    <a href="#" class="icon search left"></a>\
    <a href="#" class="left sort">a<div class="icon dCarat"></div></a>\
    <div class="alphabet">\
      <span>a</span>\
      <span>b</span>\
      <span>c</span>\
      <span>d</span>\
      <span>e</span>\
      <span>f</span>\
      <span>g</span>\
      <span>h</span>\
      <span>i</span>\
      <span>j</span>\
      <span>k</span>\
      <span>l</span>\
      <span>m</span>\
      <span>n</span>\
      <span>o</span>\
      <span>p</span>\
      <span>q</span>\
      <span>r</span>\
      <span>s</span>\
      <span>t</span>\
      <span>u</span>\
      <span>v</span>\
      <span>w</span>\
      <span>x</span>\
      <span>y</span>\
      <span>z</span>\
    </div>\
  ')

  // $(".filter .alphabet span").on("click", function(){
  //   console.log($(this).text())
  // })
}

// BUG
// appends filter elements on every click
// function runs every time?