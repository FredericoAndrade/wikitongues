
  $('#refresh').on('click',function(){

    var query = $('#form').serialize()

    console.log(query)

    $.getJSON('http://localhost:4000/languages?' + query + '&callback=?', function (data){

    var display = $('#display')

    display.empty()

    data.forEach(function(lang){

      var langElement = $('<article class="listing"><a href="#" class='+lang.name+'>'+ lang.name +'  /  '+ lang.nativeName +' </a> <a href="#">'+ lang.status +' </a> <a href="#">'+ lang.populationL1 +' speakers</a></article>')

      display.append(langElement)

      // $('#'+lang.distribution).hover(function(){
      //   console.log('test')
      // })//only works with active entries

      $('.'+lang.name).hover(function(){

        if(lang.name == "Spanish"){
          $('.imageCom').toggleClass('imageComHover')
        }

        $('#'+lang.distribution).toggleClass('imageComHover')

      })

      $('.'+lang.name).on('click',function(){

        if(lang.name == "Spanish"){
          $('.imageCom').toggleClass('imageComHover')
        }

        $('#'+lang.distribution).toggleClass('imageComHover')

      })
    })

  })

})


$('#all').on('click',function(){

  var query = $('#form').serialize()

  $.getJSON('http://localhost:8080/languages?' + 'callback=?', function (data){

    var display = $('#display')

    display.empty()

    data.forEach(function(lang){

      var langElement = $('<article class="listing"><a href="#" class='+lang.name+'>'+ lang.name +'  /  '+ lang.nativeName +' </a> <a href="#">'+ lang.status +' </a> <a href="#">'+ lang.populationL1 +' speakers</a></article>')

      display.append(langElement)

      $('.'+lang.name).hover(function(){
        if(lang.name == "Spanish"){
          $('.imageCom').toggleClass('imageComHover')
        }

        $('#'+lang.distribution).toggleClass('imageComHover')
      })

      $('.'+lang.name).on('click',function(){
        if(lang.name == "Spanish"){
          $('.imageCom').toggleClass('imageComHover')
        }

        $('#'+lang.distribution).toggleClass('imageComHover')
      })

      $('#all').on('click',function(e){display.empty().e.stopPropagation()})
    })
  })
})