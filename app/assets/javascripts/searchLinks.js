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
      console.log("current links are " + $currentLinks);
  var notRightLinks = $currentLinks.each(function(index, individualLink){
    var id = individualLink.firstChild.id.split("-")[2];
    console.log("id is " + id);
    var linkTitleAndUrl  = $(individualLink).find('#title-box' + id + '', '#url-box-' + id + '').text().toLowerCase();
    console.log("Var link title and url are" + linkTitleAndUrl);
    if (linkTitleAndUrl.includes(searchWords)){
      console.log('we have the right word')
      // $(individualLink).show();
      $(individualLink).removeClass('invisible');
    } else {
      // $(individualLink).hide();
      $(individualLink).addClass('invisible');
      console.log('we do not have the right word')
    }
  });
}
