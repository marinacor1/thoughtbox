function load(selector){
  $.ajax({
    type: "GET",
    url: "api/v1/links",
    success: renderLinks(selector)
  });

  function renderLinks(selector){
    return function(response){
      var $target = $(selector);
      $.each(response, function(index, link){
        $target.prepend(formatLink(link));
      });
    };
  }

  function formatLink(link){
    return '<div id="idea-table"><ul id="title-box">'+ link.title +
    '</ul><ul id="url-box">' + link.url + '</ul>' + formatUnread(link)+ '</div>';
}

  function formatUnread(link){
    if (link.unread){
    return '<ul>Mark as Read: <input type="checkbox"></ul>';
  }
    else {
    return '<ul>Mark as Read: <input type="checkbox"></ul>';
  }
  }
}
