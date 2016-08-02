function sortAlphabetically(selector){
  $(selector).click(function(){
  var $currentLinks = $('#link-table').children();
  $.ajax({
    type: "GET",
    url: "/api/v1/sorted",
    success: renderLinks(selector)
  });
  });
}

  function renderLinks(selector){
    return function(response){
      $('#link-table').empty();
      $.each(response, function(index, link){
        $('#link-table').append(formatLink(link));
      });
  };
}
