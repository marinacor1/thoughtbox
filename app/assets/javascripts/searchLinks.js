function searchLinks(selector){
  $(selector).keyup(function(event){
    var searchWords = event.key.toLowerCase();
      if (searchWords == "backspace") {
        searchWords = $(this).val();
      }
    loadSelectWords(searchWords);
  });
}

function loadSelectWords(searchWords){
  var $currentLinks = $('#link-table').children();
  var notRightLinks = $currentLinks.each(function(index, individualLink){
    var id = individualLink.firstChild.id.split("-")[2];
    var linkTitleAndUrl  = $(individualLink).find('#title-box' + id + '', '#url-box-' + id + '').text().toLowerCase();
    if (linkTitleAndUrl.includes(searchWords)){
      $(individualLink).removeClass('invisible');
    } else {
      $(individualLink).addClass('invisible');
    }
  });
}
