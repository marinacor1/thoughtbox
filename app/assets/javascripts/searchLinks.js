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
    var linkTitleAndUrl = $(individualLink).find('#title-box', '#url-box').text().toLowerCase();
    if (linkTitleAndUrl.includes(searchWords)){
      // $(individualLink).show();
      $(individualLink).removeClass('invisible');
    } else {
      // $(individualLink).hide();
      $(individualLink).addClass('invisible');
    }
  });
}
