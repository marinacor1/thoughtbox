function searchForm(selector) {
  var $target = $(selector);
  $target.prepend(searchBox());
}

function searchBox(){
  return 'Search Yo: <input id="searchbox" type="text" name="searchbox"><br><br>';
}
