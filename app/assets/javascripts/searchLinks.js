function searchLinks(selector){
  $(selector).keyup(function(event){
    var searchWords = event.key.toLowerCase();
    loadSelectWords(searchWords);
  });
}

function loadSelectWords(searchWords){
  var $currentLinks = $('#link-table').children();
  var notRightLinks = $currentLinks.each(function(index, individualLink){
    var linkTitleAndUrl = $(individualLink).find('#title-box', '#url-box').text().toLowerCase();
    if (linkTitleAndUrl.includes(searchWords)){
      $(individualLink).removeClass('invisible');
    } else {
      $(individualLink).addClass('invisible');
    }
  });
}
