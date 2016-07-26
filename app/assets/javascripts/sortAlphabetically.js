function sortAlphabetically(selector){
  $(selector).click(function(){
  var $currentLinks = $('#link-table').children().sort();
  var alphabetized = $currentLinks.each(function(index, individualLink){
    debugger
  })
  });
}
