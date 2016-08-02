function searchLinks(selector){
  $(selector).keyup(function(event){
    var searchWords = event.key.toLowerCase();
    console.log("Search words are " + searchWords)
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
    var id = 
    debugger
    var linkTitleAndUrl = $(individualLink).find('#title-box' + , '#url-box').text().toLowerCase();
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
