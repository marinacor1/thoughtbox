function searchLinks(selector){
  $(selector).keyup(function(event){
    var searchWords = $(this).find('input').val();
      if (searchWords == "backspace") {
        searchWords = $(this).val();
      }
    loadSelectWords(searchWords);
  });
}

function loadSelectWords(searchWords, linkTable){
  var lT = linkTable || '#link-table';
  var $currentLinks = $(lT).children();
  $currentLinks.each(function(index, individualLink) {
    var id = individualLink.firstChild.id.split("-")[2];
    var linkTitleAndUrl  = $(individualLink).find('#title-box-' + id + '').text().toLowerCase();
    if (linkTitleAndUrl.includes(searchWords)){
      $(individualLink).removeClass('invisible');
    } else {
      $(individualLink).addClass('invisible');
    }
  });
}
