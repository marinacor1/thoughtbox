function load(selector){
  $.ajax({
    type: "GET",
    url: "/api/v1/links",
    success: renderLinks(selector)
  });

  function renderLinks(selector){
    return function(response){
      var $target = $(selector);
      $.each(response, function(index, link){
        $target.prepend(formatLink(link));
        checkStatusStyle(link);
      });
    };
  }



  function checkStatusStyle(link){
    if (link.unread) {
      // this needs to be cleaned up!
      document.getElementById('link-subset-' + link.id + '').style.color = "orange";
    }
  }



}
